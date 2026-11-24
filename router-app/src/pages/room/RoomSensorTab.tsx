import { useParams } from "react-router-dom";
import { useReducer, useEffect } from "react";
import {
    initialElementState, roomElementReducer, type RoomElementData
} from '../../state/roomElementReducer';

type RoomParams = {
    roomId: string;
};

// имитация ассинхронного API-запроса по id помещения
function fetchRoomElement(roomId: string): Promise<RoomElementData>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (roomId === '999'){
                reject(new Error(`Помещение ${roomId} не отвечает `));
                return;
            }
            resolve({
                roomId, 
                roomName: `Объект ${roomId}`,
                temperature: 18 + (Number(roomId.slice(-1) || 2) % 6),
                humidity: 42,
            });
        }, 1000);
    });
}

export function RoomSensorTab() {
    const { roomId } = useParams<RoomParams>();
    const [state, dispatch] = useReducer(roomElementReducer, initialElementState); 
    useEffect(()=>{
        if(!roomId){
            dispatch({type: 'FETCH_ERROR', error: 'Нет id'})
            return;
        }
        let cancelled = false;
        dispatch({type: 'FETCH_START'});
        fetchRoomElement(roomId)
        .then((element)=>{
            if(!cancelled){
                dispatch({type: 'FETCH_SUCCESS', payload: element});
            }
        })
        .catch((err: unknown)=>{
            if (!cancelled){
                const message = err instanceof Error ? err.message : 'Ошибка загрузки';
                dispatch({type: 'FETCH_ERROR', error: message});
            }
        });
        //очистка при размонтировании (или при смене roomId)
        return () => {
            cancelled = true;
        };
    }, [roomId]);

    if (state.status === 'loading'){
        return <p>загрузка показаний датчиков...</p>;
    }

    if (state.status === 'error'){
        return (
            <div role="alert">
                <p>Ошибка: {state.error}</p>
            </div>
        ); 
    }

    
    return (
        <div>
            <h2>Датчики помещения №{roomId}</h2>
            <ul>
                <li>Температура: {state.data.temperature}</li>
                <li>Влажность: {state.data.humidity}%</li>
                <li>Датчик открытия двери: закрыто</li>
            </ul>
        </div>
    )
} 