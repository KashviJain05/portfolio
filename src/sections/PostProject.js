import React, { useEffect, useState } from "react";
import aws from "aws-sdk";
import { db } from "../firebaseinit";
import { collection, getDocs, addDoc } from "firebase/firestore";
import jwt from "jsonwebtoken";
const PostProject = () => {
  const [projectName, setProjectName] = useState("");
  const [projectImage, setProjectImage] = useState("");
  const [aboutProject, setAboutProject] = useState("");
  const [linkType, setLinkType] = useState("");
  const [link, setLink] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const s3 = new aws.S3({
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    });

    const params = {
      Bucket: process.env.REACT_APP_AWS_BUCKET_NAME,
      Key: projectImage.name,
      Body: projectImage,
      ACL: "public-read",
    };

    try {
      const data = await s3.upload(params).promise();
      const awsURL = data.Location.toString();
      try {

        switch (linkType) {
          case "YouTube":
            await addDoc(collection(db, "projects"), {
              About: aboutProject,
              Image: awsURL,
              Name: projectName,
              YouTube: link,
              Instagram: "",
              Vimeo: "",
              Drive: "",
            });
            
            break;

          case "Instagram":
            await addDoc(collection(db, "projects"), {
              About: aboutProject,
              Image: awsURL,
              Name: projectName,
              Instagram: link,
              YouTube: "",
              Vimeo: "",
              Drive: "",
            });
            break;

          case "Vimeo":
            await addDoc(collection(db, "projects"), {
              About: aboutProject,
              Image: awsURL,
              Name: projectName,
              Vimeo: link,
              YouTube: "",
              Instagram: "",
              Drive: "",
            });
            break;

          case "Drive":
            await addDoc(collection(db, "projects"), {
              About: aboutProject,
              Image: awsURL,
              Name: projectName,
              Drive: link,
              YouTube: "",
              Instagram: "",
              Vimeo: "",
            });
        
          default:
            break;
        }

        alert("Project added successfully!");
      } catch (error) {
        console.error("Error adding project:", error);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }

    // Reset form fields
    setProjectName("");
    setProjectImage("");
    setAboutProject("");
    setLinkType("");
    setLink("");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token){
      const decoded = jwt.decode(token,'secret');
      if(decoded.email !== process.env.REACT_APP_EMAIL_ADDRESS){
        window.location.href = "/addProjects";
      }
    }else{
      window.location.href = "/addProjects";
    }
  },[]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "400px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        <h2 style={{ textAlign: "center", color: "wheat" }}>Create Project</h2>
        <div>
          <label>Project Name:</label>
          <input
            type="text"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Enter Project Name"
            required
          />
        </div>
        <div>
          <label>Project Image:</label>
          <input
            type="file"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
            onChange={(e) => setProjectImage(e.target.files[0])}
            accept="image/*"
            required
            placeholder="Upload Project Image"
          />
        </div>
        <div>
          <label>About Project:</label>
          <textarea
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
              height: "100px",
            }}
            value={aboutProject}
            onChange={(e) => setAboutProject(e.target.value)}
            placeholder="Enter About Project"
            required
          />
        </div>
        <div>
          <label>Link Type:</label>
          <select
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
            value={linkType}
            onChange={(e) => setLinkType(e.target.value)}
            required
          >
            <option value="">Select Link Type</option>
            <option value="YouTube">YouTube</option>
            <option value="Instagram">Instagram</option>
            <option value="Vimeo">Vimeo</option>
            <option value="Drive">Google Drive</option>
          </select>
        </div>
        <div>
          <label>Link:</label>
          <input
            type="text"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Enter Link"
            required
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            backgroundColor: "#4caf50",
            color: "white",
            padding: "14px 20px",
            margin: "8px 0",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostProject;
