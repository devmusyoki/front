const { default: Footer } = require("components/Footers/Footer")

const Airtime = () => {
    return ( 
        <div>
           <div className="relative pt-96 pb-32 flex min-h-screen-75 bg-blue-200">
              <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
               
              >
                <span
                  id="blackOverlay"
                  className="w-full h-full absolute opacity-40"
                ></span>
                    

                    
             <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 800 800'><rect fill='#54a1ff' width='800' height='800'/><g ><circle fill='#54a1ff' cx='400' cy='400' r='600'/><circle fill='#448fe3' cx='400' cy='400' r='500'/><circle fill='#367ec7' cx='400' cy='400' r='400'/><circle fill='#296dab' cx='400' cy='400' r='300'/><circle fill='#1e5c91' cx='400' cy='400' r='200'/><circle fill='#154c77' cx='400' cy='400' r='100'/></g></svg>       
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
  <div className="container mx-auto px-4 lg:flex items-center lg:space-x-12">
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
          <h6 className="text-xl font-semibold group-hover:text-white">Non-Expiry</h6>
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
      <h1 className="text-4xl ml-2 mt-12 mb-20 font-semibold text-gray-600 text-left">Bulk SMS</h1>
<p className="text-lg text-center font-bold m-5"></p>
<table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
  <tbody>
  <tr className="text-left border-b-2 border-gray-300">

    <th className="px-4 py-3"></th>
    <th className="px-4 py-3">Basic Plan <br/> KES 0-19,999</th>
    <th className="px-4 py-3">Basic Plan <br/> KES 20,000-99,999</th>
    <th className="px-4 py-3">Premium Plan <br/> KES 100,000-399,999</th>
    <th className="px-4 py-3">Max-Plan<br/> KES 400,000+</th>
  </tr>
  
  <tr className="bg-gray-100 border-b border-gray-200">
    
   <td className="px-4 py-3">All Telco's</td>
    <td className="px-4 py-3">4%</td>
    <td className="px-4 py-3">4%</td>
    <td className="px-4 py-3">5%</td>
    <td className="px-4 py-3">6%</td>
  </tr> 
  <tr className="bg-gray-100 border-b border-gray-200"></tr>
  </tbody>
  </table>
  </div>
  </section>



    </section>
    <Footer />
        </div>
     );
}
 
export default Airtime;