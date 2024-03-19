import { FC, MouseEvent, useMemo } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import UpdateIcon from "@mui/icons-material/Update";

// Type
import { WeatherData } from "core/types/weather.type";

// Styles
import { getWeatherStyles } from "./currentWeather.style";
import { useSelector } from "react-redux";
import { selectorGetCitiesWeatherList } from "store/weather-entity/selectors";

interface CurrentWeatherProps {
  data: WeatherData;
  handleCardClick?: () => void;
  addToTheList?: (city: WeatherData) => void;
  deleteFromList?: (city: WeatherData) => void;
  updateWeather?: (city: WeatherData) => void;
}

const CurrentWeather: FC<CurrentWeatherProps> = ({
  data,
  handleCardClick,
  addToTheList,
  deleteFromList,
  updateWeather,
}) => {
  const theme = useTheme();
  const weatherStyles = getWeatherStyles(theme);
  const citiesWeatherList = useSelector(selectorGetCitiesWeatherList);
  const isCityAdded = useMemo(
    () => !!citiesWeatherList.find((item) => item.id === data.id),
    [citiesWeatherList, data]
  );

  const handleAddToTheList = (e: MouseEvent<Element>) => {
    e.stopPropagation();
    addToTheList && addToTheList(data);
  };

  const handleDeleteFromList = (e: MouseEvent<Element>) => {
    e.stopPropagation();
    deleteFromList && deleteFromList(data);
  };

  const handleUpdateWeather = (e: MouseEvent<Element>) => {
    e.stopPropagation();
    updateWeather && updateWeather(data);
  };

  return (
    <Box sx={weatherStyles.weather} onClick={handleCardClick}>
      <Box>
        <Box sx={weatherStyles.top}>
          <Typography sx={weatherStyles.city}>{data.name}</Typography>
          <Typography sx={weatherStyles.weatherDescription}>
            {data.weather[0].description}
          </Typography>
        </Box>
        <Box sx={weatherStyles.bottom}>
          <img
            alt="weather"
            style={{
              width: 150,
            }}
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          />
          <Box sx={weatherStyles.actions}>
            {addToTheList && (
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={(e) => handleAddToTheList(e)}
                disabled={isCityAdded}
              >
                add
              </Button>
            )}
            {deleteFromList && (
              <Button
                variant="contained"
                startIcon={<DeleteIcon />}
                onClick={(e) => handleDeleteFromList(e)}
              >
                delete
              </Button>
            )}
            {updateWeather && (
              <Button
                variant="contained"
                startIcon={<UpdateIcon />}
                onClick={(e) => handleUpdateWeather(e)}
              >
                update
              </Button>
            )}
          </Box>
        </Box>
      </Box>
      <Typography sx={weatherStyles.temperature}>
        {Math.round(data.main.temp)}°C
      </Typography>
    </Box>
  );
};

export default CurrentWeather;
