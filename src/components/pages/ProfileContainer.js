import ProfileMissions from '../missions/ProfileMissions';
import ProfileRocket from '../rockets/ProfileRocket';

const ProfileContainer = () => (
  <div className="profileContainer">
    <ProfileRocket />
    <ProfileMissions />
    <ProfileDragon />
  </div>
);

export default ProfileContainer;
