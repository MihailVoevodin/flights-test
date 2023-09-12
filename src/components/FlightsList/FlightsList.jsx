import React, {useState} from 'react';
import {flights} from '../../common/flights';
import {FlightCard} from '../FlightCard/FlightCard';
import {Pagination} from 'antd';

export const FlightsList = () => {
    const [flightsPerPage] = useState(5);
    const [pages, setPages] = useState([0, 5]);

    const handleChangePage = (page) => {
        setPages([page * flightsPerPage - flightsPerPage, page * flightsPerPage]);
    };

    return (
        <div>
            {flights.slice(pages[0], pages[1]).map((flight) => {
                return <FlightCard key={flight.flightToken} flight={flight.flight} />;
            })}
            <Pagination defaultPageSize={5} onChange={handleChangePage} showSizeChanger={false} total={flights.length} />
        </div>
    );
};
