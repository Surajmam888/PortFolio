import React from "react";
import "./Resume.css";
import ResumeD from "./SurajSaketResume.pdf";

const Resumer = () => {
  return (
    <section id="Resume">
      <h2 className="ResumeTitle">Resume</h2>
      <span className="ResumeTitles">Resume</span>
      <span className="ResumeDesc">
        To secure a promising position that offers a challenge and a good
        opportunity for growth. Utilizing my technical skills to implement
        innovative ideas and meanwhile benefit the team with my analytical and
        logical abilities.
      </span>

      <div className="boxContainer">
      <div className="box">
          <h2>2014-2017</h2>
          <h3>Computer Science Enginnering(Diploma)</h3>
          <p>Rajiv Gandhi Proudyogiki Vishwavidyalaya</p>
          <span>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </span>
        </div>
        <div className="box">
          <h2>2017-2020</h2>
          <h3>Bachelor of Engineering </h3>
          <p>Takshshila Intitute OF Engineering and Technology Jabalpur</p>
          <span>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </span>
        </div>
        <div className="box">
          <h2>2020-2023</h2>
          <h3>Master of Technology</h3>
          <p>Takshshila Intitute OF Engineering and Technology Jabalpur</p>
          <span>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </span>
        </div>
        <div className="box">
          <h2>2023-2024[July-March]</h2>
          <h3>React.js Developer</h3>
          <p>Mactosys Software Technology pvt. ltd Indore</p>
          <span>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </span>
        </div>
      </div>

      <div className="CVbtns">
        <a href={ResumeD}>
          <button className="CVbtn">DOWNLOAD CV</button>
        </a>
      </div>
    </section>
  );
};

export default Resumer;
