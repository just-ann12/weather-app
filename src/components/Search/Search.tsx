import { ChangeEvent, Dispatch,FC, FormEvent, SetStateAction } from "react";
import { Box, Button, TextField } from "@mui/material";

interface SearchProps {
  submit: () => void;
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
}

const Search: FC<SearchProps> = ({ submit, city, setCity }) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", gap: "10px", marginBottom: "10px" }}
    >
      <TextField
        id="search-bar"
        className="text"
        onInput={handleOnChange}
        value={city}
        label="Enter a city name"
        variant="outlined"
        placeholder="City Name..."
      />
      <Button type="submit" variant="contained">
        Get Weather
      </Button>
    </Box>
  );
};

export default Search;
