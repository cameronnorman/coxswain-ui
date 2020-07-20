import React from "react";
import { MdLock, MdLockOpen } from 'react-icons/md'
import { GoPencil, GoTrashcan } from 'react-icons/go'
import './card.css'

function Card({ info }) {
  const RouteType = ({auth}) => {
    if(auth) {
      return (
        <div class='float-right danger'>
          <MdLock size={30}/>
          <p>Protected Route</p>
        </div>
      )
    } else {
      return (
        <div class='float-right success'> 
          <MdLockOpen size={30}/>
          <p>Open Route</p>
        </div>
      )
    }
  };

  return (
    <div className="Card">
      <h2>{info.host}</h2>
      <div class='float-right buttons'>
        <a href='#'><GoPencil size={30}/></a>
        <a href='#'><GoTrashcan size={30}/></a>
      </div>
      <table>
        <tbody>
          <tr>
            <td>URL:</td>
            <td>{info.url}</td>
          </tr>
          <tr>
            <td>Exposed Port:</td>
            <td>{info.exposed_port}</td>
          </tr>
          <tr>
            <td>SSL Certificate:</td>
            <td>{info.ssl_certificate}</td>
          </tr>
          <tr>
            <td>SSL Certificate Key:</td>
            <td>{info.ssl_certificate_key}</td>
          </tr>
          <tr>
            <td>Container Port:</td>
            <td>{info.port}</td>
          </tr>
        </tbody>
      </table>
      <RouteType auth={info.basic_auth} />
    </div>
  );
}

export default Card;
