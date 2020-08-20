import React from 'react';

export const EachSpacexCard = (props) => {
    const { el } = props;
    return (
        <div className="col-sm-12 col-md-3 card-padding" >
            <div className="col-md-12 card no-padding pt-3">
                <div className="imageThumbnail">
                    <img src={el.links.mission_patch_small} className="card-img-top imgStyle" alt="..." />
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
                    <div className="col-md-12 col-xs-12 spaceTitle">
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
}