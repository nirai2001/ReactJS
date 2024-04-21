import React, { useState, useEffect } from 'react';
import Error from "./Error.jsx";
import AvailableItem from './AvailableItem.jsx';
localStorage.setItem("data",JSON.stringify([
  {
    "id": "m1",
    "name": "Wireless Headphones",
    "price": "899",
    "description": "Immerse yourself in crystal-clear audio with these wireless headphones. Featuring active noise cancellation and long battery life",
    "image": "WHead.jpg"
  },
  {
    "id": "m2",
    "name": "Smartwatch",
    "price": "1499",
    "description": "Stay connected and healthy with this stylish smartwatch. Track your steps, heart rate, and sleep patterns",
    "image": "SmartWatch.jpg"
  },
  {
    "id": "m3",
    "name": "Laptop",
    "price": "79999",
    "description": "Boost your productivity with this powerful and sleek laptop. Equipped with a high-resolution display, fast processor, and long battery life",
    "image": "Laptop.jpg"
  },
  {
    "id": "m4",
    "name": "Smartphone",
    "price": "19999",
    "description": "Capture stunning photos and stay connected with this cutting-edge smartphone. Featuring a powerful camera system and a vibrant display",
    "image": "Smartphone.jpg"
  },
  {
    "id": "m5",
    "name": "Coffee Maker",
    "price": "5000",
    "description": " Start your mornings right with this versatile coffee maker. Brew a single cup or a full carafe",
    "image": "Coffee.jpg"
  },
  {
    "id": "m6",
    "name": "Portable Speaker",
    "price": "3000",
    "description": " Bring the party anywhere with this portable speaker. Featuring powerful sound, long battery life, and Bluetooth connectivity",
    "image": "Portable.jpg"
  },
  {
    "id": "m7",
    "name": "Gaming Headset",
    "price": "9999",
    "description": " Experience immersive gaming audio with this comfortable and high-performance gaming headset. Enjoy crystal-clear sound, powerful bass, and a noise-canceling microphone",
    "image": "Gaming.jpg"
  },
  {
    "id": "m8",
    "name": "Smart LED Light Bulb",
    "price": "199",
    "description": "Transform your home's ambiance with these smart LED light bulbs. Change colors, adjust brightness, and control them remotely",
    "image": "led.jpg"
  },
  {
    "id": "m9",
    "name": "Travel Backpack",
    "price": "1399",
    "description": " Explore the world with ease with this versatile travel backpack. Featuring a comfortable fit, ample storage compartments, and durable construction",
    "image": "Backpack.jpg"
  },
  {
    "id": "m10",
    "name": "3D Printer",
    "price": "12999",
    "description": " Unleash your creativity and bring your ideas to life with this user-friendly 3D printer. ",
    "image": "Printer.jpg"
  },
  {
    "id": "m11",
    "name": "Blanket",
    "price": "1999",
    "description": "Experience a sense of calm and relaxation with this weighted blanket. Designed to provide deep pressure stimulation, it promotes better sleep",
    "image": "Blanket.png"
  },
  {
    "id": "m12",
    "name": "Noise-Canceling Earbuds",
    "price": "899",
    "description": " Enjoy distraction-free listening with these noise-canceling earbuds. Block out unwanted background noise, immerse yourself.",
    "image": "Anc.jpg"
  }
]))
export default function Items() {
  const [loadedItems, setLoadedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const dat = localStorage.getItem("data");
        const data = JSON.parse(dat)
        setLoadedItems(data); 
      } catch (error) {
        setError(error.message); 
      } finally {
        setIsLoading(false); 
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p className="center">fetching Items!!</p>;
  }

  if (error) {
    return <Error title="Failed to fetch the Items" message={error} />;
  }

  return (
    <ul id="items">
      {loadedItems.map((item) => (
        <ol key={item.id}>
          <AvailableItem item={item} />
        </ol>
      ))}
    </ul>
  );
}