//import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";

const useAuthContext = () => {
    const AuthProvidersData=useContext(AuthContext)
    return AuthProvidersData;
};

export default useAuthContext;