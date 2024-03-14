import i7 from '../assets/incgredientsImage/i7.webp'
import i5 from '../assets/incgredientsImage/i5.jpeg'
import threeseries from '../assets/incgredientsImage/3 series.webp'
import fourseries from '../assets/incgredientsImage/4 series.png'
import sixseries from '../assets/incgredientsImage/6-Series-GT.jpg'
import m3 from '../assets/incgredientsImage/m3.jpg'
import x1 from '../assets/incgredientsImage/x1.jpg'
import x4 from '../assets/incgredientsImage/x4.jpeg'
import x6 from '../assets/incgredientsImage/x6.jpg'
import x7 from '../assets/incgredientsImage/x7.webp'
import z4 from '../assets/incgredientsImage/z4.jpg'


export const allIngredients = [
  { icon: i5, label: "i5", description: "The BMW i5 is an electric executive car offering a perfect blend of sustainability, luxury, and driving dynamics. It combines sleek design with eco-friendly engineering. The i5 provides smooth acceleration and precise handling." },
  { icon: i7, label: "i7", description: "The BMW i7 is a luxury electric sedan known for its cutting-edge technology, premium features, and exceptional performance. It offers an opulent interior with advanced infotainment systems. The i7 boasts impressive electric range and fast charging capabilities." },
  { icon: threeseries, label: "3 series", description: "The BMW 3 Series is a compact executive car renowned for its sporty handling, elegant design, and advanced technology. It features a spacious cabin with comfortable seating. The 3 Series offers a wide range of engine options to suit different preferences." },
  { icon: fourseries, label: "4 series", description: "The BMW 4 Series is a stylish coupe offering thrilling performance, dynamic handling, and upscale amenities. It stands out with its sleek, aerodynamic design. The 4 Series provides a refined ride with precise steering." },
  { icon: sixseries, label: "6 series", description: "The BMW 6 Series GT is a luxurious grand tourer featuring a spacious cabin, refined ride, and powerful engine options. It offers advanced driver assistance features for enhanced safety. The 6 Series GT combines elegance with practicality." },
  { icon: m3, label: "M3", description: "The BMW M3 is a high-performance sports sedan delivering exhilarating driving dynamics, track-ready capabilities, and aggressive styling. It features a muscular engine with impressive power output. The M3 offers precise handling and responsive brakes." },
  { icon: x1, label: "X1", description: "The BMW X1 is a compact luxury SUV known for its versatile interior, engaging driving experience, and practicality for urban environments. It provides ample cargo space for its size. The X1 offers a comfortable ride with good fuel efficiency." },
  { icon: x4, label: "X4", description: "The BMW X4 is a sporty compact SUV coupe offering sporty handling, robust engine options, and a distinctive design. It features a sloping roofline for a coupe-like appearance. The X4 comes with advanced technology for connectivity and entertainment." },
  { icon: x6, label: "X6", description: "The BMW X6 is a premium midsize SUV coupe combining SUV versatility with coupe-like styling, powerful engines, and advanced technology. It boasts a luxurious interior with high-quality materials. The X6 offers strong performance and confident handling." },
  { icon: x7, label: "X7", description: "The BMW X7 is a full-size luxury SUV offering lavish comfort, ample space, cutting-edge technology, and commanding performance. It provides seating for up to seven passengers. The X7 features a suite of driver assistance systems for added safety." },
  { icon: z4, label: "Z4", description: "The BMW Z4 is a sporty convertible roadster delivering thrilling open-air driving experience, dynamic performance, and head-turning design. It offers a retractable hardtop for added convenience. The Z4 is equipped with advanced chassis technology for precise handling." },
];

export function getNextIngredient(ingredients) {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}
