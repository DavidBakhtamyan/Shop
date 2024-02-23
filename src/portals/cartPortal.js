import { createPortal } from "react-dom";
import { useEffect } from "react";

const CartPortal = ({children}) => {
    let portal = document.createElement("div")
    useEffect(() => {
        document.body.appendChild(portal)
        return () => {
            document.body.removeChild(portal)
        }
    }, [])
    return createPortal(children, portal)
}

export default CartPortal;
