import React, { createContext, useState } from "react";
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

const cards = [
  {
    id: 1,
    img: image1,
    favourite: false,
  },
  {
    id: 2,
    img: image2,
    favourite: false,
  },
  {
    id: 3,
    img: image3,
    favourite: false,
  },
  {
    id: 4,
    img: image4,
    favourite: false,
  },
  {
    id: 5,
    img: image5,
    favourite: false,
  },
  {
    id: 6,
    img: image6,
    favourite: false,
  },
  {
    id: 7,
    img: image7,
    favourite: false,
  },
  {
    id: 8,
    img: image8,
    favourite: false,
  },
  {
    id: 9,
    img: image9,
    favourite: false,
  },
  {
    id: 10,
    img: image10,
    favourite: false,
  },
];

// Skapa en ny Context
export const FavoritesContext = createContext<any>(null);

// Skapa en Provider-komponent för Context
export const FavoritesProvider: React.FC<any> = ({ children }) => {
  const [favorites, setFavorites] = useState<number[]>([]); // Använd state för att spåra favoriter

  // Funktion för att lägga till/ta bort favoritmarkering på ett item
  const toggleFavorite = (itemId: number) => {
    if (favorites.includes(itemId)) {
      setFavorites(favorites.filter((id) => id !== itemId));
    } else {
      setFavorites([...favorites, itemId]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, cards }}>
      {children}
    </FavoritesContext.Provider>
  );
};
