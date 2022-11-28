import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home'
import Abuot from './components/about/about.jsx'
import Resume from './components/resume/resume';
import Contacts from './components/contacts/contacts';

function App() {
  return (
  <div data-theme = 'cupcake'>
    <Navbar></Navbar>
    <Home></Home>
   <Abuot></Abuot>
  <Resume></Resume>
<Contacts></Contacts>
  </div>
  );
}

export default App;
