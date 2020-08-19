import React, { useState, useEffect, useReducer } from 'react';
import './spaceX.css';
import { connect } from 'react-redux';
import { fetchAll, fetchByFilter } from './../actions/actions';
import { EachSpacexCard } from './each-spacex-card';
import { FilterCard } from './filter-card';

const SpaceXLaunch = (props) => {
    const { data, loading } = props.spacexData;
    const now = new Date().getUTCFullYear();
    const years = Array(now - (now - 10)).fill('').map((v, idx) => now - idx)
    const [lastYears] = useState(years);

    useEffect(() => {
        props.fetchAll();
    }, []);

    const handleClick = (el, query) => {
        props.fetchByFilter(query);
    }

    return (
        <div className="container">
            <div className="row">
                <header className="heading">SpaceX Launch Programs</header>
            </div>
            <div id="main">
                <FilterCard years={lastYears} handleClick={handleClick} />
                <div className="col-md-10 no-padding">
                    {
                        !loading && data.map(el => {
                            return (
                                <EachSpacexCard el={el} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    spacexData: state.spacexData
})

export default connect(mapStateToProps, {
    fetchAll,
    fetchByFilter
})(SpaceXLaunch);

