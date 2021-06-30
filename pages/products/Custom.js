import Navbar from "components/Navbars/AuthNavbar";

const { default: Footer } = require("components/Footers/Footer")


const Custom = () => {
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
            <span className="block xl:inline">SMS Marketing CMS</span>
          </h1>
          <p className="mt-3 text-base text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          We expedite our intake process by prioritizing information gathering, leveraging this snapshot to create an Emergency Equity Execution plan, and springing into purposeful action.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                Get started
              </a>
            </div>
          </div>
        </div>
      </main>
       </div>
       </div>
          <div className=" pl-44 mt-10 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <svg id="fi_1935169" enableBackground="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m32 18v-2-2-6h-19c-1.66 0-3 1.34-3 3v5 5c0 1.66 1.34 3 3 3h10v4l6-4h2c1.51 0 2.75-1.11 2.97-2.55v-.01c-1.18-.69-1.97-1.97-1.97-3.44z" fill="#e6e9ed"></path><path d="m58 2h-22c-2.21 0-4 1.79-4 4v2 6 2 2c0 1.47.79 2.75 1.97 3.44.6.36 1.29.56 2.03.56h3l6 4v-4h13c2.21 0 4-1.79 4-4v-4-8c0-2.21-1.79-4-4-4z" fill="#fcd770"></path><path d="m7 62h-5v-10c0-5.52 4.48-10 10-10 0 2.21 1.34 4 3 4s3-1.79 3-4c0-.1 0-.19-.01-.28l.39-.06c3-.43 5.78-1.82 7.92-3.96l8.87-8.87c.53-.53 1.25-.83 2-.83.78 0 1.49.32 2 .83s.83 1.22.83 2c0 .75-.3 1.47-.83 2l-15.34 15.34c-.53.53-.83 1.25-.83 2v11.83z" fill="#fcd770"></path><path d="m47 58h-10.5c-1.38 0-2.5-1.12-2.5-2.5 0-.69.28-1.32.73-1.77s1.08-.73 1.77-.73h10.5l1.63-5.99c.81-2.96 3.5-5.01 6.57-5.01 1.88 0 3.58.76 4.81 1.99s1.99 2.93 1.99 4.81v13.2h-15z" fill="#b4dd7f"></path><g fill="#f0d0b4"><path d="m17.99 41.72c.01.09.01.18.01.28 0 2.21-1.34 4-3 4s-3-1.79-3-4h3 1z"></path><circle cx="15" cy="35" r="7"></circle><circle cx="52" cy="35" r="7"></circle></g><path d="m41 30.829c0-2.112-1.718-3.829-3.828-3.829-1.023 0-1.984.398-2.707 1.122l-8.872 8.872c-1.202 1.202-2.641 2.151-4.206 2.804 1.008-1.34 1.613-2.998 1.613-4.798 0-4.411-3.589-8-8-8s-8 3.589-8 8c0 2.498 1.152 4.73 2.951 6.199-5.088.963-8.951 5.436-8.951 10.801v11h23v-12.829c0-.488.19-.948.535-1.293l15.344-15.343c.723-.723 1.121-1.684 1.121-2.706zm-25 12.171.899-.125c-.257 1.212-1.018 2.125-1.899 2.125-.851 0-1.59-.85-1.873-2zm-7-8c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6zm29.465-2.878-15.344 15.343c-.723.723-1.121 1.684-1.121 2.706v10.829h-14v-12h-2v12h-3v-9c0-4.656 3.554-8.497 8.091-8.954.386 2.256 1.99 3.954 3.909 3.954 2.05 0 3.724-1.944 3.954-4.43 3.031-.526 5.877-1.987 8.053-4.163l8.872-8.872c.341-.34.811-.535 1.293-.535 1.008 0 1.828.82 1.828 1.829 0 .488-.19.947-.535 1.293z"></path><path d="m57.016 41.223c1.817-1.468 2.984-3.711 2.984-6.223 0-4.411-3.589-8-8-8s-8 3.589-8 8c0 3.808 2.677 6.998 6.246 7.8-1.215 1.001-2.143 2.355-2.578 3.95l-1.432 5.25h-9.736c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5h9.5v4h17v-14.196c0-3.676-2.557-6.758-5.984-7.581zm-11.016-6.223c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6zm15 26h-13v-2h.838c1.725 0 3.249-1.099 3.794-2.735l3.316-9.949-1.896-.633-3.316 9.949c-.274.819-1.036 1.368-1.898 1.368h-12.338c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5h11.264l1.834-6.724c.686-2.518 2.989-4.276 5.598-4.276 3.2 0 5.804 2.604 5.804 5.804z"></path><path d="m13 11h2v2h-2z"></path><path d="m17 11h12v2h-12z"></path><path d="m13 15h16v2h-16z"></path><path d="m13 19h16v2h-16z"></path><path d="m57 9h2v2h-2z"></path><path d="m35 9h20v2h-20z"></path><path d="m35 13h24v2h-24z"></path><path d="m35 17h24v2h-24z"></path><path d="m58 1h-22c-2.757 0-5 2.243-5 5v1h-18c-2.206 0-4 1.794-4 4v10c0 2.206 1.794 4 4 4h9v4.869l7.303-4.869h1.697c1.542 0 2.91-.907 3.572-2.233.456.137.929.233 1.428.233h2.697l7.303 4.869v-4.869h12c2.757 0 5-2.243 5-5v-12c0-2.757-2.243-5-5-5zm-27 22h-2.303l-4.697 3.131v-3.131h-11c-1.103 0-2-.897-2-2v-10c0-1.103.897-2 2-2h18v9c0 1.541.715 2.903 1.814 3.821-.318.697-1.019 1.179-1.814 1.179zm30-5c0 1.654-1.346 3-3 3h-14v3.131l-4.697-3.131h-3.303c-1.654 0-3-1.346-3-3v-12c0-1.654 1.346-3 3-3h22c1.654 0 3 1.346 3 3z"></path><path d="m35 5h2v2h-2z"></path><path d="m39 5h2v2h-2z"></path><path d="m43 5h16v2h-16z"></path></svg>
         </div>
          </div>
         <section className= "bg-gray-100 pt-20 px-5 py-8">
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
 <section className= "bg-gray-100  px-5 py-8">
 <div className="mt-50">
      <h1 className="text-4xl mb-10 font-semibold text-gray-600 text-center">Features</h1>
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


<table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
  <tbody>
  <tr className="text-left border-b-2 border-gray-300">

    <th className="px-4 py-3">Plan</th>
    <th className="px-4 py-3">Basic Plan <br/> KES 0-19,999</th>
    <th className="px-4 py-3">Basic Plan <br/> KES 20,000-99,999</th>
    <th className="px-4 py-3">Premium Plan <br/> KES 100,000-399,999</th>
    <th className="px-4 py-3">Max-Plan<br/> KES 400,000+</th>
  </tr>
  
  <tr className="bg-gray-100 border-b border-gray-200">
    
   <td className="px-4 py-3">Cost Per Message</td>
    <td className="px-4 py-3">KES 0.25</td>
    <td className="px-4 py-3">KES 0.20</td>
    <td className="px-4 py-3">KES 0.15</td>
    <td className="px-4 py-3">KES 0.10</td>
  </tr> 
  <tr className="bg-gray-100 border-b border-gray-200"></tr>
 </tbody>
  </table>
  </section>
      <Footer />
        </div>
     );
}
 
export default Custom;