import Layout from "components/Layout";
import React from "react";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';



const Notifications = () => {
    return ( 
        <Layout>
        <section className="justify-center ml-48 mr-24 font-semibold ">
                <h1 className="text-2xl text-black font-semibold">Notifications</h1> 
                <p className="text-justify text-gray-900 font-thin mt-3">A notification is information sent to your application whenever we need to let you know that something has occured. For example, when a message is sent  to your shortcode, we immediately let you know via a notification with the details of that message.
                 Notifications are sent to the callback URL you set on your application for a given product. You can set your application’s callback URLs from the dashboard
                 </p>
                 
                   <h1 className="text-2xl mt-3 text-black font-semibold">Notifications are POST Requests</h1> 
                   <p className="text-justify text-gray-900 font-thin mt-3">
                   We send notifications as POST requests and you can read the data sent from the form fields of the request. How you do this depends on the language you’re using. Here is an example of how to read notification values using PHP.
                    </p>
   
               <pre className="w-auto mr-8 mt-10 pl-4">
                <SyntaxHighlighter language="php" style={dracula}>
                   
                {`
<?php
// Save this code in handleNotification.php
// Configure the callback URL for your product (incoming sms, ussd, voice e.t.c)
// to point to the location of this script on the web
// e.g http://www.myawesomesite.com/handleNotification.php
// Read in a couple of POST variables passed in with the request
$sessionId    = $_POST["sessionId"];
$phoneNumber  = $_POST["phoneNumber"];

// You can then log the notification details to the console or
// store them in a database for your records or
// perform any extra logic your application needs.
echo $sessionId;
echo $phoneNumber; 
                `}
                   </SyntaxHighlighter>
               </pre>
                
        </section>
        </Layout>
     );
}
 
export default Notifications ;