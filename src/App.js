// import { useRef } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Products from './Components/Products';
function App() {
  // const footerRef = useRef();
  // const scrollToFooter = () =>{
  //   if(footerRef.current){
  //     footerRef.current.scrollIntoView({behavior: 'smooth'});
  //   }
  // }
  return (
    <div className="App">
      <Header/>
      <Products />
      <Footer />
      
    </div>
  );
}

export default App;
