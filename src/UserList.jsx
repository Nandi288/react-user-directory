import UserCard from "./UserCard";

function UserList({ users }) {
  return (
    <div className="user-list">
      
      {users.length === 0 && <p>No users found.</p>}

     
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          role={user.role}
          city={user.city}
        />
      ))}
    </div>
  );
}

export default UserList;