import { useEffect, useRef, useState } from "react";
import { CreateClientModel } from "./ClientModel";
import useClient from "./useClient";
import { ButtonReset } from "../../shared/components/Buttons/ButtonReset";
import { ComponentSexes } from "../../shared/components/List/ComponentSexes";
import { ComponentIdentificationTypes } from "../../shared/components/List/ComponentIdentificationTypes";

export const ClientForm = ({ id }: { id?: number }) => {

   const [client, setClient] = useState<CreateClientModel>({
      id: id,
      firstName: '',
      lastName: '',
      sex: 0,
      identificationTypeId: 0,
      identificationNumber: '',
      email: '',
      address: '',
      cellPhoneNumber: '',
      phoneNumber: '',
   });
   const form = useRef<HTMLFormElement>(null);

   const { createClient, updateClient, clients } = useClient();

   useEffect(() => {
      if (id) {
         const client = clients?.find((client) => client.id === id);
         if (client) {
            setClient(client);
         }
      }
   }, [id, clients]);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      let { value } = e.target;
      const { name } = e.target;
      if (name === 'firstName' || name == 'lastName') {
         value = value.toUpperCase();
      }

      if (name === 'email') {
         value = value.toLowerCase();
      }

      setClient({ ...client, [e.target.name]: value });
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (id) {
         await updateClient.mutateAsync(client);
      } else {
         const res = await createClient.mutateAsync(client);
         if (res.isSuccess) {
            setClient(
               {
                  id: id,
                  firstName: '',
                  lastName: '',
                  sex: 0,
                  identificationTypeId: 0,
                  identificationNumber: '',
                  email: '',
                  address: '',
                  cellPhoneNumber: '',
                  phoneNumber: '',
               }
            )
         }
      }
   };

   return (
      <form ref={form} className="flex flex-col" onSubmit={handleSubmit}>
         <div className="mt-4">
            <div className="mb-4">
               <label className="block text-gray-700 text-sm font-bold mb-2">
                  Nombre
               </label>
               <input
                  required
                  type="text"
                  value={client?.firstName}
                  onChange={(e) => handleChange(e)}
                  name="firstName"
                  placeholder="Nombre"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
               />
            </div>

            <div className="mb-4">
               <label className="block text-gray-700 text-sm font-bold mb-2">
                  Apellido
               </label>
               <input
                  type="text"
                  required
                  value={client?.lastName}
                  onChange={(e) => handleChange(e)}
                  name="lastName"
                  placeholder="Apellido"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
               />
            </div>

            <div className="mb-4">
               <label className="block text-gray-700 text-sm font-bold mb-2">
                  Sexo
               </label>
               <ComponentSexes name="sex" selectedValue={client?.sex?.toString()} xChange={handleChange} required />
            </div>

            <div className="mb-4">
               <label className="block text-gray-700 text-sm font-bold mb-2">
                  Tipo de Identificación
               </label>
               <ComponentIdentificationTypes name="identificationTypeId" selectedValue={client?.identificationTypeId?.toString()} xChange={handleChange} required />
            </div>

            <div className="mb-4">
               <label className="block text-gray-700 text-sm font-bold mb-2">
                  Identificación
               </label>
               <input
                  type="text"
                  required
                  value={client?.identificationNumber}
                  onChange={(e) => handleChange(e)}
                  name="identificationNumber"
                  placeholder="Identificación"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
               />
            </div>
            <div className="mb-4">
               <label className="block text-gray-700 text-sm font-bold mb-2">
                  Celular
               </label>
               <input
                  type="text"
                  required
                  value={client?.cellPhoneNumber}
                  onChange={(e) => handleChange(e)}
                  name="cellPhoneNumber"
                  placeholder="Celular"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
               />
            </div>
            <div className="mb-4">
               <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
               </label>
               <input
                  required
                  type="text"
                  value={client?.email}
                  onChange={(e) => handleChange(e)}
                  name="email"
                  placeholder="Email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
               />
            </div>

            <div className="mb-4">
               <label className="block text-gray-700 text-sm font-bold mb-2">
                  Dirección
               </label>
               <input
                  required
                  type="text"
                  value={client?.address}
                  onChange={(e) => handleChange(e)}
                  name="address"
                  placeholder="Dirección"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
               />
            </div>


         </div>
         <div className="mt-4">
            {id &&
               (
                  <button type="submit" disabled={updateClient.isPending} className="bg-blue-500 hover:bg-blue-700 mr-1 text-white px-4 py-2 rounded font-bold">
                     {updateClient.isPending ? "Actualizando..." : "Actualizar cliente"}
                  </button>
               )}

            {!id &&
               (
                  <>
                     <button type="submit" disabled={createClient.isPending} className="bg-blue-500 hover:bg-blue-700 mr-1 text-white px-4 py-2 rounded font-bold">
                        {createClient.isPending ? "Creando..." : "Crear cliente"}
                     </button>
                     <ButtonReset />
                  </>)}
         </div>
      </form>
   )
}
