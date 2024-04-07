import React, { useState } from 'react';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { todoAtom } from './store/Atoms/todoAtoms';
import { filterAtom } from './store/Atoms/filterAtom';
import { todoSelector } from './store/Selectors/todoselector';

function App() {
  return (
    <RecoilRoot>
      <Menubar />
      <Filter />
    </RecoilRoot>
  );
}

function Menubar() {
  const [todos, setTodos] = useRecoilState(todoAtom);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function addTodo() {
    const todo = {
      title,
      description
    };
    setTodos([...todos, todo]);
    setTitle('');
    setDescription('');
  }

  return (
    <div>
      <input
        value={title}
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Enter title'
      />
      <br />
      <input
        value={description}
        type='text'
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Enter description'
      />
      <br />
      <button onClick={addTodo}>Add Todo</button>
      {/* showing the todos in the list  */}
      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

function Filter() {
  const [filter, setFilter] = useRecoilState(filterAtom);
  const filteredTodos = useRecoilValue(todoSelector); // Use a descriptive variable name

  return (
    <div>
      <input
        type="text"
        placeholder="Filter element"
        value={filter}
        onInput={(e) => setFilter(e.target.value)}
      />
      <div>
        {filter && (
          <h3>Filtered Todos</h3>
        )}
        {/* Render filtered todos */}
        {filteredTodos.map((todo, index) => (
          <div key={index}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default App;
