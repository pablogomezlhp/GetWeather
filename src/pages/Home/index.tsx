import React, { ChangeEvent, useState } from "react";

import { Title, Form } from "./styles";


import Reader from "../../Component/Header";

interface City {
  name: string;
}

const Home: React.FC = () => {
  const [city, setCity] = useState<String>();

  function handleCity(event: ChangeEvent<HTMLInputElement>) {
    const cityResult = event.target.value;

    setCity(cityResult);
    console.log(city);
  }


  return (
    <>
      <Reader />
      <Title>Welcome to GetWeather</Title>
      <Form>
        <form action={`/results/${city}`}>
          <input
            type="text"
            placeholder="Enter a City"
            onChange={handleCity}
            required
          />

          <button type="submit">Search</button>
        </form>
      </Form>
    </>
  );
};

export default Home;
