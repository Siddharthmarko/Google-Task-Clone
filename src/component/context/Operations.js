export default function reducer(state, action) {
    // Showing List
    if (action.type === 'check') {
        let update = state.map((item) => {
            if(action.all) return {...item, 'checked': true}
            item.checked = (item.id === action.id) ? action.value : item.checked
            return item;
        })
        return update;
    }
    // delete list and delete complete list
    if (action.type === 'cardOption') {
        let updateList = [];
        if (action.option === 0) {
            updateList = state.filter((li) => {
                return action.data !== li.id
            })
        }
        if (action.option === 1) {
            updateList = state.map((li) => {
                li.task = li.task.filter((item) => {
                    return item.complete !== true;
                })
                return li;
            })
        }
        return updateList;
    }
    // Create and Edit List
    if (action.type === 'list') {
        // if rename is not false
        if (action.reName) {
            let update = state.map((li) => {
                if (li.id === action.reName) {
                    li.name = action.data.name;
                }
                return li;
            })
            return update;
        }
        action.data.id = crypto.randomUUID();
        return [...state, action.data];
    }

    // deleting task
    if (action.type === 'deleteTask'){
        // console.log(action.child);
        let update = state.map((li) => {
            if(li.id === action.child.listId){
                li.task = li.task.filter((e) => e.id !== action.child.id);
            }
            return li;
        })
        return update;
    }
    // check task
    if (action.type === 'completeTask'){
        let update = state.map((item) => {
            if(item.id === action.listId){
                let arr = item.task;
                let newList = arr.map((task) => {
                    if (task.id === action.id){
                        return { ...task, 'complete': action.value}
                    }
                    return task;
                })
                item.task = newList;
                return item;
            }
            return item;
        })
        // console.log(update);
        return update;
    }
    // task create 
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

}
