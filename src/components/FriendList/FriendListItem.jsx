const FriendListItem = ({ avatar, name, isOnline }) => (
  <li>
    <img src={avatar} alt={`${name} avatar`} width="48" />
    <p>{name}</p>
    <p style={{ color: isOnline ? 'green' : 'red' }}>
      {isOnline ? 'Online' : 'Offline'}
    </p>
  </li>
);

export default FriendListItem;
