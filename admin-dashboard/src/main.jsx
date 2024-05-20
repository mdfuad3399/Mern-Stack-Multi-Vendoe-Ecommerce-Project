import { lazy,Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
const App = lazy(()=> import('./App'))

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './assets/css/style.css'
import {Provider} from "react-redux";
import store from "./store/store.js";
import {Toaster} from "react-hot-toast";


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Provider store={store}>
        <Suspense>
            <App />
            <Toaster
                toastOptions={{
                    position: 'top-right',
                    style:{
                        background : '#283046',
                        color:"white"
                    }
                }}
            />
        </Suspense>
      </Provider>
  </BrowserRouter>
)
