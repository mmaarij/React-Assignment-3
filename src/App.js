import React from 'react'
import './App.css'
import NavBlock from './components/Nav/NavBlock'
import Banner from "./components/TopBanner/Banner";
import DirectoryStruct from "./components/TopBanner/DirectoryStruct";
import SearchBar from "./components/Search/SearchBar";
import Footer from "./components/Footer/Footer";
import Body from "./components/body/Body";
import Sidebar from "./components/Sidebar/Sidebar"

function App() {
  return (
    <div>
      <NavBlock/>
      <Banner/>
      <DirectoryStruct/>
      <SearchBar/>

        <div className="offset-1 col-10 mt-3 border">
          <div className = "row">
            <div className = "col"> <Sidebar/> </div>
            <div className = "col-12 col-md-9"> <Body/> </div>
          </div>
                      
        </div>


      <Footer/>
      
    </div>
  )
}

export default App