import { BiSolidStar, BiStar } from "react-icons/bi";
import { useUpdateTask } from "../reactQueryCustomHooks";

const ImportanceBtn = ({ important, taskId }) => {
  const { updateTask } = useUpdateTask();
  return (
    <button
      type="button"
      className="icon-btn"
      onClick={() =>
        updateTask({
          taskId: taskId,
          requestBody: {
            important: important ? false : true,
          },
        })
      }
    >
      {important ? <BiSolidStar /> : <BiStar />}
    </button>
  );
};
export default ImportanceBtn;
