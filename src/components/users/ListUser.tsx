import React from "react";
import { Link } from "react-router-dom";
import { IUser } from "../../interfaces/User";

interface IListUserProps {
  users: IUser[];
  handleDelete: (id: string | number) => void;
}

const ListUser: React.FC<IListUserProps> = ({ users, handleDelete }) => {
  return (
    <div>
      <h1>List User</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <p>{user.email}</p>

          <div>
            <Link to={`/users/${user.id}`}>Detail</Link>
            <button onClick={handleDelete.bind(null, user.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListUser;
