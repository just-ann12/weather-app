import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import {
  LocationOn,
  SettingsBrightness,
  Opacity,
  Brightness5,
  Brightness6,
  Dehaze,
  Cloud,
} from "@mui/icons-material";

// Redux
import { selectorGetCityWeather } from "store/weather-entity/selectors";
import { getWeather } from "store/weather-entity/actions";

// Hooks
import { useThunkDispatch } from "shared/hooks/useThunkDispatch";
import { AppBar } from "shared/components/AppBar/AppBar";
import { Protected } from "shared/components/Protected/Protected";
import { cityWeatherStyles } from "./cityWeather.style";

export const CityWeather = () => {
  const dispatch = useThunkDispatch();
  const cityWeather = useSelector(selectorGetCityWeather);
  const params = useParams();
  const { cityName } = params;

  useEffect(() => {
    cityName && dispatch(getWeather(cityName));
  }, [dispatch, cityName]);

  return (
    cityWeather && (
      <Protected>
        <AppBar />
        <Box sx={cityWeatherStyles.wrapper}>
          <Box
            sx={{
              width: "500px",
            }}
          >
            <Box sx={cityWeatherStyles.top}>
              <Box>
                <Typography variant="h2">{cityWeather.name}</Typography>
                <Typography>{cityWeather.weather[0].description}</Typography>
              </Box>
              <img
                alt="weather"
                style={{ width: "200px" }}
                src={`https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`}
              />
            </Box>
            <Box sx={cityWeatherStyles.row}>
              <LocationOn />
              Location: {cityWeather.name}, {cityWeather.sys.country}
            </Box>
            <Box sx={cityWeatherStyles.row}>
              <SettingsBrightness />
              Temperature: {cityWeather.main.temp}
            </Box>
            <Box sx={cityWeatherStyles.row}>
              <Opacity />
              Humidity: {cityWeather.main.humidity}
            </Box>
            <Box sx={cityWeatherStyles.row}>
              <Brightness5 />
              Sun Rise:
              {new Date(cityWeather.sys.sunrise * 1000).toLocaleTimeString()}
            </Box>
            <Box sx={cityWeatherStyles.row}>
              <Brightness6 />
              Sun Set:
              {new Date(cityWeather.sys.sunset * 1000).toLocaleTimeString()}
            </Box>
            <Box sx={cityWeatherStyles.row}>
              <Dehaze />
              Humidity: {cityWeather.weather[0].main}
            </Box>
            <Box sx={cityWeatherStyles.row}>
              <Cloud />
              Clouds: {cityWeather.clouds.all}%
            </Box>
          </Box>
        </Box>
      </Protected>
    )
  );
};
