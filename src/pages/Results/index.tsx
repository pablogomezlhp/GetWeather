import React, { useState, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

import {
  Header,
  Container,
  CityName,
  FirstDiv,
  SecondDiv,
  Temp,
  MinMax,
  Description,
} from "./styles";

import api from "../../services/api";


interface City {
  name: string;
  main: {
    temp: number;
    feel: number;
    temp_max: number;
    temp_min: number;
  };
}

interface Weather {
  id: number;
  description: string;
  icon: string;
  main: {
    temp: number;
    feel: number;
    temp_max: number;
    temp_min: number;
  };
}
interface CityParams {
  city: string;
}

const Results: React.FC = () => {
  const [city, setCity] = useState<City[] | null>();
  const [weather, setWeather] = useState<Weather[] | null>();

  const [tempo, setTempo] = useState("");
  const [max, setMax] = useState("");
  const [min, setMin] = useState("");
  const [humidity, setHumidity] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const { params } = useRouteMatch<CityParams>();

  useEffect(() => {
    api
      .get(
        `weather?q=${params.city}&units=metric&appid=ad318e11c048fa693d824a5e61a478e6`
      )
      .then((response) => {
        setCity(response.data);
        setWeather(response.data.weather);
        setTempo(response.data.main.temp);
        setMax(response.data.main.temp_max);
        setMin(response.data.main.temp_min);
        setHumidity(response.data.main.humidity);
        setName(response.data.name);
        setDescription(response.data.weather.description);

        console.log(response);
      });
  }, [params.city]);

  return (
    <>
      <Header>
        <Link to={"/"}>
          <FiChevronLeft size={30} /> Go Back
        </Link>
      </Header>

      <Container>
        <FirstDiv>
          <CityName>{name}</CityName>
          <Temp>
            {tempo}°C<p></p>
          </Temp>
          <p>
            <MinMax>Min: {min}°C</MinMax>
            <MinMax>Max: {max}°C</MinMax>
          </p>
        </FirstDiv>

        <div>
          {weather?.map((weat) => (
            <SecondDiv>
              <img
                src={require(`../../assets/icon/` + weat.icon + `.png`)}
                alt={weat.icon}
              />
              <Description key={weat.id}> {weat.description}</Description>
              <p>Humidity: {humidity}%</p>
            </SecondDiv>
          ))}
          <p>{description}</p>
        </div>
      </Container>
    </>
  );
};

export default Results;
