// import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "../components/Header/Header";
import DrugStoresPage from "../pages/DrugStoresPage/DrugStoresPage";
import CartPage from "../pages/CartPage/CartPage";

export const App = () => {
  return (
    <>
      <Header/>
      <Routes>
          <Route path="/" element={<  DrugStoresPage/>} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={< DrugStoresPage />} />
        </Routes>
    
    </>
   
  );
};
export default App;
