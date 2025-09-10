import { useState } from "react";
import { useFetchTasks } from "../reactQueryCustomHooks";
import { TaskItem, Modal } from "./index.js";
import { useGlobalContext } from "../context/Context";
import { useDeleteTask, useDeleteFile } from "../reactQueryCustomHooks";

const TaskList = () => {
  const [activeTask, setActiveTask] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [taskToDeleteId, setTaskToDeleteId] = useState(null);
  const [fileToDeleteName, setFileToDeleteName] = useState(null);
  const { searchTerm, onlyImportant, taskStatus } = useGlobalContext();

  const { deleteTask } = useDeleteTask();
  const { deleteFile } = useDeleteFile();
  const { data, isPending, error, isError } = useFetchTasks();

  const handleDeleteClick = (id, file) => {
    setFileToDeleteName(file);
    setTaskToDeleteId(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (fileToDeleteName) {
      deleteFile({ fileToDelete: fileToDeleteName });
    }
    if (taskToDeleteId !== null) {
      deleteTask(taskToDeleteId);
    }
    setShowModal(false);
    setTaskToDeleteId(null);
    setFileToDeleteName(null);
  };

  const cancelDelete = () => {
    setShowModal(false);
    setTaskToDeleteId(null);
  };

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
        {error?.response?.data || "Ein Fehler ist aufgetreten"}
      </p>
    );
  }

  return (
    <>
      {searchTerm ? (
        <h4 style={{ color: "var(--secondary-coffee)", textTransform: "none" }}>
          <span>{`Alle Aufgaben mit "${searchTerm}" im Titel`}</span>
        </h4>
      ) : (
        <h4 style={{ color: "var(--secondary-coffee)", textTransform: "none" }}>
          {onlyImportant ? (
            <span>Wichtige Aufgaben</span>
          ) : (
            <span>Alle Aufgaben</span>
          )}
          {taskStatus ? (
            taskStatus === "erledigt" ? (
              <span>, die erledigt sind</span>
            ) : (
              <span>, die in bearbeitung sind</span>
            )
          ) : (
            ""
          )}
        </h4>
      )}
      {data.tasks.length < 1 && (
        <h4 style={{ color: "var(--secondary-coffee)", textTransform: "none" }}>
          Keine Aufgaben wurden gefunden
        </h4>
      )}
      <ul className="tasks-container">
        {data.tasks.map((task) => {
          return (
            <TaskItem
              key={task._id}
              taskInfo={task}
              changeActiveTask={changeActiveTask}
              activeTask={activeTask}
              onDelete={handleDeleteClick}
            />
          );
        })}
      </ul>
      {showModal && (
        <Modal
          message="Die Aufgabe wird endgültig gelöscht."
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </>
  );
};
export default TaskList;
