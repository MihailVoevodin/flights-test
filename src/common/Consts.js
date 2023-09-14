/**
 * Названия авиакомпаний.
 */
export const COMPANIES_NAMES = {
    AIR_FRANCE: 'Air France',
    KLM: 'KLM',
    AEROFLOT: 'Аэрофлот - российские авиалинии',
    TURKISH_AIRLINES: 'TURK HAVA YOLLARI A.O.',
    FINNAIR: 'Finnair Oyj',
    AIR_BALTIC: 'Air Baltic Corporation A/S',
    ALITALIA: 'Alitalia Societa Aerea Italiana',
    BRUSSELS_AIRLINES: 'Brussels Airlines',
    LOT_POLISH_AIRLINES: 'LOT Polish Airlines',
    PEGASUS: 'Pegasus Hava Tasimaciligi A.S.',
};

/**
 * Массив видов сортировок.
 */
export const SORT_TYPES = [
    {
        key: 1,
        value: 'INCREASE_PRICE',
        text: ' - по возрастанию цены',
    },
    {
        key: 2,
        value: 'DECREASE_PRICE',
        text: ' - по убыванию цены',
    },
    {
        key: 3,
        value: 'TIME',
        text: ' - по времени в пути',
    },
];

/**
 * Фильтры по количеству пересадок.
 */
export const TRANSFER_FILTERS = {
    WITH_TRANSFER: {
        value: 'withTransfer',
        text: ' - 1 пересадка',
    },
    WITHOUT_TRANSFER: {
        value: 'withoutTransfer',
        text: ' - без пересадок',
    },
};

/**
 * Текстовки для фильтра по цене.
 */
export const PRICE_FILTERS = {
    PRICE_FROM: 'От',
    PRICE_TO: 'До',
};

/**
 * Текстовки для фильтра по заданным авиакомпаниям.
 */
export const AIRLINES_FILTERS = {
    LOT: 'LOT Polish Airlines',
    AEROFLOT: 'Аэрофлот - российские авиалинии',
};
