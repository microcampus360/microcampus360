import React from 'react'

// Paper imports
import CartoonBox from '../../assets/PriceList/Paper/CartoonBox.svg'
import Magazine from '../../assets/PriceList/Paper/Magazine.svg'
import CardBoard from '../../assets/PriceList/Paper/CardBoard.svg'
import MixedPapers from '../../assets/PriceList/Paper/MixedPapers.svg'
import Newspaper from '../../assets/PriceList/Paper/Newspaper.svg'
import Notebook from '../../assets/PriceList/Paper/Notebook.svg'
import TextBook from '../../assets/PriceList/Paper/TextBook.svg'

// Plastic imports
import Fiber from '../../assets/PriceList/Plastic/Fiber.svg'
import HardPlastic from '../../assets/PriceList/Plastic/HardPlastic.svg'
import PVC from '../../assets/PriceList/Plastic/PVC.svg'
import SoftPlastic from '../../assets/PriceList/Plastic/SoftPlastic.svg'
import WaterTank from '../../assets/PriceList/Plastic/WaterTank.svg'

// Metal imports
import Aluminium from '../../assets/PriceList/Metal/Aluminium.svg'
import Brass from '../../assets/PriceList/Metal/Brass.svg'
import Copper from '../../assets/PriceList/Metal/Copper.svg'
import IronFirst from '../../assets/PriceList/Metal/IronFirst.svg'
import IronSecond from '../../assets/PriceList/Metal/IronSheet.svg'
import Steel from '../../assets/PriceList/Metal/Steel.svg'
import Tin from '../../assets/PriceList/Metal/Tin.svg'

// Motor imports
import Engine from '../../assets/PriceList/Motor/Engine.svg'
import Fan from '../../assets/PriceList/Motor/Fan.svg'
import Motor from '../../assets/PriceList/Motor/Motor.svg'
import Pump from '../../assets/PriceList/Motor/Pump.svg'

// E Waste imports
import BigTV from '../../assets/PriceList/E-waste/BigTV.svg'
import LittleTV from '../../assets/PriceList/E-waste/LittleTV.svg'
import EW from '../../assets/PriceList/E-waste/EW.svg'
import Ewaste from '../../assets/PriceList/E-waste/Ewaste.svg'
import Laptop from '../../assets/PriceList/E-waste/Laptop.svg'
import LittleCooler from '../../assets/PriceList/E-waste/LittleCooler.svg'
import Misc from '../../assets/PriceList/E-waste/Misc.svg'
import Mobile from '../../assets/PriceList/E-waste/Mobile.svg'
import Moniter from '../../assets/PriceList/E-waste/Moniter.svg'
import MusicSystem from '../../assets/PriceList/E-waste/MusicSystem.svg'
import Tablet from '../../assets/PriceList/E-waste/Tablet.svg'
import UPS from '../../assets/PriceList/E-waste/UPS.svg'
import CPU from '../../assets/PriceList/E-waste/CPU.svg'
import BigCooler from '../../assets/PriceList/E-waste/BigCooler.svg'
import InductionStove from '../../assets/PriceList/E-waste/InductionStove.svg'

// Two/Four Wheeler imports
import FourWheeler from '../../assets/PriceList/2Wheeler4Wheeler/FourWheeler.svg'
import TwoWheeler from '../../assets/PriceList/2Wheeler4Wheeler/TwoWheeler.svg'

// Solid Waste
import Bed from '../../assets/PriceList/SolidWaste/Bed.svg'
import BeerBottle from '../../assets/PriceList/SolidWaste/BeerBottle.svg'
import BrokenGlass from '../../assets/PriceList/SolidWaste/BrokenGlass.svg'
import BubbleWrap from '../../assets/PriceList/SolidWaste/BubbleWrap.svg'
import Clothes from '../../assets/PriceList/SolidWaste/Clothes.svg'
import CoconutShell from '../../assets/PriceList/SolidWaste/CoconutShell.svg'
import GlassBottle from '../../assets/PriceList/SolidWaste/GlassBottle.svg'
import Leather from '../../assets/PriceList/SolidWaste/Leather.svg'
import MilkCover from '../../assets/PriceList/SolidWaste/MilkCover.svg'
import Misc2 from '../../assets/PriceList/SolidWaste/Misc.svg'
import MixedWaste from '../../assets/PriceList/SolidWaste/MixedWaste.svg'
import PlasticBag from '../../assets/PriceList/SolidWaste/PlasticBag.svg'
import Sandals from '../../assets/PriceList/SolidWaste/Sandals.svg'
import Suitcase from '../../assets/PriceList/SolidWaste/Suitcase.svg'
import Thermocol from '../../assets/PriceList/SolidWaste/Thermocol.svg'
import TubeLight from '../../assets/PriceList/SolidWaste/TubeLight.svg'

