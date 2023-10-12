import { Footer } from "../components/modules/Landing/Footer";
import { Nav } from "../components/partials/Nav"
import { PrimaryRoute } from "../routes";

export const WelcomeLayout = ()=> {
    return <>
    <Nav/>
    <div>  
      <PrimaryRoute/>
    </div> 
    <div>
      <Footer />
    </div>
    </>
}