import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import FooterMain from "./components/footer/FooterMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import SubHeroMain from "./components/subHeroSection/SubHeroMain";
import CertificateMain from "./components/certificates/CertificateMain";
import InteractiveBackground from "./components/InteractiveBackground";
import CustomCursor from "./components/CustomCursor";
import TerminalWidget from "./components/TerminalWidget";

function App() {
  return (
    <main className="font-body text-white relative overflow-hidden min-h-screen selection:bg-cyan selection:text-black">
      <CustomCursor />
      <InteractiveBackground />
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroMain />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ProjectsMain />
      <CertificateMain />
      <ExperienceMain />      
      <ContactMeMain />
      <FooterMain />
      <TerminalWidget />
    </main>
  );
}

export default App;

