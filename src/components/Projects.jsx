import jayFoodLogo from "../assets/jayFoodLogo.jpg";
import netFlixLogo from "../assets/netFlixLogo.jpg";
import youTubeLogo from "../assets/youTubeLogo.jpg";
import ProjectCard from "../common/ProjectCard.jsx";

function Projects() {
  return (
    <section id="projects">
      <h3 className="text-center text-2xl font-bold mt-20 mb-6 underline">PROJECTS</h3>
      <div className="flex flex-wrap justify-center gap-x-8">
        <ProjectCard
          src={jayFoodLogo}
          link="https://github.com/Udaylakshmi123/food-delivery-app"
          h3="Jai's Food"
          p="Realtime Food Delivery Web App"
        />
        <ProjectCard
          src={netFlixLogo}
          link="https://github.com/Udaylakshmi123/netflix-gpt"
          h3="NetFlix"
          p="Realtime Streaming Web App"
        />
        <ProjectCard
          src={youTubeLogo}
          link="https://github.com/Udaylakshmi123/youtube-gpt"
          h3="YouTube"
          p="Realtime YouTube Web App"
        />
      </div>
    </section>
  );
}

export default Projects;