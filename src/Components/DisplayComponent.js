import React from 'react'

const DisplayComponent = (props) => {
    return (
        <div>
            <div className='clock-holder'>
                <div className='stopwatch'>
                    <span>{(props.time.h >= 10) ? props.time.h : "0" + props.time.h}</span>&nbsp; : &nbsp;
                    <span>{(props.time.m >= 10) ? props.time.m : "0" + props.time.m}</span>&nbsp; : &nbsp;
                    <span>{(props.time.s >= 10) ? props.time.s : "0" + props.time.s}</span>&nbsp; : &nbsp;
                    <span>{(props.time.ms >= 10) ? props.time.ms : "0" + props.time.ms}</span>&nbsp;
                </div>
            </div>
        </div>
    )
}

export default DisplayComponent