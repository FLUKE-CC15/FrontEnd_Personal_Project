
import { createContext, useEffect } from 'react';
import { useState } from 'react'
import axios from '../config/axios'
import { AddAccessToken, RemoveAccessToken, getAccessToken } from '../utils/local-storage';
export const AuthContext = createContext();



export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [isLoginErr, setisLoginErr] = useState(false);
  const [isAllProduct, setIsAllProduct] = useState([]);
  const [isAllOrder, setIsAllOrder] = useState([]);

  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get('/auth/me')
        .then(res => {
          setAuthUser(res.data.user);
          setIsLogin(true)

        })
        .finally(() => {
          setInitialLoading(false);
        });
    }
    else {
      setInitialLoading(false);

    }
  }, [setAuthUser]);



  const login = async credential => {

    try {
      const res = await axios.post('/auth/login', credential)
      AddAccessToken(res.data.accessToken)
      setAuthUser(res.data.user)
      setIsLogin(true)
      return true
    } catch (err) {
      console.log(err)
      setisLoginErr(true)
      return false
    }
  }

  const register = async registerInputObject => {
    const res = await axios.post('/auth/register', registerInputObject);
    AddAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
    setIsLogin(true)
  };

  const logout = () => {
    setIsLogin(false);
    RemoveAccessToken();
    setAuthUser(null);
  };

  const getProduct = () => {
    axios
      .get('/auth/product', { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } })
      .then(res => {
        setIsAllProduct(res.data.getproduct)
      })
      .catch(err => console.log(err));
  };

  const getOrder = () => {
    axios
      .get('/auth/getorder', { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } })
      .then(res => {
        setIsAllOrder(res.data.getOrder)
      })
      .catch(err => console.log(err));
  };


  const createProduct = async createProductInputObject => {
    const res = await axios.post('/auth/product', createProductInputObject);
    const newProduct = res.data.product
    setIsAllProduct([newProduct, ...isAllProduct])
  };

  const createPaySlip = async createPaySlip => {
    console.log('-------------', createPaySlip)
    const res = await axios.post('/auth/order', createPaySlip);
    const newPaySlip = res.data.order
    setIsAllOrder([newPaySlip, ...isAllOrder])
  };


  const deleteProduct = async (product) => {
    // console.log(product);
    try {
      await axios.delete('/auth/product', { data: product });
      setIsAllProduct((el) => el.filter((e) => e.id !== product.id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const updetedProduct = async (product) => {
    // console.log(product);
    try {
      console.log("******************************************");
      await axios.put('/auth/product', product)
    }
    catch (error) {
      console.error('Error updating product', error);
    }

  };




  return <AuthContext.Provider value={{ getOrder, isAllOrder, createPaySlip, getProduct, deleteProduct, isAllProduct, setIsAllProduct, login, authUser, initialLoading, register, isLogin, isLoginErr, logout, createProduct, updetedProduct }}>{children}</AuthContext.Provider>
}
