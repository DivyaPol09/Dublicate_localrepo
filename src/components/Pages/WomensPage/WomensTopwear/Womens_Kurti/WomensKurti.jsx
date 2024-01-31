import React from 'react'
import { Card } from 'flowbite-react';
import { ImStarFull } from "react-icons/im";
import { Button } from 'flowbite-react';
// import Filters from "./components/Filters/Filters";
// import './WomensKurti.css'


const WomensKurti = () => {
  return (
    <>
      
      <div className=" w-[100%] flex">
      <aside className="w-[20%] h-[100vh] bg-gray-100 px-4 sticky top-0">
         {/* <Filters/> */}
      </aside>
      <aside className="w-[80%] bg-lime-100 ">
      <div className='font-serif	'>
     <p className='flex justify-center mt-4'>Women's</p>
     
    <h2 className='flex justify-center text-3xl font-semibold' >Kurti's</h2>
         
    <p className='flex justify-center text-center '>
    <pre className='font-serif'> 
          The readymade kurti finds its place in almost all Indian women’s wardrobes. 
          <br/>You could use innumerable designs and styles with the readymade kurti,you will <br/>
          find the most popular and trending readymade kurti styles at Trendy Trunk.
          </pre>
   </p>

    </div>
    <div className='flex flex-wrap justify-evenly mt-10 '>
    
    <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img1.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
          Women Pink Printed kutri
          </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">1500.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
            <Button outline gradientDuoTone="greenToBlue">
             Addt to cart
            </Button>
            </div>
          
        </div>
      </Card>

      <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img2.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
          Half & Half Asymmetrical Kurti
          </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">1200.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
          <Button outline gradientDuoTone="greenToBlue">
           Addt to cart
          </Button>
          </div>
          
        </div>
      </Card>

      <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img3.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
          Women Pink Masakali kutri </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">1899.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
          <Button outline gradientDuoTone="greenToBlue">
           Addt to cart
          </Button>
          </div>
          
        </div>
      </Card>

      <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img4.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
          Women blue Printed kutri </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className=" flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">1299.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
          <Button outline gradientDuoTone="greenToBlue">
           Addt to cart
          </Button>
          </div>
          
        </div>
      </Card>
      
      <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img5.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
            Reflection Of Art
          </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">1,000.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
          <Button outline gradientDuoTone="greenToBlue">
           Addt to cart
          </Button>
          </div>
          
        </div>
      </Card>

      <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img6.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
                Tie And Knots </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">1299.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
          <Button outline gradientDuoTone="greenToBlue">
           Addt to cart
          </Button>
          </div>
          
        </div>
      </Card>

      <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img4.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-3">
          Women blue Printed kutri </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">1499.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
          <Button outline gradientDuoTone="greenToBlue">
           Addt to cart
          </Button>
          </div>
          
        </div>
      </Card>

      <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img5.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
            Reflection Of Art
          </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">1350.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
          <Button outline gradientDuoTone="greenToBlue">
           Addt to cart
          </Button>
          </div>
          
        </div>
      </Card>

      <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img1.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
          Women Pink Printed kutri
          </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">1200.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
          <Button outline gradientDuoTone="greenToBlue">
           Addt to cart
          </Button>
          </div>
          
        </div>
      </Card>

      <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img2.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
          Half & Half Asymmetrical Kurti
          </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">1399.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
          <Button outline gradientDuoTone="greenToBlue">
           Addt to cart
          </Button>
          </div>
          
        </div>
      </Card>

      <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img3.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
          Women Pink Masakali kutri </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">1250.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
          <Button outline gradientDuoTone="greenToBlue">
           Addt to cart
          </Button>
          </div>
          
        </div>
      </Card>

      <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img4.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
          Women blue Printed kutri </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className=" flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">1,999.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
          <Button outline gradientDuoTone="greenToBlue">
           Addt to cart
          </Button>
          </div>
          
        </div>
      </Card>
      
      <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img5.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
            Reflection Of Art
          </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">2,000.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
          <Button outline gradientDuoTone="greenToBlue">
           Addt to cart
          </Button>
          </div>
          
        </div>
      </Card>

      <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img6.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
                Tie And Knots </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">1050.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
          <Button outline gradientDuoTone="greenToBlue">
           Addt to cart
          </Button>
          </div>
          
        </div>
      </Card>

      <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img4.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-3">
          Women blue Printed kutri </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">1299.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
          <Button outline gradientDuoTone="greenToBlue">
           Addt to cart
          </Button>
          </div>
          
        </div>
      </Card>

      <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img5.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
            Reflection Of Art
          </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">2,000.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
          <Button outline gradientDuoTone="greenToBlue">
           Addt to cart
          </Button>
          </div>
          
        </div>
      </Card>

      

    </div>
      </aside>
    </div>











        {/* <div className=" w-[100%] flex">
      <aside className="w-[20%] h-[100vh] bg-gray-100 px-4 sticky top-0">
        <Filters />
      </aside>
      <aside className="w-[80%] bg-lime-200 ">
      <div className='font-serif	'>
     <p className='flex justify-center mt-4'>Women's</p>
     
    <h2 className='flex justify-center text-3xl font-semibold' >Kurti's</h2>
         
    <p className='flex justify-center text-center '>
    <pre className='font-serif'> 
          The readymade kurti finds its place in almost all Indian women’s wardrobes. 
          <br/>You could use innumerable designs and styles with the readymade kurti,you will <br/>
          find the most popular and trending readymade kurti styles at Trendy Trunk.
          </pre>
   </p>

    </div>
    <div className='flex flex-wrap justify-evenly mt-10 '>
    
    <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img1.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
          Women Pink Printed kutri
          </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">1500.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
            <Button outline gradientDuoTone="greenToBlue">
             Addt to cart
            </Button>
            </div>
          
        </div>
      </Card>

      <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img2.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
          Half & Half Asymmetrical Kurti
          </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">1200.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
          <Button outline gradientDuoTone="greenToBlue">
           Addt to cart
          </Button>
          </div>
          
        </div>
      </Card>

      <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img3.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
          Women Pink Masakali kutri </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">1899.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
          <Button outline gradientDuoTone="greenToBlue">
           Addt to cart
          </Button>
          </div>
          
        </div>
      </Card>

      <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img4.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
          Women blue Printed kutri </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className=" flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">1299.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
          <Button outline gradientDuoTone="greenToBlue">
           Addt to cart
          </Button>
          </div>
          
        </div>
      </Card>
      
      <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img5.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
            Reflection Of Art
          </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">1,000.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
          <Button outline gradientDuoTone="greenToBlue">
           Addt to cart
          </Button>
          </div>
          
        </div>
      </Card>

      <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img6.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
                Tie And Knots </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">1299.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
          <Button outline gradientDuoTone="greenToBlue">
           Addt to cart
          </Button>
          </div>
          
        </div>
      </Card>

      <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img4.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-3">
          Women blue Printed kutri </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">1499.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
          <Button outline gradientDuoTone="greenToBlue">
           Addt to cart
          </Button>
          </div>
          
        </div>
      </Card>

      <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img5.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
            Reflection Of Art
          </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">1350.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
          <Button outline gradientDuoTone="greenToBlue">
           Addt to cart
          </Button>
          </div>
          
        </div>
      </Card>

      <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img1.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
          Women Pink Printed kutri
          </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">1200.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
          <Button outline gradientDuoTone="greenToBlue">
           Addt to cart
          </Button>
          </div>
          
        </div>
      </Card>

      <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img2.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
          Half & Half Asymmetrical Kurti
          </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">1399.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
          <Button outline gradientDuoTone="greenToBlue">
           Addt to cart
          </Button>
          </div>
          
        </div>
      </Card>

      <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img3.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
          Women Pink Masakali kutri </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">1250.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
          <Button outline gradientDuoTone="greenToBlue">
           Addt to cart
          </Button>
          </div>
          
        </div>
      </Card>

      <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img4.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
          Women blue Printed kutri </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className=" flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">1,999.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
          <Button outline gradientDuoTone="greenToBlue">
           Addt to cart
          </Button>
          </div>
          
        </div>
      </Card>
      
      <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img5.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
            Reflection Of Art
          </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">2,000.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
          <Button outline gradientDuoTone="greenToBlue">
           Addt to cart
          </Button>
          </div>
          
        </div>
      </Card>

      <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img6.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
                Tie And Knots </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">1050.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
          <Button outline gradientDuoTone="greenToBlue">
           Addt to cart
          </Button>
          </div>
          
        </div>
      </Card>

      <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img4.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-3">
          Women blue Printed kutri </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">1299.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
          <Button outline gradientDuoTone="greenToBlue">
           Addt to cart
          </Button>
          </div>
          
        </div>
      </Card>

      <Card
        className="max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 mb-20" // Adjusted max width and added padding
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="Images/WomensKurtis/img5.jpg"
      >
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
            Reflection Of Art
          </h5>
          <div className="mb-5 mt-2.5 flex items-center">
          <div className=' text-yellow-300 flex items-center'> <ImStarFull className='mr-1'/> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /> <ImStarFull  className='mr-1'/> <ImStarFull className='mr-1' /></div>
      <span className="ml-2 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white ">2,000.Rs</span>

          <div className="h-1 mb-0 mt-1 flex items-center">
          <Button outline gradientDuoTone="greenToBlue">
           Addt to cart
          </Button>
          </div>
          
        </div>
      </Card>

      

    </div>
      </aside>
    </div>
     */}

  
  </>
  )
}

export default WomensKurti;
