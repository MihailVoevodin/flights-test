import {flights} from '../flights';

export const calcMinPrice = (airline) => {
    const prices = flights.filter((flight) => flight.flight.carrier.caption === airline).map((flight) => flight.flight.price.total.amount);

    return Math.min.apply(null, prices);
};
