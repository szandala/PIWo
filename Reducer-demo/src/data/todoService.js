import { addDoc, collection, query, where, serverTimestamp, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { firestore, auth } from "./init";

export const createTodo = async (newTodo) => {

  const tempTodo = {
    ...newTodo, // {id: ..., text: ... }
    userId: auth?.currentUser.uid,
    created: serverTimestamp()
  }
  const todoCollection = collection(firestore, "todos");
  const docRef = await addDoc(todoCollection, tempTodo);
  console.log("Document added:", docRef.id);
}

export const readTodos = async () => {
  const todos = [];

  const todoCollection = collection(firestore, "todos");
  const user = auth?.currentUser;

  console.log({ user })
  if (!user) {
    return todos;
  }

  const q = query(todoCollection, where("userId", "==", user.uid));
  const results = await getDocs(q);

  results.forEach(doc => {
    // todos.push(doc.data()) // pobiera sam obiekt
    todos.push({ id: doc.id, ...doc.data() }); // pobiera obiekt i jego Firestore'owe ID
  })

  return todos;
}


// UWAGA:
// jako ID można przyjąć pole, jakie się samemu nada - patrz linijka 7
// albo ID documentu, który generuje Firestore
export const updateTodo = async (todoId, updatedTodo) => {
  // UWAGA: jeżeli sp©óbujesz zmienić obiekt nienależący do aktualnego użytkownika
  // i masz reguły na Firestore, to Ci wyskoczy error.
  const todoDocRef = doc(firestore, "todos", todoId);
  try {
    await updateDoc(todoDocRef, updatedTodo);
    console.log("Todo updated:", todoId);
  } catch (error) {
    console.error("Error updating todo:", error);
  }
}


export const deleteTodo = async (todoId) => {
  // tak samo jak updateTodo
  const todoDocRef = doc(firestore, "todos", todoId);
  try {
    await deleteDoc(todoDocRef);
    console.log("Todo deleted:", todoId);
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
}
