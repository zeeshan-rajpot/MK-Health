import  { useState } from "react";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import Buttun from "./Buttun";

const Navbare = (props) => {
    const [activeTab, setActiveTab] = useState(props.activetab);
  return (
    <>
      <div className=" z-1  bg-transparent  w-100  position-absolute  " >
        {["lg"].map((expand) => (
          <Navbar key={expand} expand={expand} className=" navbar " style={{background:props.bgcolor}}>
            <Container  className="">
              <Navbar.Brand as={Link} to="/">
                <img src="/Group 11307.svg" />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <NavLink to="/">
                      {/* <p className="nav-link" style={{ fontSize: '14px' }}>In Prop</p> */}
                      <img src="/Group 11307.svg" />
                    </NavLink>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 ">
                    <NavLink to="/">
                      <span
                        className={`nav-link navpaddingright ${
                          activeTab === "Home" ? "active-tab" : ""
                        }`}
                        onClick={() => {
                          setActiveTab("Home");
                     
                        }}
                      >
                        <p className="mb-0"  style={{ fontSize: "14px" }}> Home</p>
                      </span>
                    </NavLink>
                    <NavLink to="/Provider">
                      <span   className={`nav-link navpaddingright ${
                          activeTab === "Provider" ? "active-tab" : ""
                        }`}
                        onClick={() => {
                          setActiveTab("Provider");
                     
                        }}>
                        <p className="mb-0" style={{ fontSize: "14px" }}>Provider</p>
                      </span>
                    </NavLink>
                    <NavLink to="/Patient">
                      <span  className={`nav-link navpaddingright ${
                          activeTab === "Patient" ? "active-tab" : ""
                        }`}
                        onClick={() => {
                          setActiveTab("Patient");
                     
                        }}
                        >
                        <p className="mb-0" style={{ fontSize: "14px" }}>Patient</p>
                      </span>
                    </NavLink>
                    <NavLink to="/Chat">
                      <span className={`nav-link navpaddingright ${
                          activeTab === "Chat" ? "active-tab" : ""
                        }`}
                        onClick={() => {
                          setActiveTab("Chat");
                     
                        }}>
                        <p className="mb-0" style={{ fontSize: "14px" }}>Chat</p>
                      </span>
                    </NavLink>
                    <NavLink to="/Login">
                    <Buttun
                    text='Login'
                    />
                    </NavLink>
                   
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </>
  );
};

export default Navbare;
