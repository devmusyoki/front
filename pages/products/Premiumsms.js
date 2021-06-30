const { default: Footer } = require("components/Footers/Footer")
const { default: Navbar } = require("components/Navbars/IndexNavbar")

const premiumsms = () => {
    return ( 
       <div>
         < Navbar />
        <div className="relative pt-96 pb-32 flex min-h-screen-75 bg-green-400">
              <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
               
              >
                <span
                  id="blackOverlay"
                  className="w-full h-full absolute opacity-40"
                ></span>
                    
<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 800 380'><rect fill='#330000' width='800' height='400'/><defs><radialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'><stop offset='0' stop-color='#D18'/><stop offset='1' stop-color='#330000'/></radialGradient><linearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'><stop offset='0' stop-color='#FA3' stop-opacity='0'/><stop offset='1' stop-color='#FA3' stop-opacity='0.5'/></linearGradient></defs><rect fill='url(#a)' width='800' height='400'/><g fill-opacity='0.4'><circle fill='url(#b)' cx='267.5' cy='61' r='300'/><circle fill='url(#b)' cx='532.5' cy='61' r='300'/><circle fill='url(#b)' cx='400' cy='30' r='300'/></g></svg>        
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
      <div className="mt-50">
      <h1 className="text-4xl mb-10 font-semibold text-gray-600 text-center">Product Overview</h1>
      <p className="mt-4 mb-10 ml-16 mr-10 w-15  text-gray-600 text-center justify-items-center ">Our Bulk SMS gateways ensure that you can reach your customers instantly with a quick and simple <br/>integration. This means that you can send relevant, targeted messages to a large group with only one API <br/>request. Brand your messages with your company or service name by using a Sender ID. This is an <br/> alphanumeric code that gives your users confidence on the source of the message while at the same <br/>time promoting brand visibility.</p>
    </div>
    <div className="container ml-44 mx-auto px-40 lg:flex items-center lg:space-x-12">
  <div className="grid lg:grid-cols-3 mt-12 lg:mt-0 lg:gap-8">
    <div className="cursor-pointer group flex flex-col min-w-0 break-words bg-white mb-8 shadow-lg rounded-lg hover:bg-gray-500">
      <div className="p-6 flex-auto">
      <div className="relative text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
        <i className="fas fa-sms"></i>
        </div>
        <h6 className="text-xl font-semibold group-hover:text-white">Pay-As-You-Go</h6>
        <p className="mt-2 mb-4 text-gray-600 group-hover:text-gray-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </div>
    </div>
    <div className="cursor-pointer group flex flex-col min-w-0 break-words bg-white mb-8 shadow-lg rounded-lg hover:bg-gray-500">
      <div className="p-6 flex-auto">
      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
        <i className="fas fa-sms"></i>
        </div>
        <h6 className="text-xl font-semibold group-hover:text-white">Delivery Reports</h6>
        <p className="mt-2 mb-4 text-gray-600 group-hover:text-gray-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </div>
    </div>
  </div>
</div>
  </section>


<section className= "bg-gray-100 px-10 py-10">
<div className="mt-0">
    <h1 className="text-4xl mb-10 font-semibold text-gray-600 text-center">USECASES</h1>
    </div>
   <div className="grid lg:grid-cols-3 mt-12 lg:mt-0 lg:gap-8">
   <div className="relative cursor-pointer group flex flex-col min-w-0 break-words bg-white mb-8 shadow-lg rounded-lg">
  <div className="flex p-6 flex-auto">
    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mt-12 mb-5 shadow-lg rounded-full bg-blue-400">
      <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="px-6">
      <h6 className="text-xl font-semibold">Two factor authentication</h6>
      <p className="mt-2 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
    </div>
  </div>
</div>

      <div className="relative cursor-pointer group flex flex-col min-w-0 break-words bg-white mb-8 shadow-lg rounded-lg">
  <div className="flex p-6 flex-auto">
    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mt-12 mb-5 shadow-lg rounded-full bg-blue-400">
      <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="px-6">
      <h6 className="text-xl font-semibold">Two factor authentication</h6>
      <p className="mt-2 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
    </div>
  </div>
</div>

<div className="relative cursor-pointer group flex flex-col min-w-0 break-words bg-white mb-8 shadow-lg rounded-lg">
  <div className="flex p-6 flex-auto">
    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mt-12 mb-5 shadow-lg rounded-full bg-blue-400">
      <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="px-6">
      <h6 className="text-xl font-semibold">Two factor authentication</h6>
      <p className="mt-2 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
    </div>
  </div>
</div>
    </div>

 </section>
 <section className= "bg-gray-100 py-10">
 <div className="mt-0">
    <h1 className="text-4xl mb-10 font-semibold text-gray-600 text-center">All you need to build</h1>
    </div>
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
  <section className="bg-gray-100 py-10">
      <div className="mt-50">
      <h1 className="text-4xl mb-10 font-semibold text-gray-600 text-center">Pricing</h1>
      <h1 className="text-center font-semibold">(Kenya)</h1>
      <p className="mt-4 ml-8 text-gray-600"></p>
    </div>
    <div className="relative inline-flex mb-12">
 
</div>

<div className="mt-50 mb-10">
      <h1 className="text-4xl ml-2 mt-12 mb-20 font-semibold text-gray-600 text-left">Revenue Share</h1>
<p className="text-lg text-center font-bold m-5"></p>
<table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
  <tbody>
  <tr className="text-left border-b-2 border-gray-300">

    <th className="px-4 py-3"></th>
    <th className="px-4 py-3">less than<br/> 100000Sms's</th>
    <th className="px-4 py-3">100,000 - 1,000,000 SMS's</th>
    <th className="px-4 py-3">More than <br/>  1,000,000 SMS's</th>
  </tr>
  
  <tr className="bg-gray-100 border-b border-gray-200">
    
   <td className="px-4 py-3">Government of Kenya</td>
    <td className="px-4 py-3"></td>
    <td className="px-4 py-3"></td>
    <td className="px-4 py-3"></td>
    <td className="px-4 py-3"></td>
  </tr> 
   
  <tr className="bg-gray-100 border-b border-gray-200">
    
    <td className="px-4 py-3"></td>
     <td className="px-4 py-3"></td>
     <td className="px-4 py-3">Amount is regarded as 100% after the above deductions</td>
     <td className="px-4 py-3"></td>
     <td className="px-4 py-3"></td>
   </tr> 

  <tr className="bg-gray-100 border-b border-gray-200">

  <td className="px-4 py-3">Safaricom</td>
    <td className="px-4 py-3"></td>
    <td className="px-4 py-3"></td>
    <td className="px-4 py-3"></td>
    <td className="px-4 py-3"></td>
  </tr> 

  <tr className="bg-gray-100 border-b border-gray-200">
    
    <td className="px-4 py-3"></td>
     <td className="px-4 py-3"></td>
     <td className="px-4 py-3">Amount is regarded as 100% after the above deductions</td>
     <td className="px-4 py-3"></td>
     <td className="px-4 py-3"></td>
   </tr>

  <tr className="bg-gray-100 border-b border-gray-200">
   <td className="px-4 py-3">Short Code Owner</td>
    <td className="px-4 py-3"></td>
    <td className="px-4 py-3"></td>
    <td className="px-4 py-3"></td>
    <td className="px-4 py-3"></td>
  </tr> 

  <tr className="bg-gray-100 border-b border-gray-200">
   <td className="px-4 py-3">Bonga</td>
    <td className="px-4 py-3"></td>
    <td className="px-4 py-3"></td>
    <td className="px-4 py-3"></td>
    <td className="px-4 py-3"></td>
  </tr>
</tbody>
</table>
</div>
  </section>
<Footer />
       </div>
     );
}
 
export default premiumsms;