import {airCompaniesNames} from './Consts';
import airfrance from '../assets/carriers/airfrance.png';
import aeroflot from '../assets/carriers/aeroflot.png';
import KLM from '../assets/carriers/KLM.png';
import turkish from '../assets/carriers/turkish.png';
import finnair from '../assets/carriers/finnair.png';
import airBaltic from '../assets/carriers/airBaltic.png';
import alitalia from '../assets/carriers/alitalia.png';
import brusselsair from '../assets/carriers/brusselsair.png';
import LOTPolish from '../assets/carriers/LOTPolish.png';
import pegasus from '../assets/carriers/pegasus.png';

export const companyLogo = (flight) => {
    if (flight.carrier.caption === airCompaniesNames.AIR_FRANCE) {
        return airfrance;
    } else if (flight.carrier.caption === airCompaniesNames.KLM) {
        return KLM;
    } else if (flight.carrier.caption === airCompaniesNames.AEROFLOT) {
        return aeroflot;
    } else if (flight.carrier.caption === airCompaniesNames.TURKISH_AIRLINES) {
        return turkish;
    } else if (flight.carrier.caption === airCompaniesNames.FINNAIR) {
        return finnair;
    } else if (flight.carrier.caption === airCompaniesNames.AIR_BALTIC) {
        return airBaltic;
    } else if (flight.carrier.caption === airCompaniesNames.ALITALIA) {
        return alitalia;
    } else if (flight.carrier.caption === airCompaniesNames.BRUSSELS_AIRLINES) {
        return brusselsair;
    } else if (flight.carrier.caption === airCompaniesNames.LOT_POLISH_AIRLINES) {
        return LOTPolish;
    } else if (flight.carrier.caption === airCompaniesNames.PEGASUS) {
        return pegasus;
    }
};
