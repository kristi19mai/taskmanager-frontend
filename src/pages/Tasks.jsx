import { Sidebar, TaskList, AddTaskForm } from "../Components/index.js";

const Tasks = () => {
  return (
    <>
      <Sidebar />
      <div className="main-container">
        <TaskList />
        <AddTaskForm />
      </div>
    </>
  );
};
export default Tasks;
