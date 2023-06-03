import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

export const Layout = (): JSX.Element => {
  const mainRoute = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (mainRoute.pathname === '/') {
      if (token) {
        navigate('books/all');
      } else {
        navigate('/auth');
      }
    }
  }, [mainRoute, navigate, token]);

  return <Outlet />;
};
