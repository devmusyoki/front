import Navbar from "components/Navbars/AuthNavbar";
import Comingsoon from '@components/Comingsoon';
const { default: Footer } = require("components/Footers/Footer")


const Custom = () => {
    return ( 
      <div>
        < Navbar />
         <Comingsoon />     
         <Footer />
        </div>
     );
}
 
export default Custom;