import { Theme } from "@mui/material/styles";

export const getWeatherStyles = (theme: Theme) => ({
  weather: {
    borderRadius: 6,
    boxShadow: "10px -2px 20px 2px rgba(0, 0, 0, 0.3)",
    color: "#fff",
    backgroundColor: theme.palette.primary.light,
    marginBottom: "20px",
    padding: "20px",
    cursor: "pointer",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  city: {
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 1,
    margin: 0,
    letterSpacing: 1,
    marginBottom: "10px",
  },
  weatherDescription: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1,
    margin: 0,
  },
  temperature: {
    fontWeight: 600,
    fontSize: 70,
    width: "auto",
    letterSpacing: -5,
    margin: "10px 0",
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
});
