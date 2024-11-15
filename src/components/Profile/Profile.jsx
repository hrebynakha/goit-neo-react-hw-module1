import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.mainInfo}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.textBold}>{name}</p>
        <p className={css.textSecondary}>@{tag}</p>
        <p className={css.textSecondary}>{location}</p>
      </div>
      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span>Followers</span>{" "}
          <span className={css.textBold}>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span>Views</span> <span className={css.textBold}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span>Likes</span> <span className={css.textBold}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
