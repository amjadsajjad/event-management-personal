import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [searchCategory, setSearchCategory] = useState('')
    const [events,setEvents] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('fakeData.json');
                const result = await response.json();

                setEvents(result.events);

            }
            catch (error) {
                console.log('Error fetching data:', error);
            }
        }
        fetchData();
        
    }, [])

    // useEffect(()=>{
    //     fetch('fakeData.json')
    //     .then(res => res.json())
    //     .then(data => console.log(data.events))
    // },[])

    // console.log(events);

    const Info ={setSearchCategory, searchCategory, events}
    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node
}

export default AuthProvider;