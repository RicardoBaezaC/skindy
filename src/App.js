import './App.css';
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Products from './pages/products/Products'
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
