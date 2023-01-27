import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./comments.scss";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //TEMPORARY

  const comments = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://cdn.pixabay.com/photo/2022/07/28/22/05/woman-7350740__340.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consectetur beatae placeat, saepe corrupti cupiditate, nesciunt doloremque maxime, sequi mollitia blanditiis est vero ipsum necessitatibus!",
    },
    {
      id: 2,
      name: "John Doe",
      userId: 2,
      profilePic:
        "https://cdn.pixabay.com/photo/2022/07/28/22/05/woman-7350740__340.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consectetur beatae placeat, saepe corrupti cupiditate, nesciunt doloremque maxime, sequi mollitia blanditiis est vero ipsum necessitatibus! Repellendus nemo minus repudiandae accusantium earum placeat.",
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePicture} alt="" />
        <input type="text" placeholder="Write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => {
        return (
          <div className="comment">
            <img src={comment.profilePic} alt="" />
            <div className="info">
              <span>{comment.name}</span>
              <p>{comment.desc}</p>
            </div>
            <span className="date">1 hour ago</span>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
