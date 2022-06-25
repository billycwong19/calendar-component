import React, { useState, useEffect } from 'react'
import { Body, Button, Day, DayNumber, Frame, Header } from './Calendar.style';

const Calendar = () => {
    const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS_OF_WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

    const today = new Date();
    const [date, setDate] = useState(today);

    const getStartDayOfMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    }

    const isLeapYear = (year) => {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0);
    } 

    const days = isLeapYear(date.getUTCFullYear()) ? DAYS_LEAP: DAYS;

    const [day, setDay] = useState(date.getDate());
    const [month, setMonth] = useState(date.getMonth());
    const [year, setYear] = useState(date.getFullYear());
    const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

    useEffect(() => {
        setDay(date.getDate());
        setMonth(date.getMonth());
        setYear(date.getFullYear());
        setStartDay(getStartDayOfMonth(date));
    }, [date])

    return (
        <>
        {today.toDateString()}
        <Frame>
            <Header>
                <Button onClick={() => setDate(new Date(year, month -1, day))}>Prev</Button>
                <div>
                    {MONTHS[month]} {year}
                </div>
                <Button onClick={() => setDate(new Date(year, month + 1, day))}>Next</Button>
            </Header>
            <Body>
                {DAYS_OF_WEEK.map(d => (
                    <Day key={d}>
                        <strong>{d}</strong>
                    </Day>
                ))}

                {Array(days[month] + (startDay))
                    .fill(null)
                    .map((_, index) => {
                        const d = index - (startDay - 1);
                        
                        return (
                            <DayNumber key={index} 
                                isToday={d === today.getDate() && month === today.getMonth()} 
                                isSelected={d === day} 
                                onClick={() => setDate(new Date(year, month, d))}
                            >

                                {d > 0 ? <p>{d}</p> : ''}
                                
                            </DayNumber>
                        )
                    })
                }
            </Body>
        </Frame>
        </>
    )
}

export default Calendar