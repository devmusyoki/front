import Layout from "components/Layout";
import React from "react";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';


const sdk = () => {
    return ( 
        <Layout>
        <section className="justify-center ml-40 mr-24  ">
            <h2 className="text-2xl">SDK's</h2>
            <p className="mt-3">Bonga has official SDKs for different programming languages, these are:</p>
            <p className="mt-2">
                <h2 className="text-blue-600 cursor-pointer">PHP</h2>
                <h2 className="text-blue-600 cursor-pointer">Java</h2>
                <h2 className="text-blue-600 cursor-pointer">Python</h2>
                <h2 className="text-blue-600 cursor-pointer">Node</h2>
                <h2 className="text-blue-600 cursor-pointer">Ruby</h2>
            </p>
            <div className="mt-5">
            <div className="divide-y" >
            <h2 className="text-2xl">PHP</h2>
            <p className="mt-1 text-gray-700">You can install the PHP SDK by running:
                <pre className="w-auto mt-3">
                <SyntaxHighlighter style={dracula}>  
                {` $ composer require Bonga/Bonga`}
                   </SyntaxHighlighter>
               </pre>
            </p>
            </div>
            <div className="divide-y">
            <h2 className="text-2xl mt-10">Java</h2>
             <p className="mt-1 text-gray-700">You can depend on the <mark>.jar</mark> through Maven
                <pre className="w-auto mt-3">
                <SyntaxHighlighter language="java" style={dracula}>  
                {`<repositories>
    <repository>
        <id>Bonga</id>
        <name>Bonga</name>
        <url>http://dl.bintray.com/Bonga/java</url>
    </repository>
</repositories>
...
<dependency>
    <groupId>com.Bonga</groupId>
    <artifactId>core</artifactId>
    <version>3.4.4</version>
</dependency> `}
                   </SyntaxHighlighter>
               </pre>
            </p>
            </div>
            <div className="divide-y ">
            <h2 className="text-2xl mt-10">Python</h2>
            <p className="mt-1 text-gray-700">You can install the PHP SDK by running:
                <pre className="w-auto mt-3">
                <SyntaxHighlighter language="python" style={dracula}>  
                {` $ pip  install africastalking # python 2.7.x

# OR
$ python -m pip install africastalking # python 2.7.x

# OR
$ pip3 install africastalking # python 3.6.x

# OR
$ python3 -m pip install africastalking # python 3.6.x`}
                   </SyntaxHighlighter>
               </pre>
            </p>

            </div>
            <div className="divide-y">
            <h2 className="text-2xl mt-10">Node</h2>
            <p className="mt-1 text-gray-700">You can install the Node SDK by running:
                <pre className="w-auto mt-3">
                <SyntaxHighlighter style={dracula}>  
                {`$ npm install --save africastalking `}
                   </SyntaxHighlighter>
               </pre>
            </p>

            </div>
            <div className="divide-y">
            <h2 className="text-2xl mt-10">Ruby</h2>
            <p className="mt-1 text-gray-700">You can install the Ruby SDK by running:
                <pre className="w-auto mt-3">
                <SyntaxHighlighter style={dracula}>  
                {`$ gem install Bonga-ruby`}
                   </SyntaxHighlighter>
               </pre>
            </p>

            </div>
            </div>
            </section>
        </Layout>
     );
}
 
export default sdk ;