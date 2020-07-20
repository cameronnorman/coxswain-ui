import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from './components/layout/Navbar.js';
import Card from './components/Card/card.js';
import ServerStatusBar from './components/ServerStatusBar/ServerStatusBar.js';
import Backdrop from './components/Backdrop/Backdrop.js';
import {getServices} from './services/servicesApi.js';

function App() {
    let [loading, setLoading] = useState(false)
    let [dockerServices, setDockerServices] = useState([])
    const loadServices = async () => {
      setLoading(true)
      let res = await getServices()
      setDockerServices(res.servers)
      setLoading(false)
    }

    useEffect(() => {
      loadServices()
    }, [])
    
    const Container = () => {
      let renderedDockerServices = dockerServices.map((dockerService) => <Card info={dockerService} />);

      return (
        <div className="container">
          <ServerStatusBar />
          {renderedDockerServices}
        </div>
      )
    }

    const mainLayout = (children) => {
      return (
        <div>
          <Backdrop />
          <Navbar />
          {children}
        </div>
      )
    }

    let container = Container()
    return loading ? ( <mainLayout children={[<p>Loading...</p>]} />) : ( mainLayout(container) )
}

export default App;
