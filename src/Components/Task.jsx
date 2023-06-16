import { useEffect, useState } from "react";
import { TaskList } from "./TaskList";

export const Task = (props) => {
  const { list } = props;
  const [favourites, setFavourites] = useState([]);
  const handleClickTime = (B1) => {
    console.log("hizo click en completo para " + B1);

    let newFavourites = [...favourites];

    if (!favourites.includes(B1)) {
      newFavourites = [...newFavourites, B1];
    } else {
      newFavourites = newFavourites.filter((movie) => B1 != movie);
    }
    setFavourites(newFavourites);

    localStorage.setItem("favourites", JSON.stringify(newFavourites));
  };

  useEffect(() => {
    const localStorageData = localStorage.getItem("favourites");
    if (localStorageData) {
      try {
        const storedFavourites = JSON.parse(localStorageData);

        setFavourites(storedFavourites);
      } catch (err) {
        console.err("Error parsing favourite items");
      }
    }
  }, []);

  return (
    <ul>
      {list.map((TimeFood) => (
        <TaskList
          key={TimeFood.name}
          name={TimeFood.name}
          onCheckTimeClick={handleClickTime}
          isFavourite={favourites.includes(TimeFood.name)}
        />
      ))}
    </ul>
  );
};
