import { useNavigate, useParams } from "react-router-dom";

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
            </div>
        </section>
    );
}