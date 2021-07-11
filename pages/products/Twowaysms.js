import Navbar from "components/Navbars/AuthNavbar";
import Comingsoon from '@components/Comingsoon';

const { default: Footer } = require("components/Footers/Footer")

const TwoWay = () => {
  return ( 
      <div>
        < Navbar />
                 <Comingsoon />
       < Footer />
      </div>
   );
}

export default TwoWay;