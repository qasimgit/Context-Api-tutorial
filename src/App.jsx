import React, { createContext, useState } from "react";

const FirstName = createContext();
const LastName = createContext();

const Self = () => {
  return (
    <div>
      <FirstName.Consumer>
        {(data) => {
          return (
            <LastName.Consumer>
              {(lastData) => {
                return (
                  <h1>
                    This is {data} {lastData}
                  </h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
      <h2></h2>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <FirstName.Provider value={"Muhammad Qasim"}>
        <LastName.Provider value={"Qadri"}>
          <Self />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
};

export default App;
export { FirstName };
export { LastName };
