import React from 'react';

const timeOptions = {
    hour: 'numeric',
    minute: 'numeric',
};

const dateOptions = {
    month: 'short',
    day: 'numeric',
    weekday: 'short',
};

let date = '';

const renderDate = (date) => {
    return (
        <div>
            {date.toLocaleString('ru', timeOptions)}
            <span style={{color: '#1E90FF'}}>{date.toLocaleString('ru', dateOptions).split(',').reverse().join(' ')}</span>
        </div>
    );
};

export const formatDepartureDate = (flight, segment) => {
    date = new Date(segment.departureDate);

    return renderDate(date);
};

export const formatArrivalDate = (flight, leg) => {
    if (leg.segments.length === 2) {
        date = new Date(leg.segments[1].arrivalDate);

        return renderDate(date);
    } else {
        date = new Date(leg.segments[0].arrivalDate);

        return renderDate(date);
    }
};

export const calcTime = (mins) => {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + ' ч ' + minutes + ' мин';
};
