import { createContext, useContext, useReducer } from 'react';
export const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);
let authState = window.localStorage.getItem('auth')
  ? JSON.parse(window.localStorage.getItem('auth'))
  : {};

let initialState = {
  isAuthenticated: window.localStorage.getItem('auth') !== null ? true : false,
  token: authState ? authState?.cognitoData?.idToken?.jwtToken : null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem(
        `auth`,
        JSON.stringify(action.payload.user_tokens.access)
      );
      return {
        ...state,
        isAuthenticated: action?.payload?.email
          ? true
          : localStorage.getItem('auth')
          ? true
          : false,
        token: action?.payload?.user_tokens.access,
      };
    case 'LOGOUT':
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        email: null,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
