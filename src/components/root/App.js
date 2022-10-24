import Navi from "../navi/Navi";
import {Container} from "reactstrap"
import Dashboard from "./Dashboard";
import {Route,Routes} from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
function App() {
  return (
  <Container>
    <Navi/>
    <Routes>  
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/products"  element={<Dashboard/>}/>
        <Route path="/saveproduct/:productId" element={<AddOrUpdateProduct/>}/>   
        <Route path="/cart"  element={<CartDetail/>}/>

    </Routes>
  </Container>
  );
}

export default App;
