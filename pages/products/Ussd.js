import Footer from 'components/Footers/Footer'
import Navbar from 'components/Navbars/AuthNavbar'
import ReactPlayer from 'react-player'



const ussd = () => {
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

      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">USSD</span>
          </h1>
          <p className="mt-3 text-base text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Build real time interactive experiences for your users that is accessible on both feature and smartphones. Easily integrate our simple and reliable USSD API and start delivering scalable solutions to your users
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
          <svg id="fi_4365881" enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m310.569 59.557h-223.056c-30.151 0-54.593 24.443-54.593 54.594v335.754c0 30.151 24.442 54.594 54.594 54.594h223.056c30.151 0 54.594-24.442 54.594-54.594v-335.754c-.001-30.151-24.444-54.594-54.595-54.594z" fill="#4a80aa"></path><path d="m118.47 504.5h-30.958c-30.152 0-54.593-24.44-54.593-54.593v-335.756c0-30.152 24.441-54.593 54.593-54.593h30.958c-30.143 0-54.593 24.441-54.593 54.593v335.756c.001 30.153 24.45 54.593 54.593 54.593z" fill="#407093"></path><path d="m329.353 126.504v311.047c0 17.198-13.939 31.137-31.137 31.137h-198.353c-17.189 0-31.137-13.939-31.137-31.137v-311.047c0-17.198 13.948-31.137 31.137-31.137h30.412v1.468c0 17.78 14.414 32.193 32.193 32.193h73.151c17.78 0 32.193-14.414 32.193-32.193v-1.468h30.403c17.198 0 31.138 13.94 31.138 31.137z" fill="#f9f6f9"></path><path d="m129.639 468.689h-29.776c-17.189 0-31.137-13.939-31.137-31.137v-311.048c0-17.198 13.948-31.137 31.137-31.137h29.776c-17.189 0-31.137 13.939-31.137 31.137v311.047c0 17.199 13.948 31.138 31.137 31.138z" fill="#dddaec"></path></g><g><path d="m158.278 258.085h-33.477c-14.992 0-27.145-12.153-27.145-27.145v-33.477c0-14.992 12.153-27.145 27.145-27.145h33.477c14.992 0 27.145 12.153 27.145 27.145v33.477c.001 14.991-12.153 27.145-27.145 27.145z" fill="#e28086"></path><path d="m142.876 258.08h-18.076c-14.987 0-27.144-12.149-27.144-27.144v-33.474c0-14.996 12.158-27.144 27.144-27.144h18.075c-14.996 0-27.144 12.149-27.144 27.144v33.474c0 14.996 12.149 27.144 27.145 27.144z" fill="#dd636e"></path></g><g><path d="m273.281 258.085h-33.477c-14.992 0-27.145-12.153-27.145-27.145v-33.477c0-14.992 12.153-27.145 27.145-27.145h33.477c14.992 0 27.145 12.153 27.145 27.145v33.477c0 14.991-12.153 27.145-27.145 27.145z" fill="#ffe07d"></path><path d="m257.878 258.08h-18.075c-14.987 0-27.144-12.149-27.144-27.144v-33.474c0-14.996 12.158-27.144 27.144-27.144h18.075c-14.996 0-27.144 12.149-27.144 27.144v33.474c0 14.996 12.149 27.144 27.144 27.144z" fill="#ffd064"></path></g><g><path d="m410.694 228.586h-84.329c-37.764 0-68.379-30.614-68.379-68.379v-84.328c0-37.764 30.614-68.379 68.379-68.379h84.329c37.764 0 68.379 30.614 68.379 68.379v84.329c0 37.764-30.614 68.378-68.379 68.378z" fill="#bc95e2"></path><path d="m371.895 228.575h-45.532c-37.751 0-68.376-30.603-68.376-68.376v-84.32c0-37.774 30.625-68.376 68.376-68.376h45.532c-37.774 0-68.376 30.603-68.376 68.376v84.32c-.001 37.773 30.602 68.376 68.376 68.376z" fill="#ac80dd"></path></g><g><g><path d="m158.278 369.795h-33.477c-14.992 0-27.145-12.153-27.145-27.145v-33.477c0-14.992 12.153-27.145 27.145-27.145h33.477c14.992 0 27.145 12.153 27.145 27.145v33.477c.001 14.992-12.153 27.145-27.145 27.145z" fill="#b3e59f"></path><path d="m142.876 369.791h-18.076c-14.987 0-27.144-12.149-27.144-27.144v-33.474c0-14.996 12.158-27.144 27.144-27.144h18.075c-14.996 0-27.144 12.149-27.144 27.144v33.474c0 14.995 12.149 27.144 27.145 27.144z" fill="#95d6a4"></path></g><g><path d="m273.281 369.795h-33.477c-14.992 0-27.145-12.153-27.145-27.145v-33.477c0-14.992 12.153-27.145 27.145-27.145h33.477c14.992 0 27.145 12.153 27.145 27.145v33.477c0 14.992-12.153 27.145-27.145 27.145z" fill="#bc95e2"></path><path d="m257.878 369.791h-18.075c-14.987 0-27.144-12.149-27.144-27.144v-33.474c0-14.996 12.158-27.144 27.144-27.144h18.075c-14.996 0-27.144 12.149-27.144 27.144v33.474c0 14.995 12.149 27.144 27.144 27.144z" fill="#ac80dd"></path></g></g></g><g><path d="m163.316 102.868h71.45c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-71.45c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path><path d="m124.802 265.584h33.477c19.104 0 34.645-15.542 34.645-34.645v-33.477c0-19.104-15.542-34.645-34.645-34.645h-33.477c-19.104 0-34.646 15.542-34.646 34.645v33.477c0 19.104 15.542 34.645 34.646 34.645zm-19.646-68.122c0-10.833 8.813-19.645 19.646-19.645h33.477c10.833 0 19.645 8.812 19.645 19.645v33.477c0 10.833-8.812 19.645-19.645 19.645h-33.477c-10.833 0-19.646-8.812-19.646-19.645z"></path><path d="m479.076 98.46c-4.142 0-7.5 3.358-7.5 7.5v54.25c0 33.569-27.311 60.88-60.88 60.88h-84.33c-33.569 0-60.88-27.311-60.88-60.88v-84.33c0-33.569 27.311-60.88 60.88-60.88h84.33c33.569 0 60.88 27.311 60.88 60.96 0 4.142 3.358 7.46 7.5 7.46s7.5-3.398 7.5-7.54c0-41.84-34.04-75.88-75.88-75.88h-84.33c-33.52 0-62.014 21.856-72.029 52.06h-166.822c-34.237 0-62.091 27.854-62.091 62.091v335.757c0 34.237 27.854 62.091 62.091 62.091h223.056c34.237 0 62.091-27.854 62.091-62.091v-213.818h38.034c41.84 0 75.88-34.04 75.88-75.88v-54.25c0-4.142-3.357-7.5-7.5-7.5zm-186.149 129.842v2.64c0 10.833-8.812 19.645-19.645 19.645h-33.48c-10.833 0-19.646-8.812-19.646-19.645v-33.48c0-10.833 8.813-19.646 19.646-19.646h12.77c5.292 22.185 20.341 40.618 40.355 50.486zm64.735 221.607c0 25.966-21.125 47.091-47.091 47.091h-223.056c-25.966 0-47.091-21.125-47.091-47.091v-335.758c0-25.966 21.125-47.091 47.091-47.091h163.501c-.337 2.896-.529 5.835-.529 8.82v40.666c-4.269 3.229-9.447 4.984-14.87 4.984h-73.15c-13.614 0-24.69-11.076-24.69-24.69v-1.47c0-4.142-3.358-7.5-7.5-7.5h-30.41c-21.306 0-38.64 17.329-38.64 38.63v311.05c0 21.301 17.334 38.63 38.64 38.63h14.77c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-14.77c-13.035 0-23.64-10.601-23.64-23.63v-311.05c0-13.03 10.605-23.63 23.64-23.63h23.367c2.913 19.035 19.397 33.66 39.233 33.66h73.15c5.168 0 10.2-.989 14.87-2.875v26.555c0 .874.037 1.739.066 2.606h-10.752c-19.104 0-34.646 15.542-34.646 34.646v33.48c0 19.104 15.542 34.645 34.646 34.645h33.48c18.146 0 33.068-14.026 34.519-31.804 4.538 1.146 9.237 1.876 14.056 2.161v201.606c0 13.03-10.609 23.63-23.65 23.63h-153.57c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h153.57c21.312 0 38.65-17.33 38.65-38.63v-201.46h20.806z"></path><path d="m192.924 342.65v-33.477c0-19.104-15.542-34.645-34.645-34.645h-33.477c-19.104 0-34.646 15.542-34.646 34.645v33.477c0 19.104 15.542 34.645 34.646 34.645h33.477c19.103 0 34.645-15.541 34.645-34.645zm-87.768 0v-33.477c0-10.833 8.813-19.645 19.646-19.645h33.477c10.833 0 19.645 8.812 19.645 19.645v33.477c0 10.833-8.812 19.645-19.645 19.645h-33.477c-10.833 0-19.646-8.812-19.646-19.645z"></path><path d="m239.804 377.295h33.478c19.104 0 34.645-15.542 34.645-34.645v-33.477c0-19.104-15.542-34.645-34.645-34.645h-33.478c-19.104 0-34.645 15.542-34.645 34.645v33.477c0 19.104 15.541 34.645 34.645 34.645zm-19.645-68.122c0-10.833 8.812-19.645 19.645-19.645h33.478c10.833 0 19.645 8.812 19.645 19.645v33.477c0 10.833-8.812 19.645-19.645 19.645h-33.478c-10.833 0-19.645-8.812-19.645-19.645z"></path><path d="m336.173 70.662c-2.929-2.929-7.678-2.929-10.606 0l-42.078 42.078c-2.929 2.929-2.929 7.678 0 10.606l42.078 42.078c1.464 1.464 3.384 2.197 5.303 2.197s3.839-.732 5.303-2.197c2.929-2.929 2.929-7.678 0-10.606l-36.775-36.775 36.775-36.775c2.929-2.929 2.929-7.678 0-10.606z"></path><path d="m400.887 165.424c2.929 2.929 7.678 2.929 10.606 0l42.078-42.078c2.929-2.929 2.929-7.678 0-10.606l-42.078-42.078c-2.929-2.929-7.678-2.929-10.606 0-2.929 2.929-2.929 7.678 0 10.606l36.775 36.775-36.775 36.775c-2.929 2.929-2.929 7.678 0 10.606z"></path><path d="m379.877 46.043-38.514 140.021c-1.099 3.994 1.249 8.122 5.242 9.221.666.183 1.335.271 1.994.271 3.292 0 6.312-2.185 7.227-5.513l38.514-140.022c1.099-3.994-1.249-8.122-5.242-9.221-3.996-1.098-8.122 1.249-9.221 5.243z"></path></g></g></svg>
         </div>
          </div>




    

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
  
  < Footer />
        </div>
     );
}
 
export default ussd;