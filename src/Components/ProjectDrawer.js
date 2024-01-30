import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Drawer from "@mui/joy/Drawer";
import DialogTitle from "@mui/joy/DialogTitle";
import ModalClose from "@mui/joy/ModalClose";
import styled from "styled-components";
import Madhumalti from "../assets/images/Madhumalti.png";
import drive from "../assets/images/Project Socials/google-drive.png";
import youtube from "../assets/images/Project Socials/youtube.png";
import { Fade } from "react-awesome-reveal";

const ProjectContain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  justify-content: center;
  align-items: center;

  .ProjectBox {
    width: 100%;

    .Fade {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-radius: 30px;

      h3 {
        width: 60%;
        font-size: 3em;
        font-family: "Prata", serif;
        font-weight: bold;
        background-clip: text;
        color: transparent;
        background-image: linear-gradient(
          90deg,
          rgba(238, 174, 202, 1) 0%,
          rgba(148, 187, 233, 1) 100%
        );

        @media (max-width: 60em) {
          font-size: 2.5em;
        }

        @media (max-width: 40em) {
          font-size: 1.5em;
        }
      }

      .ProjectButton {
        color: #fff;
        font-size: 1em;
        transition:0.5s ease-in-out;
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
    text-align: justify;
    padding: 10px;
    font-size: ${(props) => props.theme.fontlg};

    @media (max-width: 40em) {
      font-size: 1.1em;
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
  const [openMadhumalti, setOpenMadhumalti] = React.useState(false);
  const [openLayerShot, setOpenLayerShot] = React.useState(false);

  const handleMadhumaltiClick = () => {
    setOpenMadhumalti(true);
  };

  const handleLayerShotClick = () => {
    setOpenLayerShot(true);
  };

  return (
    <ProjectContain>
      <Box
        className="ProjectBox"
      >
        <Fade direction="up" triggerOnce>
          <div className="Fade" data-scroll data-scroll-speed='1' data-scroll-delay='0.13'>
            <h3>1. Madhumalti</h3>
            <Button
              variant="outlined"
              color="neutral"
              onClick={handleMadhumaltiClick}
              className="ProjectButton"
            >
              Know More
            </Button>
          </div>
        </Fade>
        <Drawer
          open={openMadhumalti}
          onClose={() => setOpenMadhumalti(false)}
          anchor="right"
          variant="outlined"
          className="DrawerSahab"
        >
          <ModalClose />
          <DrawerSahab>
            <DialogTitle>
              <h1>Madhumalti</h1>
            </DialogTitle>
            <img src={Madhumalti} alt="projectImg" />
            <p>
              ‘Madhumalti’ is a short film that explores the theme of love. The
              film talks about Anandita who finds colors in her pale life after
              meeting Tara. Here’s the link to the film.
              <br />
              <br />
              Check it out !!
            </p>
            <Social>
              <a href="https://drive.google.com/file/d/1WCv2pdZ4nPewKUIvND4TDK0ojepbl98g/view">
                <img alt="drive-pic" src={drive} />
              </a>
              <a href="https://drive.google.com/file/d/1WCv2pdZ4nPewKUIvND4TDK0ojepbl98g/view">
                <img alt="youTube-pic" src={youtube} />
              </a>
            </Social>
          </DrawerSahab>
        </Drawer>
      </Box>
      <Box
        className="ProjectBox"
      >
        <Fade direction="up" triggerOnce>
          <div className="Fade" data-scroll data-scroll-speed='1' data-scroll-delay='0.13'>
            <h3>2. Layer Shot Ad</h3>
            <Button
              variant="outlined"
              color="neutral"
              onClick={handleLayerShotClick}
              className="ProjectButton"
            >
              Know More
            </Button>
          </div>
        </Fade>
        <Drawer
          open={openLayerShot}
          onClose={() => setOpenLayerShot(false)}
          anchor="right"
          variant="outlined"
          className="DrawerSahab"
        >
          <ModalClose />
          <DrawerSahab>
            <DialogTitle>
              <h1>LayerShot AD</h1>
            </DialogTitle>
            <img src={Madhumalti} alt="projectImg" />
            <p>
              ‘Madhumalti’ is a short film that explores the theme of love. The
              film talks about Anandita who finds colors in her pale life after
              meeting Tara. Here’s the link to the film.
              <br />
              <br />
              Check it out !!
            </p>
            <Social>
              <a href="https://drive.google.com/file/d/1WCv2pdZ4nPewKUIvND4TDK0ojepbl98g/view">
                <img alt="drive-pic" src={drive} />
              </a>
              <a href="https://drive.google.com/file/d/1WCv2pdZ4nPewKUIvND4TDK0ojepbl98g/view">
                <img alt="youTube-pic" src={youtube} />
              </a>
            </Social>
          </DrawerSahab>
        </Drawer>
      </Box>
    </ProjectContain>
  );
}
