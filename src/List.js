import React from "react";

const List = ({ todoList }) => {
  return (
    <>
      {todoList !== [] ? (
        <ul>
          {todoList.map((t, key) => (
            <li key={key} className="listitem">
              {t.value}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default List;
