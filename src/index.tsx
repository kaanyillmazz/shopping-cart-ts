import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './app/store'
import {Provider, useSelector} from 'react-redux'
import PersistentDrawerRight from "./components/PersistentDrawerRight";
import PersistentDrawerLeft from "./components/PersistentDrawerLeft";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ProductPage from "./components/pages/ProductPage";





window.document.title="Shopping Cart TS";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="item">
                    <Route path=":id" element={<ProductPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
