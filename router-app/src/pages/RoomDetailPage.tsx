import { useNavigate, useParams, Outlet, NavLink } from "react-router-dom";

type RoomRouterPage = {
    roomId: string;
}

export function RoomDetailPage(){
    const { roomId } = useParams<RoomRouterPage>();
    const navigate = useNavigate();

    const handleBackToList = () => {
        // программный переход на список
        navigate('/rooms');
    };

    const handleGoBack = () => {
        // шаг назад по истории браузера
        navigate(-1);
    };

    return (
        <section>
            <h1>Карточка помещения {roomId}</h1>
            <div>
                <button onClick={handleBackToList}>
                    К списку помещений
                </button>
                <button onClick={handleGoBack}>
                    Назад в истории
                </button>
                {/* относительные пути внутри вложенного маршрута /rooms/101/sensors */}
                <nav>
                    <NavLink to='sensors'
                             style={
                                    ({isActive}) =>
                                         ({color: isActive ? 'pink' : 'black'})
                                } >
                                    Датчики
                    </NavLink>
                    <NavLink to='logs'
                             style={
                                    ({isActive}) =>
                                         ({color: isActive ? 'pink' : 'black'})
                                } >
                                    Журнал
                    </NavLink>
                    <NavLink to='scenarios'
                             style={
                                    ({isActive}) =>
                                         ({color: isActive ? 'pink' : 'black'})
                                } >
                                    Сценарии
                    </NavLink>
                </nav>
                <hr />
                <Outlet />
            </div>
        </section>
    );
}