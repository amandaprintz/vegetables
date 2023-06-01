import React, { createContext, useState, useEffect } from "react";
import { GridItemProps } from "./components/GridItem";
import Cards from "./components/Card";


function getInitialState() {
  const savedCards = localStorage.getItem("cards");
  return savedCards ? JSON.parse(savedCards) : Cards;
}

// Skapa en ny Context
export const FavoritesContext = createContext<any>(null);

// Skapa en Provider-komponent för Context
export const FavoritesProvider: React.FC<any> = ({ children }) => {
  const [favorites, setFavorites] = useState<number[]>([]); // Använd state för att spåra favoriter
  const [updatedCards, setUpdatedCards] =
    useState<GridItemProps[]>(getInitialState); // State för uppdaterade kort

  const [filterFavorites, setFilterFavorites] = useState<boolean>(false);

  // Funktion för att lägga till/ta bort favoritmarkering på ett item
  const toggleFavorite = (itemId: number) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = [...prevFavorites]; // Kopiera favorites-arrayen

      // Loopa igenom varje kort och ändra favorite-värdet för det aktuella kortet baserat på dess id
      const updatedCardsCopy = updatedCards.map((card) => {
        if (card.id === itemId) {
          return { ...card, favorite: !card.favorite }; // Kopiera kortet och ändra favorite-värdet
        }
        return card;
      });

      setUpdatedCards(updatedCardsCopy); // Uppdatera state för uppdaterade korten

      // Lägg till eller ta bort itemId från favorites-arrayen beroende på om det redan finns där eller inte
      if (updatedFavorites.includes(itemId)) {
        return updatedFavorites.filter((id) => id !== itemId);
      } else {
        return [...updatedFavorites, itemId];
      }
    });
  };

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(updatedCards));
  }, [updatedCards]);

  return (
    <FavoritesContext.Provider
      value={{
        filterFavorites,
        setFilterFavorites,
        favorites,
        toggleFavorite,
        cards: updatedCards,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
