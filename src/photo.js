import React from "react";

const Photo = (props) => {
  return (
    <main className="sbt">
      <img src={props.url} alt={props.title} />
    </main>
  );
};

export default Photo;
