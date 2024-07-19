import React, { useEffect, useState } from "react";
import axios from "axios";

const Display = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const data = await axios.get("https://rickandmortyapi.com/api/character");
    console.log(data.data.results);
    setData(data.data.results);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Display</h1>
      {data.length > 0 &&
        data.map((data, item) => (
          <div key={item}>
            <h1>Name: {data.name}</h1>
            <div style={{display: "flex", gap: "20px"}}>
              <h3 >Id: {data.id}</h3>
              <h3
                style={{
                  color: data.status === "Alive" ? "green" : "red",
                }}
              >
                Status: {data.status}
              </h3>
            </div>
            {/* <h3 key={item} style={ data.status === "Alive" ? {color:"green"}:{color:"red"}}>Status: {data.status}</h3> */}
          </div>
        ))}
    </div>
  );
};

export default Display;
