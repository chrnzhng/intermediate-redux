import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

// import './chart.css';

export default (props) => {
    return (
        <div className="chart-container">
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
        </div>
    )
}