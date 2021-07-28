import React from "react";
import Navbar from "components/Navbars/AuthNavbar";
import PriceTabs from "components/PriceTabs/Index";


const Pricing = () => {
    return ( 
        <div>
           <Navbar />

    <section className="bg-blue-300">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
         <div className="text-center lg:w-2/3 w-full">
         <h1 className=" mt-8 title-font sm:text-5xl text-3xl mb-4 font-medium text-white">Product Prices</h1>
        </div>
       </div>
    </section>
    <section className="bg-gray-200">
        <PriceTabs />
    </section>
    
        </div>
        
        
     );
}
 
export default Pricing;