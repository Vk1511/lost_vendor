import React,{useState,useEffect} from 'react';
import './App.css';
import Navbar from './Components/VendorIndu/Navbar/Navbar';
import Sidebar from './Components/VendorIndu/Sidebar/Sidebar';
import StatCards from './Components/VendorIndu/StatCards/StatCards';

function App() {

  const [sidebarOpen,setSidebaropen] = useState(false);
  const [ssize] = useState(window.screen.width);

  const handleSidebar = () => {
    setSidebaropen(!sidebarOpen);
    console.log(sidebarOpen);
  }

  useEffect(() => {
    ssize <= 940 ? setSidebaropen(false) : setSidebaropen(true)
  },[ssize])
  
  return (
    <>
      <Navbar handleSidebar={handleSidebar}/>
      <Sidebar sidebarOpen={sidebarOpen}/>
      <StatCards />
      
    </>
  );
}

export default App;
