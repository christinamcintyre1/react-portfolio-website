import React from "react";
import "./experience.css";
import { BiCheck } from "react-icons/bi";

const Experience = () => {
  return (
    <section id="experience">

      <h2>What Skills I Have</h2>

      <div className="container experience__container">
        <article className="experience">
          <div className="experience__head">
            <h3>Frontend Development</h3>
          </div>

          <ul className="experience__list">
            <li>
              <BiCheck className="experience__details-icon" />
              <div>
                <h4>REACT</h4>
                
              </div>
            </li>

            <li>
              <BiCheck className="experience__details-icon" />
              <div>
                <h4>JAVASCRIPT</h4>
                
              </div>
            </li>

            <li>
              <BiCheck className="experience__details-icon" />
              <div>
                <h4>FORMIK</h4>
                
              </div>
            </li>
          </ul>
          <ul className="experience__list">
            <li>
              <BiCheck className="experience__details-icon" />
              <div>
                <h4>CSS/HTML</h4>
                
              </div>
            </li>
            <li>
              <BiCheck className="experience__details-icon" />
              <div>
                <h4>BOOTSTRAP</h4>
                
              </div>
            </li>
            <li>
              <BiCheck className="experience__details-icon" />
              <div>
                <h4>GIT/GITHUB</h4>
                
              </div>
            </li>
          </ul>
        </article>



        <article className="experience">
          <div className="experience__head">
            <h3>Backend Development</h3>
          </div>

          <ul className="experience__list">
          <li>
              <BiCheck className="experience__details-icon" />
              <div>
                <h4>AWS</h4>
                
              </div>
            </li>
            <li>
              <BiCheck className="experience__details-icon" />
              <div>
                <h4>MONGODB</h4>
                
              </div>
            </li>

            <li>
              <BiCheck className="experience__details-icon" />
              <div>
                <h4>NODEJS</h4>
                
              </div>
            </li>

            <li>
              <BiCheck className="experience__details-icon" />
              <div>
                <h4>TERRAFORM</h4>
                
              </div>
            </li>
          </ul>
          <ul className="experience__list">
            <li>
              <BiCheck className="experience__details-icon" />
              <div>
                <h4>EXPRESS</h4>
                
              </div>
            </li>

            <li>
              <BiCheck className="experience__details-icon" />
              <div>
                <h4>GRAPHQL</h4>
                
              </div>
            </li>
            <li>
              <BiCheck className="experience__details-icon" />
              <div>
                <h4>POSTMAN</h4>
                
              </div>
            </li>
          <li>
              <BiCheck className="experience__details-icon" />
              <div>
                <h4>Nifi</h4>
                
              </div>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Experience;
