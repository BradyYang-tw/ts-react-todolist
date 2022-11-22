import React, { useState } from "react";
import Todo from "./components/Todo";
import Todo2 from "./models/todo";
import NewTodoList from "./components/NewTodoList";

const App = () => {
  // const data = [new Todo2("Read book"), new Todo2("Cook noodles")];
  const [data, setData] = useState<Todo2[]>([]);
  const onAddItem = (data: string) => {
    setData((prev: Todo2[]) => [...prev, new Todo2(data)]);
  };
  const onDeleteItem = (id: string) => {
    console.log("delete", id);
    setData((prev: Todo2[]) => prev.filter((item) => item.id != id));
  };
  return (
    <div>
      <h1>React + Typescript Practice</h1>
      <NewTodoList onAddItem={onAddItem} />
      {<Todo items={data} onDelete={onDeleteItem} />}
    </div>
  );
};

export default App;
