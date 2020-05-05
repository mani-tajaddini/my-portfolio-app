const Contact = () => (
  <div id="contact" className="contactSection section">
    <div className="col-md-12 text-center">
      <p className="subHeading">Like what you see?</p>
      <h2 className="mb-3">I'd love to hear from you!</h2>
      <div className="button_cont" align="center">
        <a
          className="example_e"
          href="mailTo:mtajaldini@gmail.com"
          target="_blank"
          rel="nofollow noopener"
        >
          GET IN TOUCH!
        </a>
      </div>
    </div>
    <style jsx global>{`
      .example_e {
        border: none;
        background: #12232a;
        color: #ffffff !important;
        font-weight: 100;
        padding: 20px;
        text-transform: uppercase;
        border-radius: 6px;
        display: inline-block;
        transition: all 0.3s ease 0s;
      }

      .example_e:hover {
        color: #404040 !important;
        font-weight: 700 !important;
        letter-spacing: 3px;
        background: none;
        -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
        -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
        transition: all 0.3s ease 0s;
      }
    `}</style>
  </div>
);

export default Contact;
