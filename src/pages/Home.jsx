import Hero from '../components/Hero';
import Philosophy from '../components/Philosophy';
import Manifesto from '../components/Manifesto';
import Protocol from '../components/Protocol';
import ServicesSection from '../components/ServicesSection';
import StaffSection from '../components/StaffSection';
import ContactSection from '../components/ContactSection';
import PageBackground from '../components/PageBackground';

export default function Home() {
    return (
        <div className="relative bg-drago-bg">
            <PageBackground />
            <main className="relative z-10">
                <Hero />
                <Philosophy />
                <Manifesto />
                <Protocol />
                <ServicesSection />
                <StaffSection />
                <ContactSection />
            </main>
        </div>
    );
}
