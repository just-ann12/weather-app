import { FC } from "react";
import { Box, Typography } from "@mui/material";

// Components
import CurrentWeather from "../CurrentWeather/CurrentWeather";

//Types
import { WeatherData } from "core/types/weather.type";

interface CityWeatherListProps {
  data: WeatherData[];
  handleCardClick: (city: WeatherData) => void;
  deleteFromList: (city: WeatherData) => void;
  updateWeather: (city: WeatherData) => void;
}

const CityWeatherList: FC<CityWeatherListProps> = ({
  data,
  handleCardClick,
  deleteFromList,
  updateWeather,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      <Typography variant="h1">City List</Typography>
      {data.map((item) => (
        <CurrentWeather
          key={item.id}
          data={item}
          handleCardClick={() => handleCardClick(item)}
          deleteFromList={deleteFromList}
          updateWeather={updateWeather}
        />
      ))}
    </Box>
  );
};

export default CityWeatherList;
