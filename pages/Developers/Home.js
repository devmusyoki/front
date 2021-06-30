import React from "react";
import Link from "next/link";


const Devhome = () => {
    return ( 
<div>
  <section className=" text-gray-200 bg-blue-300">
    <div className="max-w-6xl mx-auto px-5 py-24 ">
        
      <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 className="text-black title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl"> DEVELOPERS </h1>
        <p className=" text-black lg:w-1/2 w-full leading-relaxed text-base">
        Explore our Tutorials, Code Samples, API Reference, SDKs and other resources to help you start building with Bonga
        </p>
      </div>
      <input className="w-full text-black h-16 mt-3 rounded mb-8 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg" type="search" placeholder="Search..." />

      <div className="mt-4 flex flex-wrap -m-4">
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-blue-600 p-6 rounded-lg">
            
            <h2 className="text-lg text-black font-medium title-font mb-2">BULK SMS </h2>
            <p className=" text-black leading-relaxed text-base">We collect tailored quantitative and qualitative data on diversity, health equity, and inclusion dimensions</p>
            <div className="text-center mt-2 leading-none flex justify-between w-full">
            <Link href= "/Developers/SMS/BulkSmsIntegration" >
            <button
                  className="bg-indigo-300 text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                   API reference
                </button>
                </Link>
                <Link href= "/Developers/Learn/message101" >
                <button
                  className="bg-indigo-300 text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                   Tutorial
                </button>
                </Link>
            </div>
          </div>
        </div>


        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-white p-6 rounded-lg">
          <h2 className="text-lg text-black font-medium title-font mb-2">Two-way SMS</h2>
            <p className="leading-relaxed text-black text-base">We provide you with a detailed plan of how to execute equity in your organization.</p>
            <div className="text-center mt-2 leading-none flex justify-between w-full">
            <Link href= "/Developers/SMS/2WaySmsIntegration" >
            <button
                  className="bg-indigo-300 text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                   API reference
                </button>
                </Link>

                 <Link href= "/Developers/Learn" >
                <button
                  className="bg-indigo-300 text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                   Tutorial
                </button>
                </Link>
            </div>
          </div>
        </div>

        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-black p-6 rounded-lg">
          <h2 className="text-lg text-black font-medium title-font mb-2">USSD</h2>
            <p className="text-black leading-relaxed text-base">We provide you with a detailed plan of how to execute equity in your organization.</p>
            <div className="text-center mt-2 leading-none flex justify-between w-full">

              <Link href= "/Developers/SMS/ShortCodes" >
               <button 
                  className="bg-indigo-300 text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                   API reference
                </button>
                </Link>

                <Link href= "/Developers/Learn" >
                <button
                  className="bg-indigo-300 text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                   Tutorial
                </button>
                </Link>
            </div>
          </div>
        </div>

        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-red-500 p-6 rounded-lg">
          <h2 className="text-lg text-black font-medium title-font mb-2">SMS MARKETING CMS</h2>
            <p className=" text-black leading-relaxed text-base">We provide you with a detailed plan of how to execute equity in your organization.</p>
            <div className=" text-center mt-2 leading-none flex justify-between w-full">
              <Link href= "/Developers/SMS/MarketingCMS" >
                <button 
                  className="bg-indigo-300 text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                   API reference
                </button>
                </Link>
                <button href= "/Developers/Learn/message101"
                  className="bg-indigo-300 text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                   Tutorial
                </button>
            </div>
          </div>
        </div>


        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-yellow-600 p-6 rounded-lg">
            <div>
                
            </div>
            <h2 className="text-lg text-black font-medium title-font mb-2">Custom SMS Solutions</h2>
            <p className="text-black leading-relaxed text-base">We provide you with a detailed plan of how to execute equity in your organization.</p>
            <div className="text-center mt-2 leading-none flex justify-between w-full">

              <Link href= "/Developers/SMS/CustomSolutions" >
              <button 
                  className="bg-indigo-300 text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                   API reference
                </button>
                </Link>
                <Link href= "/Developers/Learn" >
                <button href= "/#"
                  className="bg-indigo-300 text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                   Tutorial
                </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="bg-blue-300 text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-600 border-opacity-50 p-8 sm:flex-row flex-col">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
          <svg className="w-6 h-6 text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">SHORTCODES</h2>
            <p className="leading-relaxed text-base"> SMS short codes allow for improved mass text service. While long codes are limited to sending or receiving 60 messages per minute, short codes allow the user to send or receive about 2400 per minute.</p>
            <a className="cursor-pointer mt-3 text-indigo-700 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-600 border-opacity-50 p-8 sm:flex-row flex-col">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
          <svg className="w-6 h-6 text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">BULK SMS</h2>
            <p className="leading-relaxed text-base"> Mass texting services are popular for organizations and businesses looking to reach many individuals at once. Organizations use bulk messaging for advertising, entertainment, and even volunteer and employee management.</p>
            <a className="mt-3 cursor-pointer text-indigo-700 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  <section className="bg-blue-300">
  <div className="container bg-blue-300 px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-10">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Resources</h1>
    </div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 pl-16 border-gray-200 px-4 py-6 rounded-lg">
        <img src="https://img.icons8.com/pastel-glyph/144/000000/smartphone-tablet.png"/>
          <h2 className="title-font font-medium text-xl text-gray-900">Simulator</h2>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 pl-16 border-gray-200 px-4 py-6 rounded-lg">
        <img src="https://img.icons8.com/carbon-copy/144/000000/online-support--v1.png"/>
          <h2 className="title-font font-medium text-xl text-gray-900">Customer Support</h2>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 pl-16 border-gray-200 px-4 py-6 rounded-lg">
        <img src="https://img.icons8.com/wired/144/000000/slack.png"/>
          <h2 className="title-font font-medium text-xl text-gray-900">Slack</h2>
          
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 pl-16 border-gray-200 px-4 py-6 rounded-lg">
        <img src="https://img.icons8.com/fluent/144/000000/github.png"/>
        <h2 className="title-font font-medium text-xl text-gray-900">Github</h2>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
     );
}
 
export default Devhome;