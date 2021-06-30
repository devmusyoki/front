import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({children}) {
    return (
        <div className="h-full flex flex-col">
            <Header/>
            <div className="flex flex-1 h-full">
                <Sidebar/>
                <main className=" bg-gray-100 min-h-full w-full h-full p-6">
                    {children}
                </main>
            </div>


        </div>
    );
}

export default Layout;
