import React from 'react';
import {withRouter} from "next/router";
import Link from "next/link";
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import SchoolIcon from '@material-ui/icons/School';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlinedIcon from '@material-ui/icons/HelpOutlined'


function NavLink({svg, label = "Label", href = "#", router}) {
    const {pathname} = router;

    return (
          
        <Link href={href}>
            <a className={"mt-3 flex items-center hover:bg-blue-500 px-3 py-2 rounded focus:bg-gray-300 " + (pathname === href ? "bg-gray-900" : "")}>
                {svg}
                <span> {label} </span>
            </a>
        </Link>
    );
}

const LinkAction = withRouter(NavLink);


function Sidebar() {
    return <TreeView
        className="flex flex-col overflow-y-auto text-white h-full w-64 flex-shrink-0 py-4 px-1 " 
        style={{backgroundColor: "#14104f",
                 opacity: 0.8
      }}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
    >
       <div className="ml-4 mt-5" >
           <SchoolIcon />
         <span class="ml-3 mt-4 text-white font-bold">LEARN
         </span>
         

        <LinkAction href="/Developers/Learn"
                    svg={<svg className="fill-current text-white mb-2 w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24">
                    </svg>} label="Tutorials"/>
         </div>


      <div className="mt-5 ml-5">
        <LibraryBooksOutlinedIcon />
       <span className="ml-3 mb-10 text-sm text-white font-semibold">API REFERENCE</span>
      </div>
       
       <div className="ml-12 mr-6 mt-3 mb-3" >
       <TreeItem nodeId="1" label="SMS" >
        <LinkAction href="/Developers/SMS/Overview"       
                    svg={<svg className="fill-current text-blue-200 w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"></svg>} 
                              label="Overview"/>

                  <TreeItem nodeId="2"/>
                  <LinkAction href="/Developers/SMS/Sending" 
                            svg={<svg className="fill-current text-blue-200 w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24">
                    </svg>} label="Sending" />

                    <TreeItem nodeId="3"/>
                  <LinkAction href="/Developers/SMS/BulkSmsIntegration" 
                            svg={<svg className="fill-current text-blue-200 w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24">
                    </svg>} label="Bulk SMS" />

                    <TreeItem nodeId="4"/>
                  <LinkAction href="/Developers/SMS/2WaySmsIntegration" 
                            svg={<svg className="fill-current text-blue-200 w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24">
                    </svg>} label="2-way SMS Integration" />

                    <TreeItem nodeId="5"/>
                  <LinkAction href="/Developers/SMS/ShortCodes" 
                            svg={<svg className="fill-current text-blue-200 w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24">
                    </svg>} label="Shortcodes" />

                    <TreeItem nodeId="6"/>
                  <LinkAction href="/Developers/SMS/" 
                            svg={<svg className="fill-current text-blue-200 w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24">
                    </svg>} label="SMS Marketing CMS" />

                    <TreeItem nodeId="7"/>
                  <LinkAction href="/Developers/SMS/MarketingCMS" 
                            svg={<svg className="fill-current text-blue-200 w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24">
                    </svg>} label="Custom SMS Solutions" />
            </TreeItem>
         </div>
        <LinkAction href="/Developers/APIReference/Authentication"
                    svg={<svg className="fill-current text-white w-5 h-5 mb-2 mr-2" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24">
                    </svg>} label="Authentication"/>
 
        <LinkAction href="/Developers/APIReference/RequestHeaders"
                    svg={<svg className="fill-current text-white w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24">
                    </svg>} label="Request Headers"/>
 

      
            <LinkAction href="/Developers/APIReference/Notifications"
                    svg={<svg className="fill-current text-white w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24">
                    </svg>} label="Notifications"/>

            <LinkAction href="/Developers/APIReference/IdempotentRequests"
                    svg={<svg className="fill-current text-blue-200 w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24">
                    </svg>} label="Idempotent Request"/>
             
        <div className="mt-5 ml-5">  
             < SettingsIcon />   
       <span className="ml-3 mb-10 text-sm text-white font-bold">TOOLS</span>

       <LinkAction href="/Developers/Tools/SDK"
                    svg={<svg className="fill-current text-blue-200 w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24">
                    </svg>} label="SDK"/>
      </div>  

        <div className="mt-5 ml-5">  
            <HelpOutlinedIcon />  
       <span className="ml-3 mb-10 text-sm text-white font-bold">Support</span>
        <LinkAction href="/Developers/Support/Help Center"
                    svg={<svg className="fill-current text-blue-200 w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24">
                    </svg>} label="Help Center"/>

                    <LinkAction href="/Developers/Support/Slack"
                    svg={<svg className="fill-current text-blue-200 w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24">
                    </svg>} label="Slack"/>

                    <LinkAction href="/Developers/Support/Github"
                    svg={<svg className="fill-current text-blue-200 w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24">
                    </svg>} label="Github"/>
      </div>   
        


        
    </TreeView>;
}
export default Sidebar;