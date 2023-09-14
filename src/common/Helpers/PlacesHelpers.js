/**
 * Функция определения города прибытия при вылете.
 */
export const arrivalCityOut = (flight, leg) => {
    if (leg.segments.length === 2) {
        if (!leg.segments[1].arrivalCity) {
            return '';
        } else {
            return leg.segments[1].arrivalCity.caption;
        }
    } else {
        return leg.segments[0].arrivalCity.caption;
    }
};

/**
 * Функция определения города прибытия при обратном пути.
 */
export const arrivalCityReturn = (flight, leg) => {
    if (leg.segments.length === 2) {
        return leg.segments[1].arrivalCity.caption;
    } else {
        return leg.segments[0].arrivalCity.caption;
    }
};

/**
 * Функция определения аэропорта прибытия.
 */
export const arrivalAirport = (flight, leg) => {
    if (leg.segments.length === 2) {
        return leg.segments[1].arrivalAirport.caption;
    } else {
        return leg.segments[0].arrivalAirport.caption;
    }
};

/**
 * Функция определения кода аэропорта прибытия.
 */
export const arrivalAirportCode = (flight, leg) => {
    if (leg.segments.length === 2) {
        return leg.segments[1].arrivalAirport.uid;
    } else {
        return leg.segments[0].arrivalAirport.uid;
    }
};

/**
 * Функция определения города вылета при обратном пути.
 */
export const departureCityReturn = (flight, firstSegment) => {
    if (!firstSegment.departureCity) {
        return 'Лондон, ';
    } else {
        return firstSegment.departureCity.caption + ', ';
    }
};
