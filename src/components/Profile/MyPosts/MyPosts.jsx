import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let postsElements = props.posts.map( post => <Post message={post.message} like={post.like} />)

  let addPost = () => {
    alert(newPostElement.current.value);
  }


  return (
    <div className={classes.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
