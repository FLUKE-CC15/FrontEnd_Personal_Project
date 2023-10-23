import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Header from '../layout/header'
import Footer from '../layout/footer'
import ProductPage from '../pages/ProductPage'
import RegisterPage from '../pages/RegisterPage'
import AdminPage from '../pages/AdminPage'
import Authenticated from '../features/auth/Authenticated'
// import { useState } from 'react'
const router = createBrowserRouter(
    [{
        path: '/',
        element: (
            <div>
                <Header />
                <div className="flex justify-center"><Outlet /></div>
                <Footer />
            </div>
        ),
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/product', element: <ProductPage /> },
            { path: '/register', element: <RegisterPage /> },
            { path: '/admin', element: <Authenticated> <AdminPage /></Authenticated> },

        ]

    }

    ]
)







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


export default function Router() {
    return <RouterProvider router={router}> </RouterProvider>
}