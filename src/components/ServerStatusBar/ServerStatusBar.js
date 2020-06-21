import React from "react";
import './ServerStatusBar.css'
import { MdPlayArrow, MdRefresh, MdStop } from 'react-icons/md'

function ServerStatusBar() {
  return (
    <div className="ServerStatusBar">
      <p>Server Running</p>
      <div className="flex">
        <a href='#'> View Logs </a>
        <a href='#'><MdPlayArrow size={24}/></a>
        <a href='#'><MdRefresh size={24}/></a>
        <a href='#'><MdStop size={24}/></a>
      </div>
    </div>
  );
}

export default ServerStatusBar;