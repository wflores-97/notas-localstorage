import React from "react";
import Card from "./Card";

const CardContainer = () => {
  return (
    <div className="container">
      <div className="row border rounded p-2 mt-3">
        <div className="col-md-4 col-xs-12">
          <Card />
        </div>
        <div className="col-md-4 col-xs-12">
          <Card />
        </div>
        <div className="col-md-4 col-xs-12">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
