import { useState } from "react";
import { MoneyFormatter } from "../../shared/components/Numbers/MoneyFormatter";
import { useParams } from "react-router-dom";
import { paymentsPurchaseModel } from "./PurchaseModel";
import { getPaymentsPurchaseService } from "./PurchaseServices";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { useDeletePurchasePayment, usePurchasePayments } from "./usePurchases";
import { toast } from "react-toastify";
export const PurchasePayments = ({ totalAmount, xChangeStatePurchase }: { totalAmount: number, xChangeStatePurchase: (state: string) => void; }) => {
    const { id } = useParams();
    const purchaseId = Number(id);
    const [amount, setAmount] = useState<number | undefined>(0);
    const totalFactura = totalAmount;
    const queryClient = useQueryClient();

    const { data: paymentsData, isLoading } = useQuery({
        queryKey: ["PurchasesPayments", purchaseId],
        queryFn: () => getPaymentsPurchaseService(purchaseId),
        enabled: !!id,
    });

    const payments: paymentsPurchaseModel[] = paymentsData?.data ?? [];
    const totalPayments = payments.reduce((sum, p) => sum + p.amount, 0);
    const deuda = totalFactura - totalPayments;

    const { createPayment } = usePurchasePayments(purchaseId);
    const deleteMutation = useDeletePurchasePayment();

    const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (value === "") {
            setAmount(undefined);
            return;
        }
        const amount = parseFloat(value);
        const debt = totalFactura - totalPayments;
        if (isNaN(amount)) return;

        if (amount > debt) {
            setAmount(debt);
            return;
        }

        setAmount(amount);
    };

    const handleAddPayment = async () => {
        if (amount === undefined) return;

        if (amount <= 0 || isNaN(amount)) return;

        const res = await createPayment.mutateAsync(
            {
                purchaseId: purchaseId,
                amount: amount,
            }
        );

        if (res.isSuccess) {
            toast.success("Abono agregado");
            queryClient.invalidateQueries({ queryKey: ["PurchasesPayments", purchaseId] });
            const totalPayments = payments.reduce((total, abono) => total + abono.amount, 0) + amount;
            console.log(totalPayments, totalFactura, amount, "pagos");
            if (xChangeStatePurchase && totalPayments >= totalFactura)
                xChangeStatePurchase("Pagada");
        }

        setAmount(0);
    };

    const handleDeletePayment = (idPayment: number) => {
        deleteMutation.mutate(
            { idPayment, purchaseId },
            {
                onSuccess: () => {
                    toast.success("Abono eliminado correctamente");
                    queryClient.invalidateQueries({ queryKey: ["PurchasesPayments", purchaseId] });
                },
                onError: () => {
                    toast.error("Error al eliminar el abono");
                },
            }
        );
    };

    const isEnableAddPayment = totalPayments < totalFactura;

    return (
        <div className="grid-cols-2 mb-4 gap-4">
            {isEnableAddPayment &&
                <>
                    <label className="block text-gray-700 font-bold mb-2">
                        <MoneyFormatter amount={amount} />
                    </label>
                    <div className="flex rounded-lg w-full">
                        <div className="relative">
                            <input
                                type="number"
                                placeholder="Abono"
                                value={amount}
                                onChange={handleChangeAmount}
                                className="shadow appearance-none border rounded-tl-lg rounded-bl-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                        <button
                            onClick={handleAddPayment}
                            className="bg-teal-500 hover:bg-teal-700 text-white px-4 py-1 font-bold rounded-tr-lg rounded-br-lg w-full"
                        >
                            Agregar
                        </button>
                    </div>
                </>
            }

            <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-700">
                    Factura total: <MoneyFormatter amount={totalFactura} />
                </h3>
                <h3 className="text-lg font-semibold text-gray-700">
                    Abonos: <span className="text-green-600"><MoneyFormatter amount={totalPayments} /></span>
                </h3>
                <h3 className="text-lg font-semibold text-gray-700">
                    Deuda: <span className="text-red-600"><MoneyFormatter amount={deuda} /></span>
                </h3>

                <ul className="mt-2 space-y-1">
                    {isLoading ? (
                        <li className="text-gray-500">Cargando abonos...</li>
                    ) : payments.length > 0 ? (
                        payments.map((abono) => (
                            <li
                                key={abono.id}
                                className="flex justify-between items-center border-b border-gray-300 py-2"
                            >
                                <p className="text-sm text-gray-500">
                                    {format(new Date(abono.date), "d 'de' MMMM',' uuuu")}
                                </p>
                                <p className="flex items-center gap-2 text-gray-600">
                                    <MoneyFormatter amount={abono.amount} />
                                    {isEnableAddPayment && <button
                                        className="text-red-500 text-2xl hover:text-red-700"
                                        onClick={() => handleDeletePayment(abono.id)}
                                        disabled={deleteMutation.isPending}
                                    >
                                        <FontAwesomeIcon icon={faCircleMinus} />
                                    </button>}
                                </p>
                            </li>
                        ))
                    ) : (
                        <p className="text-gray-500">No se han realizado abonos aún.</p>
                    )}
                </ul>
            </div>
        </div>
    );
};
