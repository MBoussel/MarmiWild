import { useState } from "react";
type ItemsType = {
    itemName: string;
    price: number;
    description: string;
    foodImage: string;
    isFavorite: boolean;
    id: number;
}

function MenuItem({ itemName, price, description, foodImage, isFavorite }:ItemsType) {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleClickFavorite = () => {
    setFavorite(!favorite);
  };
  //create a state isFavorite that has the inital value of isFavorite that comes from the props

  return (
    <section className="itemContainer">
      <figure className="imgContainer">
        <img src={foodImage} alt={itemName} />

        <figcaption>
          <h2>{itemName}</h2>

          <p>{description}</p>
        </figcaption>
      </figure>

      <aside>{price} EUR</aside>

      <button type="button" onClick={handleClickFavorite}>
        {favorite ? "❤️" : "🖤"}
      </button>
    </section>
  );
}

export default MenuItem;
