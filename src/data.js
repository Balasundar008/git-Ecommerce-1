// data.js
import fridge from './images/fridge.jpg'
import laptop from './images/laptop.jpg'
import moto from './images/moto.jpg'
import tv from './images/tv.jpg'
import samsung from './images/samsung.jpg'
import washmachine from './images/washmachine.png'
import ht from './images/ht.jpg'
import camera from './images/camera.jpg'
import sofa from './images/sofa.jpg'
import chimney from './images/chimney.jpg'
import watch from './images/watch.jpg'
import shoe from './images/shoe.jpg'
const products = [
  {
    id: 1,
    name: 'Moto Edge 40',
    image:moto,
    price: '27,999*',
    description: '8GB RAM | 256GB ROM | 6.55 Inch Full HD Display',
  },
  {
      id: 2,
      name: 'SAMSUNG Galaxy F54 5G',
      image:samsung,
      price: '31,999',
      description: '108MP+8MP+2MP | 32MP Front Camera | 6000mAh Battery',
    },
    {
      id: 3,
      name: 'realme(RMV2004) -TV ',
      image:tv,
      price: '23,999',
      description: '43 Inches | Resolution: Ultra HD (4K) | 3840 x 2160 Pixels',
    },
    {
      id: 4,
      name: 'Lenovo IdeaPad ',
      image:laptop,
      price: '53,990',
      description: '39.62 cm | Intel Core i5 11th Gen | 8 GB/512 GB SSD/Windows 11 Home',
    },
    {
      id: 5,
      name: 'Motorola - Washing Machine',
      image:washmachine,
      price: '26,990',
      description: '1400 rpm | 10.5 kg | Fully Automatic Front Load',
    },
    {
      id: 6,
      name: 'LG -Refridgerator',
      image:fridge,
      price: '17,190',
      description: '185 L | Smart Inverter',
    },
    {
      id: 7,
      name: 'SONY SA-D40 - Home Theatre',
      image:ht,
      price: '10,490',
      description: ' 80 W | Power Source: DC 18 V | Bluetooth',
    }, 
    {
      id: 8,
      name: 'Canon EOS 3000D DSLR Camera',
      image:camera,
      price: '30,499',
      description: 'Effective Pixels: 18 MP | Sensor Type: CMOS | Full HD',
    },
    {
      id: 9,
      name: 'Trevi Bau Fabric 3 Seater Sofa ',
      image:sofa,
      price: '9,990',
      description: 'Upholestry: Synthetic | Filling Material: Foam',
    },
    {
      id: 10,
      name: 'ruwa Citrine Black 60 Wall Mounted Chimney',
      image:chimney,
      price: '3,799',
      description: ' 60 cm : Suitable for 3-4 Burners | 1100 CMH',
    }, 
    {
      id: 11,
      name: 'Fastrack Minimalists Analog Watch',
      image:watch,
      price: '850',
      description: 'Water Proof -10m | 2 Years Warrenty ' ,
    },
    {
      id: 12,
      name: 'PUMA Cave V3 Sneakers For Men',
      image:shoe,
      price: '1,796',
      description: 'Outer material :Rubber | sole material: Rubber',
    }
  // Add more product objects as needed
];

  
  export default products;
  