import React from "react";


const Home = () => {
  return (     
    <section>
    <div className="mt-10 p-48 container mx-auto px-8 bg-yellow-500">
<div className=" flex items-end"> <p className="font-semibold">Developer Resources </p></div>
<div className="flex flex-wrap">
<div className="grid grid-cols-12">
<div className="col-span-6 bg-blue-800 rounded">
  <p className="text-left">Nerd Developers</p>
   <p className="tracking-tighter mt-4"> Airtime 101- sending airtime <br/> </p>
    <p className="tracking-tighter mt-4">In this tutorial, we'll send our first bit of airtime with a simple script. Buckle up!
    </p>
    <div className="mt-12 mr-3">
    <span className=" cursor-pointer tracking-wider text-white bg-blue-500 px-5 py-1 text-sm rounded leading-loose mx-2 font-semibold" title="">
     <i className="fas fa-award" aria-hidden="true"></i> Take tutorial
     </span>
     </div>
</div>
</div>
</div>  
</div>  
</section>
   );
}
 
export default Home;