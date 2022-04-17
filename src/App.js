import React from 'react'
import './App.css'
import NavBlock from './components/Nav/NavBlock'
import Banner from "./components/TopBanner/Banner";
import DirectoryStruct from "./components/TopBanner/DirectoryStruct";
import SearchBar from "./components/Search/SearchBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <NavBlock/>
      <Banner/>
      <DirectoryStruct/>
      <SearchBar/>

      <Footer/>
      
    </div>
  )
}

export default App