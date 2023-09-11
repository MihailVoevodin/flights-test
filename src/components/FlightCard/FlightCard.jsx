import React from 'react';
import styles from './FlightCard.module.scss';
import {companyLogo} from '../../common/Helpers';

export const FlightCard = ({flight}) => {
    return (
        <div>
            <div className={styles.cardHeader}>
                <img className={styles.cardLogo} src={companyLogo(flight)} alt={flight.carrier.caption} />
                <div className={styles.price}>
                    {flight.price.total.amount} <i className="fa fa-rub"></i>
                    <br />
                    <span>Стоимость для одного взрослого пассажира</span>
                </div>
            </div>
        </div>
    );
};
