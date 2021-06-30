import Layout from "components/Layout";
import React from "react";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

SyntaxHighlighter.registerLanguage('jsx', jsx);


const Authentication = () => {
    return ( 
        <Layout>
        <section className="justify-center ml-48 mr-24 font-semibold ">
                <h1 className="text-2xl text-black font-semibold">Authentication</h1> 
                <p className="text-justify text-gray-900 font-thin mt-3">Requests made to our APIs must be authenticated, there are two ways to do this:
                    <br/>
                          1.Authenticating using your API Key and username 
                          <br/> 
                          2.Authenticating using an Auth Token
                 </p>
                 <h1 className="text-2xl text-black font-semibold mt-4 mb-4">Authentication using your API and Key Username</h1>
                   <h2 className="text-xl text-gray-800">Your Username</h2>
                   <p className="text-justify text-gray-900 font-thin mt-3">
                   You can generate an API key from the dashboard, here is an article from the help center on how to generate an API Key.
                    </p>
                    <p className="text-justifytext-gray-900 font-thin mt-3">
                 When a new API key is generated, you can no longer use the old one. After you generate your API key, we strongly advise that you copy it and keep it somewhere safe. It will not be displayed again because Africa’s Talking does not log or save your API Key for security reasons. If you lose it, you’ll have to generate a new one.
                     </p>
                <h2 className="text-xl text-gray-800 mt-3" >Making an API call </h2>
                   <p className="text-justify text-gray-900 font-thin mt-3">
                 You need to include the <code>APIkey</code> in the request header as a field called apiKey. The place where the <code>username</code> should be included depends on the type of request.
                        </p>
                        <p className="text-justify text-gray-900 font-thin mt-3">
                For GET requests e.g. fetch messages, the username should be passed as a query parameter.

                For <code>POST</code> requests in which parameters are sent as a url encoded form e.g. in sending SMS, the username should be included as one of the parameters within the form.

                For <code>GET</code> requests that require JSON in the request body e.g. in mobile checkout, the username should be included in the JSON sent in the body of the request.
                 </p>
                <h1 className="text-2xl text-black font-semibold mt-4 mb-4">Authenticating with an Auth Token </h1>
                <p className="text-justify text-gray-900 font-thin mt-3">
                   For instances where it may not be possible to include your APIKey in your application such as in a mobile application, we provide a way to authenticate using temporary auth tokens.
                     </p>
                   <h2 className="text-xl text-gray-800 mt-3">Getting the token</h2>
                   <p className="text-justify text-gray-900 font-thin mt-3">
                   To generate the auth token, make a POST request to https://api.africastalking.com/auth-token/generate with your username and API Key. This request should be made from your server as you should not inclue your apiKey in client code.
                    </p>
                <p className="text-justify text-gray-900 font-thin mt-3">
                You will receive a JSON response that looks like this:
               </p>
               <pre className="w-auto mr-8 pl-4">
                <SyntaxHighlighter style={dracula}>
                   
                {`
                {
                  "token": "ATtkn_abcdefghijklmnopqrstuvwxyz",
                  "lifetimeInSeconds": 3600
                } 
                `}
                   </SyntaxHighlighter>
               </pre>
                  <p className="text-justify text-gray-900 font-thin mt-3">
                You will be able to use that token to make API calls. The token will be valid for value of lifetimeInSeconds and you should generate a new token before it expires.
                   <br/>
                You need to include the Auth Token in the request header as a field called authToken. The place where the username should be included depends on the type of request you’re making.
                </p>
        </section>
        </Layout>
     );
}
 
export default Authentication ;