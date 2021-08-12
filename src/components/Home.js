import React, { useState, useEffect } from "react";

const Home = () => {
    const [city, setCity] = useState(null);
  const [search, setSearch] = useState("kolkata");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2a441b1f743fddc59adcb479be64da70`;
      const response = await fetch(url);
      const resjson = await response.json();
      setCity(resjson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
    <div className="home">
      <div className="box">
        <div className="input-div">
          <input
            type="text"
            className="inputFeild"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search City "
          />
        </div>
        {!city ? (
          <p>No Data Found</p>
        ) : (
          <div>
            <div className="location">
              <h2>
                {search}
              </h2>
              <h1>{city.temp}°Cel</h1>
              <h4>Min: {city.temp_min}°Cel| Max : {city.temp_max}°Cel</h4>
            </div>
          </div>
        )}
      </div>
      </div>
    </>
  );
}

export default Home
