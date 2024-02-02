import { startTransition } from "react";

export default function reducer(state, action) {
    if (action.type === 'rename') {

        let newarr = state.map((item) => {
            if (item.name === action.id) {
                return { ...item, name: action.new };
            }
            return item;
        })
        return [...newarr];
    }
    if(action.type === 'delete'){
        let newArr = state.map((item) => {
            if(item.name === action.id){
                let taskArr = item.task.filter((item) => {
                        return item.id !== action.taskId;
                })
                item.task = taskArr;
                return item;
            }
            return item;
        })
        return [...newArr];
    }
    if(action.type === 'move'){
        let iskokaro = '';
        let newArr = state.map((item) => {
            if (item.name === action.id) {
                let taskArr = item.task.filter((item) => {
                    if(item.id === action.taskId){
                        iskokaro = item;
                    }
                    return item.id !== action.taskId;
                })
                item.task = taskArr;
                return item;
            }
            return item;
        })
        // console.log(newArr);
        newArr = newArr.map((item) => {
            // console.log(item);
            if(item.name === action.where){
                item.task.push(iskokaro);
            }
            return item;
        })
        return [...newArr];
    }
    if(action.type === 'complete'){
        let newArr = state.map((item) => {
            if (item.name === action.id) {
                let taskArr = item.task.filter((item) => {
                    return !item.Complete;
                })
                item.task = taskArr;
                return item;
            }
            return item;
        })
        return [...newArr];
    }
    if(action.type === 'sort'){
      state.map((item) => {
            if(item.name === action.id){
             item.task.sort((a, b) => {
                    if (a.Complete && !b.Complete) {
                        return -1; // Move a to the end
                    } else if (!a.Complete && b.Complete) {
                        return 1; // Move b to the end
                    } else {
                        return 0; // No change in order
                    }
                });
            }
            return item;
        })
        return [...state];
    }
}
