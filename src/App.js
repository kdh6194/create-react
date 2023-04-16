import {useState} from 'react';
import TodoList from './components/TodoList';
import Header from './components/haeder/Header';

const filters= ['all','active','completed'];

function App() {
  const [filter,setFilter] = useState(filters[0]);
  return (
    <div>
        <Header filters={filters} filter={filter}
         onFilterChange={(filter)=>setFilter(filter)} />
        <TodoList filter={filter} />
    </div>
  );
}
export default App;
