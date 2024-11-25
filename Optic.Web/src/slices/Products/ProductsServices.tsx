import { ApiClient } from '../../shared/helpers/ApiClient';
import { MsgResponse } from '../../shared/model';
import { CreateClientModel } from '../Clients/ClientModel';
import { ProductsModel, ProductsResponseModel } from './ProductsModel';

export const createProductService = async (model: ProductsModel): Promise<MsgResponse<ProductsModel>> => {
   const url = 'api/Products';
   const response = await ApiClient.post<MsgResponse<ProductsModel>>(url, model);

   if (response.status !== 201 && response.status !== 200) {
      return {
         isSuccess: false,
         message: 'Error al crear producto',
         isFailure: true,
         error: {
            code: response.status.toString(),
            message: response.statusText,
         },
      };
   }

   return response.data;
};

export const deleteProductService = async (id: number): Promise<MsgResponse<CreateClientModel>> => {
   const url = `api/Products/${id}`;
   const response = await ApiClient.delete<MsgResponse<CreateClientModel>>(url);

   if (response.status !== 200 && response.status !== 201) {
      return {
         isSuccess: false,
         message: 'Error al eliminar producto',
         isFailure: true,
         error: {
            code: response.status.toString(),
            message: response.statusText,
         },
      };
   }

   return response.data;
};

export const updateProductService = async (model: ProductsModel): Promise<MsgResponse<ProductsModel>> => {
   const url = 'api/Products';
   const response = await ApiClient.put<MsgResponse<ProductsModel>>(url, model);

   if (response.status !== 200 && response.status !== 201) {
      return {
         isSuccess: false,
         message: 'Error al actualizar producto',
         isFailure: true,
         error: {
            code: response.status.toString(),
            message: response.statusText,
         },
      };
   }

   return response.data;
};

export const getProducts = async (): Promise<MsgResponse<ProductsResponseModel[]>> => {
   const url = 'api/Products';
   const response = await ApiClient.get<MsgResponse<ProductsResponseModel[]>>(url);

   if (response.status !== 200 && response.status !== 201) {
      return {
         isSuccess: false,
         message: 'Error al obtener productos',
         isFailure: true,
         error: {
            code: response.status.toString(),
            message: response.statusText,
         },
      };
   }

   return response.data;
};       