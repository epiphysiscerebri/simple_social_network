import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

  let posts = [
    {id: 1, message: "Hi, how are you?", like: "15"},
    {id: 2, message: "It's my first post", like: "20"}
  ]

  let postsElements = posts.map( post => <Post message={post.message} like={post.like} />)

  return (
    <div className={classes.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
