import React from "react";
import Detay from "./detay";
import Photoo from "./photo";

const Main = (props) => {
  const { data } = props;

  return (
    <div>
      <Photoo url={data.url} title={data.title} /> <Detay data={data} />
    </div>
  );
};

export default Main;
