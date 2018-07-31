import React from "react";
import "./Team.css";
import profile_pic from "../../media/images/profile_pic.png";
class Team extends React.Component {
  render() {
    return (
      <div className="Team">
        <div className="Team_el-1">
          <h1>Parters</h1>
          <div className="Team_profile-container">
            <img src={profile_pic} alt="profile_pic" />
            <img src={profile_pic} alt="profile_pic" />
            <img src={profile_pic} alt="profile_pic" />
            <img src={profile_pic} alt="profile_pic" />
            <img src={profile_pic} alt="profile_pic" />
          </div>
        </div>
        <hr />
        <div className="Team_el-2">
          <h1>Executive Directors</h1>
          <div className="Team_profile-container">
            <img src={profile_pic} alt="profile_pic" />
            <img src={profile_pic} alt="profile_pic" />
            <img src={profile_pic} alt="profile_pic" />
          </div>
        </div>
        <hr />

        <div className="Team_el-3">
          <h1>Finance&Operations</h1>
          <div className="Team_profile-container">
            <img src={profile_pic} alt="profile_pic" />
            <img src={profile_pic} alt="profile_pic" />
          </div>
        </div>
      </div>
    );
  }
}
export default Team;
