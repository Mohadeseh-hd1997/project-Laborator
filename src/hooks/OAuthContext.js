import {createContext, useEffect, useReducer} from 'react';
import PropTypes from 'prop-types';
// utils
import axios from 'axios';
import {PATH_API} from '../routes/paths';

// ----------------------------------------------------------------------

const initialState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null,
}

const handlers = {
    INITIALIZE: (state, action) => {
        const {isAuthenticated, user} = action.payload;
        return {
            ...state,
            isAuthenticated,
            isInitialized: true,
            user,
        };
    },
    LOGIN: (state, action) => {
        const {user} = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            user,
        };
    },
    LOGOUT: (state) => ({
        ...state,
        isAuthenticated: false,
        user: null,
    }),
    REGISTER: (state, action) => {
        const {user} = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            user,
        };
    },
    OTP_LOGIN: (state, action) => {
        const {user} = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            user,
        };
    }
};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

const AuthContext = createContext({
    ...initialState,
    method: 'oauth2',
    login: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    otp_login: () => Promise.resolve(),
    // register: () => Promise.resolve(),
});

// ----------------------------------------------------------------------

AuthProvider.propTypes = {
    children: PropTypes.node,
};

const isValidToken = (accessToken) => {
    if (!accessToken) {
        return false;
    }
    return true;
};

const setSession = (accessToken, user) => {
    if (accessToken && user) {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('user', JSON.stringify(user))
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        delete axios.defaults.headers.common.Authorization;
    }
};

function AuthProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
    const GRANT_TYPE = 'password';

    useEffect(() => {
        const initialize = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                const user = JSON.parse(localStorage.getItem('user'));

                if (accessToken && isValidToken(accessToken) && user) {
                    setSession(accessToken, user);

                    dispatch({
                        type: 'INITIALIZE',
                        payload: {
                            isAuthenticated: true,
                            user,
                        },
                    });
                } else {
                    dispatch({
                        type: 'INITIALIZE',
                        payload: {
                            isAuthenticated: false,
                            user: null,
                        },
                    });
                }
            } catch (err) {
                console.error(err);
                dispatch({
                    type: 'INITIALIZE',
                    payload: {
                        isAuthenticated: false,
                        user: null,
                    },
                });
            }
        };

        initialize();
    }, []);

    const login = async (username, password) => {
        const response = await axios.post(PATH_API.login, new URLSearchParams({
                grant_type: GRANT_TYPE,
                username,
                password,
            }),
            {
                auth: {
                    username: CLIENT_ID,
                    password: CLIENT_SECRET,
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

        axios.defaults.headers.common.Authorization = `Bearer ${response.data.access_token}`;
        const response2 = await axios.get(PATH_API.user);

        localStorage.setItem('accessToken', response.data.access_token);
        localStorage.setItem('user', JSON.stringify(response2.data.results[0]));
        dispatch({
            type: 'LOGIN',
            payload: {
                user: response2.data.results[0],
            },
        });
        console.log(response2.data.results[0])
    };

    const otp_login = async (pk, code) => {
        const response = await axios.post(PATH_API.otp_login, new URLSearchParams({
                pk: pk,
                code: code
            }),
        );

        axios.defaults.headers.common.Authorization = `Bearer ${response.data.access_token}`;
        const response2 = await axios.get(PATH_API.user);

        localStorage.setItem('accessToken', response.data.access_token);
        localStorage.setItem('user', JSON.stringify(response2.data.results[0]));
        dispatch({
            type: 'LOGIN',
            payload: {
                user: response2.data.results[0],
            },
        });
        console.log(response2.data.results[0])
    };

    const register = async (firstName, lastName, username, phoneNumber, password,) => {
        const response = await axios.post(PATH_API.register, {
                username,
                password,
                phone_number: phoneNumber,
                first_name: firstName,
                last_name: lastName,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        const {accessToken, user} = response.data;

        window.localStorage.setItem('accessToken', accessToken);
        dispatch({
            type: 'REGISTER',
            payload: {
                user,
            },
        });
    };

    const logout = async () => {
        setSession(null);
        dispatch({type: 'LOGOUT'});
    };

    return (
        <AuthContext.Provider
            value={{
                ...state,
                method: 'oauth',
                login,
                logout,
                otp_login,
                // register,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export {AuthContext, AuthProvider};
