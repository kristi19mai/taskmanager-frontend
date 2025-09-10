import { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { useCreateTask } from "../reactQueryCustomHooks";
import styled from "styled-components";

const AddTaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const { createTask } = useCreateTask();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName) return;
    createTask(taskName, {
      onSuccess: () => setTaskName(""),
    });
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <button className="icon-btn" type="submit">
        <LuPlus />
      </button>
      <input
        maxLength={150}
        className="add-task"
        placeholder="Aufgabe hinzufügen"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: grid;
  grid-template-columns: auto 1fr;
  background-color: var(--grey-200);
  border-radius: var(--borderRadius);
  .add-task {
    border-color: transparent;
    background-color: transparent;
    border-radius: var(--borderRadius);
    min-height: 3rem;
    padding: 1rem 0;
    outline: none;
    font-size: 1.25rem;
    color: var(--grey-600);
  }
  textarea:invalid {
    border: var(--secondary-orange) dashed 1px;
  }
`;
export default AddTaskForm;
