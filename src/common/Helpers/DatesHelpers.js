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

/**
 * Функция возвращающая компонент вывода определенного формата даты.
 */
const renderDate = (date) => {
    return (
        <div>
            {date.toLocaleString('ru', timeOptions)}
            <span style={{color: '#1E90FF'}}>{date.toLocaleString('ru', dateOptions).split(',').reverse().join(' ')}</span>
        </div>
    );
};

/**
 * Функция расчета даты вылета.
 */
export const formatDepartureDate = (flight, segment) => {
    date = new Date(segment.departureDate);

    return renderDate(date);
};

/**
 * Функция расчета даты прибытия.
 */
export const formatArrivalDate = (flight, leg) => {
    if (leg.segments.length === 2) {
        date = new Date(leg.segments[1].arrivalDate);

        return renderDate(date);
    } else {
        date = new Date(leg.segments[0].arrivalDate);

        return renderDate(date);
    }
};

/**
 * Функция расчета правильного формата времени по минутам.
 */
export const calcTime = (mins) => {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + ' ч ' + minutes + ' мин';
};
