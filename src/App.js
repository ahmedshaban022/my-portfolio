
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Sections from './components/Sections';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {

useEffect(()=>{
  
  toast(`Welcome on my portfolio`);
},[])
  return (
    <div className="overflow-hidden">
    <Navbar />

        <Sections/>
      <Footer/>

      <ToastContainer />
    </div>
  );
}

export default App;
