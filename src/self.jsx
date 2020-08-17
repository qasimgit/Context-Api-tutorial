import React from "react";
import { FirstName, LastName } from "./App";

export const Self = () => {
  return (
    <div>
      <FirstName.consumer>
        {(data) => {
          return <h1>This is {data.FirstName} </h1>;
        }}
      </FirstName.consumer>
    </div>
  );
};
