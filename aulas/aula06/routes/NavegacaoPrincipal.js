import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { NavigationContainer } from "@react-navigation/native" 
import NavegacaoPilha from "./NavegacaoPilha"
import NavegacaoGaveta from "./NavegacaoGaveta"

function NavegacaoPrincipal(){
    const {logado} = useContext(AuthContext);
    return(
    <NavigationContainer>
        {!logado ? (
            <NavegacaoPilha />
        ) : (
            <NavegacaoGaveta />
        )}       
    </NavigationContainer>
    )
}

export default NavegacaoPrincipal;