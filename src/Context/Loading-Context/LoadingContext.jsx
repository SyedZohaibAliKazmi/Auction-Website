import React, { createContext, useContext, useState } from 'react';

// Create a context
const LoadingContext = createContext();

// Create a provider component
export const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};

// Custom hook to use the loading context
export const useLoading = () => useContext(LoadingContext);