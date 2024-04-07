import { selector } from 'recoil';
import { filterAtom } from '../Atoms/filterAtom';
import { todoAtom } from '../Atoms/todoAtoms';

export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const filter = get(filterAtom).toLowerCase(); // Convert filter to lowercase
    const todos = get(todoAtom);
    return todos.filter(todo =>
      todo.title.toLowerCase().includes(filter) || // Check for case-insensitive match
      todo.description.toLowerCase().includes(filter)
    );
  }
});
