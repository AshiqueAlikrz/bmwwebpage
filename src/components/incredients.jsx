import car1 from "./images/download.png";

export const allIngredients = [
  { icon: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/game-day/m-stage-full-witdh_picture.jpg?imwidth=1280", label: "car1" },
  { icon: "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-performance-automobile/x1-m35i-xdrive/bmw-x1-m35i-xdrive-stage-teaser-02.png?imwidth=1280", label: "car2" },
  { icon: "https://i.pinimg.com/originals/6d/b7/ae/6db7ae4c1905457bdaa134f73fb510c2.png", label: "car3" },
  { icon: "https://i.pinimg.com/originals/6d/b7/ae/6db7ae4c1905457bdaa134f73fb510c2.png", label: "car4" },
  { icon: "https://i.pinimg.com/originals/6d/b7/ae/6db7ae4c1905457bdaa134f73fb510c2.png", label: "car5" },
  { icon: "https://i.pinimg.com/originals/6d/b7/ae/6db7ae4c1905457bdaa134f73fb510c2.png", label: "car6" },
  { icon: "https://i.pinimg.com/originals/6d/b7/ae/6db7ae4c1905457bdaa134f73fb510c2.png", label: "car7" },
  { icon: "https://i.pinimg.com/originals/6d/b7/ae/6db7ae4c1905457bdaa134f73fb510c2.png", label: "car8" },
  { icon: "https://i.pinimg.com/originals/6d/b7/ae/6db7ae4c1905457bdaa134f73fb510c2.png", label: "car3" },
];

const [carone,cartwo,carthree,carthree2,carthree4,carthree5,carthree8,carthree7,carthree9] = allIngredients;
export const initialTabs = [carone,cartwo,carthree,carthree2,carthree4,carthree5,carthree8,carthree7,carthree9];

export function getNextIngredient(ingredients) {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}
