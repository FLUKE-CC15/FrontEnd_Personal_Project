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
import AdminMenu from '../components/AdminMenu'
import AddProduct from '../pages/AddProductPage'
import MyOrder from '../pages/MyOrder'
import RedirectAuthenticated from '../auth/RedirectAuthenticated'
import Authenticated from '../auth/Authenticated'

// const router = createBrowserRouter(
//     [{ path: '/login', element:<RedirectAuthenticated> <LoginPage /></RedirectAuthenticated>},{
//         path: '/',
//         element: ( 
//             <div>
//                 <div className=" fixed z-20 top-[30px] right-[30px]"> <AdminMenu /></div>
//                 <Header />
//                 <div className="flex justify-center"><Outlet /></div>
//                 <Footer />
//             </div>
//         ),
//         children: [
//             { path: '/', element: <HomePage /> },
//             { path: '/register', element: <RegisterPage /> },
//             { path: '/product', element: <ProductPage /> },
//             { path: '/product/inproduct', element: <InProduct /> },
//             { path: '/emptycart', element: <Authenticated><EmptyCart /></Authenticated> },
//             { path: '/cart', element: <Authenticated><CartPage /></Authenticated>},
//             { path: '/addproduct', element: <AddProduct /> },
//             {path:'/myorder', element: <MyOrder/>}
            
//         ]

//     }

// ]
// )

const router = createBrowserRouter(
    [{ path: '/login', element:<LoginPage />},{
        path: '/',
        element: ( 
            <div>
                <div className=" fixed z-20 top-[30px] right-[30px]"> <AdminMenu /></div>
                <Header />
                <div className="flex justify-center"><Outlet /></div>
                <Footer />
            </div>
        ),
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/register', element: <RegisterPage /> },
            { path: '/product', element: <ProductPage /> },
            { path: '/product/inproduct', element: <InProduct /> },
            { path: '/emptycart', element: <Authenticated><EmptyCart /></Authenticated> },
            { path: '/cart', element: <Authenticated><CartPage /></Authenticated>},
            { path: '/addproduct', element: <AddProduct /> },
            {path:'/myorder', element: <MyOrder/>}
            
        ]

    }

]
)

export default function Router() {
    return <RouterProvider router={router}> </RouterProvider>
}