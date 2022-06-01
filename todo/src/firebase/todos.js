import { firestore } from "./init";
import {collection, addDoc, Timestamp, query, where, getDocs} from 'firebase/firestore'


export const addNewToDo = async (user, content) => {
    try {
        await addDoc(collection(firestore, 'todos'), {
            uid: user.uid,
            content: content,
            completed: false,
            created: Timestamp.now()
        });
    } catch (err) {
        console.log({err});
    }
}

export const getAllToDos = async (user) => {
    const q = query(collection(firestore, "todos"),
        where("uid", "==", user.uid));
    // const q = collection(firestore, "todos");
    const todos = [];
    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            todos.push(doc.data().content);
        });
    } catch (err) {
        console.log({err});
    }
    console.log({todos});
    return todos;
}
