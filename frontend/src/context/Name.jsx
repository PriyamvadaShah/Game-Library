import { createContext, useState} from "react";

export const NameContext=createContext(null);

export const NameProvider = (props) =>{
    const [name, setName] = useState("");
    return(
    <NameContext.Provider value={{ name, setName }}>
        {props.children}
    </NameContext.Provider>
    );
}