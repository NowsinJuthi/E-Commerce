import React, { useState } from "react";
import Bkash from "./Bkash";

const AllOptions = () => {
  const [show, setShow] = useState("bkash");

  const handleClick = (content) => {
    setShow(content);
  };
  return (
    <>
      <div className="main">
        <div className="bkash">
          <button onClick={() => handleClick("bkash")}>Bkash</button>
        </div>

        {/* CONTENT */}
        <div className="info">{show == "bkash" && <p>{Bkash}</p>}</div>
      </div>
    </>
  );
};

export default AllOptions;