// Sewage imports
import Sewage from '../../assets/PriceList/SewageWaste/Sewage.svg'

// Others imports
import AC from '../../assets/PriceList/Other/AC.svg'
import BigBattery from '../../assets/PriceList/Other/BigBattery.svg'
import Chair from '../../assets/PriceList/Other/Chair.svg'
import CookingOil from '../../assets/PriceList/Other/CookingOil.svg'
import ElectricWire from '../../assets/PriceList/Other/ElectricWire.svg'
import Factory from '../../assets/PriceList/Other/Factory.svg'
import Fridge from '../../assets/PriceList/Other/Fridge.svg'
import Machinery from '../../assets/PriceList/Other/Machinery.svg'
import Oven from '../../assets/PriceList/Other/Oven.svg'
import SmallBattery from '../../assets/PriceList/Other/SmallBattery.svg'
import Tyre from '../../assets/PriceList/Other/Tyre.svg'
import WashingMachine from '../../assets/PriceList/Other/WashingMachine.svg'


const PriceList = () => {

  const paper =
    [
      {
        image: CartoonBox,
        name: 'Cartoon Box',
        price: '6/Kg'
      },
      {
        image: Magazine,
        name: 'Magazine',
        price: '4/Kg'
      },
      {
        image: CardBoard,
        name: 'Mix Cardboard',
        price: '2/Kg'
      },
      {
        image: MixedPapers,
        name: 'Mixed Paper',
        price: '2/Kg'
      },
      {
        image: Newspaper,
        name: 'News Paper',
        price: '13/Kg'
      },
      {
        image: Notebook,
        name: 'Note Book',
        price: '12/Kg'
      },
      {
        image: TextBook,
        name: 'Text Book',
        price: '10/Kg'
      },
    ];

  const plastic =
    [
      {
        image: Fiber,
        name: 'Fiber',
        price: '13/Kg'
      },
      {
        image: HardPlastic,
        name: 'Hard Plastics',
        price: '6/Kg'
      },
      {
        image: PVC,
        name: 'PVC',
        price: '15/Kg'
      },
      {
        image: SoftPlastic,
        name: 'Soft Plastics',
        price: '6/Kg'
      },
      {
        image: WaterTank,
        name: 'Water Tank',
        price: '15/Kg'
      },
    ]

  const metals =
    [
      {
        image: Aluminium,
        name: 'Aluminium Channel',
        price: '95/Kg'
      },
      {
        image: Aluminium,
        name: 'Aluminium',
        price: '90/Kg'
      },
      {
        image: Brass,
        name: 'Brass',
        price: '320/Kg'
      },
      {
        image: Copper,
        name: 'Copper',
        price: '450/Kg'
      },
      {
        image: IronFirst,
        name: 'Iron First',
        price: '19/Kg'
      },
      {
        image: IronSecond,
        name: 'Iron Second',
        price: '14/Kg'
      },
      {
        image: IronSecond,
        name: 'Iron Sheets',
        price: '14/Kg'
      },
      {
        image: Steel,
        name: 'Steel',
        price: '28/Kg'
      },
      {
        image: Tin,
        name: 'Tin',
        price: '3/Kg'
      },
    ]

  const motor =
    [
      {
        image: Engine,
        name: 'Engine',
        price: '22/Kg'
      },
      {
        image: Fan,
        name: 'Fan',
        price: '30/Kg'
      },
      {
        image: Motor,
        name: 'Motor',
        price: '30/Kg'
      },
      {
        image: Pump,
        name: 'Pump',
        price: '30/Kg'
      },
    ]

  const ewaste =
    [
      {
        image: BigCooler,
        name: 'Cooler Big',
        price: '75/Pcs'
      },
      {
        image: LittleCooler,
        name: 'Cooler Small',
        price: '50/Pcs'
      },
      {
        image: CPU,
        name: 'CPU',
        price: '105/Pcs'
      },
      {
        image: Ewaste,
        name: 'E Waste',
        price: '10/Kg'
      },
      {
        image: EW,
        name: 'EW',
        price: '15/Kg'
      },
      {
        image: InductionStove,
        name: 'Induction Stove',
        price: '10/Pcs'
      },
      {
        image: Laptop,
        name: 'Laptop',
        price: '100/Pcs'
      },
      {
        image: BigTV,
        name: 'LED TV Big',
        price: '100/Pcs'
      },
      {
        image: LittleTV,
        name: 'LED TV Small',
        price: '50/Pcs'
      },
      {
        image: Misc,
        name: 'Misc',
        price: '6/Kg'
      },
      {
        image: Mobile,
        name: 'Mobile Phone',
        price: '20/Pcs'
      },
      {
        image: Moniter,
        name: 'Moniter',
        price: '20/Pcs'
      },
      {
        image: MusicSystem,
        name: 'Music System',
        price: '50/Pcs'
      },
      {
        image: Tablet,
        name: 'Tablet',
        price: '20/Pcs'
      },
      {
        image: UPS,
        name: 'UPS',
        price: '30/Kg'
      },
    ]

  const twoOrFourWheeler = [
    {
      image: FourWheeler,
      name: 'Four Wheeler',
      price: '15000/Pcs'
    },
    {
      image: TwoWheeler,
      name: 'Two Wheeler',
      price: '1500/Pcs'
    },
  ]

  const solidwaste = [
    {
      image: Suitcase,
      name: 'Bag/Suitcase',
      price: '27/Pcs'
    },
    {
      image: Bed,
      name: 'Bed King',
      price: '450/Pcs'
    },
    {
      image: Bed,
      name: 'Bed Queen',
      price: '350/Pcs'
    },
    {
      image: Bed,
      name: 'Bed Single',
      price: '250/Kg'
    },
    {
      image: BeerBottle,
      name: 'Beer Bottle',
      price: '10/Kg'
    },
    {
      image: BrokenGlass,
      name: 'Broken Glass',
      price: '40/Pcs'
    },
    {
      image: BubbleWrap,
      name: 'Bubble Wrapper',
      price: '50/Pcs'
    },
    {
      image: Clothes,
      name: 'Clothes',
      price: '25/Pcs'
    },
    {
      image: CoconutShell,
      name: 'Coconut Shell',
      price: '10/Pcs'
    },
    {
      image: GlassBottle,
      name: 'Glass Bottle',
      price: '20/Kg'
    },
    {
      image: Bed,
      name: 'Hostel Bed',
      price: '150/Pcs'
    },
    {
      image: Leather,
      name: 'Leather',
      price: '25/Pcs'
    },
    {
      image: MilkCover,
      name: 'Milk Cover',
      price: '30/Pcs'
    },
    {
      image: Misc2,
      name: 'Misc',
      price: '80/Pcs'
    },
    {
      image: MixedWaste,
      name: 'Mixed Waste',
      price: '95/Kg'
    },
    {
      image: PlasticBag,
      name: 'Platic Cover',
      price: '40/Kg'
    },
    {
      image: Sandals,
      name: 'Shoes/Sandels',
      price: '25/Kg'
    },
    {
      image: Thermocol,
      name: 'Thermocol',
      price: '110/Kg'
    },
    {
      image: TubeLight,
      name: 'Tube/Filament',
      price: '85/Kg'
    },
  ];

  const sewageWaste = [
    {
      image: Sewage,
      name: 'Sewage',
      price: '40000/Kg'
    }
  ]

  const others = [
    {
      image: AC,
      name: 'AC Aluminium',
      price: '32/Kg'
    },
    {
      image: AC,
      name: 'AC Copper',
      price: '55/Kg'
    },
    {
      image: BigBattery,
      name: 'Battery Big',
      price: '70/Kg'
    },
    {
      image: SmallBattery,
      name: 'Battery Small',
      price: '40/Kg'
    },
    {
      image: Chair,
      name: 'Chair',
      price: '25/Pcs'
    },
    {
      image: CookingOil,
      name: 'Cooking Oil',
      price: '25/Kg'
    },
    {
      image: ElectricWire,
      name: 'Electric Wire',
      price: '40/Kg'
    },
    {
      image: Factory,
      name: 'Factory Disposal',
      price: '40/Kg'
    },
    {
      image: Fridge,
      name: 'Fridge',
      price: '300/Pcs'
    },
    {
      image: Machinery,
      name: 'Machinary',
      price: '40/Kg'
    },
    {
      image: Oven,
      name: 'Oven',
      price: '100/Pcs'
    },
    {
      image: Tyre,
      name: 'Tyre',
      price: '1/Kg'
    },
    {
      image: WashingMachine,
      name: 'W M Fiber Board',
      price: '200/Pcs'
    },
    {
      image: WashingMachine,
      name: 'W M Metal Board',
      price: '300/Pcs'
    }
  ]

  const formatName = (name: string) => {
      // if(name.length > 14){
      //   return name.substring(0, 13) + "...";
      // }
      return name;
  }
  
  return (
    <div>
      <div className='my-28'>
        <div className='my-5'>
          <h2 className='text-2xl font-bold mx-5 my-4'>PAPER</h2>
          <div className='grid grid-cols-3 gap-4 px-3'>
            {
              paper.map((item) => (
                <div className='flex flex-col items-center bg-[#f1fdf1] rounded-xl shadow-md shadow-gray-300 px-2 py-1'>
                  <img src={item.image} className='w-20 h-20 my-4' alt="" />
                  <h3 className='font-bold text-center mb-2'>{formatName(item.name)}</h3>
                  <p>&#8377; {item.price}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className='my-5'>
          <h2 className='text-2xl font-bold mx-5 my-4'>PLASTIC</h2>
          <div className='grid grid-cols-3 gap-4 px-3'>
            {
              plastic.map((item) => (
                <div className='flex flex-col items-center bg-[#f1fdf1] rounded-xl shadow-md shadow-gray-300 px-2 py-1'>
                  <img src={item.image} className='w-20 h-20 my-4' alt="" />
                  <h3 className='font-bold text-center mb-2'>{formatName(item.name)}</h3>
                  <p>&#8377; {item.price}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className='my-5'>
          <h2 className='text-2xl font-bold mx-5 my-4'>METALS</h2>
          <div className='grid grid-cols-3 gap-4 px-3'>
            {
              metals.map((item) => (
                <div className='flex flex-col items-center bg-[#f1fdf1] rounded-xl shadow-md shadow-gray-300 px-2 py-1'>
                  <img src={item.image} className='w-20 h-20 my-4' alt="" />
                  <h3 className='font-bold text-center mb-2'>{formatName(item.name)}</h3>
                  <p>&#8377; {item.price}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className='my-5'>
          <h2 className='text-2xl font-bold mx-5 my-4'>MOTORS</h2>
          <div className='grid grid-cols-3 gap-4 px-3'>
            {
              motor.map((item) => (
                <div className='flex flex-col items-center bg-[#f1fdf1] rounded-xl shadow-md shadow-gray-300 px-2 py-1'>
                  <img src={item.image} className='w-20 h-20 my-4' alt="" />
                  <h3 className='font-bold text-center mb-2'>{formatName(item.name)}</h3>
                  <p>&#8377; {item.price}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className='my-5'>
          <h2 className='text-2xl font-bold mx-5 my-4'>E WASTE</h2>
          <div className='grid grid-cols-3 gap-4 px-3'>
            {
              ewaste.map((item) => (
                <div className='flex flex-col items-center bg-[#f1fdf1] rounded-xl shadow-md shadow-gray-300 px-2 py-1'>
                  <img src={item.image} className='w-20 h-20 my-4' alt="" />
                  <h3 className='font-bold text-center mb-2'>{formatName(item.name)}</h3>
                  <p>&#8377; {item.price}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className='my-5'>
          <h2 className='text-2xl font-bold mx-5 my-4'>TWO/FOUR WHEELER SCRAP</h2>
          <div className='grid grid-cols-3 gap-4 px-3'>
            {
              twoOrFourWheeler.map((item) => (
                <div className='flex flex-col items-center bg-[#f1fdf1] rounded-xl shadow-md shadow-gray-300 px-2 py-1'>
                  <img src={item.image} className='w-20 h-20 my-4' alt="" />
                  <h3 className='font-bold text-center mb-2'>{formatName(item.name)}</h3>
                  <p>&#8377; {item.price}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className='my-5'>
          <h2 className='text-2xl font-bold mx-5 my-4'>SOLID WASTE</h2>
          <div className='grid grid-cols-3 gap-4 px-3'>
            {
              solidwaste.map((item) => (
                <div className='flex flex-col items-center bg-[#f6fded] rounded-xl shadow-md shadow-gray-300 px-2 py-1'>
                  <img src={item.image} className='w-20 h-20 my-4' alt="" />
                  <h3 className='font-bold text-center mb-2'>{formatName(item.name)}</h3>
                  <p>&#8377; {item.price}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className='my-5'>
          <h2 className='text-2xl font-bold mx-5 my-4'>SEWAGE WASTE</h2>
          <div className='grid grid-cols-3 gap-4 px-3'>
            {
              sewageWaste.map((item) => (
                <div className='flex flex-col items-center bg-[#f6fded] rounded-xl shadow-md shadow-gray-300 px-2 py-1'>
                  <img src={item.image} className='w-20 h-20 my-4' alt="" />
                  <h3 className='font-bold text-center mb-2'>{formatName(item.name)}</h3>
                  <p>&#8377; {item.price}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className='my-5'>
          <h2 className='text-2xl font-bold mx-5 my-4'>OTHERS</h2>
          <div className='grid grid-cols-3 gap-4 px-3'>
            {
              others.map((item) => (
                <div className='flex flex-col items-center bg-[#f1fdf1] rounded-xl shadow-md shadow-gray-300 px-2 py-1'>
                  <img src={item.image} className='w-20 h-20 my-4' alt="" />
                  <h3 className='font-bold text-center mb-2'>{formatName(item.name)}</h3>
                  <p>&#8377; {item.price}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <h2 className='text-3xl font-bold text-center'>PAY AMOUNT FOR THESE SCRAPS</h2>
    </div>
  )
}

export default PriceList