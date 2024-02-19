import React, { useState, useEffect } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Drawer from "@mui/joy/Drawer";
import DialogTitle from "@mui/joy/DialogTitle";
import ModalClose from "@mui/joy/ModalClose";
import styled from "styled-components";
import drive from "../assets/images/Project Socials/google-drive.png";
import youtube from "../assets/images/Project Socials/youtube.png";
import instagram from "../assets/images/Project Socials/Instagram.jpg";
import vimeo from "../assets/images/Project Socials/Vimeo.png";

import { Zoom } from "react-awesome-reveal";
import { db } from "../firebaseinit";
import { collection, getDocs } from "firebase/firestore";

const ProjectContain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  justify-content: center;
  align-items: center;
  margin-bottom:15px;

  .ProjectBox {
    width: 100%;

    .Zoom {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-radius: 30px;

      h3 {
        width: 60%;
        font-size: 2.5em;
        font-family: "Prata", serif;
        font-weight: bold;
        background-clip: text;
        color: transparent;
        background-image: radial-gradient(
          circle,
          rgba(238, 174, 202, 1) 0%,
          rgba(148, 187, 233, 1) 100%
        );

        @media (max-width: 60em) {
          font-size: 1.5em;
        }

        @media (max-width: 40em) {
          font-size: 1.1em;
        }
      }

      .ProjectButton {
        color: #fff;
        font-size: 1em;
        transition: 0.5s ease-in-out;
      }

      .ProjectButton:hover {
        color: black;
      }
    }
  }
`;

const DrawerSahab = styled.div`
  height: 100%;
  background: rgb(8, 7, 11);
  box-shadow: 0px 2px 15px 10px rgb(34, 34, 79);
  color: wheat;
  font-family: "Alata";
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h3{
    font-size: 2.2em;
    padding:5px;

    @media(max-width:90em){
      font-size: 2em;
    }

    @media(max-width:60em){
      font-size: 1.5em;
    }

    @media(max-width:40em){
      font-size: 1.2em;
    }

  }

  img {
    height: 25%;
    width: 80%;
    border-radius: 10px;
    box-shadow: 0px 2px 15px 10px rgb(34, 34, 79);

    @media (max-width: 60em) {
      height: 20%;
      width: 85%;
    }

    @media (max-width: 40em) {
      height: 20%;
      width: 88%;
    }
  }

  p {
    width: 90%;
    color: #fff;
    text-align: left;
    padding: 10px;
    font-size: ${(props) => props.theme.fontlg};


    @media (max-width: 60em) {
      font-size: 1.1em;
    }

    @media (max-width: 40em) {
      font-size: 1em;
    }
  }
`;

const Social = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    height: 32px;
    width: 32px;
    box-shadow: none;

    @media (max-width: 40em) {
      height: 28px;
      width: 28px;
    }
  }
`;

export default function ProjectDrawer() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from Firestore
    const fetchProjects = async () => {
      try {
        const projectsSnapshot = await getDocs(collection(db, "projects"));
        const projectsData = projectsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects: ", error);
      }
    };

    fetchProjects();
  }, []);

  const handleProjectClick = (projectId) => {
    // Update the state to open the corresponding project drawer
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId
          ? { ...project, open: true }
          : { ...project, open: false }
      )
    );
  };

  const handleCloseDrawer = (projectId) => {
    // Close the corresponding project drawer
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId ? { ...project, open: false } : project
      )
    );
  };

  return (
    <ProjectContain>
      {projects.map((project, index) => (
        <Box className="ProjectBox" key={project.id}>
          <Zoom triggerOnce>
            <div
              className="Zoom"
              data-scroll
              data-scroll-speed="1"
              data-scroll-delay="0.13"
            >
              <h3>{index + 1 + ".  " + project.Name}</h3>
              <Button
                variant="outlined"
                color="neutral"
                onClick={() => handleProjectClick(project.id)}
                className="ProjectButton"
              >
                Know More
              </Button>
            </div>
          </Zoom>
          <Drawer
            open={project.open}
            onClose={() => handleCloseDrawer(project.id)}
            anchor="right"
            variant="outlined"
            className="DrawerSahab"
          >
            <ModalClose />
            <DrawerSahab>
              <h3>
               {project.Name}
              </h3>
              <img src={project.Image} alt="projectImg" />
              <p>
                {project.About}
                <br />
                <br />
                Check it out !!!
                <br />
                <br />
              </p>
              <Social>
                {project.Drive !== "" ? (
                  <a href={project.Drive} target="_blank">
                    <img alt="drive-pic" src={drive} />
                  </a>
                ) : null}
                {project.YouTube !== "" ? (
                  <a href={project.YouTube} target="_blank">
                    <img alt="youTube-pic" src={youtube} />
                  </a>
                ) : null}
                {project.Instagram !== "" ? (
                  <a href={project.Instagram} target="_blank">
                    <img alt="insta-pic" src={instagram} />
                  </a>
                ) : null}
                {project.Vimeo !== "" ? (
                  <a href={project.Vimeo} target="_blank">
                    <img alt="vimeo-pic" src={vimeo} />
                  </a>
                ) : null}
              </Social>
            </DrawerSahab>
          </Drawer>
        </Box>
      ))}
    </ProjectContain>
  );
}
