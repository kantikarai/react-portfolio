import React from 'react'
import aboutImg from "../assets/kantika.jpeg"
import "./about.css"

function About() {
  return (
    <>
      <section id='about' className='about-section'>
        <h1 className="about-title">

          <span className="col short"></span>
          <span className="col medium"></span>
          <span className="col tall"></span>
          About Me
          <span className="col tall"></span>
          <span className="col medium"></span>
          <span className="col short"></span>
        </h1>

        <div className="about-container">
          {/* Left side  */}

          <div className="about-img" data-aos="fade-right">
            <img src={aboutImg} alt="kantika" />
          </div>
          {/* Right side  */}
          <div className="about-text" data-aos="fade-left" >
            <p className='kantika'>
              <h2>Who I am 😎</h2>
              Hi! I’m <strong>kantika rai</strong>, a passionate web developer who enjoys building clean, responsive, and user-friendly websites.
              My journey began around 26-9-2025/continue, and over time I’ve grown more confident in creating projects that bring ideas to life on the web.

              Right now, I’m exploring <b>React</b>, moving toward backend development, and learning modern UI design as I work toward becoming a <strong>Full-Stack Developer</strong>.
              My dream is to grow into a skilled Software Engineer who can handle both the creative and technical sides of applications.

              Coding 💻 feels like a mix of art and problem-solving for me. Every project is a chance to experiment, learn something new, and sharpen my skills.

              Outside of coding, I love photography, experimenting with creative ideas, and exploring new technologies that spark curiosity 🚀.
              I also enjoy spending time with friends, discovering fresh perspectives, and learning from every challenge I take on.
            </p>

          </div>
        </div>
      </section>
    </>
  )
}

export default About
