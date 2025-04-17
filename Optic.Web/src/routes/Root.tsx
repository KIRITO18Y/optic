import { Header } from '../layout/Header';
import { Sidebar } from '../layout/Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import useUserContext from '../shared/context/useUserContext';
import { useEffect } from 'react';

export default function Root() {
   const { isAuthenticated, token } = useUserContext();
   const navigate = useNavigate();

   useEffect(() => {
      if (!isAuthenticated || !token) {
         navigate('/login');
      }
   }, [isAuthenticated, navigate, token]);

   return (
      <div id="container" className='pt-[80px]'>
         <Header />
         <div
            id="main"
            className="flex "
         >
            <Sidebar />
            <div
               id="detail"
               className="w-full p-4">

               <Outlet />
            </div>
         </div>

      </div>
   );
}
