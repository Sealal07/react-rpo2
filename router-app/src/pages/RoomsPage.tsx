import { Link } from "react-router-dom";

interface RoomItem{
    id: string;
    name: string;
    temp: number;
}

const ROOMS: RoomItem[] = [
    {id: '101', name: 'Серверная', temp: 19},
    {id: '102', name: 'Переговорная', temp: 22},
    {id: '103', name: 'Склад оборудования', temp: 16},
]

export function RoomsPage(){
    return (
        <section>
            <h1>Помещения</h1>
            <ul>
            {ROOMS.map((room)=>(
                <li key={room.id}>
                    {/* a - перезагружает страницу */}
                    <Link to={`/rooms/${room.id}`}>
                    {room.name} ({room.temp})
                    </Link>
                </li>
            ))}
            </ul>
        </section>
    );
}