import React, { createContext, useState, useEffect } from "react";
import image1 from "./assets/images/image1.jpg";
import image2 from "./assets/images/image2.jpg";
import image3 from "./assets/images/image3.jpg";
import image4 from "./assets/images/image4.jpg";
import image5 from "./assets/images/image5.jpg";
import image6 from "./assets/images/image6.jpg";
import image7 from "./assets/images/image7.jpg";
import image8 from "./assets/images/image8.jpg";
import image9 from "./assets/images/image9.jpg";
import image10 from "./assets/images/image10.jpg";
import { GridItemProps } from "./components/GridItem";

const cards = [
  {
    id: 1,
    img: image1,
    favorite: false,
    name: "The purple radish",
    description: "A pop of color to your plate",
  },
  {
    id: 2,
    img: image2,
    favorite: false,
    name: "The great garlic",
    description: "A vampire's worst nightmare",
  },
  {
    id: 3,
    img: image3,
    favorite: false,
    name: " The mean nectarine ",
    description: "The peach's smooth and sassy cousin",
  },
  {
    id: 4,
    img: image4,
    favorite: false,
    size: "large",
    name: " A good ol' salad ",
    description: "The ultimate blank canvas",
  },
  {
    id: 5,
    img: image5,
    favorite: false,
    name: "The real GOAT, the artichoke",
    description: "Prickly but rewarding",
  },
  {
    id: 6,
    img: image6,
    favorite: false,
    name: " The only vegetable on fleek, the leek ",
    description: "The sophisticated sibling of the onion",
  },
  {
    id: 7,
    img: image7,
    favorite: false,
    size: "large",
    name: " The magic radish",
    description: "a punch of flavor to any dish.",
  },
  {
    id: 8,
    img: image8,
    favorite: false,
    name: " The vibrant persimmon",
    description: "A sweet burst of sunshine ",
  },
  {
    id: 9,
    img: image9,
    favorite: false,
    name: " The mighty brussels sprouts",
    description: " Small veg, big flavor",
  },
  {
    id: 10,
    img: image10,
    favorite: false,
    name: " The green veggies",
    description: "Ready to save your health.",
  },
];

function getInitialState() {
  const savedCards = localStorage.getItem("cards");
  return savedCards ? JSON.parse(savedCards) : cards;
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
