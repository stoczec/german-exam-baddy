import Benefits from "../Home/Benefits";
import CallToAction from "../Home/CallToAction";
import Features from "../Home/Features";
import Footer from "../Home/Footer";
import Hero from "../Home/Hero";
import Navbar from "../Home/Navbar";
import OnboardingSteps from "../Home/OnboardingSteps";
import Testimonial from "../Home/Testimonial";
import NewsletterPage from "../Home/NewsletterPage";

export default function PreLogin() {
  return (
    <div className="relative flex min-h-screen flex-col text-foreground">
      <Navbar />

      <main className="flex flex-1 flex-col">
        <Hero />
        <Features />
        <Benefits />
        <OnboardingSteps />
        <Testimonial />
        <CallToAction />
        <NewsletterPage />
      </main>
      <Footer />
    </div>
  );
}
