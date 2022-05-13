const stateDefault = {
    data: [], //task list
    isLoading: false, //Dùng để hiện thì thông tin khi gọi API
    error: null //Hiển thị lỗi khi API bị fail
};

export const tasksReducer = (state = stateDefault, action) => {
    switch(action.type){
        case "GET_TASKS_PENDING" : {
            return {
                ...state,
                isLoading: true,
                error: null,
            }
        }
        case "GET_TASKS_FULFILLED": {
            return {
                ...state,
                isLoading: false,
                data: action.data,
            };
        }
        case "GET_TASKS_REJECTED": {
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }
        }
        default:
            return state;
    }
}

