import React from "react";
import githublogo from "../assets/images/github.png";
import herokulogo from "../assets/images/heroku.png";
import postgreslogo from "../assets/images/postgres.png";
// import infographic from "../assets/images/infographic.png";


const TechstackPage = () => {
  return (
    <div class="container">
      {/* <div class="row" ><h1 class="text-start" style={{marginLeft:"-13px"}}>Technologies Used:</h1></div> */}
      <hr class="bg-dark"></hr>

      <div class="row content">
        <div class="col-sm col-lg-4">
          <img class="image-fluid" alt="github" src={githublogo}></img>
          <h1>Github Pages</h1>
          <p>
            Utilized React.js to create a dynamic web user interface. Hosted the
            project's code on GitHub Pages for easy showcasing and deployment on
            the web, while integrated to backend services on other cloud
            services.
          </p>
        </div>
        <div class="col-sm col-lg-4">
          <img
            class="image-fluid"
            src={herokulogo}
            alt="Herokulogo"
            style={{ marginLeft: "-15px" }}
          ></img>
          <h1>Heroku with Docker</h1>
          {/* <h2>Heroku with Docker</h2> */}
          <p>
            Implemented an Express.js server within a Docker container. Selected
            Heroku as the hosting platform to deploy and manage the Docker
            container,(Create, Read, Update, Delete) operations to my database.
          </p>
        </div>
        <div class="col-sm col-lg-4">
          <img class="image-fluid" alt="postgreslogo" src={postgreslogo}></img>
          <h1>Postgres</h1>
          <p>
            Utilized ElephantSQL to host my PostgreSQL database, creating a
            cloud-based database solution. This implementation ensures seamless
            access and management of the PostgreSQL database in the cloud
          </p>
        </div>
      </div>
      <div class="row">

      </div>
      {/* <div class="row">dfdf</div> */}
      <hr class="bg-dark"></hr>


      <div content class="row justify-content-center">
        <div class="col">
          <img className="info-graphic mx-auto" src="https://i.ibb.co/HpwCbDJ/infographic.png" alt="infographic"/>
        </div>
      </div>

    </div>
  );
}

export default TechstackPage;
