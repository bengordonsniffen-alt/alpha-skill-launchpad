import LifeCoreHero from "@/components/LifeCoreHero";
import LifeCoreAbout from "@/components/LifeCoreAbout";
import LifeCoreWorkshops from "@/components/LifeCoreWorkshops";
import LifeCoreCurriculum from "@/components/LifeCoreCurriculum";
import LifeCoreApplication from "@/components/LifeCoreApplication";

const Index = () => {
  return (
    <main className="min-h-screen">
      <LifeCoreHero />
      <LifeCoreAbout />
      <LifeCoreWorkshops />
      <LifeCoreCurriculum />
      <LifeCoreApplication />
    </main>
  );
};

export default Index;
