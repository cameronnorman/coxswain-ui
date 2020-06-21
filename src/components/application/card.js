import React from "react";
import { MdLock, MdLockOpen } from 'react-icons/md'
import { GoPencil, GoTrashcan } from 'react-icons/go'
import './card.css'

function Card(props) {
  const Item = (props) => {
    return (
      <tr>
        <td>
          <p>{props.item.label}</p>
        </td>
        <td>{props.item.value}</td>
      </tr>
    )
  };

  const RouteType = (props) => {
    if(props.route === 'Protected') {
      return (
        <div class='float-right danger'>
          <MdLock size={30}/>
          <p>{props.route} Route</p>
        </div>
      )
    } else if (props.route === 'Open') {
      return (
        <div class='float-right success'> 
          <MdLockOpen size={30}/>
          <p>{props.route} Route</p>
        </div>
      )
    }
  };
  
  let items = props.info.attributes.map((item) =>
    <Item item={item} />
  );

  return (
    <div className="Card">
      <h2>{props.info.name}</h2>
      <div class='float-right buttons'>
        <a href='#'><GoPencil size={30}/></a>
        <a href='#'><GoTrashcan size={30}/></a>
      </div>
      <table>
       {items}
      </table>
      <RouteType route={props.info.route} />
    </div>
  );
}

export default Card;