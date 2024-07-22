import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Display = () => {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([])
  const [page, setPage] = useState(1);
  const getData = async () => {
    const data = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    // console.log(data.data.info);
    setData(data.data.results);
    setInfo(data.data.info)
  };

  const prevPage = () => {
    var currentPage = page;
    if (currentPage > 1) {
      currentPage = currentPage - 1;
      window.scrollTo(0, 0);
    }
    setPage(currentPage);
    console.log(`Function: prevPage - Page: ${currentPage}`);
  }

  const nextPage = () => {
    var currentPage = page;
    if (page < info.pages) {
      currentPage = page+1
      window.scrollTo(0, 0);
    }
    setPage(currentPage)
    console.log(`Function: nextPage - Page: ${currentPage}`);
  }

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <>
      <div className="flex flex-wrap justify-around">
        {data.length > 0 &&
          data.map((item, index) => <Card key={index} item={item} />)}
      </div>
      <div className="flex justify-center gap-16">
        <button onClick= {prevPage} hidden = { page==1 ? true : false}
          className="border bg-blue-500 rounded-md p-4" >
            Previous</button>

        <button onClick= {nextPage} hidden = { page==42 ? true : false}
          className="border bg-green-500 rounded-md p-4">
            Next
        </button>
      </div>
    </>
  );
};

export default Display;
