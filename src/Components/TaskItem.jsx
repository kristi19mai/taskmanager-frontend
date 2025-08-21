import StatusBtn from "./StatusBtn";
import { RiDeleteBinLine } from "react-icons/ri";
import ImportanceBtn from "./ImportanceBtn";
import {
  useUpdateTask,
  useDeleteTask,
  useDeleteFile,
} from "../reactQueryCustomHooks";
import TaskDetails from "./TaskDetails";

const TaskItem = ({ taskInfo, changeActiveTask, activeTask }) => {
  const { updateTask } = useUpdateTask();
  const { deleteTask } = useDeleteTask();
  const { deleteFile } = useDeleteFile();
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

  const handleDeleteTask = () => {
    if (storedFilename) {
      deleteFile({ fileToDelete: storedFilename });
    }
    deleteTask(_id);
  };

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

          <button type="button" className="icon-btn" onClick={handleDeleteTask}>
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
