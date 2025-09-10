import { formatDate } from "../utils/formatDate";
import { isDueDate } from "../utils/isDueDate";
import { getDateString } from "../utils/getDateString";
import { IoDocumentOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import DateInput from "./DateInput";
import FileInput from "./FileInput";
import {CloseBtn,StatusBtn,ImportanceBtn} from "./index.js";
import {
  useUpdateTask,
  debounce,
  useUploadFile,
  useDeleteFile,
} from "../reactQueryCustomHooks";
import { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context/Context";

const TaskDetails = ({ taskInfo, changeActiveTask }) => {
  const taskDetails = useRef(null);

  const { updateTask } = useUpdateTask();
  const { uploadFile, data: uploadData } = useUploadFile();
  const { deleteFile, data: deletedFile } = useDeleteFile();
  const {
    task,
    _id,
    status,
    important,
    dueDate,
    originalFilename,
    storedFilename,
    description,
  } = taskInfo;

  const [formData, setFormData] = useState({
    task: task,
    description: description,
  });

  const debounceMutateRef = useRef(
    debounce((data) => {
      updateTask(data);
    }, 1500)
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newData = { ...prev, [name]: value };
      debounceMutateRef.current({ taskId: _id, requestBody: newData });
      return newData;
    });
  };

  const handleDeleteDueDate = () => {
    updateTask({
      taskId: _id,
      requestBody: {
        dueDate: "",
      },
    });
  };

  const handleChangeDate = (e) => {
    updateTask({
      taskId: _id,
      requestBody: {
        dueDate: e.target.value,
      },
    });
  };

  const [pendingFile, setPendingFile] = useState(null);

  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPendingFile(file);
      uploadFile({ fileToUpload: file });
    }
  };

  useEffect(() => {
    if (uploadData && pendingFile) {
      updateTask({
        taskId: _id,
        requestBody: {
          originalFilename: uploadData.originalFilename,
          storedFilename: uploadData.storedFilename,
        },
      });
      setPendingFile(null);
    }
  }, [uploadData, pendingFile]);

  const handleDeleteFile = (e) => {
    deleteFile({ fileToDelete: storedFilename });
  };
  useEffect(() => {
    if (deletedFile) {
      console.log(`Die Datei ${originalFilename} wurde erfolgreich gelöscht.`);

      updateTask({
        taskId: _id,
        requestBody: {
          originalFilename: "",
          storedFilename: "",
        },
      });
    }
  }, [deletedFile]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (taskDetails.current && !taskDetails.current.contains(event.target)) {
        changeActiveTask();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <article className="task-details" ref={taskDetails}>
      <CloseBtn 
        handleClick={changeActiveTask}
      />

      <form className="task-details-form">
        <div className='input-container task-input-container'>
          <StatusBtn status={status} taskId={_id} />
          <textarea
            name="task"
            rows={7}
            maxLength={150}
            value={formData.task}
            className="task-input"
            onChange={handleChange}
            style={{
              textDecoration:
                taskInfo.status === "erledigt" ? "line-through" : "none",
            }}
          />
          <ImportanceBtn important={important} taskId={_id} />
        </div>

        <div className="input-container date-input-container">
          {dueDate ? (
            <>
              <p style={{ color: isDueDate(dueDate) ? "#e64833" : "#254956" }}>
                {getDateString(formatDate(dueDate))}
              </p>
              <button
                type="button"
                className="icon-btn"
                onClick={handleDeleteDueDate}
              >
                <IoCloseOutline />
              </button>
            </>
          ) : (
            <DateInput handleChangeDate={handleChangeDate} />
          )}
        </div>

        <div className="input-container file">
          {storedFilename ? (
            <div className="file-info">
              <IoDocumentOutline />
              <p>{originalFilename}</p>
              <button
                type="button"
                className="icon-btn"
                onClick={handleDeleteFile}
              >
                <IoCloseOutline />
              </button>
            </div>
          ) : (
            <FileInput handleChangeFile={handleChangeFile} />
          )}
        </div>
        <div className="input-container notes">
          <label htmlFor="description" className="form-label">
            {description ? "Notizen" : ""}
          </label>
          <textarea
            placeholder="Notiz hinzufügen"
            name="description"
            id="description"
            maxLength={210}
            rows="6"
            cols="35"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
      </form>
    </article>
  );
};
export default TaskDetails;
