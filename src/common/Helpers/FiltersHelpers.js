import {flights} from '../flights';
import {AIRLINES_FILTERS, SORT_TYPES} from '../Consts';

export const calcMinPrice = (airline) => {
    const prices = flights.filter((flight) => flight.flight.carrier.caption === airline).map((flight) => flight.flight.price.total.amount);

    return Math.min.apply(null, prices);
};

export const sortPriceAndTime = (flights, sortType) => {
    switch (sortType) {
        case SORT_TYPES[0].value:
            return flights.sort((a, b) => a.flight.price.total.amount - b.flight.price.total.amount);
        case SORT_TYPES[1].value:
            return flights.sort((a, b) => b.flight.price.total.amount - a.flight.price.total.amount);
        case SORT_TYPES[2].value:
            return flights.sort(
                (a, b) => a.flight.legs[0].duration + a.flight.legs[1].duration - (b.flight.legs[0].duration + b.flight.legs[1].duration)
            );
    }
};

export const transferFilter = (flights, withTransfer, withoutTransfer) => {
    if (withTransfer) {
        return flights.filter((flight) => flight.flight.legs[0].segments.length === 2);
    }
    if (withoutTransfer) {
        return flights.filter((flight) => flight.flight.legs[0].segments.length === 1 && flight.flight.legs[1].segments.length === 1);
    }
};

export const airlineFilter = (flights, LOTAirline, AeroflotAirline) => {
    const LOTFlights = flights.filter((flight) => flight.flight.carrier.caption === AIRLINES_FILTERS.LOT);
    const AeroflotFlights = flights.filter((flight) => flight.flight.carrier.caption === AIRLINES_FILTERS.AEROFLOT);

    if (LOTAirline && AeroflotAirline) {
        return [...LOTFlights, ...AeroflotFlights];
    }
    if (LOTAirline) {
        return LOTFlights;
    } else if (AeroflotAirline) {
        return AeroflotFlights;
    }
};

export const priceFilter = (store, priceFrom, priceTo) => {
    if (Number(priceTo) >= 22000) {
        return store.filter((flight) => flight.flight.price.total.amount > priceFrom && flight.flight.price.total.amount < priceTo);
    } else if (Number(priceTo) <= 22000) {
        return store;
    }
};
