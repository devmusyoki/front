import Layout from "components/Layout";
import React from "react";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';


const Notifications = () => {
    return ( 
        <Layout>
            <section className="justify-center ml-40 mr-24  ">
            <h2 className="text-2xl">Request Headers</h2> 
            <p className="mt-4 text-lg font-sans">These are the standard request headers that are needed when authenticating with the API.</p>
            <h2 className="text-2xl mt-3">When using username and API Key</h2> 

        
              <div className="mt-4 mb-96 grid grid-cols-1 divide-y  divide-gray-500">

                     <div className="text-lg">Parameter</div>
                       <p className="font-bold text-gray-400">apiKey <code className="bg-gray-200 font-normal text-red-600">String</code>
                        <br/>
                       <p className="font-semibold mt-1 text-gray-900">Bonga's application apiKey.</p>
                         </p>

                     <div>
                     <p className="font-bold text-gray-400">Content-Type <code className="bg-gray-200 font-normal text-red-600">String</code>
                        <br/>
                       <p className="font-semibold mt-1 text-gray-900">The requests content type. Can be.<code className="bg-gray-200 font-normal text-red-600">application/json</code>  or  <code className="bg-gray-200 font-normal text-red-600">application/x-www-form-urlencoded</code> </p>
                         </p>
                   </div>
                   <div>
                     <p className="font-bold mt-1 text-gray-400">Accept     <code className="bg-gray-200 font-normal text-red-600">String</code>  <code className="bg-gray-200 font-normal text-red-600">Optional</code>
                        <br/>
                       <p className="font-semibold text-gray-900">The requests content type. Can be.<code className="bg-gray-200 font-normal text-red-600">application/json</code>  or  <code className="bg-gray-200 font-normal text-red-600">application/xml</code> </p>
                         </p>
                   </div>
               </div>
            

      </section>
        </Layout>
     );
}
 
export default Notifications ;