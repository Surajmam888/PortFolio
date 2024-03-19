import React from "react";
import "./Home.css";
import { Link } from "react-scroll";
import Person from "../images/Person.png";
import WorkIcon from "@mui/icons-material/Work";

const Home = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          Iam <span className="introName">Suraj Saket</span> <br />
          React JS Developer{" "}
        </span>
        <p className="introPara">
          I have been working as a React Developer for the past year at Mactosys{" "}
          <br />
          Software Solution Private Limited in Indore, Madhya Pradesh.
        </p>
        <Link>
          <button className="btn">
            {" "}
            <WorkIcon className="btnImg" /> Hire Me
          </button>
        </Link>
      </div>
      <img src={Person} alt="Profile_" className="bg" />
    </section>
  );
};

export default Home;
