import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import db from "./firebase";
import firebase from "firebase";

const SignUpPage = () => {
  // Check if user is logged in.
  // https://firebase.google.com/docs/auth/web/manage-users
  const [user, setUser] = React.useState(firebase.auth().currentUser);
  const [profile, setProfile] = React.useState("");
  const [city, setCity] = React.useState("");

  const handleGoogleAuthClick = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const token = result.credential.accessToken;
        const user = result.user;
        setUser(user);
      })
      .catch(function (error) {
        if (error) {
          alert(JSON.stringify(error));
        }
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await db.collection("profiles").doc(user.uid).set({
      userId: user.uid,
      name: user.displayName,
      profile: profile,
      city: city,
      imageUrl: user.photoURL,
    });

    alert("Submitted!");
  };

  return (
    <div>
      <Form>
        <Form.Group>
          {!user && (
            <div onClick={handleGoogleAuthClick} style={{ cursor: "pointer" }}>
              <img src={require("./google-signin.png")} />
            </div>
          )}
          {user && <div>You're logged in as {user.email}</div>}
          <Form.Control
            placeholder="Profile"
            onChange={(e) => setProfile(e.target.value)}
          />
          <Form.Control
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          />
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SignUpPage;
