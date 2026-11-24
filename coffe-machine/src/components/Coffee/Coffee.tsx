import { useReducer, useEffect } from "react";
import { 
    coffeeReducer,
    initialState,
    MAX_WATER,
    MAX_BEANS,
    type CoffeeAction
 } from "../../types/types";
 import styles from './Coffee.module.css';

 export default function Coffee(){
    const [state, dispatch] = useReducer(coffeeReducer, initialState);

    useEffect(()=>{
        if(!state.isBrewing) return;
        const timer = setTimeout(()=>{
            dispatch({type: 'FINISH_BREWING'});
            alert('Кофе готов!');
        }, 3000);
        return () => clearTimeout(timer);

    }, [state.isBrewing]);

    const waterPercent = (state.water/MAX_WATER) * 100;
    const canBrew  = state.water >= 200 && state.beans >= 20 && !state.isBrewing;

    const send = (action: CoffeeAction) => dispatch(action);
    
    return (
        <div className={styles.machine}>
            <h2 className={styles.title}>☕Кофемашина</h2>
            {/* индикатор воды */}
            <div className={styles.indicator}>
                <div className={styles.waterLabel}>
                    Вода: {state.water} мл ({waterPercent.toFixed(0)}%)
                </div>
                <div className={styles.waterFill}
                    style={{height: `${waterPercent}`}}>
                </div>
                <div className={styles.stats}>
                    <span>Вода: {state.water}</span>
                    <span>Зерна: {state.beans}</span>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.btn}
                        onClick={()=>send({type: "ADD_WATER", payload: 200})}
                        disabled={state.isBrewing || state.water >= MAX_WATER}
                    >
                        +200 мл воды
                    </button>
                    <button className={styles.btn}
                        onClick={()=>send({type: "ADD_BEANS", payload: 20})}
                        disabled={state.isBrewing || state.beans >= MAX_BEANS}
                    >
                        +20 г зерен
                    </button>
                    <button className={`${styles.btn} ${styles.brewBtn}`}
                        onClick={()=>send({type: 'START_BREWING'})}
                        disabled={!canBrew}
                    >
                        {state.isBrewing ?'Готовим...':'Сварить кофе'}
                    </button>
                </div>
            </div>    
        </div>
    );
 }