import { useEffect, useRef, useState } from "react";
import todoicon from "../assets/todo_icon.png";
import Todoitems from "./Todoitems";

const Todo = () => {
  const [todoText, setTodotext] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  const inputRef = useRef(null);

  //add function
  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodotext((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };
  // delete function
  const deleteTodo = (id) => {
    setTodotext((prvtodos) => {
      return prvtodos.filter((todo) => todo.id !== id);
    });
  };
  // toggle strick out
  const toggle = (id) => {
    setTodotext((prevtodos) => {
      return prevtodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoText));
  }, [todoText]);

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <img src={todoicon} alt="IMG" className="w-8" />
        <h1 className="text-3xl font-semibold">TO-Do List</h1>
      </div>

      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add your task"
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-800"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          ADD +
        </button>
      </div>

      <div>
        {todoText.map((item, index) => {
          return (
            <Todoitems
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
