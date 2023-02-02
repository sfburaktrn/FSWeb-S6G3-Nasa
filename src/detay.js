import React from "react";

const Detay = (props) => {
  return (
    <section>
      <h1>{props.data.copyright}</h1>
      <h2>{props.data.date}</h2>
      <p>{props.data.explanation}</p>
    </section>
  );
};

export default Detay;
