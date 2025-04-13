import { ApiClient } from '../../shared/helpers/ApiClient';
import { MsgResponse } from '../../shared/model';
import { CreateClientModel } from '../Clients/ClientModel';
import { CategoriesModel, ProductModel, ProductPagerModel, ProductsResponseModel, QuantityModel, ValidateQuantityModel } from './ProductModel';

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

export const getPagerProducts = async (
   page: number = 1,
   pageSize: number = 5,
   orderByName: boolean = false,
   search: string = '',
): Promise<MsgResponse<ProductPagerModel[]>> => {
   const params = new URLSearchParams();
   params.append('pageIndex', page.toString());
   params.append('pageSize', pageSize.toString());
   params.append('orderByName', orderByName.toString());
   params.append('search', search);
   const url = `api/Products/pager`;
   const response = await ApiClient.get<MsgResponse<ProductPagerModel[]>>(url, { params });
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

export const getPagerProductsStock = async (page: number = 1, pageSize: number = 5): Promise<MsgResponse<ProductPagerModel[]>> => {
   const url = `api/products/pager/stock?pageIndex=${page}&pageSize=${pageSize}`;
   const response = await ApiClient.get<MsgResponse<ProductPagerModel[]>>(url);
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

export const createProductService = async (model: ProductModel): Promise<MsgResponse<ProductModel>> => {
   const url = 'api/Products';
   const response = await ApiClient.post<MsgResponse<ProductModel>>(url, model);

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

export const updateProductService = async (model: ProductModel): Promise<MsgResponse<ProductModel>> => {
   const url = 'api/Products';
   const response = await ApiClient.put<MsgResponse<ProductModel>>(url, model);

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

export const getCategories = async (): Promise<MsgResponse<CategoriesModel[]>> => {
   const url = 'api/categories';
   const response = await ApiClient.get<MsgResponse<CategoriesModel[]>>(url);

   if (response.status !== 200 && response.status !== 201) {
      return {
         isSuccess: false,
         message: 'Error al obtener categorias',
         isFailure: true,
         error: {
            code: response.status.toString(),
            message: response.statusText,
         },
      };
   }

   return response.data;
};

export const createCategoryService = async (model: CategoriesModel): Promise<MsgResponse<CategoriesModel>> => {
   const url = 'api/Categories';
   const response = await ApiClient.post<MsgResponse<CategoriesModel>>(url, model);

   if (response.status !== 201 && response.status !== 200) {
      return {
         isSuccess: false,
         message: 'Error al crear categoria',
         isFailure: true,
         error: {
            code: response.status.toString(),
            message: response.statusText,
         },
      };
   }

   return response.data;
};

export const updateCategoryService = async (model: CategoriesModel): Promise<MsgResponse<CategoriesModel>> => {
   const url = 'api/categories';
   const response = await ApiClient.put<MsgResponse<CategoriesModel>>(url, model);

   if (response.status !== 200 && response.status !== 201) {
      return {
         isSuccess: false,
         message: 'Error al actualizar categoria',
         isFailure: true,
         error: {
            code: response.status.toString(),
            message: response.statusText,
         },
      };
   }

   return response.data;
};

export const getValidateProduct = async (model: ValidateQuantityModel): Promise<MsgResponse<ProductsResponseModel>> => {
   const url = `api/products/validate/${model.code}?validateQuantity=${model.validateQuantity}`;
   const response = await ApiClient.get<MsgResponse<ProductsResponseModel>>(url);

   if (response.status !== 200 && response.status !== 201) {
      return {
         isSuccess: false,
         message: 'Error al validar producto',
         isFailure: true,
         error: {
            code: response.status.toString(),
            message: response.statusText,
         },
      };
   }

   return response.data;
};

export const updateQuantityService = async (model: QuantityModel): Promise<MsgResponse<QuantityModel>> => {
   const url = 'api/products/quantity';
   const response = await ApiClient.put<MsgResponse<QuantityModel>>(url, model);
   if (response.status !== 200 && response.status !== 201) {
      return {
         isSuccess: false,
         message: 'Error al actualizar cantidad',
         isFailure: true,
         error: {
            code: response.status.toString(),
            message: response.statusText,
         },
      };
   }
   return response.data;
};
