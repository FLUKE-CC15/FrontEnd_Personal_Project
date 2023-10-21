
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
  }, []);



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
    console.log(credential)

  }
  const register = async registerInputObject => {
    const res = await axios.post('/auth/register', registerInputObject);
    AddAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  const logout = () => {
    setIsLogin(false);
    RemoveAccessToken();
    setAuthUser(null);
  };



  return <AuthContext.Provider value={{ login, authUser, initialLoading, register, isLogin, isLoginErr, logout }}>{children}</AuthContext.Provider>
}
