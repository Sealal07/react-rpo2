import { useParams } from "react-router-dom";


type RoomParams = {
    roomId: string;
};


export function RoomLogsTab(){
    const { roomId } = useParams<RoomParams>();
    return (
        <div>
            <h2>Журнал событий помещения №{roomId}</h2>
            <ul>
                <li>09:40 - Зафиксирован нормальный уровень CO2</li>
            </ul>
        </div>
    );
}