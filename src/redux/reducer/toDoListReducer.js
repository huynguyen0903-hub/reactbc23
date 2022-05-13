const stateDefault = {
    task:[]
}

export const toDoListReducer = (state = stateDefault, action) => {
    switch(action.type){
        case 'GET_TASK_TODO':{
            state.task = action.task
            return {...state}
        }
        default: return state;
    }
}