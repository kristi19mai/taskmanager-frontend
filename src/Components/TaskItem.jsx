import StatusBtn from "./StatusBtn";
import { RiDeleteBinLine } from "react-icons/ri";
import ImportanceBtn from "./ImportanceBtn";
import TaskDetails from "./TaskDetails";


const TaskItem = ({ taskInfo, changeActiveTask, activeTask,onDelete }) => {
  const {
    task,
    important,
    originFilename,
    storedFilename,
    description,
    dueDate,
    createdBy,
    createdAt,
    status,
    _id,
  } = taskInfo;

  

  return (
    <li>
      <article className="task-item">
        <StatusBtn status={status} taskId={_id} />
        <p
          onClick={() => changeActiveTask(_id)}
          style={{
            textDecoration:
              taskInfo.status === "erledigt" ? "line-through" : "none",
          }}
        >
          {task}
        </p>
        <div className="task-btns">
          <ImportanceBtn important={important} taskId={_id} />

          <button type="button" className="icon-btn" onClick={()=>onDelete(_id,storedFilename)}>
            <RiDeleteBinLine />
          </button>
        </div>
      </article>
      {activeTask === _id && (
        <TaskDetails taskInfo={taskInfo} changeActiveTask={changeActiveTask} />
      )}
    </li>
  );
};
export default TaskItem;
