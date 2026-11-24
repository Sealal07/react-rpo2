import { useState } from "react";
import { useParams } from "react-router-dom";


type RoomParams = {
    roomId: string;
};

interface ScenarioItem{
    id: string;
    title: string;
    description: string;
    enabled: boolean;
}

const INITIAL_SCENARIOS: ScenarioItem[] = [
    {
        id: 'climate',
        title: 'Климат-контроль',
        description: 'Поддерживает заданную температуру и уровень влажности',
        enabled: true,
    },
    {
        id: 'night-light',
        title: 'Ночной режим освещения',
        description: 'Приглушает свет в темное время суток',
        enabled: false,
    },
];

export function RoomScenariosTab(){
    const { roomId } = useParams<RoomParams>();
    const [scenarios, setScenarios] = useState<ScenarioItem[]>(INITIAL_SCENARIOS);

    const toggleScenario = (id: string) => {
        setScenarios((prev) => prev.map((scenarios)=> scenarios.id === id 
        ? {...scenarios, enabled: !scenarios.enabled} : scenarios));
    };
    return (
        <>
        <h2>Сценарии помещения #{roomId}</h2>
        <ul>
            {scenarios.map((scenario)=>(
                <li key={scenario.id}>
                    <h3>{scenario.title}</h3>
                    <p>{scenario.description}</p>
                    <p>{scenario.enabled ? 'Активен':'Выключен'}</p>
                    <button onClick={()=>toggleScenario(scenario.id)}>
                        {scenario.enabled ? 'Выключить': 'Включить'}
                    </button>
                </li>
            ))}
        </ul>
        </>
    )
}