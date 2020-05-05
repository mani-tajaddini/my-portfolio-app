import React, { useState } from "react";

const Subscribe = () => {
  const [isChecked, setIsChecked] = useState({
    all: true,
    philosophy: false,
    math: false,
    programming: false,
    introspection: false,
    languages: false,
    food: false
  });

  const setOthersToFalse = s => {
    return {
      ...s,
      philosophy: false,
      math: false,
      programming: false,
      introspection: false,
      languages: false,
      food: false
    };
  };

  const setStatusOfAll = s => {
    if (
      Object.values(s)
        .slice(1)
        .includes(true)
    ) {
      return { ...s, all: false };
    } else {
      return { ...s, all: true };
    }
  };

  const handleIsChecked = source => {
    switch (source) {
      case "all":
        setIsChecked(prevState => {
          if (!prevState[source]) {
            return setOthersToFalse({ ...prevState, all: true });
          } else {
            return { ...prevState };
          }
        });
        break;
      case "philosophy":
        setIsChecked(prevState =>
          setStatusOfAll({
            ...prevState,
            philosophy: !prevState[source]
          })
        );
        break;
      case "math":
        setIsChecked(prevState =>
          setStatusOfAll({ ...prevState, math: !prevState[source] })
        );
        break;
      case "programming":
        setIsChecked(prevState =>
          setStatusOfAll({
            ...prevState,
            programming: !prevState[source]
          })
        );
        break;
      case "introspection":
        setIsChecked(prevState =>
          setStatusOfAll({
            ...prevState,
            introspection: !prevState[source]
          })
        );
        break;
      case "languages":
        setIsChecked(prevState =>
          setStatusOfAll({
            ...prevState,
            languages: !prevState[source]
          })
        );
        break;
      case "food":
        setIsChecked(prevState =>
          setStatusOfAll({ ...prevState, food: !prevState[source] })
        );
        break;

      default:
        console.log("Well nothing");
        break;
    }
  };

  return (
    <section className="footer-2 section-padding gray-bg pb-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="subscribe-footer text-center">
              <div className="form-group mb-0">
                <h2 className="mb-3">Subscribe to Newsletter</h2>
                <p className="mb-1">
                  Subscribe to my Newsletter for new blog posts.
                </p>
                <p className="mb-4">
                  I'll only send emails when new content is posted. No spam.
                </p>
                <form
                  action="https://manitajaddini.us8.list-manage.com/subscribe/post?u=e444566775491dab0e2279ecb&amp;id=8f5932d8e6"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate form-group form-row align-items-center mb-0"
                  target="_blank"
                  noValidate
                >
                  <div className="col-sm-9">
                    {/* <label htmlFor="mce-EMAIL">Email Address </label> */}
                    <input
                      type="email"
                      defaultValue=""
                      name="EMAIL"
                      className="required email form-control"
                      placeholder="Email Address"
                      id="mce-EMAIL"
                    />
                  </div>
                  <div className="clear col-sm-3">
                    <input
                      readOnly
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      className="button btn btn-dark"
                    />
                  </div>
                  <div>
                    <div className="container">
                      <ul className="ks-cboxtags">
                        <li>
                          <input
                            readOnly
                            type="checkbox"
                            value="1"
                            name="group[317601][1]"
                            id="mce-group[317601]-317601-0"
                            checked={isChecked.all}
                            onClick={() => handleIsChecked("all")}
                          />
                          <label htmlFor="mce-group[317601]-317601-0">
                            All
                          </label>
                        </li>
                        <li>
                          <input
                            readOnly
                            type="checkbox"
                            value="2"
                            name="group[317601][2]"
                            id="mce-group[317601]-317601-1"
                            checked={isChecked.philosophy}
                            onClick={() => handleIsChecked("philosophy")}
                          />
                          <label htmlFor="mce-group[317601]-317601-1">
                            Philosophy
                          </label>
                        </li>
                        <li>
                          <input
                            readOnly
                            type="checkbox"
                            value="4"
                            name="group[317601][4]"
                            id="mce-group[317601]-317601-2"
                            checked={isChecked.math}
                            onClick={() => handleIsChecked("math")}
                          />
                          <label htmlFor="mce-group[317601]-317601-2">
                            Math
                          </label>
                        </li>
                        <li>
                          <input
                            readOnly
                            type="checkbox"
                            value="8"
                            name="group[317601][8]"
                            id="mce-group[317601]-317601-3"
                            checked={isChecked.programming}
                            onClick={() => handleIsChecked("programming")}
                          />
                          <label htmlFor="mce-group[317601]-317601-3">
                            Programming
                          </label>
                        </li>
                        <li>
                          <input
                            readOnly
                            type="checkbox"
                            value="16"
                            name="group[317601][16]"
                            id="mce-group[317601]-317601-4"
                            checked={isChecked.introspection}
                            onClick={() => handleIsChecked("introspection")}
                          />
                          <label htmlFor="mce-group[317601]-317601-4">
                            Introspection
                          </label>
                        </li>
                        <li>
                          <input
                            readOnly
                            type="checkbox"
                            value="32"
                            name="group[317601][32]"
                            id="mce-group[317601]-317601-5"
                            checked={isChecked.languages}
                            onClick={() => handleIsChecked("languages")}
                          />
                          <label htmlFor="mce-group[317601]-317601-5">
                            Languages
                          </label>
                        </li>
                        <li>
                          <input
                            readOnly
                            type="checkbox"
                            value="64"
                            name="group[317601][64]"
                            id="mce-group[317601]-317601-6"
                            checked={isChecked.food}
                            onClick={() => handleIsChecked("food")}
                          />
                          <label htmlFor="mce-group[317601]-317601-6">
                            Food
                          </label>
                        </li>
                      </ul>
                    </div>
                    <style jsx>{`
                      body,
                      html {
                        margin: 0;
                        padding: 0;
                      }

                      body {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 100vh;
                        background: #ffefba;
                        /* fallback for old browsers */
                        background: -webkit-linear-gradient(
                          to right,
                          #ffffff,
                          #ffefba
                        );
                        /* Chrome 10-25, Safari 5.1-6 */
                        background: linear-gradient(to right, #ffffff, #ffefba);
                        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                      }

                      .container {
                        max-width: 640px;
                        font-family: "Segoe UI", Tahoma, Geneva, Verdana,
                          sans-serif;
                        font-size: 13px;
                      }

                      ul.ks-cboxtags {
                        list-style: none;
                        padding: 20px;
                      }
                      ul.ks-cboxtags li {
                        display: inline;
                      }
                      ul.ks-cboxtags li label {
                        display: inline-block;
                        background-color: rgba(255, 255, 255, 0.9);
                        border: 2px solid rgba(139, 139, 139, 0.3);
                        color: #adadad;
                        border-radius: 5px;
                        white-space: nowrap;
                        margin: 3px 0px;
                        -webkit-touch-callout: none;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;
                        -webkit-tap-highlight-color: transparent;
                        transition: all 0.2s;
                      }

                      ul.ks-cboxtags li label {
                        padding: 8px 12px;
                        cursor: pointer;
                      }

                      ul.ks-cboxtags li label::before {
                        display: inline-block;
                        font-style: normal;
                        font-variant: normal;
                        text-rendering: auto;
                        -webkit-font-smoothing: antialiased;
                        font-family: "Font Awesome 5 Free";
                        font-weight: 900;
                        font-size: 12px;
                        padding: 2px 6px 2px 2px;
                        content: "\f067";
                        transition: transform 0.3s ease-in-out;
                      }

                      ul.ks-cboxtags
                        li
                        input[type="checkbox"]:checked
                        + label::before {
                        content: "\f00c";
                        transform: rotate(-360deg);
                        transition: transform 0.3s ease-in-out;
                      }

                      ul.ks-cboxtags li input[type="checkbox"]:checked + label {
                        border: 1px solid #355969;
                        background-color: #12232a;
                        color: #fff;
                        transition: all 0.2s;
                      }

                      ul.ks-cboxtags li input[type="checkbox"] {
                        display: absolute;
                      }
                      ul.ks-cboxtags li input[type="checkbox"] {
                        position: absolute;
                        opacity: 0;
                      }
                      ul.ks-cboxtags li input[type="checkbox"]:focus + label {
                        border: 2px solid #e9a1ff;
                      }
                    `}</style>
                  </div>
                  <p>
                    <a
                      href="https://us8.campaign-archive.com/home/?u=e444566775491dab0e2279ecb&id=8f5932d8e6"
                      title="View previous campaigns"
                    >
                      View previous campaigns.
                    </a>
                  </p>
                  <div className="clear">
                    <div className="response" style={{ display: "none" }}></div>
                    <div className="response" style={{ display: "none" }}></div>
                  </div>
                  <div
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_e444566775491dab0e2279ecb_8f5932d8e6"
                      tabIndex="-1"
                      defaultValue=""
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
