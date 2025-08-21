import { useState } from "react";
import { useFetchTasks } from "../reactQueryCustomHooks";
import TaskItem from "./TaskItem";
import { RiH4 } from "react-icons/ri";

const TaskList = () => {
  const [activeTask, setActiveTask] = useState("");
  const { data, isPending, error, isError } = useFetchTasks();

  const changeActiveTask = (id) => {
    if (activeTask) {
      setActiveTask("");
    } else {
      setActiveTask(id);
    }
  };

  if (isPending) {
    return <div className="loading"></div>;
  }

  if (error) {
    return (
      <p style={{ color: "#e64833", fontWeight: "500" }}>
        {error.response.data}
      </p>
    );
  }
  if (data.tasks.length < 1) {
    return <h4>Keine Aufgaben wurden gefunden</h4>;
  }
  return (
    <>
      <ul className="tasks-container">
        {data.tasks.map((task) => {
          return (
            <TaskItem
              key={task._id}
              taskInfo={task}
              changeActiveTask={changeActiveTask}
              activeTask={activeTask}
            />
          );
        })}
      </ul>
    </>
  );
};
export default TaskList;
