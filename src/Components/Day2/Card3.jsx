import "./Card1.css";

function Card3() {
  return (
    <div className="card-container">
      <h1>Databbase</h1>
      <div className="cards-row">
        <div className="card">
          <img
            src="https://webimages.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png" alt="MongoDB" />
"
         
          <p>MongoDB is a NoSQL database that stores data in JSON-like documents.
          It's schema-less and flexible, ideal for dynamic applications.</p>
        </div>

        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="CSS" />
          <p>PostgreSQL is an advanced, open-source relational database system known for its flexibility and extensibility.
It supports SQL along with JSON data types and full-text search for modern web applications.
</p>
        </div>

        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg"
            alt="JavaScript"
          />
          <p>SQL is a domain-specific language used for managing and querying relational databases.
          It’s used to define, manipulate, and query structured data, often with tables and relationships..</p>
        </div>

        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg"
            alt="Bootstrap"
          />
          <p>Firebase is a cloud-based platform providing various backend services like authentication, real-time databases, and hosting.
          It’s easy to integrate with mobile and web apps, especially for real-time data updates.</p>
        </div>
      </div>
    </div>
  );
}

export default Card3;
