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
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen2 from './screens/HomeScreen2';
import BookDetailsScreen from './screens/BookDetailsScreen';
import FunClubSubScreen from './screens/FunClubSubScreen';
import ReadingClubSubScreen from './screens/ReadingClubSubScreen';
import CartScreen from './screens/CartScreen';
import BooksScreen from './screens/BooksScreen';
import CheckEmailScreen from './screens/CheckEmailScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderListScreen from './screens/admin/OrderListScreen';
import UserListScreen from './screens/admin/UserListScreen';
import UserEditScreen from './screens/admin/UserEditScreen';
import BookListScreen from './screens/admin/BookListScreen';
import AddBookScreen from './screens/admin/AddBookScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import CheckoutSuccessScreen from './screens/CheckoutSuccessScreen';
import store from './store';
import { Provider } from 'react-redux';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen2 />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      <Route
        path='books/:category/page/:pageNumber'
        element={<BooksScreen />}
      />
      <Route path='/book/:id' element={<BookDetailsScreen />} />
      <Route path='/cart' element={<CartScreen />} />
      <Route path='/books/:category' element={<BooksScreen />} />
      <Route path='/checkEmail' element={<CheckEmailScreen />} />
      <Route
        path='/resetPassword/:id/:token'
        element={<ResetPasswordScreen />}
      />
      <Route path='/funClub/subsciptipns' element={<FunClubSubScreen />} />
      <Route
        path='/readingClub/subsciptipns'
        element={<ReadingClubSubScreen />}
      />
      <Route path='*' element={<NotFoundScreen />} />

      {/* Registered users */}
      <Route path='' element={<PrivateRoute />}>
        <Route path='/shipping' element={<ShippingScreen />} />
        <Route path='/payment' element={<PaymentScreen />} />
        <Route path='/placeorder' element={<PlaceOrderScreen />} />
        <Route path='/order/:id' element={<OrderScreen />} />
        <Route path='/profile' element={<ProfileScreen />} />
        <Route path='/checkout-success' element={<CheckoutSuccessScreen />} />
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
        <RouterProvider router={router} />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
