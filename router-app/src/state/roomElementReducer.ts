export interface RoomElementData {
    roomId: string;
    roomName: string;
    temperature: number;
    humidity: number;
}

// состояние загрузки
export type ElementStatus = 
    | {status: 'loading', data: null, error: null}
    | {status: 'success', data: RoomElementData, error: null}
    | {status: 'error', data: null, error: string};

export type ElementAction = 
    | {type: 'FETCH_START'}
    | {type: 'FETCH_SUCCESS', payload: RoomElementData}
    | {type: 'FETCH_ERROR', error: string};

export const initialElementState: ElementStatus = {
    status: 'loading',
    data: null,
    error: null,
};

export function roomElementReducer(
    state: ElementStatus, action: ElementAction
): ElementStatus {
    switch (action.type){
        case 'FETCH_START':
            return {status: 'loading', data: null, error: null};
        case 'FETCH_SUCCESS':
            return {status: 'success', data: action.payload, error: null};
        case 'FETCH_ERROR':
            return {status: 'error', data: null, error: action.error};
        default:
            return state;
    }
}