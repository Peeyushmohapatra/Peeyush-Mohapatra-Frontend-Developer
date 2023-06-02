import React from "react";
import "./Cards.css";
import { capsuleArr } from "../../Function/function";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return (
    <div className="cardsContainer">
      {data && data.map((ele, idx) => {
          return (
            <Link to={`/details/${ele.capsule_serial}`}>
              <div
                style={{ backgroundImage: `url(${capsuleArr[idx]})` }}
                className="card"
              >
                <div className="innerCard">
                  <p className="pTag">
                    <p className="label">Capsule Id: </p>
                    <p className="p">{ele.capsule_id}</p>
                    
                  </p>
                  <p className="pTag">
                    <p className="label">Serial Number: </p>
                    <p className="p">{ele.capsule_serial}</p>
                    
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Cards;
