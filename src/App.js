import MaleFemalePopulation from "./ features/MaleFemalePopulation/MaleFemalePopulation";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./ features/About/About";

const theme = {
  colors: {
    primary: "#2994B2",
    primaryLowOpacity: "#2994B2f3",
    secondary: "",
    dark: "#444F5A",
    pink: "#FD1593",
    blue: "#4169E1",
    offWhite: "#f9f9f9",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={MaleFemalePopulation} />
            <Route path="/about" exact component={About} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
