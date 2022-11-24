import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home'
import Abuot from './components/about/about.jsx'
function App() {
  return (
  <div data-theme = 'cupcake'>
    <Navbar></Navbar>
    <Home></Home>
   <Abuot></Abuot>
  </div>
  );
}

export default App;
