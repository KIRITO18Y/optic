import { useState } from "react";
import { SupplierSelect } from "../Suppliers/SupplierSelect";
import { CreatePurchaseModel } from "./PurchaseModel";
import { SingleValue } from "react-select";
import { Option } from "../../shared/model";
import { format } from "date-fns";
import { usePurchases } from "./usePurchases";
import useUserContext from "../../shared/context/useUserContext";
import OffCanvas from "../../shared/components/OffCanvas/Index";
import { Direction } from "../../shared/components/OffCanvas/Models";
import { ListPaymentTypes } from "../Sales/Common/ListPaymentTypes";
import { SumTotal } from "../Sales/Common/SumTotal";
import { ProductsResponseModel } from "../Products/ProductModel";
import { SuppliersForm } from "../Suppliers/SuppliersForm";
import { PurchaseProducts} from "./PurchaseProducts";

export const PurchasesCreate = ({ xChange }: { xChange?: () => void }) => {
    const [supplier, setSupplier] = useState<Option | undefined>();
    const [products, setProducts] = useState<ProductsResponseModel[]>([]);
    const { createPurchase } = usePurchases();
    const { business } = useUserContext();
    const [visible, setVisible] = useState(false);

    const [purchase, setPurchase] = useState<CreatePurchaseModel>({
        idBusiness: 0,
        idSupplier: 0,
        date: new Date(),
        products: [],
        totalAmount: 0,
        paymentType: "Contado",
    });

    const handleClose = () => setVisible(false);
    const handleClick = () => setVisible(true);

    const handleChangeSupplier = (newValue: SingleValue<Option>) => {
        setSupplier({
            value: newValue?.value,
            label: newValue?.label,
        });
    };

    const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPurchase({ ...purchase, date: new Date(`${e.target.value}T00:00:00`) });
    };

    const handleCreatePurchase = async () => {
        const purchaseData: CreatePurchaseModel = {
            idBusiness: business?.id ? business.id : 0,
            idSupplier: supplier?.value ? parseInt(supplier.value) : 0,
            date: purchase.date,
            products: products.map((x) => ({
                idProduct: x.id,
                quantity: x.quantity,
                unitPrice: x.unitPrice,
                totalCost: x.unitPrice * x.quantity,
            })),
            totalAmount: products.reduce((acc, x) => acc + x.unitPrice * x.quantity, 0),
            paymentType: purchase.paymentType,
        };

        console.log("Enviando compra:", purchaseData);
        const res = await createPurchase.mutateAsync(purchaseData);
        if (res.isSuccess && xChange) xChange();
    };

    return (
        <div className="mb-1">
            <div className="grid grid-cols-2 gap-2 mb-2">
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Proveedor</label>
                    <SupplierSelect
                        selectedValue={supplier?.value || ""}
                        xChange={(e) => handleChangeSupplier({
                            value: e.target.value,
                            label: e.target.options[e.target.selectedIndex].text,
                        })}
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Fecha</label>
                    <input
                        type="date"
                        onChange={handleChangeDate}
                        value={format(purchase?.date, "yyyy-LL-dd")}
                        className="shadow border rounded w-full py-2 px-3 text-gray-700"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Tipo de pago</label>
                    <ListPaymentTypes selectedValue={purchase?.paymentType} xChange={(e) => setPurchase({ ...purchase, paymentType: e.target.value })} />
                </div>
            </div>

            <PurchaseProducts products={products} setProducts={setProducts} />
            <SumTotal sumTotalProducts={products.reduce((acc, x) => acc + x.unitPrice * x.quantity, 0)} />

            <OffCanvas titlePrincipal='Registro de Proveedor' visible={visible} xClose={handleClose} position={Direction.Right}>
                <SuppliersForm />
            </OffCanvas>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mr-1" onClick={handleCreatePurchase}>
                {createPurchase.isPending ? "Guardando..." : "Guardar Compra"}
            </button>
            <button className="bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 rounded mr-1" onClick={handleClick}>
                Crear Proveedor
            </button>
            <button className="bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 rounded mr-1" onClick={handleClick}>
                Crear Producto
            </button>
        </div>
    );
};


