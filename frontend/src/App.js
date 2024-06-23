import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import BottomTabNav from './components/BottomTabNav';
import { logout } from './slices/authSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { BASE_URL } from './constants';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    function fetchProfile() {
      axios
        .get(`${BASE_URL}/api/users/profile`)
        .then((response) => {
          console.log('🚀 response:', response);
        })
        .catch((err) => {
          if (err.message.includes('401')) {
            dispatch(logout());
          }
        });
    }
    fetchProfile();
  }, [dispatch]);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      {/* Mobile and Tablet only */}
      {width < 991 && <BottomTabNav />}
    </>
  );
};

export default App;
