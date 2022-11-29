import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import CreateForm from './component/CreateForm';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="CreateForm" element={<CreateForm />} />


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
