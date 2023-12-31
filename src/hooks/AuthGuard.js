import PropTypes from 'prop-types';
import {useState} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
// hooks
import useAuth from '../hooks/useAuth';
// pages
import LoginPage from '../pages/Web/Auth/LoginPage'
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

AuthGuard.propTypes = {
    children: PropTypes.node,
};

export default function AuthGuard({children}) {
    const {isAuthenticated, isInitialized} = useAuth();
    const {pathname} = useLocation();
    const [requestedLocation, setRequestedLocation] = useState(null);

    if (!isInitialized) {
        return <LoadingScreen/>;
    }

    if (!isAuthenticated) {
        if (pathname !== requestedLocation) {
            setRequestedLocation(pathname);
        }
        return <LoginPage/>;
    }

    if (requestedLocation && pathname !== requestedLocation) {
        setRequestedLocation(null);
        return <Navigate to={requestedLocation}/>;
    }

    return <>{children}</>;
}
