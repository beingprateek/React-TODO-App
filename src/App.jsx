
import React, { Fragment, useState } from 'react'
import Create from './components/Create';
import Read from './components/Read';

const App = () => {
    const [todos, settodos] = useState([
        { id: 1, title: "Kaam krle bhai", isCompleted: false },
    ]);

    return (
        <div className='text-white flex p-10  w-screen h-screen bg-gray-800'>
            <Create todos={todos} settodos={settodos} />
            <hr />
            <Read todos={todos} settodos={settodos} />
            div
        </div>
    )
}

export default App