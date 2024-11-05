
import { useLocation } from 'react-router-dom';
const SearchData = () => {
    const location = useLocation();
    const { buses } = location.state || {}; 
    return (
        <div>
            {buses && buses.length > 0 ? (
                <ul>
                    {buses.map(bus => (
                        <li key={bus.id}>{bus.from} to {bus.to} on {bus.start_date}</li>
                    ))}
                </ul>
            ) : (
                <p>No buses found.</p>
            )}
        </div>
    );
};

export default SearchData;