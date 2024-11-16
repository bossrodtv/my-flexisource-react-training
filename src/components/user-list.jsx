import { useState } from "react";
import { UserCard } from "./user-card";

export function UserList() {
  const [users, setUsers] = useState([
    { name: "Gerard", age: 10 },
    { name: "EJ", age: 20 },
    { name: "Jericho", age: 15 },
  ]);

  return (
    <div>
      <h1>User list:</h1>
      <ul>
        {users.map((user, userIndex) => {
          return <UserCard name={user.name} age={user.age} />;
        })}
      </ul>
    </div>
  );
}
