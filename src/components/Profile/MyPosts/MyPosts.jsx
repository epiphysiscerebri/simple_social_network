import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let postsElements = props.posts.map( post => <Post message={post.message} like={post.like} />)

  let addPost = () => {
    props.dispatch({type: "ADD-POST"});
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text});
    
  }

  return (
    <div className={classes.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
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
