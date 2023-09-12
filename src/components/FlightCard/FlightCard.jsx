import React from 'react';
import styles from './FlightCard.module.scss';
import {companyLogo} from '../../common/Helpers/PlacesHelpers';
import {Departure} from '../Departure/Departure';
import {Arrival} from '../Arrival/Arrival';

export const FlightCard = ({flight}) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <img className={styles.cardLogo} src={companyLogo(flight)} alt={flight.carrier.caption} />
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
