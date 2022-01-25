import classes from "./Friends.module.css";

const Friends = (props) => {
  return (
    <div>
      <div className={classes.friends}>
        <div>{props.name}</div>
      </div>
    </div>
  );
};

export default Friends;
