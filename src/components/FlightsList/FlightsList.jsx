import React, {useEffect, useState} from 'react';
import {flights} from '../../common/flights';
import {FlightCard} from '../FlightCard/FlightCard';
import {useSelector} from 'react-redux';
import {airlineFilter, priceFilter, sortPriceAndTime, transferFilter} from '../../common/Helpers/FiltersHelpers';
import styles from './FlightsList.module.scss';

/**
 * Компонент отображения списка полетов.
 */
export const FlightsList = () => {
    const {sortType, withTransfer, withoutTransfer, priceFrom, priceTo, LOTAirline, AeroflotAirline} = useSelector(
        (state) => state.filters
    );
    const [offset, setOffset] = useState(5);

    const onFlightsLoad = () => {
        setOffset(offset + 5);
    };

    let filteredFlights;

    filteredFlights = priceFilter(flights, priceFrom, priceTo);

    if (withTransfer || withoutTransfer) {
        filteredFlights = transferFilter(filteredFlights, withTransfer, withoutTransfer);
    }

    if (LOTAirline || AeroflotAirline) {
        filteredFlights = airlineFilter(filteredFlights, LOTAirline, AeroflotAirline);
    }

    filteredFlights = sortPriceAndTime(filteredFlights, sortType);

    useEffect(() => {
        setOffset(5);
    }, [sortType, withTransfer, withoutTransfer, priceFrom, priceTo, LOTAirline, AeroflotAirline]);

    if (filteredFlights.length === 0) {
        return <div className={styles.flightsList}>Рейсов не найдено</div>;
    }

    return (
        <div className={styles.flightsList}>
            {filteredFlights.slice(0, offset).map((flight) => {
                return <FlightCard key={flight.flightToken} flight={flight.flight} />;
            })}
            {offset >= filteredFlights.length ? null : (
                <button className={styles.btn} onClick={onFlightsLoad}>
                    Показать ещё
                </button>
            )}
        </div>
    );
};
