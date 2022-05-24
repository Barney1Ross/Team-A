import React from "react";

const Stories = () => {
  const [state, setState] = React.useState([
    { id: 1, image: "/images/people1.jpg", name: "Virat.kohli" },
    { id: 2, image: "/images/people2.jpg", name: "Kaius" },
    { id: 3, image: "/images/people3.jpg", name: "Janryc" },
    { id: 4, image: "/images/people4.jpg", name: "Olenor" },
    { id: 5, image: "/images/people5.jpg", name: "Gossa" },
    { id: 6, image: "/images/people6.jpg", name: "Iyana" },
    { id: 7, image: "/images/people7.jpg", name: "Cleoa" },
    { id: 8, image: "/images/people8.jpg", name: "Abraham" },
    { id: 9, image: "/images/people9.jpg", name: "Jhon" },
  ]);
  return (
    <div className="stories">
      {state.map((user) => (
        <div className="stories__info" key={user.id}>
          <div className="stories__img">
            <span>
              <img src={user.image} alt="user" />
            </span>
          </div>
          <div className="stories__name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
