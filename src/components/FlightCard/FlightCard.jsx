import React from 'react';
import styles from './FlightCard.module.scss';
import {airlineLogo} from '../../common/Helpers/LogosHelper';
import {Departure} from '../Departure/Departure';
import {Arrival} from '../Arrival/Arrival';

/**
 * Компонент отображения карточки полета.
 */
export const FlightCard = ({flight}) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <img className={styles.cardLogo} src={airlineLogo(flight)} alt={flight.carrier.caption} />
                <div className={styles.price}>
                    {flight.price.total.amount} <i className="fa fa-rub"></i>
                    <br />
                    <span>Стоимость для одного взрослого пассажира</span>
                </div>
            </div>
            <div>
                <Departure flight={flight} />
                <hr className={styles.line} />
                <Arrival flight={flight} />
            </div>
            <button className={styles.cardBtn}>Выбрать</button>
        </div>
    );
};
