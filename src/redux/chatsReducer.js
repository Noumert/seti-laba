const ADD_MESSAGE = 'chats/ADD-MESSAGE';

let initialState = {
   dialogsData : [{name: "Stas",id: 1}, {name: "Kostya",id: 2},{name: "Vasya",id: 3},{name: "Ivan",id: 4}],
   messagesData : [{id:1 , name: "Stas", text: "hi"}, {id:2 , name: "Vova", text: "hello"},{id:3, name: "Stas", text: "What`s up?"},{id:4, name: "Vova", text: "All is Fine"}],
   chatName : "Stas"
}

const chatsReducer = (state = initialState,action) => {
    switch(action.type){
        case ADD_MESSAGE:{
            let newId=state.messagesData[state.messagesData.length-1].id+1;
            let newMessage = {id:newId , name: "Vova", text: action.messageText};
            let stateCopy = {...state};
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.push(newMessage);
            console.log(stateCopy);
            return stateCopy;
        }
        default:{
            return state;
        }
    }
}

export const addMessage = (text) => ({type:ADD_MESSAGE,messageText:text});

export default chatsReducer