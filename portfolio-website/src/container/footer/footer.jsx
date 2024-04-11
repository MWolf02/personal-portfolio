import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./footer.scss";
import { useForm, ValidationError } from "@formspree/react";

const Footer = () => {
  const [state, handleSubmit] = useForm("mnqeovnr");

  if (state.succeeded) {
    return (
      <h3 className="head-text">
        Thanks for reaching out! I'll get back to you <span>ASAP.</span>
      </h3>
    );
  }

  return (
    <>
      <h2 className="head-text">
        Let's Have A <span>Chat</span>
      </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="Email" />
          <a href="mailto:martinwolflauring@gmail.com" className="p-text" >
            martinwolflauring@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="Email" />
          <a href="tel: +4528598814" className="p-text" >
            +45 28 59 88 14
          </a>
        </div>
      </div>
      <form className="app__footer-form app__flex" onSubmit={handleSubmit}>
        <div>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-text"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea id="message" name="message" placeholder="Your Message" className="p-text" required/>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
