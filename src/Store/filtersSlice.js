import {createSlice} from '@reduxjs/toolkit';
import {SORT_TYPES} from '../common/Consts';

const initialState = {
    sortType: 'INCREASE_PRICE',
    withTransfer: false,
    withoutTransfer: false,
    priceFrom: 0,
    priceTo: 100000,
    LOTAirline: false,
    AeroflotAirline: false,
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSortType(state, action) {
            state.sortType = action.payload;
        },
        setWithTransfer(state) {
            state.withTransfer = !state.withTransfer;
        },
        setWithoutTransfer(state) {
            state.withoutTransfer = !state.withoutTransfer;
        },
        setPriceFrom(state, action) {
            state.priceFrom = action.payload;
        },
        setPriceTo(state, action) {
            state.priceTo = action.payload;
        },
        setLOTAirline(state) {
            state.LOTAirline = !state.LOTAirline;
        },
        setAeroflotAirline(state) {
            state.AeroflotAirline = !state.AeroflotAirline;
        },
    },
});

export const {setSortType, setWithTransfer, setWithoutTransfer, setPriceFrom, setPriceTo, setLOTAirline, setAeroflotAirline} =
    filtersSlice.actions;

export default filtersSlice.reducer;
