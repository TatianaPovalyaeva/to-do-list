import './App.css';
import image from './heading.png'
import { TodoList } from './TodoList';

function App() {
  return (
    <div className='app'>

    <div className='heading'>
      <h1>Список дел</h1>
      <img className='photo' src={ image } width="60px" alt='list'/>
    </div>
      <TodoList />      
    </div>
  );
}
export default App;
