import React from 'react';
import HomePage from './pages/homePage/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './component/layout/Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Products from './pages/products/Products';
import OurTeam from './pages/ourTeam/OurTeam';
import Problems from './pages/problems/Problems';
// import Login from './component/login/Login';
import { MobileHandlerProvider } from './utils/mobileHandler';
import TeamDetails from './pages/teamDetails/TeamDetails';
import SingleProduct from './pages/singleProduct/SingleProduct';

import Cart from './pages/cart/cart';
import { CounterProvider } from './hooks/UseContext';
import LoginPage from './pages/loginPage/LoginPage';




export default function App() {
    const Routing = createBrowserRouter([
      {
        path: '/', element: <Layout />, children: [
          { index: true, element: <HomePage /> },
          { path: '/ourteam', element: <OurTeam /> },
          {path:'/ourteam/:slug' , element: <TeamDetails/>},
          { path: '/products', element: <Products /> },
          { path: '/products/:id', element: <SingleProduct /> },
          { path: '/cart', element: <Cart /> },
          { path: '/problems', element: <Problems /> },
          { path: '/login', element: <LoginPage /> },
          
        
        ]
      },
    ]);

    const queryClient = new QueryClient();
    return (
      <QueryClientProvider client={queryClient}>
      <MobileHandlerProvider>
        <CounterProvider>
       
            <RouterProvider router={Routing} />
         
        </CounterProvider>
      </MobileHandlerProvider>
    </QueryClientProvider>
    
    );
}



