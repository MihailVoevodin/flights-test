import React from 'react';
import styles from '../FlightCard/FlightCard.module.scss';
import {arrivalAirport, arrivalAirportCode, arrivalCityOut} from '../../common/Helpers/PlacesHelpers';
import {calcTime, formatArrivalDate, formatDepartureDate} from '../../common/Helpers/DatesHelpers';

/**
 * Компонент отображения вылета.
 */
export const Departure = ({flight}) => {
    const firstLeg = flight.legs[0];
    const firstSegment = flight.legs[0].segments[0];
    const secondSegment = flight.legs[0].segments[1];

    return (
        <div>
            <span>
                {firstSegment.departureCity.caption + ', '}
                {firstSegment.departureAirport.caption + ' '}
                <span className={styles.arrivalAirportCode}>({firstSegment.departureAirport.uid})</span>
            </span>
            &#8594;
            <span>
                {arrivalCityOut(flight, firstLeg) + ', '}
                {arrivalAirport(flight, firstLeg) + ' '}
                <span className={styles.arrivalAirportCode}>({arrivalAirportCode(flight, firstLeg)})</span>
            </span>
            <hr />
            <div className={styles.flightOutTime}>
                <div>{formatDepartureDate(flight, firstSegment)}</div>
                <div>{calcTime(firstLeg.duration)}</div>
                <div>{formatArrivalDate(flight, firstLeg, firstSegment, secondSegment)}</div>
            </div>
            {firstLeg.segments.length > 1 ? (
                <div className={styles.transferText}>
                    <span>1 пересадка</span>
                </div>
            ) : (
                <hr className={styles.transferLine}></hr>
            )}
            <div className={styles.carrier}>Рейс выполняет: {flight.carrier.caption}</div>
        </div>
    );
};
