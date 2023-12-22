import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./navbar.css";
import logo from "../../assets/landingPage/navbar/Coinzeb.png"

function Scrollbar() {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "linear",
    });
  };

  return (
    <>
      <Navbar expand="lg" className="bg-dark" sticky="fixed">
        <Container>
          <Navbar.Brand
            onClick={scrollToTop}
            style={{ cursor: "pointer" }}
            className="fw-bold  text-white fst-italic"
          >
            <img
              src={logo}
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="AIM Logo"
            />
            {/* <h6>CoinZeb</h6> */}
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="text-white" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto navbar-nav-scroll" navbarScroll>
              <ScrollLink
                to="action1"
                // smooth={true}
                duration={100}
                spy={true}
                exact="true"
                className="me-3 text-white fw-bold mt-2 link-underline link-underline-opacity-0"
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="action2"
                // smooth={true}
                duration={200}
                spy={true}
                exact="true"
                className="me-3 text-white fw-bold mt-2 link-underline link-underline-opacity-0"
              >
                About
              </ScrollLink>

              <ScrollLink
                to="action3"
                // smooth={true}
                duration={600}
                spy={true}
                exact="true"
                className="me-3 text-white fw-bold mt-2 link-underline link-underline-opacity-0"
              >
                FindOn
              </ScrollLink>
              <ScrollLink
                to="action4"
                // smooth={true}
                duration={700}
                spy={true}
                exact="true"
                className="me-3 text-white fw-bold mt-2 link-underline link-underline-opacity-0"
              >
                WhyUs
              </ScrollLink>
              <ScrollLink
                to="action5"
                // smooth={true}
                duration={800}
                spy={true}
                exact="true"
                className="me-3 text-white fw-bold mt-2 link-underline link-underline-opacity-0"
              >
                Contact Us
              </ScrollLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Scrollbar;
