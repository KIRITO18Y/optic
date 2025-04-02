import { ApiClient } from '../../shared/helpers/ApiClient';
import { MsgResponse } from '../../shared/model';
import { CreatePurchaseModel, PurchaseResponseModel } from './PurchaseModel';


export const getPurchases = async (): Promise<MsgResponse<PurchaseResponseModel[]>> => {
   const url = 'api/purchases';
   const response = await ApiClient.get<MsgResponse<PurchaseResponseModel[]>>(url);
   if (response.status !== 200 && response.status !== 201) {
      return {
         isSuccess: false,
         message: 'Error al obtener las compras',
         isFailure: true,
         error: {
            code: response.status.toString(),
            message: response.statusText,
         },
      };
   }

   return response.data;
};

export const createPurchaseService = async (model: CreatePurchaseModel): Promise<MsgResponse<number>> => {
   const url = 'api/purchases';
   const response = await ApiClient.post<MsgResponse<number>>(url, model);

   if (response.status !== 201 && response.status !== 200) {
      return {
         isSuccess: false,
         message: 'Error al crear la compra',
         isFailure: true,
         error: {
            code: response.status.toString(),
            message: response.statusText,
         },
      };
   }

   return response.data;
};