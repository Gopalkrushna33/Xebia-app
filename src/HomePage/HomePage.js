import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Planets } from "../Planets/Planets";
import { userActions } from "../actions";
import "./HomePage.css";

function HomePage() {
  let planetsData = useSelector((state) => state.planetList.items);
  const dispatch = useDispatch();

  function handleChange(e) {
    e.preventDefault();
    dispatch(userActions.getPlanets(e.target.value));
  }
  return (
    <div className="col-lg-8 offset-lg-2">
      <p className="floatrt">
        <Link to="/login">Logout</Link>
      </p>
      <form>
        <div className="form-group">
          <label htmlFor="planets">Planets</label>
          <input
            type="text"
            className="form-control"
            id="planets"
            placeholder="Search Planets"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
      </form>
      <Planets data={planetsData} />
    </div>
  );
}

export { HomePage };
