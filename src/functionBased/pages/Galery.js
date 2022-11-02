import React from "react";

import "../App.css";

export default function Galery() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <li>
            <img src="https://picsum.photos/200/300?random=1" alt="asdklfjad" />
          </li>
          <li>
            <img src="https://picsum.photos/200/300?random=2" alt="asdklfjad" />
          </li>
          <li>
            <img src="https://picsum.photos/200/300?random=3" alt="asdklfjad" />
          </li>
          <li>
            <img src="https://picsum.photos/200/300?random=4" alt="asdklfjad" />
          </li>
          <li>
            <img src="https://picsum.photos/200/300?random=5" alt="asdklfjad" />
          </li>
        </ul>
      </div>
    </>
  );
}
