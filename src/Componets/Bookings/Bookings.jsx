import  { useEffect, useState } from "react";
import BookingRow from "../BookingRow/BookingRow";

const Bookings = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/booking',{credentials:'include'})
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Booking</h1>
            {users.map(user => (
                <BookingRow key={user._id} user={user} />
            ))}
        </div>
    );
};

export default Bookings;
