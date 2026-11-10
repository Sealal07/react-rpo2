import styles from './Card.module.css';
import { useReducer, useEffect, useState } from 'react';


function cardReducer(state, action){
    switch (action.type){
        case 'INCREMENT_LIKES':
            return {...state, likes: state.likes + 1};
        
        case 'TOGGLE_FAVORITE':
            return {...state, likes: !state.isFavorite}
    }
}

function Card ({title, desc}){

    // const [title, setTitle] = useState('заглушка');
    // const [desc, setDesc] = useState('заглушка'); 
    const [likes, setLikes] = useState(0);

    const elStyle = {
        color: 'blue',
        fontSize: '14px',
        fontFamily: 'Arial',
    }

    const handleLikes = () => {
        setLikes(prevLikes => prevLikes + 1);
    }

     useEffect(()=>{
        document.title = `Карточка "${title}"|Лайков: ${likes}`;
        // функция очистки
        return () => {
            console.log('Очистка лайков');
        };
     }, [likes])

    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <p style={elStyle}>{desc}</p>
            <button onClick={handleLikes}
            >Добавить (Лайков: {likes})</button>
        </div>
    );
}
export default Card;