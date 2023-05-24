import { Route, Routes } from 'react-router-dom';

import Main from './Main';
import IntroduceSelf from './IntroduceSelf';
import Search from './Search';
import CounterIncreaser from './Counterincreaser';
import Login from './Login';

const Routing = ({ toDoList, setToDoList }) => {
    return <Routes>
        <Route path="/" element={<Main toDoList={toDoList} setToDoList={setToDoList} />} />
        <Route path="/search" element={<Search toDoList={toDoList} />} />
        <Route path="/introduce-self" element={<IntroduceSelf />} />
        <Route path="/counter" element={<CounterIncreaser />} />
        <Route path="/login" element={<Login />} />
    </Routes>
}
export default Routing;
