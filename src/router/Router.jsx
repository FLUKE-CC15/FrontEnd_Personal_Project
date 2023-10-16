import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import ProductPage from '../pages/ProductPage'
import InProduct from '../pages/InProductPage'
import EmptyCart from '../pages/EmptyCart'
import CartPage from '../pages/CartPage'
import { useState } from 'react'

const router = createBrowserRouter(
    [{
        path: '/',
        element: (
            <div>
                <Header />
                <Outlet />
                <Footer/>
            </div>
        ),
        children: [
            { path: '/', element: <HomePage/> },
            { path: '/login', element: <LoginPage/> },
            { path: '/register', element: <RegisterPage/> },
            { path: '/product', element: <ProductPage/> },
            { path: '/product/inproduct', element: <InProduct/>},
            { path: '/emptycart', element: <EmptyCart/>},
            { path: '/cart', element: <CartPage/>},
            
                        
        ]

    }
    ]
)

export default function Router() {
    return <RouterProvider router={router}> </RouterProvider>
}

{/* <div className="flex justify-center pt-20 z-50 h-screen w-full fixed backdrop-blur  ">
            <LoginPage/>
</div> */}