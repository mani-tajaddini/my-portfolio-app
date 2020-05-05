const About = ({ myImage }) => (
  <div id="about" className="section">
    <div className="container">
      <div className="row">
        <div className="col-md-5 pt-3">
          <img
            className="aboutImage"
            src={`${myImage.fields.file.url}?fm=jpg&fl=progressive`}
          />
        </div>
        <div className="col-md-7 pt-3">
          <h4>My name is Mani Tajaddini</h4>
          <p>
            Hi there! I'm a PhD student of Cognitive Science, generally
            interested in Dynamical Systems approaches to Cognitive Science and
            Complex Systems. I am experienced in fields like Collective
            Behavior, Human-Robot Interaction, Eye-Tracking, and Visual
            Attention.
          </p>
          <p>
            Please take a look at my <a href="/blog">blog</a> to see my other
            fields of concern and fascination (e.g., philosophy, category
            theory, functional programming, etc.).
          </p>
          <p>
            Mostly, I do programming and data analysis conerning the above
            subjects; however, occasionally I do general front-end and back-end
            web and mobile developement too. Take a look at the{" "}
            <a href="#portfolio">portfolio</a> section to see my projects.
          </p>
        </div>
      </div>
    </div>
    <style jsx global>{`
      .aboutImage {
        max-width: 100%;
      }
    `}</style>
  </div>
);

export default About;
