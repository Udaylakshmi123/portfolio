const Skills = () => {
  return (
    <section id="skills text-center">
      <h3 className="text-center text-2xl font-bold mt-20 mb-6 underline">
        SKILLS
      </h3>
      <div className="flex justify-center">
        <ul className="list text-center rounded-box shadow-md">
          <li className="list-row font-bold text-lg">
            React, Angular, JavaScript, Typescript, Node.Js, jQuery, Redux Toolkit
          </li>

          <li className="list-row font-bold text-lg">
            Parcel/Webpack, Git, Jest, Firebase, SQL, MongoDB
          </li>

          <li className="list-row font-bold text-lg">
            HTML, CSS, Bootstrap, Tailwind CSS, Material UI
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
