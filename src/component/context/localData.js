
let defaultList =  [
    {
        name: 'list1',
        id: 1,
        checked: true,
        task: [
            {
                title: 'task 1',
                id: 1,
                repeat: true,
                time: 123,
                date: 1,
                listName: 'list1',
                description: 'Lorem ipsum dolor sit amet.',
                Complete: false,
            },
        ],
    },
    {
        name: 'list2',
        id: 2,
        checked: true,
        task: [
            {
                title: 'task3',
                id: 3,
                repeat: true,
                time: 234,
                date: 567,
                listName: 'list2',
                description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                Complete: false,
            },
        ],
    },
    {
        name: 'list3',
        id: 3,
        checked: true,
        task: [],
    },
    {
        name: 'list4',
        id: 4,
        checked: false,
        task: [],
    },

];

export default defaultList;