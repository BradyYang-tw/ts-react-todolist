import React from "react";
import Todo2 from "../models/todo";
import TodoList from "./TodoList";

// const Todo = (props: { items: string[] }) => {
//   return (
//     <div>
//       {props.items.map((data) => (
//         <li key={data}>{data}</li>
//       ))}
//     </div>
//   );
// };

const Todo: React.FC<{ items: Todo2[]; onDelete: (id: string) => void }> = (
  props
) => {
  return (
    <div>
      {props.items.map((data) => (
        <TodoList
          key={data.id}
          text={data.text}
          onDelete={props.onDelete.bind(this, data.id)}
        />
      ))}
    </div>
  );
};

export default Todo;
