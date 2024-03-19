import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

// Hooks
import { useThunkDispatch } from "shared/hooks/useThunkDispatch";

// Redux
import {
  addCityToList,
  deleteCityFromList,
  updateCityList,
} from "store/weather-entity/reducer";
import {
  selectorGetCitiesWeatherList,
} from "store/weather-entity/selectors";

// Types
import { WeatherData } from "core/types/weather.type";

// Components
import CityWeatherList from "components/CityWeatherList/CityWeatherList";
import CurrentWeather from "components/CurrentWeather/CurrentWeather";
import Search from "components/Search/Search";
import { AppBar } from "shared/components/AppBar/AppBar";
import { Protected } from "shared/components/Protected/Protected";
import { useNavigate } from "react-router-dom";
import { getWeather } from "store/weather-entity/actions";
import { useState } from "react";
import { appStyles } from "./app.style";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useThunkDispatch();
  const citiesWeatherList = useSelector(selectorGetCitiesWeatherList);
  const [searchCity, setSearchCity] = useState<WeatherData | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [city, setCity] = useState<string>("");

  const handleCardClick = (data: WeatherData) => {
    navigate(`/${data.name}`);
  };

  const addToTheList = (city: WeatherData) => {
    dispatch(addCityToList(city));
    setSearchCity(null);
  };

  const deleteFromList = (city: WeatherData) => {
    dispatch(deleteCityFromList(city));
  };

  const updateWeather = async (city: WeatherData) => {
    const data = await dispatch(getWeather(city.name)).unwrap();
    dispatch(updateCityList(data));
  };

  const handleError = () => {
    setError(true);
    setSearchCity(null);
  };

  const submit = async () => {
    try {
      const data = await dispatch(getWeather(city)).unwrap();
      setSearchCity(data);
      setError(false);
      setCity("");
    } catch (error) {
      handleError();
    }
  };

  return (
    <Protected>
      <AppBar />
      <Box sx={appStyles.content}>
        <CityWeatherList
          data={citiesWeatherList}
          handleCardClick={handleCardClick}
          deleteFromList={deleteFromList}
          updateWeather={updateWeather}
        />
        <Box>
          <Typography variant="h1">Get Weather</Typography>
          <Search submit={submit} setCity={setCity} city={city} />
          {searchCity && (
            <CurrentWeather data={searchCity} addToTheList={addToTheList} />
          )}
          {error && (
            <Typography sx={appStyles.error}>
              There is no city with this name
            </Typography>
          )}
        </Box>
      </Box>
    </Protected>
  );
};

export default App;
