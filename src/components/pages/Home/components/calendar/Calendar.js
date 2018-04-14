import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './Calendar.css';

export default function Calendar() {
    return <DayPicker showOutsideDays />;
}