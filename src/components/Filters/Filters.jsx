import React from 'react';
import {Radio, Checkbox, Input} from 'antd';
import {AIRLINES_FILTERS, PRICE_FILTERS, SORT_TYPES, TRANSFER_FILTERS} from '../../common/Consts';
import styles from './Filters.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {
    setPriceFrom,
    setSortType,
    setWithoutTransfer,
    setWithTransfer,
    setPriceTo,
    setLOTAirline,
    setAeroflotAirline,
} from '../../Store/filtersSlice';
import {calcMinPrice} from '../../common/Helpers/FiltersHelpers';

/**
 * Компонент отображения фильтров.
 */
export const Filters = () => {
    const {sortType, withTransfer, withoutTransfer, priceFrom, priceTo, LOTAirline, AeroflotAirline} = useSelector(
        (state) => state.filters
    );
    const dispatch = useDispatch();

    const onChangeSort = (e) => {
        dispatch(setSortType(e.target.value));
    };

    const onChangeWithTransfer = () => {
        dispatch(setWithTransfer());
    };

    const onChangeWithoutTransfer = () => {
        dispatch(setWithoutTransfer());
    };

    const onChangePriceFrom = (e) => {
        dispatch(setPriceFrom(Number(e.target.value)));
    };

    const onChangePriceTo = (e) => {
        dispatch(setPriceTo(Number(e.target.value)));
    };

    const onChangeLOTAirline = () => {
        dispatch(setLOTAirline());
    };

    const onChangeAeroflotAirline = () => {
        dispatch(setAeroflotAirline());
    };

    return (
        <div className={styles.filtersContainer}>
            <div>
                <h4>Сортировать</h4>
                <Radio.Group defaultValue={sortType} onChange={onChangeSort}>
                    {SORT_TYPES.map((type) => {
                        return (
                            <Radio style={{display: 'flex', alignItems: 'center'}} key={type.key} value={type.value}>
                                {type.text}
                            </Radio>
                        );
                    })}
                </Radio.Group>
            </div>
            <div className={styles.filters}>
                <h4>Фильтровать</h4>
                <Checkbox checked={withTransfer} onChange={onChangeWithTransfer} value={TRANSFER_FILTERS.WITH_TRANSFER.value}>
                    {TRANSFER_FILTERS.WITH_TRANSFER.text}
                </Checkbox>
                <Checkbox checked={withoutTransfer} onChange={onChangeWithoutTransfer} value={TRANSFER_FILTERS.WITHOUT_TRANSFER.value}>
                    {TRANSFER_FILTERS.WITHOUT_TRANSFER.text}
                </Checkbox>
            </div>
            <div className={styles.price}>
                <h4>Цена</h4>
                <div className={styles.priceInputContainer}>
                    <span>{PRICE_FILTERS.PRICE_FROM}</span>
                    <Input
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }}
                        value={priceFrom}
                        onChange={onChangePriceFrom}
                    />
                </div>
                <div className={styles.priceInputContainer}>
                    <span>{PRICE_FILTERS.PRICE_TO}</span>
                    <Input
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }}
                        value={priceTo}
                        onChange={onChangePriceTo}
                    />
                </div>
            </div>
            <div className={styles.airlines}>
                <h4>Авиакомпании</h4>
                <Checkbox checked={LOTAirline} onChange={onChangeLOTAirline} value={AIRLINES_FILTERS.LOT}>
                    {AIRLINES_FILTERS.LOT} от {calcMinPrice(AIRLINES_FILTERS.LOT)}
                </Checkbox>
                <Checkbox checked={AeroflotAirline} onChange={onChangeAeroflotAirline} value={AIRLINES_FILTERS.AEROFLOT}>
                    {AIRLINES_FILTERS.AEROFLOT.slice(0, 15)}... от {calcMinPrice(AIRLINES_FILTERS.AEROFLOT)}
                </Checkbox>
            </div>
        </div>
    );
};
