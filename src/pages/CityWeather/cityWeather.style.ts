export const cityWeatherStyles = {
  wrapper: { width:'100%', 
  display: "flex",
  flexDirection:'column',
  justifyContent: "center",
  alignItems: "center", margin: '20px 40px',"& > *,p": { color: "#333" } },
  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  row: {
    padding: "10px",
    fontSize: 20,
    letterSpacing: 2,
    "& > svg": {
      marginRight: 10,
    },
  },
};
