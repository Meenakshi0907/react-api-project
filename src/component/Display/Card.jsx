import React from "react";

const Card = ({ key, item }) => {
  return (
    <div key={key}>
      {item && (
        <>
          <div className="m-4 border border-black max-w-72 rounded-lg min-h-114">
            <div>
              <img
                src={item.image}
                alt={item.name}
                className="mx-5 my-5 border rounded-xl w-fit max-w-60"
              />
            </div>
            <div className="m-4 text-lg font-Poppins">
              <h3>Name: {item.name}</h3>
              <h3>Status: {item.status}</h3>
              <h3>Species: {item.species}</h3>
              <h3>Origin: {item.origin.name}</h3>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
