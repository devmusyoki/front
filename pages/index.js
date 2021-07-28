import React from "react";
import Link from "next/link";

// components
import Footer from "components/Footers/Footer.js";
import Navbar from "components/Navbars/AuthNavbar.js";
import Timeline from "components/Timeline/steps.js";



export default function Home() 
{
  return (
    <div>
      <>
      <Navbar />
      <main>
      <div className="relative top-16 bg-blue-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">
      <div className="relative z-10 pb-8 bg-blue-300 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-blue-300 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>


      {/*<!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->*/}.
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Welcome to Bonga</span>
          </h1>
          <p className="mt-3 text-base text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Welcome to the future
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a href="auth/register" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Register
              </a>
            </div>
            
          </div>
        </div>
      </main>
       </div>
       </div>
          <div className="mx-auto lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <svg id="fi_2258864" enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m136.5 44.519h239c11.046 0 20 8.954 20 20v159c0 11.046-8.954 20-20 20h-53v54l-86.261-54h-99.739c-11.046 0-20-8.954-20-20v-159c0-11.046 8.954-20 20-20z" fill="#ffd396"></path><path d="m375.5 44.519h-119.5v211.37l66.5 41.63v-54h53c11.046 0 20-8.954 20-20v-159c0-11.046-8.954-20-20-20z" fill="#ffb554"></path><path d="m259 213.519h-239c-11.046 0-20 8.954-20 20v159c0 11.046 8.954 20 20 20h53v44.944c0 8.251 9.429 12.952 16.018 7.986l70.243-52.93h99.739c11.046 0 20-8.954 20-20v-159c0-11.046-8.954-20-20-20z" fill="#86beec"></path><path d="m253 134.519h239c11.046 0 20 8.954 20 20v159c0 11.046-8.954 20-20 20h-53v44.944c0 8.251-9.429 12.952-16.018 7.986l-70.243-52.93h-99.739c-11.046 0-20-8.954-20-20v-159c0-11.046 8.954-20 20-20z" fill="#00ddc1"></path><path d="m259 213.519h-119.5v213.89l19.761-14.89h99.739c11.046 0 20-8.954 20-20v-159c0-11.046-8.954-20-20-20z" fill="#2681ff"></path><path d="m492 134.519h-119.5v213.89l50.482 38.04c6.589 4.965 16.018.264 16.018-7.986v-44.943h53c11.046 0 20-8.954 20-20v-159c0-11.047-8.954-20.001-20-20.001z" fill="#00b4bc"></path></svg>
         </div>
          </div>
        
        <section className="md:mb-12  bg-gray-100 mt-10 py-16">
            <div className="container mx-auto px-4 lg:flex items-center lg:space-x-12">
              <div className="inset-x-0 top-0 text-left mb-0 lg:mb-96 xl:mb-96 2xl:mb-96 md:mb-0 sm:mb-0 ">
              <h1 className="mb-20 font-sans text-black"> <p className="mb-1 font-semibold text-black">PRODUCTS</p><br/>We provide a variety of communication and payments AP products that are everything you need to build high impact mobile  engagement solutions. Our platform allows to you work on building superior customer engagement experiences without the complexity that comes from working directly  with mobile operators</h1>
              
            </div>
            
    <div className="grid lg:grid-cols-3 mt-6 lg:mt-0 lg:gap-8">
    <Link href='products/Bulksms'>
      <div className="cursor-pointer group flex flex-col min-w-0 break-words bg-white mb-8 shadow-lg rounded-lg hover:bg-gray-500">
        <div className="p-6 flex-auto">
          <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-blue-400">
            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          </div>
          <h6 className="text-xl font-semibold group-hover:text-white"> Bulk SMS</h6>
          <p className="mt-2 mb-4 text-gray-600 group-hover:text-gray-100">We collect tailored quantitative and qualitative data on diversity, health equity, and inclusion dimensions. This process is leveraged to help us identify equity-rooted pain points in your organization, to create an equity enrichment plan in the next step.</p>
        </div>
      </div>
       </Link>

       <Link href='/products/Twowaysms'>
      <div className="cursor-pointer group flex flex-col min-w-0 break-words bg-white mb-8 shadow-lg rounded-lg hover:bg-gray-500">
        <div className="p-6 flex-auto">
          <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-blue-400">
            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          </div>
          <h6 className="text-xl font-semibold group-hover:text-white">2-way SMS</h6>
          <p className="mt-2 mb-4 text-gray-600 group-hover:text-gray-100">We provide you with a detailed plan of how to execute equity in your organization, including: executive coaching, workshops leadership training, innovative problem solving, equity-driven truth-telling and mores</p>
        </div>
      </div>
      </Link>
      
      <Link href='/products/Ussd'>
      <div className="cursor-pointer group flex flex-col min-w-0 break-words bg-white mb-8 shadow-lg rounded-lg hover:bg-gray-500">
        <div className="p-6 flex-auto">
          <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-blue-400">
            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          </div>
          <h6 className="text-xl font-semibold group-hover:text-white">USSD</h6>
          <p className="mt-2 mb-4 text-gray-600 group-hover:text-gray-100">ShortCodes are special Five digit numbers, significantly shorter and easy to remember numbers unlike the normal telephone numbers eg. 22138, 21441 that are used to facilitated communication on mobile phones. Shortcodes can be configured in a number of ways depending on your desired interaction and the need of use.</p>
        </div>
      </div>
      </Link>
    
     
      <Link href='/products/CMS'>
      <div className="cursor-pointer group flex flex-col min-w-0 break-words bg-white mb-8 shadow-lg rounded-lg hover:bg-gray-500">
        <div className="p-6 flex-auto">
          <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-blue-400">
            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          </div>
          <h6 className="text-xl font-semibold group-hover:text-white">SMS marketing CMS</h6>
          <p className="mt-2 mb-4 text-gray-600 group-hover:text-gray-100">In times of public health crises, we are equipped to lead with a balance of urgency and a laser focus on health equity. We expedite our intake process by prioritizing information gathering, leveraging this snapshot to create an Emergency Equity Execution plan, and springing into purposeful action.</p>

        </div>
      </div>
      </Link>
      <Link href='/products/Custom'>
      <div className="cursor-pointer group flex flex-col min-w-0 break-words bg-white mb-8 shadow-lg rounded-lg hover:bg-gray-500">
        <div className="p-6 flex-auto">
          <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-blue-400">
            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          </div>
          <h6 className="text-xl font-semibold group-hover:text-white">Custom SMS Solutions</h6>
          <p className="mt-2 mb-4 text-gray-600 group-hover:text-gray-100">A custom CMS is a proprietary solution that’s created exclusively for one company or use case. With a custom CMS, your business (or the service firm that built it) has control over the platform’s functionality, interface and updates.</p>
        </div>
      </div>
      </Link>
    </div>
  </div>
</section>
        <Timeline />    
      </main>
      <Footer />
    </>
     </div>
  )
}
