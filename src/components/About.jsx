
function About() {
  return (
    <section className="about section" id="about">
      <p className="eyebrow">GET TO KNOW ME</p>

      <h2 className="section-title">
        About <span>Me</span>
      </h2>

      <p className="about-text">
        I'm Chinweuba Godstime, a Frontend Developer
        passionate about building modern, responsive,
        and user-friendly web experiences.

        I work with HTML, CSS, JavaScript, and React
        to turn ideas into functional websites.
        I'm continuously learning and improving my
        skills by building real-world projects.
      </p>

      <div className="about-details">
        <div>
          <span className="detail-label">Name</span>
          <p>Chinweuba Godstime</p>
        </div>

        <div>
          <span className="detail-label">Role</span>
          <p>Frontend Developer</p>
        </div>

        <div>
          <span className="detail-label">Email</span>
          <p>chinweubagodstime3@gmail.com</p>
        </div>
      </div>
    </section>
  );
}

export default About;
