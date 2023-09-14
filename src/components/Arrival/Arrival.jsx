import React from 'react';
import styles from '../FlightCard/FlightCard.module.scss';
import {arrivalAirport, arrivalAirportCode, arrivalCityReturn, departureCityReturn} from '../../common/Helpers/PlacesHelpers';
import {calcTime, formatArrivalDate, formatDepartureDate} from '../../common/Helpers/DatesHelpers';

/**
 * Компонент отображения прилета.
 */
export const Arrival = ({flight}) => {
    const secondLeg = flight.legs[1];
    const firstSegment = flight.legs[1].segments[0];

    return (
        <div>
            <span>
                {departureCityReturn(flight, firstSegment)}
                {firstSegment.departureAirport.caption + ' '}
                <span className={styles.arrivalAirportCode}>({firstSegment.departureAirport.uid})</span>
            </span>
            &#8594;
            <span>
                {arrivalCityReturn(flight, secondLeg) + ', '}
                {arrivalAirport(flight, secondLeg) + ' '}
                <span className={styles.arrivalAirportCode}>({arrivalAirportCode(flight, secondLeg)})</span>
            </span>
            <hr />
            <div className={styles.flightOutTime}>
                <div>{formatDepartureDate(flight, firstSegment)}</div>
                <div>{calcTime(secondLeg.duration)}</div>
                <div>{formatArrivalDate(flight, secondLeg)}</div>
            </div>
            {secondLeg.segments.length > 1 ? (
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
