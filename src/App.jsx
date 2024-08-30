import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"
import { useState, useEffect } from "react"

function App() {
  
  const [showSideBar, setShowSideBar] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function FetchData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = 'https://api.nasa.gov/planetary/apod'+`?api_key=${NASA_KEY}`;

      const today = (new Date()).toDateString(); 
      // create the key name to store the api data together in the localStorage
      const localKey = `data-${today}`;
      // if the api has been called today, the fetched data should already be
      // cached in the localStorage, so just retreive it from there
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        return;
      }
      // if there is no found cached data, clear the localStorage 
      localStorage.clear();


      try {
        const response = await fetch(url);
        const apiData = await response.json();
        // cache the fetched data to localStorage if this is the first time
        // the API is called today
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);

      } catch (e) {
        console.log(e.message);
      }
    }
    FetchData();
  }, [])

  function toggleSideBar() {
    setShowSideBar(!showSideBar);
  }

  return (
    <>
      {data ? (<Main data={data}/>): (
        <div className="loadingState">
          <i className="fa-solid fa-spinner"></i>
        </div>
      )}
      {showSideBar && <SideBar toggleSideBar={toggleSideBar} data={data}/>}
      {data && <Footer toggleSideBar={toggleSideBar} data={data}/>}
    </>
  )
}

export default App
