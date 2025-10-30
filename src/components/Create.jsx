import { Fragment, useState } from "react";
import { nanoid } from 'nanoid';

const Create = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;

    const [title, settitle] = useState("");


    const submitHandler = (e) => {
        e.preventDefault();

        const newtodo = {
            id: nanoid(),
            title,
            isCompleted: true
        };


        let copytodos = [...todos];
        copytodos.push(newtodo);
        settodos(copytodos);

        settitle("");
    };
    return (
        <div className="w-[60%] p-10">
            <h1 className="mb-10 text-5xl font-thin">
                Set <span className="text-red-400">Reminders </span>for <br /> tasks
            </h1>

            <form onSubmit={submitHandler}>
                <input
                    className="border-b w-full text-2xl font-thin p-2 outline-0"
                    onChange={(e) => settitle(e.target.value)}
                    value={title}
                    type="text" placeholder='title' />

                <br /><br />
                <button className="mt-5 text-xl px-10 py-2 border rounded">Create Todo</button>
            </form>
        </div>
    )
}

export default Create