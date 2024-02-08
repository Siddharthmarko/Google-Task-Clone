export default function reducer(state, action) {
    if(action.type === 'cardOption'){
        alert("success card Option");
        return state;
    }
    
    if (action.type === 'deletecomplete'){
        let update = state.map((item) => {
            if(item.id === action.listId){
                let arr = item.task;
                let newList = arr.filter((ele) => {
                    return ele.id !== action.id;
                })
                item.task = newList;
                return item;
            }
            return item;
        })
        console.log(update);
        return update;
    }
    if (action.type === 'taskOption'){
        let update = state.map((item) => {
            if(item.id === action.listId){
                let arr = item.task;
                let newList = '';
                if(action.option === 0){
                 newList = arr.filter((ele) => {
                        return ele.id !== action.id;
                    })    
                }
                item.task = newList;
                return item;
                
            }
            return item;
        })
        console.log(update);
        return update;
    }
    if (action.type === 'completeTask'){
        // let newState = state;
        // console.log(action);
        let update = state.map((item) => {
            if(item.id === action.listId){
                let arr = item.task;
                let newList = arr.map((task) => {
                    if (task.id === action.id){
                        return { ...task, 'complete': action.value}
                    }
                    return task;
                })
                // console.log(newList);
                item.task = newList;
                return item;
            }
            return item;
        })
        // console.log(update);
        return update;
    }

    if(action.type === 'all'){
        let update = state.map((item) => {
            return {...item, 'checked': true};
        })
        return update;
    }

    if(action.type === 'check'){
        console.log(action.value);
        let update = state.map((item) => {
            if(item.id === action.id){
                return { ...item, 'checked': action.value}
            }
            return item;
        })
        return update;
    }

    if(action.type === 'list'){
        action.data.id = crypto.randomUUID();
        return [...state, action.data];   
    }
    if(action.type === 'task'){
        action.data.id = crypto.randomUUID();
         let update = state.map((item) => {

             if(item.id === action.data.listId){
                 return {...item, task: [...item.task, action.data]};
                }
                return item;
            })
        return update;   
    }
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
