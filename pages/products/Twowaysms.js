import Navbar from "components/Navbars/AuthNavbar";

const { default: Footer } = require("components/Footers/Footer")

const TwoWay = () => {
  return ( 
      <div>
        < Navbar />
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


      <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <img className="h-8 w-auto" src="" alt="false"/>
            </div>
            <div className="-mr-2">
              <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Close main menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Products</a>

            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About</a>

            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Developer</a>

            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Pricing</a>

            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Blog</a>
          </div>

          
          <a href="#" className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
            Log in
          </a>
        </div>
      </div>

      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">TwoWay SMS</span>
          </h1>
          <p className="mt-3 text-base text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Build a solution that provides two-way communication service using short codes. Whether you are looking to share information with you users or collect feedback, two way SMS is a great way to enrich customer engagement
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                Start Building
              </a>
            </div>
          </div>
        </div>
      </main>
       </div>
       </div>
          <div className=" pl-48 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
         </div>
          </div>
          <section className="bg-gray-100 mt-11 py-10">
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
        <h6 className="text-xl font-semibold group-hover:text-white">Standard Rated short code</h6>
        <p className="mt-2 mb-4 text-gray-600 group-hover:text-gray-100">With this type of short code, an SMS is charged at the normal rate to send a message, but is free to receive a message for both senders and receivers</p>
      </div>
    </div>
    <div className="cursor-pointer group flex flex-col min-w-0 break-words bg-white mb-8 shadow-lg rounded-lg hover:bg-gray-500">
      <div className="p-6 flex-auto">
      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
        <i className="fas fa-sms"></i>
        </div>
        <h6 className="text-xl font-semibold group-hover:text-white">Toll Free short code</h6>
        <p className="mt-2 mb-4 text-gray-600 group-hover:text-gray-100">An end user interacts with this short code free of charge. The owner of this code bears the cost of all SMS that are sent and received on this code.</p>
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
    <h6 className="text-xl font-semibold">Conduct a Survey</h6>
    <p className="mt-2 mb-4">Using mobile as a delivery tool for surveys ensures a wider, more targeted reach to your customers who provide valuable feedback. Short codes provide a great platform to collect live customer insights without hustle</p>
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
    <h6 className="text-xl font-semibold">SMS Marketing</h6>
    <p className="mt-2 mb-4">Current and potential users can use short codes to enquire and get information about a new product or feature that you are advertising. This will help you forecast demand for you product or raise awareness</p>
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
    <h6 className="text-xl font-semibold">Customer Support</h6>
    <p className="mt-2 mb-4">Giving your users multiple channels to get support enhances their experience. Using keywords and short codes, your users can reach out to you with questions and you can get back to them with the relevant help</p>
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
  

  </div>
  <div className="relative inline-flex mb-12">
<svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fillRule="nonzero"/></svg>
<select className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
  <option>Choose a country</option>
  <option>Benin</option>
  <option>Botswana</option>
  <option>Cameroon</option>
  <option>Côte d'Ivoire</option>
  <option>Eswatini</option>
  <option>Ethiopia</option>
  <option>Ghana</option>
  <option>Kenya</option>
  <option>Lesotho</option>
  <option>Malawi</option>
  <option>Mali</option>
  <option>Namibia</option>
  <option>Nigeria</option>
  <option>Rwanda</option>
  <option>Senegal</option>
  <option>South Africa</option>
  <option>Tanzania</option>
  <option>Uganda</option>
  <option>Zambia</option>
  <option>Zimbabwe</option>
</select>
</div>

<div className="mt-50 mb-10">
    <h1 className="text-4xl ml-2 mt-12 mb-20 font-semibold text-gray-600 text-left">Dedicated Short Code</h1>
<p className="text-lg text-center font-bold m-5"></p>
<table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
  <tbody>
<tr className="text-left border-b-2 border-gray-300">

  <th className="px-4 py-3">Telco</th>
  <th className="px-4 py-3">Deposit</th>
  <th className="px-4 py-3">Set Up</th>
  <th className="px-4 py-3">Monthly Maintenance per telco</th>
</tr>

<tr className="bg-gray-100 border-b border-gray-200">
  
 <td className="px-4 py-3">Safaricom, Airtel, Equitel and Telkom</td>
  <td className="px-4 py-3">KES 10,000</td>
  <td className="px-4 py-3">Free</td>
  <td className="px-4 py-3">KES 15,000</td>
  <td className="px-4 py-3"></td>
</tr> 
</tbody> 
</table>
<div className= "mt-12 ml-6">
  <p>*prices are 16% VAT exclusive <br/>
Raising a Toll Free Short Code attracts an extra charge of KES 5,000 (VAT exclusive)</p>
</div>
<div className="mt-50 mb-10">
    <h1 className="text-4xl ml-2 mt-12 mb-20 font-semibold text-gray-600 text-left">Shared Short Code(keyword)</h1>

</div>
<table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
  <tbody>
<tr className="text-left border-b-2 border-gray-300">
  <th className="px-4 py-3">Set-up</th>
  <th className="px-4 py-3">Monthly Maintenance</th>

</tr>

<tr className="bg-gray-100 border-b border-gray-200">
  <td className="px-4 py-3">KES 5,000 + 16% VAT</td>
  <td className="px-4 py-3">KES 2,000 + 16% VAT</td>
</tr> 
</tbody>
</table>
</div>
</section>
      
  
       < Footer />
      </div>
   );
}

export default TwoWay;