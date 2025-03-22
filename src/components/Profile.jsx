import profileImg from "../../public/udaya.jpg";
import githubIcon from "../assets/githubIcon.svg";
import linkedinIcon from "../assets/linkedinIcon.svg";
import CV from "../assets/udaylakshmi-CV.pdf"
const Profile = () => {
  return (
    <div className="hero mt-24">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={profileImg}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div className="ml-8">
      <h1 className="text-5xl font-bold">UDAYLAKSHMI KORLAKUNTA</h1>
      <h2 className="my-4 text-xl">Full Stack Developer</h2>
      <span className="flex">
        <a href="https://github.com/udaylakshmi123" target="_blank" className="mr-4">
          <img className="w-12" src={githubIcon} alt="Github icon" />
        </a>
        <a href="https://linkedin.com/in/udaylakshmi123/" target="_blank">
          <img className="w-12" src={linkedinIcon} alt="Linkedin icon" />
        </a>
      </span>
      <p className="py-6 mb-6">
      Passionate about crafting modern web applications for commercial businesses, I am a seasoned Software Engineer specializing in frontend development and full-stack solutions. My technical expertise and relentless drive to innovate make me the perfect partner for your project needs.
      </p>
      <a href={CV} download>
        <button className="mt-2 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-primary">Resume</button>
      </a>
    </div>
  </div>
</div>
  );
}

export default Profile;