import React, { useState, useContext} from 'react';




const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const[loading, setLoading] = useState(false);
    const [weather,setWeather] = useState('');
    return <AppContext.Provider value={{
        loading,
        weather, 
        setLoading, 
        setWeather,
    }} >{children}</AppContext.Provider>    
}

export const useGlobalContext = () => {
    return useContext(AppContext)

}

export {AppContext}
export { AppProvider}


