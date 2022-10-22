import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Home, ProductList, ProductSingleView } from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>

          <Route exact path="/"
            element={<Home />} />

          <Route exact path="/productList"
            element={<ProductList />} />

          <Route exact path="/product/:id"
            element={<ProductSingleView />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
