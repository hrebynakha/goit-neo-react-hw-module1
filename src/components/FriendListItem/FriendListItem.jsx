import css from "./FriendListItem.module.css";

const FriendListItem = ({ img, name, status }) => {
  return (
    <div className={css.friendItem}>
      <img src={img} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={status ? css.online : css.offline}>
        {status ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
