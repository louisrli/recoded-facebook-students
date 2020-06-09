import React from "react";
import db from "./firebase";
import Card from "react-bootstrap/Card";

// These props are destructured from the Firebase field names.
const ProfileBox = ({ city, imageUrl, name, profile, userId }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{profile}</Card.Text>
        <Card.Text>{city}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const FacebookPage = () => {
  const [profiles, setProfiles] = React.useState([]);
  React.useEffect(async () => {
    const profiles = await db
      .collection("profiles")
      .get()
      .then((querySnapshot) => {
        return querySnapshot.docs.map((doc) => doc.data());
      });
    setProfiles(profiles);
  }, []);
  return (
    <div>
      {profiles.map((p) => (
        <ProfileBox {...p} />
      ))}
    </div>
  );
};

export default FacebookPage;
