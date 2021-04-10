import { createContext, ReactNode } from 'react'
import { useState } from "react";
import { api } from "../services/api";

interface SidebarDrawerProviderProps {
    children: ReactNode;
}

interface InformationProps {
    description: string;
    countries: number;
    tongues: number;
    citiesTop: number;
}

interface CitiesProps {
    image: string;
    name: string;
    country: string;
    flag: string;
}

interface ContinentProps {
    id: number;
    continent: string;
    image: string;
    informations: InformationProps;
    cities: CitiesProps[];
}

interface ContextProps {
    continentInformations: ContinentProps;
    numberContinentNow: (id: number) => void;
    loadContinent: () => void;
}

export const ContinentsChangeContext = createContext({} as ContextProps);


export default function ContinentsChangeProvider({children}: SidebarDrawerProviderProps) {
    const [continentInformations, setContinentInformations] = useState({} as ContinentProps);
    const [continentNow, setContinentNow] = useState(null)
    
    async function loadContinent() {        
        const response = await api.get(`/continent/${continentNow}`);
        setContinentInformations(response.data);
    }

    function numberContinentNow (id: number) {
        setContinentNow(id);
    }
    
    return (
        <ContinentsChangeContext.Provider value={{
            continentInformations,
            loadContinent,
            numberContinentNow
        }}>
            {children}
        </ContinentsChangeContext.Provider>
    );
}