import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src="https://wonder-day.com/wp-content/uploads/2020/04/wonder-day-images-rainbow-37-1024x576.jpg" />
      </div>
      <div className={classes.profileInfo}>avatar+desc</div>
    </div>
  );
};

export default ProfileInfo;