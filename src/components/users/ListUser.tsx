import { Avatar, Card, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { IUser } from "../../interfaces/User";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";

interface IListUserProps {
  users: IUser[];
  handleDelete: (id: string | number) => void;
}

const ListUser: React.FC<IListUserProps> = ({ users, handleDelete }) => {
  return (
    <div>
      <h1>List User</h1>
      <Row gutter={10} justify="center">
        {users.map((user) => (
          <Col span={6} key={user.id}>
            <Card
              style={{ textAlign: "left" }}
              actions={[
                <Link to={`/users/${user.id}`}>
                  <EyeOutlined />
                </Link>,
                <DeleteOutlined
                  onClick={handleDelete.bind(null, user.id)}
                  color="#eb2f96"
                />,
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://i.pinimg.com/originals/34/22/bd/3422bdbb27f6c1df7d03e1421a19d887.jpg" />
                }
                title={user.name}
                description={user.email}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ListUser;
