import React ,{useState} from 'react'
import './App.css';
import Login from "./login";
import Login_mob from "./login in mobile";
import { useMediaQuery } from 'react-responsive'


function App() {


    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });
    const isTablet = useMediaQuery({
        query: "(max-width: 1224px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width: 786px)"
    });


    return (
        <div>

                {
                    isDesktop ?  <Login/> : <Login_mob/>
                }


        </div >
    )
  }



export default App;
