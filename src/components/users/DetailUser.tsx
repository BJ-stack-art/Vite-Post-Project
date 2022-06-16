import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IUser } from "../../interfaces/User";
import { getDetailUser } from "../../services/userRepo";

const DetailUser: React.FC = () => {
  const { id } = useParams();
  const [user, setUser] = useState<IUser | null>(null);

  const fetchUser = async () => {
    try {
      const response = await getDetailUser({ id: id as string });
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Detail User</h1>
      {user && (
        <div>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          <div>
            <h2>Address</h2>
            <p>
              {user.address.city} , {user.address.street} , {user.address.suite}{" "}
              , {user.address.zipcode}
            </p>
            <p>
              {user.address.geo.lat} - {user.address.geo.lng}
            </p>
          </div>
          <div>
            <h2>Company</h2>
            <p>{user.company.name}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailUser;
