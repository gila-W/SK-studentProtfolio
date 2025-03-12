import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment-hijri';
import './MyCalender';

export const HebrewCalendar = () => {
    const [date, setDate] = useState(new Date());
    const [events, setEvents] = useState({});

    const handleDateChange = (value) => {
        setDate(value);
    };

    const handleTextChange = (event) => {
        const { value } = event.target;
        const formattedDate = moment(date).format('iYYYY-iMM-iDD'); // תאריך עברי
        setEvents({
            ...events,
            [formattedDate]: value,
        });
    };

    const formattedDate = moment(date).format('iYYYY-iMM-iDD');

    return (
        <div style={{ direction: 'rtl' }}>
            <Calendar
                onChange={handleDateChange}
                value={date}
                locale="he-IL" // להבטיח שהלוח שנה בעברית
            />
            <div className='day-input'>
                <h3> מס' התחייבות לתאריך: {formattedDate}</h3>
                <input
                    type="text"
                    value={events[formattedDate] || ''}
                    onChange={handleTextChange}
                />
            </div>
        </div>
    );
};

