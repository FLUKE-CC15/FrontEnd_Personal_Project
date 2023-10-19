
import { createContext, useEffect } from 'react';
import { useState } from 'react'
export const AuthContext = createContext();
import axios from '../config/axios'
import { AddAccessToken ,getAccessToken} from '../utils/local-storage';


export default function AuthContextProvider({ children }) {
    const [authUser, setAuthUser] = useState(null);
    const [initialLoading, setInitialLoading] = useState(true);

    useEffect(() => {
        if (getAccessToken()) {
          axios
            .get('/auth/me')
            .then(res => {
              setAuthUser(res.data.user);
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
        } catch (err) {
            console.log(err)
        }
        console.log(credential)

    }
    return <AuthContext.Provider value={{ login ,authUser,initialLoading}}>{children}</AuthContext.Provider>
}
