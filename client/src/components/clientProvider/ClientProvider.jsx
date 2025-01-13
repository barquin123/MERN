import { createContext } from "react";
import axios from 'axios';
const clientContext = createContext();

export const clientProvider = ({children}) => {

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState('');
    const [user, setUser] = useState('');

    const fetchData = async () => {
        try {
            const response = await  axios.get('http://localhost:5000/tasks');
            setTasks(response.data);
            setLoading(false);
        }catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
    fetchData();

    const fetchUser = async(username, password) => {
        try {
            const response = await axios.get('http://localhost:5000/login',{
                username,
                password,
            });
            setToken(response.data.token);
            setUser(username);
            return {success: true, message: response.data.message};
        } catch (error) {
            return {success: false, message: error.response?.data?.error || 'An error occurred'};
        }
    }

    fetchUser();



    return (
        <clientContext.Provider value = {{tasks, loading, token, user}}>
        {children}
        </clientContext.Provider>
    )
}