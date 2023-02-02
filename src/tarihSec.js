import React from "react";

const TarihSec = (props) => {
  const { zaman, degistir } = props;

  return (
    <div>
      <input
        value={zaman}
        onChange={(event) => degistir(event.target.value)}
        name="date"
        type="date"
      />
    </div>
  );
};

export default TarihSec;
