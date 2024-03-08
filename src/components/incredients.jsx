import car1 from "./images/download.png";

export const allIngredients = [
  { icon: car1, label: "car1" },
  { icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM5J4AdbglJEdSShIK7qjIinz1D1_IpX424_2n_Fb9h745SHsnE5hk2LdTkWqJ0J8qlxs&usqp=CAU", label: "car2" },
  { icon: "https://i.pinimg.com/originals/6d/b7/ae/6db7ae4c1905457bdaa134f73fb510c2.png", label: "car3" },
];

const [carone,cartwo,carthree] = allIngredients;
export const initialTabs = [carone,cartwo,carthree];

export function getNextIngredient(ingredients) {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}
