import Header from "@/components/Header";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import LatestProjects from "@/components/LatestProjects";
import TechStack from "@/components/TechStack";
import DeveloperTools from "@/components/DeveloperTools";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 sm:gap-5">
      {/* Hero */}
      <Header />

      {/* Row: Experience + Tech Stack side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-5">
        {/* Experience takes 3/5 on large screens */}
        <div className="lg:col-span-3">
          <ExperienceTimeline />
        </div>
        {/* TechStack takes 2/5 */}
        <div className="lg:col-span-2">
          <TechStack />
        </div>
      </div>

      {/* Projects */}
      <LatestProjects />

      {/* Developer Tools */}
      <DeveloperTools />

      {/* Footer */}
      <Footer />
    </main>
  );
}
