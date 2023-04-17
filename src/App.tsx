import React from "react";
import Header from "./components/Header";
import Grid from "./components/Grid";
import { FavoritesProvider } from "./AppContext";

function App() {
  return (
    <FavoritesProvider>
      <main className="App">
        <Header />
        <Grid />
      </main>
    </FavoritesProvider>
  );
}

export default App;
