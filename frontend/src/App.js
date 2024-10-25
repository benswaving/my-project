import React from "react";
import ProductList from "./components/products/ProductList";
import "./styles/products.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dropship Website</h1>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;
