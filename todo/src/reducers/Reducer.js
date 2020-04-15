


export const initialState = [
    {
        item: '',
        completed: false,
        id: Date.now()
    }
]
export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const obj = {
                item: action.payload,
                completed: false,
                id: Date.now()
            };
            return [...state, obj]


        case 'TOGGLE':
            return state.map(item => {
                return item.id === action.payload ? { ...item, completed: !item.completed } : item
            });

            
        case 'CLEAR':
            return state.filter(item => !item.completed);
        default:
            return state


    }
}

