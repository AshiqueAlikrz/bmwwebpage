import React from "react";
import { HeroParallax } from "../components/heroParallex";
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
import xs from '../assets/incgredientsImage/xs.jpg'
import i71 from '../assets/incgredientsImage/i71.jpg'
import xm from '../assets/incgredientsImage/xm.webp'

export default function SecondViewPage() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "Moonbeam",
    link: i7,
    thumbnail: i7,
  },
  {
    title: "Cursor",
    link: i5,
    thumbnail: i5,
  },
  {
    title: "BMW 3 Series",
    link: threeseries, 
    thumbnail: threeseries,
  },
  {
    title: "BMW 4 Series",
    link: fourseries, 
    thumbnail: fourseries,
  },
  {
    title: "BMW 6 Series GT",
    link: sixseries, 
    thumbnail: sixseries,
  },
  {
    title: "BMW M3",
    link: m3, 
    thumbnail: m3,
  },
  {
    title: "BMW X1",
    link: x1, 
    thumbnail: x1,
  },
  {
    title: "BMW X4",
    link: x4, 
    thumbnail: x4,
  },
  {
    title: "BMW X6",
    link: x6, 
    thumbnail: x6,
  },
  {
    title: "BMW X7",
    link: x7, 
    thumbnail: x7,
  },
  {
    title: "BMW Z4",
    link: z4, 
    thumbnail: z4,
  },
  {
    title: "BMW Z4",
    link: xs, 
    thumbnail: xs,
  },
  {
    title: "BMW Z4",
    link: i71, 
    thumbnail: i71,
  },
  {
    title: "BMW Z4",
    link: xm, 
    thumbnail: xm,
  },
  {
    title: "BMW Z4",
    link: x7, 
    thumbnail: x7,
  },
];
