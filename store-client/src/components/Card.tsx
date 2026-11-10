import styles from './Card.module.css';
import { useReducer, useEffect, useState } from 'react';


function cardReducer(state, action){
    switch (action.type){
        case 'INCREMENT_LIKES':
            return {...state, likes: state.likes + 1};
        
        case 'TOGGLE_FAVORITE':
            return {...state, isFavorite: !state.isFavorite};

        case 'TOGGLE_EXPAND':
            return {...state, isExpanded: !state.isExpanded};
        
        case 'RESET':
            return action.payload;
        
        default: 
            return state;
    }
}

function Card ({title, desc}){

    // начальное состояние
    const initialState = {
        likes: 0,
        isFavorite: false,
        isExpanded: false
    };

    const [state, dispatch] = useReducer(cardReducer, initialState);


    useEffect(()=>{
        document.title = `Карточка "${title}"|Статус: ${state.isFavorite ? 'Избранное' : 'Обычная'}`;
    }, [state.isFavorite, title]);

    // const [title, setTitle] = useState('заглушка');
    // const [desc, setDesc] = useState('заглушка'); 
    // const [likes, setLikes] = useState(0);

    const elStyle = {
        color: 'blue',
        fontSize: '14px',
        fontFamily: 'Arial',
    }

    // const handleLikes = () => {
    //     setLikes(prevLikes => prevLikes + 1);
    // }

    //  useEffect(()=>{
    //     document.title = `Карточка "${title}"|Лайков: ${likes}`;
    //     // функция очистки
    //     return () => {
    //         console.log('Очистка лайков');
    //     };
    //  }, [likes])

    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            {state.isExpanded && <p style={elStyle}>{desc}</p>}
            <div>
                <button onClick={()=>dispatch({type: 'INCREMENT_LIKES'})}>
                    Добавить (Лайков: {state.likes})
                </button>

                <button onClick={()=>dispatch({type: 'TOGGLE_FAVORITE'})}>
                    {state.isFavorite ? '💖' : '🤍'}
                </button>

                <button onClick={()=>dispatch({type: 'TOGGLE_EXPAND'})}>
                    {state.isExpanded ? 'Скрыть' : 'Показать'} описание
                </button>

                <button onClick={()=>dispatch({type: 'RESET', payload: initialState})}>
                    Сброс
                </button>
            </div>
        </div>
    );
}
export default Card;