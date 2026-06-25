import AnnouncementBar from "./components/AnnouncementBar";
import NavHeader from "./components/NavHeader";
import Hero from "./components/Hero";
import Walkthrough from "./components/Walkthrough";
import Estimator from "./components/Estimator";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <AnnouncementBar />
      <NavHeader />
      <main>
        <Hero />
        <Walkthrough />
        <Estimator />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
