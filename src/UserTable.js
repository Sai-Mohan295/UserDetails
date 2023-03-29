import React, { useState, useEffect } from 'react';
import axios from 'axios';

const URL = 'https://dummyjson.com/users';
const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    axios
      .get(URL)
      .then((res) => setUsers(res.data.users))
      .then(() => setLoader(false))
      .catch((err) => console.log(err));
  }, []);

  if (loader) {
    return <h1 style={{ paddingTop: '50px' }}>Loading.. please wait</h1>;
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {users.map((eachUser) => {
            const { id, firstName, image, email, gender, company } = eachUser;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>
                  <img src={image} />
                </td>
                <td>{firstName}</td>
                <td>{email}</td>
                <td>{gender}</td>
                <td>{company.department}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default UserTable;
