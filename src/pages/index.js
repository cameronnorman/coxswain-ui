import React, { useState, useEffect } from "react";
import Card from '../components/Card/card.js';
import Loader from '../components/Loader/Loader.js';
import { getServices } from '../services/servicesApi.js';

const IndexPage = () => {
  const [loading, setLoading] = useState(false)
  const [dockerServices, setDockerServices] = useState([])
  const loadServices = async () => {
    setLoading(true)
    let res = await getServices()
    setDockerServices(res.servers)
    setLoading(false)
  }

  useEffect(() => {
    loadServices()
  }, [])
  
  return loading ? (<Loader />) : ( dockerServices.map((dockerService, index) => <Card key={index} info={dockerService} index={index} />) )
}

export default IndexPage
