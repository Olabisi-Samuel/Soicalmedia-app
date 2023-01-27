import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./leftBar.scss";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePicture} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src="" alt="img" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src="" alt="img" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src="" alt="img" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src="" alt="img" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src="" alt="img" />
            <span>Memories</span>
          </div>
        </div>

        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src="" alt="img" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src="" alt="img" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src="" alt="img" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src="" alt="img" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src="" alt="img" />
            <span>Messages</span>
          </div>
        </div>

        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src="" alt="img" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src="" alt="img" />
            <span>Tutorial</span>
          </div>
          <div className="item">
            <img src="" alt="img" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
