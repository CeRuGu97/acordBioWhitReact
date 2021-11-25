import React, { useContext } from 'react';
import '../assets/styles/Home.css';
import { Card, CardFavoritos } from '../components/Card';
import ListCards from '../components/ListCards';
import SearchInput from '../components/SearchInput';
import { TodoContext } from '../TodoContext';

const Home = () => {

    const {
        error,
        loading,
        searchedTodos,
        todos,
        deleteChord,
    } = useContext(TodoContext);
    return (
        <section className="fondo">
            <SearchInput />
            <ListCards>
                {error && <h1>ups hubo un error</h1>}
                {loading && <h1>Estamos cargando...</h1>}
                {
                    searchedTodos.map((card, index) => (
                        <Card
                            key={card.nombre + index}
                            acorde={card.nombre}
                            img={card.static}
                            id={card.id}
                        />
                    ))
                }
            </ListCards>
            <h1>Favoritos</h1>
            <ListCards>
                {error && <h1>ups hubo un error</h1>}
                {loading && <h1>Estamos cargando...</h1>}
                {
                    todos.map((card, index) => (
                        <CardFavoritos
                            key={card.acorde + index}
                            acorde={card.acorde}
                            img={card.img}
                            onDelete={() => deleteChord(card.id)}
                        />
                    ))
                }
            </ListCards>
        </section>
    )
}

export default Home
