import {COMPANIES_NAMES} from '../Consts';
import airfrance from '../../assets/airlinesLogos/airfrance.png';
import aeroflot from '../../assets/airlinesLogos/aeroflot.png';
import KLM from '../../assets/airlinesLogos/KLM.png';
import turkish from '../../assets/airlinesLogos/turkish.png';
import finnair from '../../assets/airlinesLogos/finnair.png';
import airBaltic from '../../assets/airlinesLogos/airBaltic.png';
import alitalia from '../../assets/airlinesLogos/alitalia.png';
import brusselsair from '../../assets/airlinesLogos/brusselsair.png';
import LOTPolish from '../../assets/airlinesLogos/LOTPolish.png';
import pegasus from '../../assets/airlinesLogos/pegasus.png';

/**
 * Функция возвращения определенного лого авиакомпании.
 */
export const airlineLogo = (flight) => {
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
