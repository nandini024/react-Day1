import "./Card1.css";

function Card2() {
  return (
    <div className="card-container">
      <h1> Backend Technologies</h1>
      <div className="cards-row">
        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
            alt="HTML"
          />
          <p>Node.js is a JavaScript runtime that allows you to run JavaScript on the server side.
          It's fast and event-driven, perfect for building scalable web apps.</p>
        </div>

        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="CSS" />
          <p>Python is a beginner-friendly, high-level programming language known for its clean and readable syntax.
          It’s super versatile — used in web development, data science, AI, automation, and more!.</p>
        </div>

        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
            alt="JavaScript"
          />
          <p>Express.js is a minimal Node.js framework for building web servers and APIs.
          It simplifies routing, middleware, and request handling.</p>
        </div>

        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
            alt="Bootstrap"
          />
          <p>Java is a high-level, object-oriented programming language known for its "write once, run anywhere" capability.
          It’s widely used in web, mobile (especially Android), and enterprise applications..</p>
        </div>
      </div>
    </div>
  );
}

export default Card2;
