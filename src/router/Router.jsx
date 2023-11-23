import { Outlet, RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Header from '../layout/header'
import Footer from '../layout/footer'
import ProductPage from '../pages/ProductPage'
import RegisterPage from '../pages/RegisterPage'
import AdminPage from '../pages/AdminPage'
import Authenticated from '../features/auth/Authenticated'
import ShowProductPage from '../pages/ShowProductPage'
import RedirectAuthenticated from '../features/auth/RedirectAuthenticated'
import CartPage from '../pages/CartPage'
import MyOrderPage from '../pages/myOrderPage'
import CheckoutPage from '../pages/CheckoutPage'

// import { useState } from 'react'
const router = createBrowserRouter(
    [{
        path: '/',
        element: (
            <div className='min-h-screen'>
                <Header />
                <div className="flex justify-center"><Outlet /></div>
                <div className="sticky  top-[100vh]"> <Footer /></div>
            </div>
        ),
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/product', element: <ProductPage /> },
            { path: '/product/:id', element: <ShowProductPage /> },
            { path: '/register', element: <RegisterPage /> },
            { path: '/admin', element: <Authenticated> <AdminPage /></Authenticated> },
            { path: '/checkout', element: <Authenticated> <CheckoutPage /></Authenticated> },
            { path: '/myitem', element: <Authenticated> <MyOrderPage /></Authenticated> },
        ]
    }

    ]
)
export default function Router() {
    return <RouterProvider router={router}> </RouterProvider>
}