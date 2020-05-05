import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import HowGood from "../../components/CV/HowGood";
import LeftSideHeader from "../../components/CV/LeftSideHeader";
import RightSideHeader from "../../components/CV/RightSideHeader";
import ReferencePerson from "../../components/CV/ReferencePerson";
import { getCV } from "../../lib/api";

const CV = ({ cv }) => {
  const [flipState, setFlipState] = useState({ isFlipped: false });
  const handleClick = e => {
    e.preventDefault();
    setFlipState(prevState => ({ isFlipped: !prevState.isFlipped }));
  };
  return (
    <>
      <Navbar />
      <div>
        <a
          href="#"
          className="float"
          onClick={handleClick}
          style={
            flipState.isFlipped
              ? { backgroundColor: "red" }
              : { backgroundColor: "#326175" }
          }
        >
          <i className="far fa-circle my-float"></i>
        </a>
        <div className="label-container">
          <div className="label-text">
            {flipState.isFlipped ? "CV" : "Anti-CV"}
          </div>
          <i className="fa fa-play label-arrow"></i>
        </div>
        <style jsx>{`
          * {
            padding: 0;
            margin: 0;
          }

          body {
            font-family: Verdana, Geneva, sans-serif;
            background-color: #ccc;
            font-size: 12px;
          }

          .label-container {
            position: fixed;
            bottom: 8px;
            right: 45px;
            display: table;
            visibility: hidden;
            z-index: 1000;
          }

          .label-text {
            color: #fff;
            background: rgba(51, 51, 51, 0.5);
            display: table-cell;
            vertical-align: middle;
            padding: 5px 10px;
            border-radius: 3px;
          }

          .label-arrow {
            display: table-cell;
            vertical-align: middle;
            color: #333;
            opacity: 0.5;
          }

          .float {
            position: fixed;
            width: 30px;
            height: 30px;
            bottom: 10px;
            right: 10px;
            background-color: #326175;
            color: #fff;
            border-radius: 50px;
            text-align: center;
            vertical-align: middle;
            box-shadow: 2px 2px 3px #999;
            z-index: 1000;
          }

          .my-float {
            font-size: 12px;
          }

          a.float + div.label-container {
            visibility: hidden;
            opacity: 0;
            transition: visibility 0s, opacity 0.5s ease;
          }

          a.float:hover + div.label-container {
            visibility: visible;
            opacity: 1;
          }
        `}</style>
      </div>

      <div style={{ padding: "5%" }}>
        <ReactCardFlip isFlipped={flipState.isFlipped}>
          <div className="card">
            <div className="card-header border-bottom border-light">
              <a href={cv.fields.file.url} download>
                <div className="button">
                  <div className="icon">
                    <i className="fa fa-download"></i>
                  </div>
                </div>
                <style jsx>{`
                  .button {
                    font-size: 1rem;
                    border: 2px solid #12232a;
                    border-radius: 100px;
                    width: 40px;
                    height: 40px;
                    padding: 5px;
                    margin: auto;
                    transition: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                  }

                  .icon {
                    position: relative;
                    top: 50%;
                    transform: translateY(-50%);
                    text-align: center;
                  }

                  .button:hover {
                    width: 125px;
                    background-color: #12232a;
                    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
                    color: white;
                    transition: 0.3s;
                  }

                  .button:active {
                    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
                    transition: 0.05s;
                  }
                `}</style>
              </a>
            </div>

            <div className="card-body m-0 p-0 row">
              <div
                className="border-right col-sm-4 p-0"
                style={{ backgroundColor: "#003d73", borderColor: "#003d73" }}
              >
                <div className="p-3">
                  <h1 className="text-light m-0">Mani Tajaddini</h1>
                </div>
                <LeftSideHeader subject="Contact" />
                <div className="p-3">
                  <h4 className="text-light">Address</h4>
                  <p className="text-light">
                    Aksu Asiyan Evleri, No. 10/11, 1539. Str, Isci Bloklar,
                    Ankara, Turkey
                  </p>
                  <p className="text-light">Ankara, 06, 06530</p>
                  <h4 className="text-light">Phone</h4>
                  <p className="text-light">+90-531-585-7440</p>
                  <h4 className="text-light">Email</h4>
                  <p className="text-light">mtajaldini@gmail.com</p>
                  <p className="text-light">mani.tajaddini@metu.edu.tr</p>
                </div>
                <LeftSideHeader subject="Skills" />
                <div className="p-3">
                  <HowGood
                    subject="Data Analysis (R, Python, Haskell, etc.)"
                    howGoodPercent="100"
                    howGoodVerbal="Excellent"
                  />
                  <HowGood
                    subject="Machine/Deep Learning (Keras, Tensorflow, Nengo, etc.)"
                    howGoodPercent="100"
                    howGoodVerbal="Excellent"
                  />
                  <HowGood
                    subject="Eye-Tracking (EyeTribe, Tobii, EyeLink)"
                    howGoodPercent="100"
                    howGoodVerbal="Excellent"
                  />
                  <HowGood
                    subject="User Interface Design (React/Redux, Elm, Functional Reactive
                      Programming, etc.)"
                    howGoodPercent="100"
                    howGoodVerbal="Excellent"
                  />
                  <HowGood
                    subject="Experiment Design"
                    howGoodPercent="100"
                    howGoodVerbal="Excellent"
                  />
                  <HowGood
                    subject="Category Theory & Functional Programming"
                    howGoodPercent="100"
                    howGoodVerbal="Excellent"
                  />
                  <HowGood
                    subject="Object-Oriented Programming"
                    howGoodPercent="80"
                    howGoodVerbal="Very Good"
                  />
                </div>
                <LeftSideHeader subject="Programming and Software" />
                <div className="p-3">
                  <HowGood
                    subject="R"
                    howGoodPercent="100"
                    howGoodVerbal="Excellent"
                  />
                  <HowGood
                    subject="Python (Numpy, Pandas, Keras, Tensorflow, etc.)"
                    howGoodPercent="80"
                    howGoodVerbal="Very Good"
                  />
                  <HowGood
                    subject="JavaScript (Nodejs, React/Redux, Vue, etc.)"
                    howGoodPercent="100"
                    howGoodVerbal="Excellent"
                  />
                  <HowGood
                    subject="Haskell"
                    howGoodPercent="100"
                    howGoodVerbal="Excellent"
                  />
                  <HowGood
                    subject="LISP (Scheme, Common Lisp, Racket, Clojure/Clojurescript)"
                    howGoodPercent="80"
                    howGoodVerbal="Very Good"
                  />
                  <HowGood
                    subject="MATLAB"
                    howGoodPercent="80"
                    howGoodVerbal="Very Good"
                  />
                  <HowGood
                    subject="Java"
                    howGoodPercent="60"
                    howGoodVerbal="Good"
                  />
                  <HowGood
                    subject="C/C++"
                    howGoodPercent="40"
                    howGoodVerbal="Average"
                  />
                  <HowGood
                    subject="Rust"
                    howGoodPercent="40"
                    howGoodVerbal="Average"
                  />
                </div>
                <LeftSideHeader subject="Languages" />
                <div className="p-3">
                  <HowGood
                    subject="Azerbaijani"
                    howGoodPercent="100"
                    howGoodVerbal="Native"
                  />
                  <HowGood
                    subject="Persian"
                    howGoodPercent="100"
                    howGoodVerbal="Native"
                  />
                  <HowGood
                    subject="English"
                    howGoodPercent="80"
                    howGoodVerbal="Superior"
                  />
                  <HowGood
                    subject="Turkish"
                    howGoodPercent="80"
                    howGoodVerbal="Superior"
                  />
                  <HowGood
                    subject="German"
                    howGoodPercent="60"
                    howGoodVerbal="Advanced"
                  />
                </div>
              </div>
              <div className="col-sm-8 bg-light px-0 mb-3">
                <RightSideHeader subject="Education" />
                <div className="px-3">
                  <div className="row m-0 p-0 pb-2 border-bottom">
                    <div className="col-sm-3 text-center p-0 pt-1">
                      2015-2018
                    </div>
                    <div className="col-sm-9 bg-succes p-0 pt-1">
                      <h3 className="m-0">
                        Master of Science: Cognitive Science
                      </h3>
                      <p className="font-italic m-0">
                        Middle East Technical University - Turkey, Ankara
                      </p>
                      <ul className="m-0">
                        <li>Graduated with 4.0 GPA</li>
                        <li>
                          Thesis: Recurrence Quantification Analysis of Group
                          Eye-Tracking Data
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="row m-0 p-0 pb-2">
                    <div className="col-sm-3 text-center p-0 pt-1">
                      2009-2014
                    </div>
                    <div className="col-sm-9 bg-succes p-0 pt-1">
                      <h3 className="m-0">
                        Bachelor of Science: Mechanical Engineering
                      </h3>
                      <p className="font-italic m-0">
                        University of Tabriz - Iran, Tabriz
                      </p>
                    </div>
                  </div>
                </div>

                <RightSideHeader subject="Research Interests" />
                <ul className="py-2 m-0">
                  <li>
                    Dynamics of Brain-Body-Environment interaction (e.g.,
                    eye-hand coordination, group gaze coordination, etc.)
                  </li>
                  <li>Human-Robot interaction</li>
                  <li>Eye-Tracking and visual attention</li>
                  <li>
                    Machine learning and rigorous mathematical methods to model
                    dynamical systems
                  </li>
                  <li>
                    Modeling human cognition using Symbolic (e.g., Act-R),
                    Connectionist (e.g., Neural Networks, Nengo, etc.) and
                    Dynamical Systems approaches
                  </li>
                  <li>
                    Collective behavior (e.g., collective search, collective
                    decision-making)
                  </li>
                  <li>
                    Development and application of non-linear analysis methods
                    for devising measures on social, psychological and cognitive
                    phenomena (e.g., recurrence quantification analysis)
                  </li>
                  <li>Quantifying emergent patterns in complex systems</li>
                </ul>

                <RightSideHeader subject="Research Experience" />
                <div className="px-3 py-2">
                  <h3 className="font-weight-bold m-0">M.Sc. project:</h3>
                  <p className="m-0">
                    Title: “Non-linear analysis of Eye-Tracking data for group
                    search"
                  </p>
                  <p className="m-0 pb-2">
                    Supervisor: Cengiz Acarturk (Associate Professor, Middle
                    East Technical University)
                  </p>

                  <h3 className="font-weight-bold m-0 border-top">
                    B.Sc. project:
                  </h3>
                  <p className="m-0">
                    Title: “An Experimental Study on the Cavitation Phenomenon
                    in a Centrifugal Pump by using Image Processing Techniques"
                  </p>
                  <p className="m-0">
                    Supervisor: Mohammad T. Shervani-Tabar, Ph.D. (Professor,
                    University of Tabriz)
                  </p>
                </div>

                <RightSideHeader subject="Publications" />
                <div className="px-3 py-2">
                  <p className="m-0">
                    Tajaddini, M., Acarturk, C., Recurrence Quantification
                    Analysis of Group Eye-Tracking Data
                  </p>
                  <p className="m-0 font-italic">Getting ready to submit</p>
                </div>

                <RightSideHeader subject="Professional Training" />
                <div className="px-3 py-2">
                  <h4 className="font-weight-bold">Workshops</h4>
                  <p className="mb-1">
                    Festo Pneumatic S.K., No.2, 6th St., 16th Ave. km8 Karaj
                    Special Road, Tehran, Iran.
                  </p>
                  <p className="mb-1">Basic Programming of PLCS-PLC211</p>
                  <p className="mb-1">From 14 till 17 July 2012</p>
                  <p className="mb-1">
                    The following subject matter was covered in this course:
                  </p>
                  <ul className="m-0 mb-1 pl-4">
                    <li>
                      Basic design of SIMATIC S7 control system with S7300
                      hardware
                    </li>
                    <li>Input and output module tasks</li>
                    <li>The three programming languages: FBD, LDR and STL</li>
                    <li>Basic command set for SIMATIC S7</li>
                    <li>Creating, loading and testing simple programs</li>
                    <li>PLC timers and counters</li>
                    <li>Archiving and retrieving PLC programs</li>
                    <li>
                      The participant is capable of writing simple digital
                      programs using Organization Block and meets the
                      requirements for higher PLC levels
                    </li>
                  </ul>

                  <p className="mb-1 border-top pt-1">
                    Festo Pneumatic S.K., No.2, 6th St., 16th Ave. km8 Karaj
                    Special Road, Tehran, Iran.
                  </p>
                  <p className="mb-1">Modern industrial pneumatics – PN111</p>
                  <p className="mb-1">4 days ending 19 July 2012</p>

                  <p className="mb-1 border-top pt-1">
                    Festo Pneumatic S.K., No.2, 6th St., 16th Ave. km8 Karaj
                    Special Road, Tehran, Iran.
                  </p>
                  <p className="mb-1">Advanced Hydraulics H522</p>
                  <p className="mb-1">From 7 till 10 July 2012</p>
                </div>

                <RightSideHeader subject="Extra-Curricular" />
                <div className="px-3 py-2">
                  <ul className="m-0 mb-1 pl-4">
                    <li>Advanced Piano Player</li>
                    <li>Teaching Piano and Music Theory for beginners</li>
                    <li>Stage performance</li>
                  </ul>
                </div>

                <RightSideHeader subject="References" />
                <div className="px-3 py-2">
                  <ReferencePerson
                    person="Dr. Cengiz Acarturk, [Associate Professor] (Supervisor)"
                    personWebsite="http://acarturk.net/"
                    department="Department of Cognitive Sciences Middle East Technical
                      University Ankara, TURKEY."
                    departmentWebsite="http://ii.metu.edu.tr/"
                  />
                  <ReferencePerson
                    person="Dr. Cem Bozsahin, [Professor]"
                    personWebsite="http://users.metu.edu.tr/bozsahin/"
                    department="Department of Cognitive Sciences Middle East Technical
                      University Ankara, TURKEY."
                    departmentWebsite="http://ii.metu.edu.tr/"
                  />
                  <ReferencePerson
                    person="Dr. Murat Perit Cakir, [Assistant Professor]"
                    personWebsite="http://users.metu.edu.tr/perit/"
                    department="Department of Cognitive Sciences Middle East Technical
                      University Ankara, TURKEY."
                    departmentWebsite="http://ii.metu.edu.tr/"
                  />
                  <ReferencePerson
                    person="Dr. Umut Ozge, [Assistant Professor]"
                    personWebsite="http://users.metu.edu.tr/umozge/"
                    department="Department of Cognitive Sciences Middle East Technical
                      University Ankara, TURKEY."
                    departmentWebsite="http://ii.metu.edu.tr/"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="blockquote">
                <p className="font-weight-bold">
                  This is an Anti-CV in the spirit of Nassim Taleb.
                </p>
              </div>
              <div className="blockquote text-right">
                <p>
                  People don't walk around with anti-resumes telling you what
                  they have not studied or experienced (it's the job of their
                  competitors to do that), but it would be nice if they did.
                </p>
                <footer className="blockquote-footer">
                  Nassim Taleb,
                  <cite title="The Black Swan">The Black Swan, part 1</cite>
                </footer>
              </div>
            </div>
            <div className="card-body">
              <p>coming soon ...</p>
            </div>
          </div>
        </ReactCardFlip>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const cv = await getCV();
  return { props: { cv } };
};

export default CV;
