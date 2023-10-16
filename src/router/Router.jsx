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
const router = createBrowserRouter(
    [{
        path: '/',
        element: (
            <div>
                <Header/>
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
            { path: '/inproduct/emptycart', element: <EmptyCart/>},
            { path: '/cart', element: <CartPage/>},
                        
        ]

    }
    ]
)

export default function Router() {
    return <RouterProvider router={router}>

    </RouterProvider>
}