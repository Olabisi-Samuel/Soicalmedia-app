import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  //Temporary Dummy Data
  const stories = [
    {
      id: 1,
      name: "James Doe",
      img: "https://cdn.pixabay.com/photo/2022/02/10/14/18/building-7005414__340.jpg",
    },
    {
      id: 2,
      name: "James Doe",
      img: "https://cdn.pixabay.com/photo/2022/10/31/04/55/woman-7558886__340.jpg",
    },
    {
      id: 3,
      name: "James Doe",
      img: "https://cdn.pixabay.com/photo/2022/10/17/15/55/meditate-7528123__340.jpg",
    },
    {
      id: 4,
      name: "James Doe",
      img: "https://cdn.pixabay.com/photo/2022/10/31/17/57/subway-7560452__340.jpg",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePicture} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => {
        return (
          <div className="story" key={story.id}>
            <img src={story.img} alt="" />
            <span>{story.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
