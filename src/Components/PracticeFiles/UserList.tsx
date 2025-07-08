import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      // .get("https://jsonplaceholder.typicode.com/users")
      .get("https://localhost:7055/api/users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log("Oops error occured:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {!loading ? (
        <Box>
          <h2>users List</h2>
          <ul>
            {users.map((user: any) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </Box>
      ) : (
        <>Loading</>
      )}
    </div>
  );
};

export default UserList;
