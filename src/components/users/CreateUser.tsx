import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../interfaces/User";
import { createUser } from "../../services/userRepo";

const CreateUser: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IUser>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await createUser(data);
      navigate("/users");
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name</label>
          <input type="text" {...register("name")} />
        </div>
        <div>
          <label>Username</label>
          <input type="text" {...register("username")} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" {...register("email")} />
        </div>
        <div>
          <label>Phone</label>
          <input type="text" {...register("phone")} />
        </div>
        <div>
          <label>Website</label>
          <input type="text" {...register("website")} />
        </div>
        <div>
          <h3>Address</h3>
          <div>
            <label>Street</label>
            <input type="text" {...register("address.street")} />
          </div>
          <div>
            <label>Suite</label>
            <input type="text" {...register("address.suite")} />
          </div>
          <div>
            <label>City</label>
            <input type="text" {...register("address.city")} />
          </div>
          <div>
            <label>Zipcode</label>
            <input type="text" {...register("address.zipcode")} />
          </div>
          <div>
            <h5>Geo</h5>
            <div>
              <label>Lat</label>
              <input type="text" {...register("address.geo.lat")} />
            </div>
            <div>
              <label>Long</label>
              <input type="text" {...register("address.geo.lng")} />
            </div>
          </div>
          <div>
            <h5>Company</h5>
            <div>
              <label>Name</label>
              <input type="text" {...register("company.name")} />
            </div>
            <div>
              <label>Catch Phrase</label>
              <input type="text" {...register("company.catchPhrase")} />
            </div>
            <div>
              <label>BS</label>
              <input type="text" {...register("company.bs")} />
            </div>
          </div>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateUser;
