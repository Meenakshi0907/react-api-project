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
    </div>
  );
};

export default Display;
