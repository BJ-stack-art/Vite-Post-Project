import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { IUser } from "../../interfaces/User";
import { deleteUser, getUsers } from "../../services/userRepo";
import CreateUser from "./CreateUser";
import DetailUser from "./DetailUser";
import ListUser from "./ListUser";

const UserPage: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: string | number) => {
    try {
      await deleteUser({ id });
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <Link to={"/users/create"}>Add user</Link>
      <Routes>
        <Route
          path="/"
          element={<ListUser users={users} handleDelete={handleDelete} />}
        />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/:id" element={<DetailUser />} />
      </Routes>
    </div>
  );
};

export default UserPage;
