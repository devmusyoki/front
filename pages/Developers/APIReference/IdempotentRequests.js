import Layout from "components/Layout";
import React from "react";


const IdempotentRequests = () => {
    return ( 
        <Layout>
        <section className="justify-center ml-48 mr-24 font-semibold ">
                <h1 className="text-2xl text-black font-semibold">Idempotent Requests</h1> 
                <p className="text-justify text-gray-900 font-thin mt-3">Our APIs protect your application against cases where you might end up sending unintended repeat requests. This could be caused by a communication breakdown (mainly network issues) or your application having broken logic.
               <p className="text-justify text-gray-900 font-thin mt-3">
               For example, imagine a scenario where you initiate a POST request to top up phoneNumber1 with KES 100 worth of credits. However, due to network issues, you do not receive a valid response from our APIs, even though the airtime was delivered to phoneNumber1. In this case, you might actually want to retry the POST request but also ensure that we do not send the airtime again.
              </p>
              <p className="text-justify text-gray-900 font-thin mt-3">
               However, you might run into cases where you actually want to send the same request more than once. In that case, you can set a special header <code className="bg-gray-200 font-normal text-red-600">Idempotency-Key</code>  to a unique value of your choosing and resend the request. If you send another request with the same <code className="bg-gray-200 font-normal text-red-600">Idempotency-Key</code>
                within a given period of time, we will respond with a failure status notifying you that we have detected a duplicate request.
               </p>
               <p className="text-justify text-gray-900 font-thin mt-3">
               You can add idempotent keys to your requests to ensure that we send a request from your application once. This feature is currently supported for Airtime APIs and Payment Disbursement APIs.
                </p>
                 </p>
                 </section>
        </Layout>
     );
}
 
export default IdempotentRequests ;