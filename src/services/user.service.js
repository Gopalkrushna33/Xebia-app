export const userService = {
  login,
  getPlanets,
};

async function login(username, password) {
  const baseURL = "http://swapi.dev/api/";
  const loginURL = "people/?search=";
  const response = await fetch(`${baseURL}${loginURL}${username}`).then((res) =>
    res.json()
  );
  if (
    username === response.results[0].name &&
    password === response.results[0].birth_year
  ) {
    return response.results[0];
  } else {
    return "Username or Password is wrong";
  }
}

async function getPlanets(planet) {
  const baseURL = "http://swapi.dev/api/";
  const searchURL = "planets/?search=";
  const response = await fetch(`${baseURL}${searchURL}${planet}`).then((res) =>
    res.json()
  );
  console.log(response.results);
  if (response.results.length > 0 && planet !== "") {
    return response.results;
  } else {
    return "No Planets Found";
  }
}
