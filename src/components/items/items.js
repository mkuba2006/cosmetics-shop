import React from "react";
import Item from "./item";
import classes from './style.module.css';
const data = [
  {
    id: 'm1',
    name: 'The Devil',
    type: 'Cream Prestyle',
    price: 22.99,
    img:'https://pomadziarz.pl/userdata/public/gfx/4020/lockhart-the-devil-prestyler.webp',
    author:'Lockharts',
  },
  {
    id: 'm2',
    name: 'Antigravity',
    type: 'cream pomade',
    price: 12.99,
    img:'https://dlagentlemana.pl/userdata/public/gfx/5459/Lockharts-mike-hrubovak-anti-gravity.jpg',
    author:'Lockharts',
  },
  {
    id: 'm3',
    name: 'Goon Grease',
    type: 'Water based pomade',
    price: 17.99,
    img:'https://dlagentlemana.pl/userdata/public/gfx/14052/LOCK-GG-113-1-1.png',
    author:'Lockharts',
  },

  {
    id: 'm4',
    name: 'Matte Clay',
    type: 'Matte Clay Pomade',
    price: 15.99,
    img: 'https://beardman.pl/environment/cache/images/500_500_productGfx_14530/lockharts-matte-clay-pomada-do-wlosow-105g-1.webp',
    author:'Lockharts',
  },
  {
    id: 'm5',
    name: 'Fire & Brimstone',
    type: 'Heavy Hold Pomade',
    price: 19.99,
    img: 'https://dlagentlemana.pl/userdata/public/gfx/5261/lockhart_s_fire_brimstone_water_based.jpg',
    author:'Lockharts',
  },
  {
    id: 'm6',
    name: 'Blue LaGoon ',
    type: 'Hair Tonic',
    price: 8.99,
    img: 'https://beardman.pl/environment/cache/images/500_500_productGfx_14940/lockharts-blue-lagoon-tonik-do-wlosow-118ml-1.webp',
    author:'Lockharts',
  },
  {
    id: 'm7',
    name: 'Classic Pomade',
    type: 'Classic Pomade',
    price: 14.99,
    img: 'https://afterbarber.pl/wp-content/uploads/2021/03/lockhh-600x600.jpg',
    author:'Lockharts',
  },
  {
    id: 'm8',
    name: 'Grooming Cream',
    type: 'Grooming Cream',
    price: 11.99,
    img: 'https://barbercompany.pl/image/cache/wp/gj/2020/09-2020/Lockharts-Groom-Cream-105g-543x543.webp',
    author:'Lockharts',
  },
  {
    id: 'm9',
    name: 'Untouchable ',
    type: 'Heavy Hold Hair Pomade',
    price: 16.99,
    img: 'https://afterbarber.pl/wp-content/uploads/2021/03/UNTOUCHABLE-Lockhartx-X-Capone-600x600.jpg',
    author:'Lockharts',
  },
  {
    id: 'm10',
    name: 'Light Hold Wax',
    type: 'Light Hold Wax',
    price: 13.99,
    img: 'https://static1.mintishop.pl/pol_pm_Lockharts-Light-Hold-pomada-do-wlosow-113g-43404_1.webp',
    author:'Lockharts',
  },
  {
    id: 'm11',
    name: 'Strong Hold Paste',
    type: 'Strong Hold Hair Paste',
    price: 18.99,
    img: 'https://m.media-amazon.com/images/I/810u3oYS8fL._AC_UF1000,1000_QL80_.jpg',
    author:'Lockharts',
  },
  {
    id: 'm12',
    name: 'Sex machine',
    type: 'Strong Hair paste',
    price: 29.99,
    img: 'https://a.allegroimg.com/s1024/0c152b/8007539d44f1b1fa21b46e711c42',
    author:'Lockharts',
  },
  {
    id: 'm13',
    name: 'Enigma',
    type: 'Creamy Prestyler',
    price: 9.99,
    img: 'https://dlagentlemana.pl/environment/cache/images/500_500_productGfx_4814/Lokcharts-Enigma-Volumizing-Cream-krem-do-wlosow-226g.jpg',
    author:'Lockharts',
  }
  

];




function Items() {
  const rend = data.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.type}
      price={item.price}
      img ={item.img}
      author={item.author}
    />
  ));

  return (
    <div id="products">
      <h1 className={classes.title}>Products</h1>
      <ul className={classes.ase}>{rend}</ul>
    </div>
  );
}

export default Items;
