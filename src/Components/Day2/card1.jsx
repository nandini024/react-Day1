import "./Card1.css";

function Card1() {
  return (
    <div className="card-container">
      <h1>Frontend Technologies</h1>
      <div className="cards-row">
        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoLBWyEV75SBEIkRXhQf2RbupVBafLrfFxgQ&s"
            alt="HTML"
          />
          <p>HTML provides the structure for web content, defining elements like headings, paragraphs, and links. It uses tags to mark up the content for browsers to render.</p>
        </div>

        <div className="card">
          <img src="https://img.icons8.com/color/480/css3.png" alt="CSS" />
          <p>CSS controls the presentation of HTML elements, including layout, colors, fonts, and positioning. It enhances the visual appeal and responsiveness of a web page.</p>
        </div>

        <div className="card">
          <img
            src="https://icon2.cleanpng.com/20180513/qgw/avrdx3jd3.webp"
            alt="JavaScript"
          />
          <p> JavaScript adds interactivity to websites by manipulating HTML and CSS dynamically. It can respond to events, validate forms, and update content without reloading the page. .</p>
        </div>

        <div className="card">
          <img
            src="https://img.icons8.com/color/480/bootstrap.png"
            alt="Bootstrap"
          />
          <p>Bootstrap is a framework that provides pre-designed, responsive components like buttons, grids, and navigation bars. It helps create modern, mobile-friendly web pages quickly.</p>
        </div>
      </div>
    </div>
  );
}

export default Card1;
