import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import HomeScreen from './screens/HomeScreen';
import BookScreen from './screens/BookScreen';
import FunClubsPlansScreen from './screens/FunClubsPlansScreen';
import ArticleScreen from './screens/ArticleScreen';
import CartScreen from './screens/CartScreen';
import BooksScreen from './screens/BooksScreen';
import LoginScreen from './screens/LoginScreen';
import CheckEmailScreen from './screens/CheckEmailScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderListScreen from './screens/admin/OrderListScreen';
import UserListScreen from './screens/admin/UserListScreen';
import UserEditScreen from './screens/admin/UserEditScreen';
import BookListScreen from './screens/admin/BookListScreen';
import EditBookScreen from './screens/admin/EditBookScreen';
import AddBookScreen from './screens/admin/AddBookScreen';
import store from './store';
import { Provider } from 'react-redux';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/search/:keyword' element={<HomeScreen />} />
      <Route path='/page/:pageNumber' element={<HomeScreen />} />
      <Route
        path='books/:category/page/:pageNumber'
        element={<BooksScreen />}
      />
      <Route
        path='/search/:keyword/page/:pageNumber'
        element={<HomeScreen />}
      />
      <Route path='/book/:id' element={<BookScreen />} />
      <Route path='/cart' element={<CartScreen />} />
      <Route path='/books/:category' element={<BooksScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/checkEmail' element={<CheckEmailScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      <Route path='/forgotPassword' element={<ForgotPasswordScreen />} />
      <Route
        path='/resetPassword/:id/:token'
        element={<ResetPasswordScreen />}
      />
      {/* Registered users */}
      <Route path='' element={<PrivateRoute />}>
        <Route path='/shipping' element={<ShippingScreen />} />
        <Route path='/payment' element={<PaymentScreen />} />
        <Route path='/placeorder' element={<PlaceOrderScreen />} />
        <Route path='/order/:id' element={<OrderScreen />} />
        <Route path='/profile' element={<ProfileScreen />} />
        <Route path='/clubs/article' element={<ArticleScreen />} />
        <Route path='/clubs/plans' element={<FunClubsPlansScreen />} />
      </Route>
      {/* Admin users */}
      <Route path='' element={<AdminRoute />}>
        <Route path='/admin/orderlist' element={<OrderListScreen />} />
        <Route path='/admin/userlist' element={<UserListScreen />} />
        <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
        <Route path='/admin/bookList' element={<BookListScreen />} />
        <Route
          path='/admin/bookList/:pageNumber'
          element={<BookListScreen />}
        />
        <Route path='/admin/book/:id/edit' element={<EditBookScreen />} />
        <Route path='/admin/book/add' element={<AddBookScreen />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PayPalScriptProvider deferLoading={true}>
          <RouterProvider router={router} />
        </PayPalScriptProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
