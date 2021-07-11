import Layout from "components/Layout";
import React from "react";


const message101 = () => {
    return (
        <Layout>
            <section>
               <p className="text-red-500 mb-4 cursor-pointer">Browse All Tutorials</p> 
                      <div className="bg-white shadow-md  rounded-3xl p-4">        
                      <div className="flex-none lg:flex">
                      <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                    <img src="https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" alt="false" className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl" />
                </div>
                <div className="flex-auto ml-3 justify-evenly py-2">
                    <div className="flex flex-wrap ">
                    <h2 className="flex-auto text-lg font-medium">Messaging 101 - Sending an SMS</h2>
                    </div>
                    <p className="mt-3" />
                    <div className="flex py-4  text-sm text-gray-600">
                    <div className="flex-1 inline-flex items-center">
                        <p className>In this short tutorial, you'll learn how to send an SMS with NerdScript</p>
                    </div>
                    </div>
                    <div className="flex p-4 pb-2 border-t border-gray-200" />
                    
                    <div className="flex-1 inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className>1 hour</p>
                    </div>    
                </div>
                </div>
               </div>
                </section>
                        

             <section className="flex flex-col mt-12">
                 <div className="flex justify-center">
                  <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fillRule="nonzero" />
                  </svg>
                  <select className=" select border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400">
                    <option disabled="disabled" selected="selected">Choose your code language</option> 
                    <option>Python</option>
                    <option>Node js</option>
                    <option>Php</option>
            </select>
            <div className="flex justify-center ml-6">
                        <button className="px-9 py-2  mb-4  text-base font-semibold rounded-full block  border-b border-purple-300 bg-white hover:bg-green-300 text-black">Sign Up</button>
                    </div>
            </div>
             </section>
                <section>
        <div className="content">
        <div className="grid mt-8  gap-8 grid-cols-1 md:grid-cols-3 xl:grid-cols-3">
            <div className="flex flex-col">
            <div className="bg-white shadow-md  rounded-3xl p-4">
                     <div className="flex-none lg:flex">
                     <div className="flex-auto ml-3 justify-evenly py-2">
                     <div className="flex flex-wrap ">
                     <h2 className="flex-auto text-lg font-medium">Receiving an SMS</h2>
                     </div>
                    <p className="mt-3" />
                    <div className="flex p-2 pb-2 border-t border-gray-200 " />
                    <div className="flex py-2 text-sm text-gray-600">
                    <div className="flex-1 inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className>10mins</p>
                    </div>
                    </div>
                    
                </div>
                </div>
                </div>
            </div>

            <div className="flex flex-col">
                     <div className="bg-white shadow-md  rounded-3xl p-4">
                     <div className="flex-none lg:flex">
                     <div className="flex-auto ml-3 justify-evenly py-2">
                     <div className="flex flex-wrap ">
                     <h2 className="flex-auto text-lg font-medium">Receiving an SMS</h2>
                     </div>
                    <p className="mt-3" />
                    <div className="flex p-2 pb-2 border-t border-gray-200 " />
                    <div className="flex py-2 text-sm text-gray-600">
                    <div className="flex-1 inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className>25mins</p>
                    </div>
                    </div>
                    
                </div>
                </div>
            </div>
            </div>
            
            <div className="flex flex-col ">
                     <div className="bg-white shadow-md  rounded-3xl p-4">
                     <div className="flex-none lg:flex">
                     <div className="flex-auto ml-3 justify-evenly py-2">
                     <div className="flex flex-wrap ">
                     <h2 className="flex-auto text-lg font-medium">Receiving SMS Delivery Report </h2>
                     </div>
                    <p className="mt-3" />
                    <div className="flex p-2 pb-2 border-t border-gray-200 " />
                    <div className="flex py-2 text-sm text-gray-600">
                    <div className="flex-1 inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className>25mins</p>
                    </div>
                    </div> 
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
                </section>
        </Layout>
    );
};

export default message101;