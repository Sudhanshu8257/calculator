import React, { createContext ,useState} from 'react'

const ThemeContext = createContext({
    darkMode : false,
    toggleDarkMode : () => {}
})

export const ThemeContextProvider = (props) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkModeHandler = () => {
      setDarkMode((prevDarkMode) => !prevDarkMode);
    };
    const contextValue = {
        darkMode: darkMode,
        toggleDarkMode: toggleDarkModeHandler,
      };
    return <ThemeContext.Provider value={contextValue}>
        {props.children}
    </ThemeContext.Provider>
}

export default ThemeContext