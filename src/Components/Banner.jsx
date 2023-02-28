import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm webdecoded`}
              <span className="wrap">web developer</span>
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo consequatur quis neque, aut animi magni ea facere illo
              optio quae incidunt! Suscipit doloremque fuga quod optio ea, culpa
              dolore omnis.
            </p>
            <button onClick={() => console.log("connect")}>
              Let's connect
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
