function UserCard({name , role , city}){

    return(
        <div className="user-card">
            <h3>{name}</h3>
            <p className="role">{role}</p>
            <p className="city">{city}</p>
        </div>
    );
}

export default UserCard;
