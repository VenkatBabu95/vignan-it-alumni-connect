import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AlumniGrid from "@/components/AlumniGrid";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>VITS IT Alumni Network | Vignan Institute of Technology and Science</title>
        <meta name="description" content="Connect with Department of Information Technology alumni from Vignan Institute of Technology and Science. Browse graduates by year, connect with professionals." />
      </Helmet>
      
      <div className="min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <div id="alumni">
            <AlumniGrid />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
