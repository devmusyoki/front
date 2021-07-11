import Comingsoon from "@components/Comingsoon";

const { default: Footer } = require("components/Footers/Footer")
const { default: Navbar } = require("components/Navbars/AuthNavbar")

const Bulk_sms = () => {
    return ( 
       <section>
         < Navbar />
                        <Comingsoon />
          <Footer />
       </section>
     );
}
 
export default Bulk_sms;