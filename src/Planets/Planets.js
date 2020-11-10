import React, { Fragment } from "react";
import "./Planets.css";

function Planets({ data }) {
  let size = 14,
    temp;
  let flag = data && data.length > 0 && typeof data !== "string";
  if (flag) {
    data.forEach((item, index) => {
      if (isNaN(item.population)) {
        item.population = 0;
      }
    });
    data.sort((a, b) => {
      console.log(Number(a.population), Number(b.population));
      return Number(a.population) < Number(b.population)
        ? -1
        : Number(a.population) > Number(b.population)
        ? 1
        : 0;
    });
    temp = data[0].population;
  }
  const sizes = (item) => {
    if (Number(item.population) > Number(temp)) {
      size++;
      temp = item.population;
    }
    return { fontSize: `${size}px` };
  };
  return (
    <Fragment>
      <div className="table-responsive">
        {flag ? (
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Population</th>
              </tr>
            </thead>
            <tbody>
              {flag &&
                data.map((item, index) => (
                  <tr style={sizes(item)} key={index}>
                    <th>{item.name}</th>
                    <th>{item.population}</th>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          <div>No Planets Found</div>
        )}
      </div>
    </Fragment>
  );
}

export { Planets };
