import React from "react";
import NavMenu from "./NavMenu";

export default function MenuShow(props) {

  function renderMenuContent(list, index) {
    const smallPrice = props.content.smallPrice[index];
    const heighPrice = props.content.heighPrice[index];
    const subList = props.content.subList[index];

    return (
      <tr>
        <td>
          <p className="mainList">{list}</p>
          <p className="menu-sublist">{subList}</p>
        </td>
        <td className="menu-list">{smallPrice}</td>
        <td className="menu-list">{heighPrice}</td>
      </tr>
    );

    return;
  }

  return (
    <div className="menu">
      <table className="boxOfMenu">
        {props.content.list.map(renderMenuContent)}
      </table>
      {/* <div className="boxOfMenu">
        <div className="lisPlusSub">
          <div className="block">
            <p className="mainList">{props.list}</p>
          </div>
          {(props.subList) && <div className="block">
            <p className="menu-sublist">{props.subList}</p>
          </div>}
        </div>
        <div className="block">
          <p className="menu-list">{props.smallPrice}</p>
        </div>
        <div className="block">
          <p className="menu-list">{props.heightPrice}</p>
        </div>
      </div> */}
      <p>Do każdego zamówienia dołaczmy sos sojowy + wasabi + marynowany imbir.</p>
    </div>
  );
}
