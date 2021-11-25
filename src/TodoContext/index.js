import React, { createContext, useState } from 'react';
import { useLocalStorage } from './useLocalSrorage';
import { ItemAcordes } from '../components/ItemAcordes';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = useState('');

    //para ocupar el buscador y filtrar 
    let searchedTodos = [];
    if (!searchValue.length >= 1) {
        searchedTodos = [];
    } else {
        searchedTodos = ItemAcordes.filter((todo) => {
            const todoText = todo.nombre.toLowerCase();
            const seachText = searchValue.toLowerCase();
            return todoText.includes(seachText);
        })
    }
    //agregar un acorde
    const addChord = (acorde, img, id) => {
        const newTodos = [...todos];
        newTodos.push({
            acorde, img, id, favorito: true,
        });
        saveTodos(newTodos);
    };
    //para elimitar un TODO
    const deleteChord = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            todos,
            setSearchValue,
            searchedTodos,
            addChord,
            deleteChord,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };
