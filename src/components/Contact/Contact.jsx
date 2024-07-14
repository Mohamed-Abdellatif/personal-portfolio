
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";

const Contact = () => {
  

  
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="contact us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <h4>My Email: mohamed.osman.abdellatif@gmail.com</h4>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
