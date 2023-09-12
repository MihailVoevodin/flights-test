import {COMPANIES_NAMES} from '../Consts';
import airfrance from '../../assets/carriers/airfrance.png';
import aeroflot from '../../assets/carriers/aeroflot.png';
import KLM from '../../assets/carriers/KLM.png';
import turkish from '../../assets/carriers/turkish.png';
import finnair from '../../assets/carriers/finnair.png';
import airBaltic from '../../assets/carriers/airBaltic.png';
import alitalia from '../../assets/carriers/alitalia.png';
import brusselsair from '../../assets/carriers/brusselsair.png';
import LOTPolish from '../../assets/carriers/LOTPolish.png';
import pegasus from '../../assets/carriers/pegasus.png';

export const companyLogo = (flight) => {
    switch (flight.carrier.caption) {
        case COMPANIES_NAMES.AIR_FRANCE:
            return airfrance;
        case COMPANIES_NAMES.KLM:
            return KLM;
        case COMPANIES_NAMES.AEROFLOT:
            return aeroflot;
        case COMPANIES_NAMES.TURKISH_AIRLINES:
            return turkish;
        case COMPANIES_NAMES.FINNAIR:
            return finnair;
        case COMPANIES_NAMES.AIR_BALTIC:
            return airBaltic;
        case COMPANIES_NAMES.ALITALIA:
            return alitalia;
        case COMPANIES_NAMES.BRUSSELS_AIRLINES:
            return brusselsair;
        case COMPANIES_NAMES.LOT_POLISH_AIRLINES:
            return LOTPolish;
        case COMPANIES_NAMES.PEGASUS:
            return pegasus;
    }
};

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

export const arrivalCityReturn = (flight, leg) => {
    if (leg.segments.length === 2) {
        return leg.segments[1].arrivalCity.caption;
    } else {
        return leg.segments[0].arrivalCity.caption;
    }
};

export const arrivalAirport = (flight, leg) => {
    if (leg.segments.length === 2) {
        return leg.segments[1].arrivalAirport.caption;
    } else {
        return leg.segments[0].arrivalAirport.caption;
    }
};

export const arrivalAirportCode = (flight, leg) => {
    if (leg.segments.length === 2) {
        return leg.segments[1].arrivalAirport.uid;
    } else {
        return leg.segments[0].arrivalAirport.uid;
    }
};

export const departureCityReturn = (flight, firstSegment) => {
    if (!firstSegment.departureCity) {
        return 'Лондон, ';
    } else {
        return firstSegment.departureCity.caption + ', ';
    }
};
