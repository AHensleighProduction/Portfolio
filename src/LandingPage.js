function LandingPage({ setSelectedPage }) {
  return (
    <div id="Landing">
      

      <div className="intro">
        <img src={`${process.env.PUBLIC_URL}/headshot.jpg`} alt="asha" className="profilePic" />
        <div className="introDetails">
        <p className="bio">
      
          Born in Port Au Prince, Haiti, and adopted as an infant, I have
          overcome unique challenges in my formative years. My commitment to
          creative flexibility, and strategic affinity have allowed me to make
          meaningful contributions in the evolving landscape of digital arts. I
          hold a Bachelor of Arts degree from the University of Oregon; College
          of Design, where I developed a strong foundation in artistic
          principles. Complementing this, I earned a Web Development Certificate
          from the esteemed Massachusetts Institute of Technology (MIT),
          augmenting my skills in the ever-evolving digital technology domain.
          <br /><br />
          My overarching professional goal is to ascend to the role of Creative
          Director within a forward-thinking company that embraces boldness and
          experimentation in conceptualization while prioritizing efficiency and
          strategic execution. My immediate focus is on immersing myself in
          diverse creative environments, gaining exposure to, and experience in,
          varied design styles that contribute to my growth. Find me on Github at AHensleighProduction.  <br></br>“If a picture is
          worth a thousand words, then an experience has to be priceless.” -
          Asha Hensleigh.
          
        </p>
        <div className="buttonContainer">
        <button className="portfolioButton" onClick={() => setSelectedPage("Portfolio")}>
         Portfolio
        </button>
        <a className="portfolioButton" href={`${process.env.PUBLIC_URL}/Resume2024.pdf`} download>
         Resume
        </a>
        </div>
        </div>
      </div>
      <iframe 
      width="560" 
      height="715" 
      src="https://www.youtube.com/embed/41WnBAC-bdU?si=2QFAPoANzgWln1Vc" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen>
        
      </iframe>
    </div>
  );
}
export default LandingPage;
