import React, { useRef } from "react";
const NewTodoList: React.FC<{ onAddItem: (text: string) => void }> = (
  props
) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = () => {
    console.log("add new");
    console.log(inputRef.current!.value);
    props.onAddItem(inputRef.current!.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new">title</label>
      <input type="text" id="new" ref={inputRef} />
      <button onClick={handleAdd}>Add</button>
    </form>
  );
};
export default NewTodoList;
