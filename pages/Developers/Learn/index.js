import React from "react";
import Layout from "components/Layout";
import Link from "next/link";

const Tutorial = () => {
    return (
        <Layout>
          
        <Link href='/Developers/Learn/message101'>      
       <section className="text-gray-600 body-font">
         
         Learn how to build our API's
  <div className="container cursor-pointer mb-20 px-5 py-18 mx-auto mt-12">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">  
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Sending an SMS</h1>
          <p className="leading-relaxed mb-3">In this tutorial we learn the basics of sending an sms</p>
          <a className="text-indigo-500 inline-flex items-center">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
          <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx={12} cy={12} r={3} />
              </svg>72
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
               </svg>1 hr
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      </Link>


            
        </Layout>

    );
};

export default Tutorial;
