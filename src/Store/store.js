import {configureStore} from '@reduxjs/toolkit';
import filtersSlice from './filtersSlice';

/**
 * Инициализация стора.
 */
export const store = configureStore({
    reducer: {
        filters: filtersSlice,
    },
});
