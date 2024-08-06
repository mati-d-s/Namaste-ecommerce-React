import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Nosotros from "./components/Nosotros/Nosotros";
import Navbar from "./components/Navbar/Navbar";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>

      <Navbar />


      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer /> } />
        <Route path="/productos/:categoria" element={<ItemListContainer />}/> 
        <Route path="/Nosotros" element={<Nosotros />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
