import App from '../App.tsx';
import { Home } from '../slices/Home/Home.tsx';
import { Clients } from '../slices/Clients/Clients.tsx';
import { Login } from '../routes/Login/Login.tsx';
import { UserCreate } from '../routes/Login/UserCreate.tsx';
import { BusinessCreate } from '../routes/Login/BusinessCreate.tsx';
import { ClientDetail } from '../slices/Clients/ClientDetail.tsx';
import { Products } from '../slices/Products/Products.tsx';
import { Suppliers } from '../slices/Suppliers/Suppliers.tsx';
import { Formulas } from '../slices/Formulas/Formulas.tsx';
import { SettingsDetail } from '../slices/Users/UsersDetail.tsx';
import { SupplierDetail } from '../slices/Suppliers/SupplierDetail.tsx';
import { ProductsDetail } from '../slices/Products/ProductsDetail.tsx';
import { EditProfile } from '../slices/Users/EditProfile.tsx';
import { SettingsMenu } from '../slices/Settings/SettingsMenu.tsx';
import { IdentificationTypes } from '../slices/Settings/IdentificationTypes.tsx';
import { Settings } from '../slices/Settings/Settings.tsx';
import { Business } from '../slices/Business/Business.tsx';
import { createBrowserRouter } from 'react-router-dom';
import { Users } from '../slices/Users/Users.tsx';
import { Brands } from '../slices/Settings/Brands.tsx';
import { FormulasDetail } from '../slices/Formulas/FormulasDetail.tsx';
import PasswordRecoverPage from './Login/PasswordRecover.tsx';
import { SalesDetail } from '../slices/Sales/SalesDetail.tsx';
import { PurchaseDetail } from '../slices/Purchase/PurchaseDetail.tsx';
import { Billing } from '../slices/Billing/billing.tsx';
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'Clientes',
                element: <Clients />,
            },
            {
                path: 'Clientes/:id',
                element: <ClientDetail />,

            },

            {
                path: 'suppliers',
                element: <Suppliers />,
            },
            {
                path: 'Suppliers/:id',
                element: <SupplierDetail />,
            },

            {
                path: 'Products',
                element: <Products />,
            },
            {
                path: 'Products/:id',
                element: <ProductsDetail />,
            },

            {
                path: 'Formulas',
                element: <Formulas />,
            },
            {
                path: 'Formulas/:id',
                element: <FormulasDetail />,
            },
            { path: 'Sales/:id', element: <SalesDetail /> },

            { path: 'Purchases/:id', element: <PurchaseDetail /> },
            {
                path: 'Billing',
                element: <Billing />,
            },
            
            {
                path: 'Settings',
                element: <SettingsMenu />,
                children: [
                    {
                        index: true,
                        element: <Users />,
                    },
                    {
                        path: 'Users',
                        element: <Users />,
                    },
                    {
                        path: 'Users/:id',
                        element: <SettingsDetail />
                    },
                    {
                        path: 'IdentificationTypes',
                        element: <IdentificationTypes />
                    },
                    {
                        path: 'Config',
                        element: <Settings />,
                    },
                    {
                        path: 'Brands',
                        element: <Brands />
                    },


                ]
            },

            {
                path: 'Users/Edit',
                element: <EditProfile />,
            },

            {
                path: 'Business/Business',
                element: <Business />,
            },
        ],
    },
    {
        path: 'Login',
        element: <Login />,
    },
    {
        path: '/Create/User',
        element: <UserCreate />,
    },
    {
        path: '/Create/Business',
        element: <BusinessCreate />,
    },
    {
        path: 'PasswordRecover',
        element: <PasswordRecoverPage />,
    },
]);
