import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, EDIT_TODO, UPDATE_TODO } from "../ActionTypes/todoActiontypes";


const initialState = {todoList:[
    {
        id:0,
        name:"Second priority",
        isComplete:false,
        isEdit:false
    },
    {
    id:1,
    name:"First priority",
    isComplete:false,
    isEdit:false
}


]}

export default function todoReducer(state=initialState,action) {
    switch(action.type) {
        
        case ADD_TODO:
       
            return {
                ...state,
                todoList:[{
                    id:state.todoList.length + 1,
                    name:action.todo,
                    isComplete:false,
                    isEdit:false
                }].concat(state.todoList)

            }

        case DELETE_TODO: 
        return {
            ...state,
            todoList:state.todoList.filter((todo) => todo.id !== action.id)
        }

        case COMPLETE_TODO:
            return {
                
                    ...state,
                    todoList: state.todoList.map(todo => todo.id === action.id ?
                        { ...todo, isComplete: !todo.isComplete } : todo)
    
            }

        case EDIT_TODO:
            
            return {
                ...state,
                todoList:state.todoList.map(todo => todo.id === action.id ? 
                    {...todo, isEdit: !todo.isEdit} : todo)

            }

        case UPDATE_TODO:

        
            return {
                ...state,
                todoList:state.todoList.map(todo => todo.id === action.todoObj.id ? 
                    {...todo,name:action.todoObj.text} : todo
                    )
            }

        default:
            return state
        
    }
}