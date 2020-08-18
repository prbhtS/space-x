import React from 'react';
import './spaceX.css';
import Axios from 'axios';
import { getYear } from './../utils/utils';
// import prabhath from './image/prabhath.png';

export default class SpaceXLaunch extends React.Component {
    constructor(props) {
        super(props);

        const now = new Date().getUTCFullYear();
        const years = Array(now - (now - 10)).fill('').map((v, idx) => now - idx)

        this.state = {
            year: years,
            spacexData: []

        }
    }

    componentDidMount() {
        Axios.get("https://api.spacexdata.com/v3/launches?limit=100").then(res => {
            this.setState({
                spacexData: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <header className="heading">SpaceX Launch Programs</header>
                </div>
                <div id="main">
                    <div className="col-md-2 card">
                        <div className="col-md-12">
                            <h5 className="header">Filters</h5>
                        </div>
                        <div className="col-md-12">
                            <div className="inputStyle">Launch Year</div>
                        </div>
                        <div className="row">
                            {
                                this.state.year.map(el => {
                                    return (<div className="col-md-6"><button type="button" className="btn btn-success fontStyle marginStyle">{el}</button></div>)
                                })
                            }
                        </div>
                        <div className="col-md-12">
                            <div className="inputStyle">Sucessfull Year</div>
                        </div>
                        <div className="row">
                            <div className="col-md-6"><button type="button" className="btn btn-success fontStyle marginStyle">True</button></div>
                            <div className="col-md-6"><button type="button" className="btn btn-success fontStyle marginStyle">False</button></div>
                        </div>
                        <div className="col-md-12">
                            <div className="inputStyle">Sucessfull Landing</div>
                        </div>
                        <div className="row">
                            <div className="col-md-6"><button type="button" className="btn btn-success fontStyle marginStyle">True</button></div>
                            <div className="col-md-6"><button type="button" className="btn btn-success fontStyle marginStyle">False</button></div>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="col-md-12">
                            {
                                this.state.spacexData.map(el => {
                                    return (
                                        <div className="col-md-3" >
                                            <div className="col-md-12 card no-padding">
                                                <div className="imageThumbnail">
                                                    <img src={el.links.mission_patch} className="card-img-top imgStyle" alt="..." />
                                                </div>
                                                <div className="detailSection">
                                                    <div className="col-md-12 spaceTitle">
                                                        <span className="floatLeft">{el.mission_name} #{el.flight_number}</span>
                                                    </div>
                                                    <div className="col-md-12 spaceTitle">
                                                        <div className="col-md-6 label">
                                                            <span className="floatLeft">Mission Ids : </span>
                                                        </div>
                                                        <div className="col-md-6 label">
                                                            <ul className="floatLeft">
                                                                {
                                                                    el.mission_id.map(mission => {
                                                                        return <li className="no-bold">{mission}</li>
                                                                    })
                                                                }
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 spaceTitle">
                                                        <div className="col-md-6 label">
                                                            <span className="floatLeft">Launch Year : </span>
                                                        </div>
                                                        <div className="col-md-6 label no-bold">
                                                            <span className="floatLeft">{el.launch_year}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 spaceTitle">
                                                        <div className="col-md-6 label">
                                                            <span className="floatLeft">Successfull <br /> Launch : </span>
                                                        </div>
                                                        <div className="col-md-6 label no-bold">
                                                            <span className="floatLeft">{el.launch_success ? String(el.launch_success) : "false"}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 spaceTitle">
                                                        <div className="col-md-6 label">
                                                            <span className="floatLeft">Successfull <br />
                                                                Landing : </span>
                                                        </div>
                                                        <div className="col-md-6 label no-bold">
                                                            <span className="floatLeft">{el.land_success ? String(el.land_success) : "false"}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}