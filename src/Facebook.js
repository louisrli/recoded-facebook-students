import React from 'react';
import db from './firebase';

// These props are destructured from the Firebase field names.
const ProfileBox = ({city, imageUrl, name, profile, userId }) => {
  return (
    <div>
      <div>
      {name}
        </div>
      <div>
      {city}
        </div>
      <div>
      {profile}
        </div>
      <img src={imageUrl} alt={name}/>
      </div>
  );
};

const FacebookPage = () => {
  const [profiles, setProfiles] = React.useState([]);
  React.useEffect(async () => {
const profiles = await db.collection("profiles")
.get()
.then(querySnapshot => {
  return querySnapshot.docs.map(doc => doc.data());

});
    setProfiles(profiles);
  }, []);
  return (<div>
    {profiles.map(p => <ProfileBox {...p}/>)}
    </div>);
};

export default FacebookPage;
