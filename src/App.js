import MaleVsFemale from "./ features/MaleFemalePopulation/MaleFemalePopulation";
import { ThemeProvider } from "@emotion/react";

const theme = {
  colors: {
    primary: "#2994B2",
    secondary: "",
    dark: "#444F5A",
    pink: "#FD1593",
    blue: "#4169E1",
  },
};

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <MaleVsFemale />
      </ThemeProvider>
    </div>
  );
}

export default App;
