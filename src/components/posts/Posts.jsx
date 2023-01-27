import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://cdn.pixabay.com/photo/2022/07/28/22/05/woman-7350740__340.jpg",
      desc: "lorem ipsum dolor sit amet, consectetur adip",
      img: "https://cdn.pixabay.com/photo/2022/10/24/20/22/muhlviertel-7544316__340.jpg",
    },
    {
      id: 2,
      name: "John Doe",
      userId: 2,
      profilePic:
        "https://cdn.pixabay.com/photo/2022/07/28/22/05/woman-7350740__340.jpg",
      desc: "lorem ipsum dolor sit amet, consectetur adip",
      img: "https://cdn.pixabay.com/photo/2022/10/07/09/06/bridge-7504605__340.jpg",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
};

export default Posts;
