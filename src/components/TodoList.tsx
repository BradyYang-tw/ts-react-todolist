import React from "react";
import Todo2 from "../models/todo";
const TodoList = (props: { text: string; onDelete: () => void }) => {
  return <li onClick={props.onDelete}>{props.text}</li>;
};
export default TodoList;
