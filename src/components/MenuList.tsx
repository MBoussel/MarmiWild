import MenuItem from "./MenuItem";


function MenuList({ foodItems } : Props) {
  return (
    <div>
      {foodItems.map((item) => (
        <MenuItem
          key={item.id}
          itemName={item.itemName}
          description={item.description}
          foodImage={item.foodImage}
          price={item.price}
          isFavorite={item.isFavorite}
        />
      ))}
    </div>
  );
}
export default MenuList;
