import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRTsb-u3MpFPFYxwo7yMSXyxUQdmDVdi2N900aWFDaU4UeTXjVQsqxnhWqd_ixumPflds&usqp=CAU" />
      {props.message}
      <div>
        <span>Likes {props.like}</span>
      </div>
    </div>
  );
};

export default Post;
