import * as React from "react";

import Home from "./components/Home";
import GetRandomIPA from "./components/GetRandomIPA";
import { useFonts } from "expo-font";

const App = () => {
  const [fontsLoaded] = useFonts({
    LEMONMILK: require("./assets/fonts/lemon_milk/LEMONMILK-Regular.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Home />;
};

export default App;
