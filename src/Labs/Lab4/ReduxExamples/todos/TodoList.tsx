/* eslint-disable @typescript-eslint/no-explicit-any */
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  return (
    <div className="d-flex justify-content-left">
      <div className="w-50">
        <h2 className="text-center">Todo List</h2>
        <ul className="list-group border border-secondary rounded p-2">
          <TodoForm />
          {todos.map((todo: any) => (
            <TodoItem todo={todo} />
          ))}
        </ul>
        <hr />
      </div>
    </div>
  );
}
