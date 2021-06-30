import React from "react";

const Bulkpricing = () => {
    return ( 
        <div>
          <section className="bg-gray-100 py-10">
      <div className="mt-50">
      <h1 className="text-4xl mb-10 font-semibold text-gray-600 text-center">BULK SMS</h1>
      <p className="mt-4 ml-8 text-gray-600"></p>
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
      
<p className="text-lg text-center font-bold m-5"></p>
<table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
  <tbody>
  <tr className="text-left border-b-2 border-gray-300">
    <th className="px-4 py-3"></th>
    <th className="px-4 py-3">Basic Plan <br/> </th>
    <th className="px-4 py-3">Basic Plan <br/> </th>
    <th className="px-4 py-3">Premium Plan <br/> </th>
    <th className="px-4 py-3">Max-Plan<br/> </th>
  </tr>
  
  <tr className="bg-gray-100 border-b border-gray-200">
    
   <td className="px-4 py-3">Safaricom</td>
    <td className="px-4 py-3"></td>
    <td className="px-4 py-3"></td>
    <td className="px-4 py-3"></td>
    <td className="px-4 py-3"></td>
  </tr> 
  <tr className="bg-gray-100 border-b border-gray-200">
    
  <td className="px-4 py-3">Airtel Kenya (Local Traffic)</td>
    <td className="px-4 py-3"></td>
    <td className="px-4 py-3"></td>
    <td className="px-4 py-3"></td>
    <td className="px-4 py-3"></td>
  </tr> 

  <tr className="bg-gray-100 border-b border-gray-200">
   <td className="px-4 py-3">Airtel Kenya (International Traffic)*</td>
    <td className="px-4 py-3"></td>
    <td className="px-4 py-3"></td>
    <td className="px-4 py-3"></td>
    <td className="px-4 py-3"></td>
  </tr> 

  <tr className="bg-gray-100 border-b border-gray-200">
   <td className="px-4 py-3">Other Kenyan Telcos</td>
    <td className="px-4 py-3"></td>
    <td className="px-4 py-3"></td>
    <td className="px-4 py-3"></td>
    <td className="px-4 py-3"></td>
  </tr>
</tbody>
</table>
<div className="mt-50 mb-10">
      <h1 className="text-4xl ml-2 mt-6 mb-2 font-semibold text-gray-600 text-left">Sender ID</h1>
<p className="text-lg text-left ml-2 font-semibold pb-6">Sender ID set up cost for all Mobile Service Providers</p>
</div>
<table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
  <tbody>
  <tr className="text-left border-b-2 border-gray-300">
    <th className="px-4 py-3">Telco</th>
    <th className="px-4 py-3">Set-Up</th>

  </tr>
  
  <tr className="bg-gray-100 border-b border-gray-200">
    <td className="px-4 py-3">Bundled Safaricom & Airtel</td>
    <td className="px-4 py-3"></td>
  </tr> 
  <tr className="bg-gray-100 border-b border-gray-200">
    <td className="px-4 py-3">Safaricom only</td>
    <td className="px-4 py-3"></td>
   
  </tr> 
  <tr className="bg-gray-100 border-b border-gray-200">
    <td className="px-4 py-3">Airtel only</td>
    <td className="px-4 py-3"></td>
  
  </tr> 
  <tr className="bg-gray-100 border-b border-gray-200">
    <td className="px-4 py-3">Telkom</td>
    <td className="px-4 py-3"></td>
  
  </tr> 
  <tr className="bg-gray-100 border-b border-gray-200">
    <td className="px-4 py-3">Equitel</td>
    <td className="px-4 py-3"></td>
    
  </tr> 
  </tbody>
  </table>
</div>
  </section>  
        </div>
     );
}
 
export default Bulkpricing;