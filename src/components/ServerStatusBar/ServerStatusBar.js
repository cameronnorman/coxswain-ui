import React, { useState, useEffect } from "react";
import './ServerStatusBar.css'
import { MdPlayArrow, MdRefresh, MdStop } from 'react-icons/md'
import { nginx } from '../../services/servicesApi.js';

const ServerStatusBar = () => {
  const [status, setStatus] = useState('processing')
  const startService = async () => {
    setStatus("processing")
    await nginx('start')
  }

  const stopService = async () => {
    setStatus("processing")
    await nginx('stop')
  }

  const restartService = async () => {
    setStatus("processing")
    await nginx('restart')
  }

  const getStatus = async () => {
    console.log("Checking...")
    let res = await nginx('status')
    setStatus(res.status)
  }

  useEffect(() => {
    getStatus()
    setInterval(() => getStatus(), 5000);
  })

  return (
    <div className={`ServerStatusBar ${status}`}>
      <p>Server {status}</p>
        {
          status == "processing" ?
            <div className="flex"></div> :
            <div className="flex">
              <a href='#'> View Logs </a>
              <a onClick={e => startService(e) }><MdPlayArrow size={24}/></a>
              <a onClick={e => stopService(e) }><MdStop size={24}/></a>
              <a onClick={e => restartService(e) }><MdRefresh size={24}/></a>
            </div>
      }
    </div>
  );
}

export default ServerStatusBar;
