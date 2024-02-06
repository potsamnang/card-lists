import React from "react";
import Card from "./Card";
import data from "./data";
import "./user.css";

const User = () => {
  return (
    <div className="container">
      {data.map((p) => {
        return (
          <article>
            <Card {...p} />
          </article>
        );
      })}
    </div>
  );
};

export default User;
