import { Col, Container, Row } from "react-bootstrap"
import logo from "../../assets/img/logo.svg"
import navIcon1 from "../../assets/img/nav-icon1.svg"
import navIcon2 from "../../assets/img/nav-icon2.svg"
import navIcon3 from "../../assets/img/nav-icon3.svg"


const Footer = ()=> {
  return (
    <footer className="footer">
       <Container>
        <Row className="align-items-center">
         
            <Col sm={6} className="mt-2">
              <h2>Feel Free To Reach Me Anytime</h2>
            </Col>
            <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
             {/* eslint-disable-next-line */}
              <a href="https://www.linkedin.com/in/mohamed-abdellatif-6060371b0" target="_blank">
                <img src={navIcon1} alt="linkedin logo" />
              </a>
              {/*  eslint-disable-next-line */}
              <a href="https://www.facebook.com/mohamad.abdelateef" target="_blank">
                <img src={navIcon2} alt="facebook logo" />
              </a>
              {/*  eslint-disable-next-line */}
              <a href="https://www.instagram.com/mohamed_abdellatif223" target="_blank">
                <img src={navIcon3} alt="instagram logo" />
              </a>
            </div>
            
            </Col>
        </Row>
       </Container>
    </footer>
  )
}

export default Footer