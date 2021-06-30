import React from "react";
import Link from "next/link";
import Navbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/Footer";
 
 
 
const SMS = () => {
    return ( 
      <div>
         <div className="relative pt-96 pb-32 flex min-h-screen-75 bg-blue-400">
              <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
               
              >
                <span
                  id="blackOverlay"
                  className="w-full h-full absolute opacity-40"
                ></span>
                  
                  
             <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 800 800'><rect fill='#2f1cff' width='800' height='800'/><g ><circle fill='#2f1cff' cx='400' cy='400' r='600'/><circle fill='#bc00a7' cx='400' cy='400' r='500'/><circle fill='#cd005b' cx='400' cy='400' r='400'/><circle fill='#ba0027' cx='400' cy='400' r='300'/><circle fill='#98420a' cx='400' cy='400' r='200'/><circle fill='#77591b' cx='400' cy='400' r='100'/></g></svg>
              </div>
              <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                    <div className="pr-0 mt-12 items-start">
                      <h1 className="text-white font-semibold text-5xl">
                        Create with technology.
                      </h1>
                      <p className="mt-4 text-lg text-gray-300">
                        Lorem Ipsum
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
                style={{ transform: "translateZ(0)" }}
              >
              </div>
            </div>
        
        <section className="bg-gray-100 py-10">
  <div className="container mx-auto px-4 lg:flex items-center lg:space-x-12">
    <div className="mt-50">
      <h1 className="text-4xl font-semibold text-gray-600">Products</h1>
      <p className="mt-4 text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p>
    </div>
    <div className="grid lg:grid-cols-3 mt-12 lg:mt-0 lg:gap-8">
      <div className="cursor-pointer group flex flex-col min-w-0 break-words bg-white mb-8 shadow-lg rounded-lg hover:bg-gray-500">
        <div className="p-6 flex-auto">
          <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-blue-400">
            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          </div>
          <h6 className="text-xl font-semibold group-hover:text-white">Bulk SMS</h6>
          <p className="mt-2 mb-4 text-gray-600 group-hover:text-gray-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
      </div>

      <div className="cursor-pointer group flex flex-col min-w-0 break-words bg-white mb-8 shadow-lg rounded-lg hover:bg-gray-500">
        <div className="p-6 flex-auto">
          <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-blue-400">
            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          </div>
          <h6 className="text-xl font-semibold group-hover:text-white">Two-Way SMS</h6>
          <p className="mt-2 mb-4 text-gray-600 group-hover:text-gray-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
      </div>

      <div className="cursor-pointer group flex flex-col min-w-0 break-words bg-white mb-8 shadow-lg rounded-lg hover:bg-gray-500">
        <div className="p-6 flex-auto">
          <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-blue-400">
            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          </div>
          <h6 className="text-xl font-semibold group-hover:text-white">Premium SMS</h6>
          <p className="mt-2 mb-4 text-gray-600 group-hover:text-gray-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
      </div>
    </div>
  </div>
</section>
     

 <section className= "bg-gray-100  px-5 py-8">
 <div className="mt-50">
      <h1 className="text-4xl mb-10 font-semibold text-gray-600 text-center">Use Cases</h1>
      </div>
   <div className="grid lg:grid-cols-3 mt-12 lg:mt-0 lg:gap-8">
      <div className="cursor-pointer group flex flex-col min-w-0 break-words bg-white mb-8 shadow-lg rounded-lg">
        <div className="p-6 flex-auto">
          <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
         </svg>
          </div>
          <h6 className="text-xl font-semibold ">Notification Services</h6>
          <p className="mt-2 mb-4 text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
      </div>

      <div className="cursor-pointer group flex flex-col min-w-0 break-words bg-white mb-8 shadow-lg rounded-lg">
        <div className="p-6 flex-auto">
          <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
         </svg>
          </div>
          <h6 className="text-xl font-semibold">Two factor authentication</h6>
          <p className="mt-2 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
      </div>

      <div className="cursor-pointer group flex flex-col min-w-0 break-words bg-white mb-8 shadow-lg rounded-lg">
        <div className="p-6 flex-auto">
          <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
             <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          </div>
          <h6 className="text-xl font-semibold">Collect Feedback </h6>
          <p className="mt-2 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
      </div>
    </div>

 </section>
 <section className= "bg-gray-100 py-10">
 <div className="grid lg:grid-cols-3 mt-12 lg:mt-0 lg:gap-8">
      <div className="cursor-pointer group flex flex-col min-w-0 break-words bg-white mb-8 shadow-lg rounded-lg">
        <div className="p-6 flex-auto">
          <h6 className="text-xl font-semibold ">Delivery Reports</h6>
          <p className="mt-2 mb-4 text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
      </div>

      <div className="cursor-pointer group flex flex-col min-w-0 break-words bg-white mb-8 shadow-lg rounded-lg">
        <div className="p-6 flex-auto">
          <h6 className="text-xl font-semibold">Message Queuing</h6>
          <p className="mt-2 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
      </div>

      <div className="cursor-pointer group flex flex-col min-w-0 break-words bg-white mb-8 shadow-lg rounded-lg">
        <div className="p-6 flex-auto">
          <h6 className="text-xl font-semibold">Real time Analytics</h6>
          <p className="mt-2 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
      </div>
    </div>


 </section>
 
 <section className= "bg-gray-100 py-10">
  <div className="container mx-auto ml-12 px-24">
  <div className="flex flex-wrap">
  <div className="grid grid-cols-10">
    
    <div className="col-span-5 bg-gray-500 rounded">
      <p className="text-left">Nerd Developers</p>
       <p className="tracking-tighter mt-4"> Airtime 101- sending airtime <br/> </p>
        <p className="tracking-tighter mt-4">In this tutorial, we'll send our first bit of airtime with a simple script. Buckle up!
        </p>
        <div className="mt-12 mr-3">
        <span className=" cursor-pointer tracking-wider text-white bg-blue-500 px-5 py-1 text-sm rounded leading-loose mx-2 font-semibold" title="">
          Take tutorial
         </span>
         </div>
    </div>
    </div>
  </div>  
  </div>  
  </section>
        < Footer/>
      </div>
     );
}
 
export default SMS;