import { FaRegCircle } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useUpdateTask } from "../reactQueryCustomHooks";
const StatusBtn = ({ status, taskId }) => {
  const {updateTask} = useUpdateTask();
  return (
    <button
      className="icon-btn"
      type="button"
      onClick={() =>
        updateTask({
          taskId: taskId,
          requestBody: {
            status: status === "in bearbeitung" ? "erledigt" : "in bearbeitung",
          },
        })
      }
    >
      {status === "erledigt" ? <FaRegCircleCheck /> : <FaRegCircle />}
    </button>
  );
};
export default StatusBtn;
