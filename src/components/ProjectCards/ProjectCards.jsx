import { Col } from "react-bootstrap"

const  ProjectCard = ({title,description, imgUrl,projectUrl}) => {
  const redirectToSite = () => {
    window.open(projectUrl, '_blank');
  };
    return(
        <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx cursor-pointer" onClick={()=>redirectToSite()}>
          <img src={imgUrl} />
          <div className="proj-txtx cursor-pointer">
            <h4 className="cursor-pointer">{title}</h4>
            <span className="cursor-pointer">{description}</span>
          </div>
        </div>
      </Col>
    )
}

export default ProjectCard