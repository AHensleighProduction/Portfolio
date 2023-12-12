function Portfolio() {
  const projects = [
    {
      title: "Eyes",
      github: "https://github.com/ahensleighproduction",
       image: "eyes.png",
      description:
        "This is a project in which a pair of eyes in the center of  the screen. The interaction comes from the pupils both being synchronized to mirror the mouse events.",
    },
    {
      title: "PacMan",
      github: "https://github.com/ahensleighproduction",
       image: "pac.png",
      description:
        "This project contains a depiction of Pac Man chomping his way across the browser window. Once he reaches the opposing wall, PacMan changes his direction and begins his journey to the other side. This effect is done with a series of four images. Two with mouth open, two with mouth closed. Each set containing an image facing left and an image facing to the right.",
    },
    
  ];
 
  return (
    <div>
      <h2 className="pagetitle">My Work</h2>
      <div className="projectcontainer">
        {projects.map((project) => {
          return (
            <div className="projectcard">
             <div>
              <img
                src={project.image}
                alt={project.title}
               
              
              />
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              </div>
              <a href={project.github} className="portfolioButton" target="_blank" rel="noreferrer">Github</a>

            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Portfolio;
