
import useLocalStorage from './Hooks/useLocalstorage';
import useCustomEffect from './Hooks/useEffect';
import useCustomReducer from './Hooks/useReducer';
import useCustomState from './Hooks/useState';
import useCustomContext from './Hooks/useContext';
import useFetch from './Hooks/usefetch';
import MyContext from './MyContext';



const initialState = { count: 0 };
function reducer(state: typeof initialState, action: { type: string }) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }}


function App() {
    const [name, setName] = useLocalStorage('name', 'Guest');
    const [countState, dispatch] = useCustomReducer(reducer, initialState);
    const [value, setValue] = useCustomState('Hello');
    const contextValue = useCustomContext(MyContext);
    

    const { data: userData, loading, error } = useFetch<{ name: string }>('https://jsonplaceholder.typicode.com/users/4');

    useCustomEffect(() => {
        console.log('Effect ran');
    });

    return (
        <div>
            <h1>Hello, {name}!</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                title="Input field"
            />
            <h2>Count: {countState.count}</h2>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <h3>{value}</h3>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                title="Input field"
            />
            <p>Context Name: {contextValue.name}</p>
            <div>
                {loading ? (
                    <p>Loading user data...</p>
                ) : error ? (
                    <p>Error loading user data: {error}</p>
                ) : (
                    <p>User Name: {userData?.name}</p>
                )}
            </div>
        </div>
    );
}

export default App;
