import React from 'react';

export const FilterCard = (props) => {
    return (
        <div className="col-md-2 card">
            <div className="col-md-12">
                <div className="header">Filters</div>
            </div>
            <br />
            <div className="col-md-12">
                <div className="inputStyle">Launch Year</div>
            </div>
            {/* <div className='container-fluid'> */}
            <div className="btn-container">
                {
                    props.years.map(el => {
                        return (
                            <div className="col-md-6">
                                <button type="button" id={el} onClick={(e) => props.handleClick(e, `&launch_year=${el}`)} className="btn btn-success fontStyle marginStyle">
                                    {el}
                                </button>
                            </div>
                        )
                    })
                }
            </div>
            {/* </div> */}
            <div className="col-md-12">
                <div className="inputStyle">Sucessfull Launch</div>
            </div>
            <div className="btn-container">
                <div className="col-md-6"><button onClick={(e) => props.handleClick(e, `&land_success=true`)} type="button" className="btn btn-success fontStyle marginStyle">True</button></div>
                <div className="col-md-6"><button onClick={(e) => props.handleClick(e, `&land_success=false`)} type="button" className="btn btn-success fontStyle marginStyle">False</button></div>
            </div>
            <div className="col-md-12">
                <div className="inputStyle">Sucessfull Landing</div>
            </div>
            <div className="btn-container">
                <div className="col-md-6"><button onClick={(e) => props.handleClick(e, `&launch_success=true`)} type="button" className="btn btn-success fontStyle marginStyle">True</button></div>
                <div className="col-md-6"><button onClick={(e) => props.handleClick(e, `&launch_success=false`)} type="button" className="btn btn-success fontStyle marginStyle">False</button></div>
            </div>
        </div>
    )
}
