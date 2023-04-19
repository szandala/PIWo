import { Route, Routes } from 'react-router-dom';

import Main from './Main';
import IntroduceSelf from './IntroduceSelf';
import Search from './Search';

const Routing = ({ toDoList, setToDoList }) => {
    return <Routes>
        <Route path="/" element={<Main toDoList={toDoList} setToDoList={setToDoList} />} />
        <Route path="/search" element={<Search toDoList={toDoList} />} />
        <Route path="/introduce-self" element={<IntroduceSelf />} />
    </Routes>
}
export default Routing;
