import {Button, Container,Nav, Navbar as NavbarBs} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/shoppingCartContext"


export function Navbar() {
    const {openCart, cartQuantity} = useShoppingCart()
    return <NavbarBs sticky= "top" className="bg-white shadow-sm mb-3">
        <Container>
            <Nav className="me-auto">
                <Nav.Link to="/" as={NavLink}>
                Home
                </Nav.Link>             
                <Nav.Link to="/store" as={NavLink}>
                Store
                </Nav.Link>             
                <Nav.Link to="/About" as={NavLink}>
                About
                </Nav.Link>             
            </Nav>
            {cartQuantity > 0 && (
            <Button 
             onClick={openCart}
             style={{width: "3rem", height: "3rem", position: "relative"}}
             variant="outline-primary"
             className="rounded-circle"
            >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="shopping-cart"><rect width="256" height="256" fill="none"></rect><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" d="M184,184H69.81818L41.92162,30.56892A8,8,0,0,0,34.05066,24H16"></path><circle cx="80" cy="204" r="20" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></circle><circle cx="184" cy="204" r="20" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></circle><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" d="M62.54543,144H188.10132a16,16,0,0,0,15.74192-13.13783L216,64H48"></path></svg>
            <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" 
            style={{
                color:"white", 
                width: "1.5rem", 
                height: "1.rem", 
                position:"absolute", 
                bottom:0, 
                right: 0, 
                transform:"translate(25%, 25%)" 
                }}>
                 {cartQuantity}  
                </div>
            </Button>
            )}
        </Container>
    </NavbarBs>
}