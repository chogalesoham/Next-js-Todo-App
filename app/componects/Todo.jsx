import React from "react";

const Todo = ({
  id,
  title,
  description,
  iscomplited,
  mongoID,
  deleteTodo,
  completeTodo,
}) => {
  return (
    <tr>
      <th>{id + 1}</th>
      <td>{title}</td>
      <td>{description}</td>

      <td className=" flex gap-3 items-center justify-center">
        <button
          onClick={() => deleteTodo(mongoID)}
          className=" bg-red-500 text-cyan-50 py-3 px-5 transition-all hover:bg-black"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Todo;
