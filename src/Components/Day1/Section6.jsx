import "./Section6.css";

function Section6() {
  return (
    <div className="section6">
      <div className="textWrapper">
        <h1>Contact form</h1>
        <p>
        The following form demonstrates form validation in action. Contact form component reduces the amount of time it is being re-rendered by the user as it embraces uncontrolled form validation to reduce any unnecessary performance penalty.
        </p>
      </div>
      <div className="formWrapper">
        <form>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Your Name" required />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Your Email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Your Message" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Section6;
