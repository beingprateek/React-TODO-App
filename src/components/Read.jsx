
const Read = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;

    const DeleteHandler = (id) => {
        const filtertodo = todos.filter(todo => todo.id != id);
        settodos(filtertodo);
    }

    const rendertodos = todos.map(todo => {
        return (
            <li key={todo.id} className="mb-4  flex justify-between items-center p-4 bg-gray-900 rounded-xl">
                <span
                    className="text-xl font-thin">{todo.title}  {" "}</span>
                <button
                    className="font-thin text-red-500 text-lg"
                    onClick={() => DeleteHandler(todo.id)}>Delete</button>
            </li>
        );
    })

    return (
        <div className="w-[40%] p-10">
            <h1 className="text-pink-400 mb-10 text-5xl font-thin">
                <span className="text-orange-400">Pending</span>  Todos
            </h1>
            <ol>{rendertodos}</ol>
        </div>
    )
}

export default Read;