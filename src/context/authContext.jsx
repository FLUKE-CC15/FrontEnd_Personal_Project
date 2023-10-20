
import { createContext, useEffect } from 'react';
import { useState } from 'react'
import axios from '../config/axios'
import { AddAccessToken ,getAccessToken} from '../utils/local-storage';
export const AuthContext = createContext();


export default function AuthContextProvider({ children }) {
    const [authUser, setAuthUser] = useState(null);
    const [initialLoading, setInitialLoading] = useState(true);
    const [isLogin,setIsLogin] = useState(false);

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
        } catch (err) {
            console.log(err)
        }
        console.log(credential)

    }
    const register = async registerInputObject => {
      const res = await axios.post('/auth/register', registerInputObject);
      AddAccessToken(res.data.accessToken);
      setAuthUser(res.data.user);
    };



    return <AuthContext.Provider value={{ login ,authUser,initialLoading,register ,isLogin}}>{children}</AuthContext.Provider>
}
