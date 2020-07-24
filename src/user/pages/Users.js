import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUsT2OS-43VY5Y13EvZb0Hay-TVEy0BY7JGQ&usqp=CAU",
      name: "Colby Gallagher",
      placeCount: 5,
    },
    {
      id: "u2",
      image:
        "https://media-exp1.licdn.com/dms/image/C5603AQGiu5YjnacN6Q/profile-displayphoto-shrink_800_800/0?e=1600300800&v=beta&t=dJE_UvpFJvzfAaTVLoXSTBTla_wEU6UuV0vnZb_Jjao",
      name: "Zoe Ebert",
      placeCount: 1,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
