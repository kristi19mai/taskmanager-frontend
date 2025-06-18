const Todo = ({
  task,
  important,
  description,
  dueDate,
  createdBy,
  createdAt,
  status,
}) => {
  return <article>{task}{status}</article>;
};
export default Todo;
