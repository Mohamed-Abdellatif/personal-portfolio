import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import ProjectCard from "../ProjectCards/ProjectCards";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import todolistimg from "../../assets/img/todolistimg.png";
import coursesSiteImg from "../../assets/img/coursessite.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import cvSite from "../../assets/img/resume-cv.png";
import portfolioSite from "../../assets/img/portfoliosite.png";
import currencyConverterSite from "../../assets/img/currencyconverter.png";
import wolfClothingImg from "../../assets/img/wolfclothing.png";

const Projects = () => {
  const projects = [
    {
      title: "Todo List",
      description:
        "A dynamic to-do list application built with React.js. Enhanced with drag-and-drop functionality using @hello-pangea/dnd, this app offers a seamless user experience and is deployed on Vercel. ",
      imgUrl: todolistimg,
      projectUrl: "https://react-todo-app-one-bay.vercel.app/",
    },
    {
      title: "Courses Website",
      description:
        "A comprehensive courses website developed using React.js, React Bootstrap, and React Router DOM. The site offers a responsive design and intuitive navigation, providing users with easy access to a variety of courses.",
      imgUrl: coursesSiteImg,
      projectUrl: "https://tuturingbel3raby.vercel.app/",
    },
    {
      title: "CV/Resume Site",
      description:
        "A professional CV/Resume website created with HTML, CSS, and Bootstrap. This site features a clean, modern design, showcasing personal information, skills, and achievements in an organized and visually appealing manner.",
      imgUrl: cvSite,
      projectUrl:
        "https://mohamed-abdellatif.github.io/resume-cv-bootstrap/?name=&email=&message=",
    },
    {
      title: "Portfolio Site",
      description:
        "A personal portfolio website designed with HTML, CSS, and Bootstrap. This site showcases projects, skills, and experiences, featuring a clean and responsive layout for an optimal user experience.",
      imgUrl: portfolioSite,
      projectUrl:
        "https://mohamed-abdellatif.github.io/portfolio-bootstrap/index.html",
    },
    {
      title: "Currency Converter",
      description:
        "A real-time currency converter application built with React.js and Bootstrap. Utilizing APIs to fetch live exchange rates, this site provides users with accurate and up-to-date currency conversions.",
      imgUrl: currencyConverterSite,
      projectUrl: "https://mohamed-abdellatif.github.io/currency-converter/",
    },
    {
      title: "Wolf Clothing",
      description:
        "An e-commerce platform for selling clothes, developed with React.js and SASS. Integrated with Firebase for authentication and database management, and utilizing React Router DOM for seamless navigation.",
      imgUrl: wolfClothingImg,
      projectUrl: "https://regal-melba-3f67cc.netlify.app/",
    },
  ];
  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Explore my portfolio of projects showcasing my practical skills
              and creativity in web development. Click on each project to visit
              its live site and hover over them for more details.
            </p>
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item> */}
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, i) => {
                      return <ProjectCard key={i} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                {/* <Tab.Pane eventKey="second">
                  <Row>
                    {projects.map((project, i) => {
                      return <ProjectCard key={i} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects.map((project, i) => {
                      return <ProjectCard key={i} {...project} />;
                    })}
                  </Row>
                </Tab.Pane> */}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Image" />
    </section>
  );
};

export default Projects;
