import React, { ReactNode, useContext } from 'react'
import { createContext, useEffect, useState } from 'react'

interface UserContextType {
    user: any;
    setUser: React.Dispatch<React.SetStateAction<any>>;
    country: string;
    setCountry: React.Dispatch<React.SetStateAction<string>>;
    district: string;
    setDistrict : React.Dispatch<React.SetStateAction<string>>;
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
    language: string;
    setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

interface UserContextProviderProps{
    children : ReactNode;
}


const UserContext = createContext<UserContextType | undefined>(undefined);

const useUserContext = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
      throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};


export function UserContextProvider({children}: UserContextProviderProps){
    const [user, setUser] = useState<any>(null);
    
    const [country, setCountry] = useState<string>(() => {
        return localStorage.getItem('country') || '';
    });
    const [state, setState] = useState<string>(() => {
        return localStorage.getItem('state') || '';
    });
    const [district, setDistrict] = useState<string>(() => {
        return localStorage.getItem('district') || '';
    });
    const [language, setLanguage] = useState<string>(() => {
        return localStorage.getItem('language') || '';
    });

   

    useEffect(() => {
        localStorage.setItem('country', country)
    }, [country]);
    useEffect(() => {
        localStorage.setItem('state', state)
    }, [state]);
    useEffect(() => {
        localStorage.setItem('district', district)
    }, [district]);
    useEffect(() => {
        localStorage.setItem('language', language)
    }, [language]);

    return (
        <UserContext.Provider value={{user, setUser, country, setCountry, state, setState, language, setLanguage, district, setDistrict}}>
            {children}
        </UserContext.Provider>
    )
}

export {useUserContext};