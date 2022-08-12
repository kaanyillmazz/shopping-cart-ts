import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from './app/store'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ProductPage from "./components/pages/ProductPage";
import CheckoutPage from "./components/pages/CheckoutPage";

window.document.title="Shopping Cart TS";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="item">
                    <Route path=":id" element={<ProductPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
);
