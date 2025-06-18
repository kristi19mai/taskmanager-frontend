import Todo from "./Todo";
import Spinner from './Spinner'
const Todos = ({ todos, loading }) => {
  if(loading){
        return <Spinner/>
      }
  return (
    <main>
    
      <h2>Todos</h2>
      {todos.map((todo) => {

        return <Todo {...todo} key={todo.id || todo.description} />;
      })}
    </main>
  );
};
export default Todos;
