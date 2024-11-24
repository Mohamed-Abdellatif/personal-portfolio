
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../../assets/img/meter1.svg"
import meter2 from "../../assets/img/meter2.svg"
import meter3 from "../../assets/img/meter3.svg"
import colorSharp from "../../assets/img/color-sharp.png"

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="skill-bx wow zoomIn">
                    <h2>Skills</h2>
                    <p>Proficient in a variety of programming languages, frameworks, and tools essential for modern software development. Dedicated to continuous learning and staying updated with the latest industry trends and technologies.</p>
                    <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                            <img src={meter1} alt=" percentage of the skill" />
                            <h5>Javascript</h5>
                        </div>
                        <div className="item">
                            <img src={meter3} alt=" percentage of the skill" />
                            <h5>React.JS</h5>
                        </div>
                        <div className="item">
                            <img src={meter3} alt=" percentage of the skill" />
                            <h5>Next.JS</h5>
                        </div>
                        <div className="item">
                            <img src={meter2} alt=" percentage of the skill" />
                            <h5>Python</h5>
                        </div>
                        
                        <div className="item">
                            <img src={meter3} alt=" percentage of the skill" />
                            <h5>HTML5</h5>
                        </div>
                        <div className="item">
                            <img src={meter1} alt=" percentage of the skill" />
                            <h5>CSS3</h5>
                        </div>
                        <div className="item">
                            <img src={meter1} alt=" percentage of the skill" />
                            <h5>Node.js</h5>
                        </div>
                        <div className="item">
                            <img src={meter1} alt=" percentage of the skill" />
                            <h5>Bootstrap</h5>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    </div>
    <img className="background-image-left" src={colorSharp} alt="background " />
</section>
  );
};

export default Skills;
