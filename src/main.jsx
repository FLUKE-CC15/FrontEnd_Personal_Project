import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthContextProvider from './context/authContext.jsx'
import ModalContextProvider from './context/modalContext.jsx'
import { ModalProvider } from './providers/modal-provider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>  
    <ModalContextProvider>
    <ModalProvider/>
    <App />     
      </ModalContextProvider> 
  </AuthContextProvider>
)
