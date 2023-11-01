import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import { CaseTypes123 } from './dounautchart2';
function RiskLevel(props) {

    const [options, setOptions] = useState(
        {
            chart: {
                width: 95,
                height: 95,
                type: 'donut',
            },
            dataLabels: {
                enabled: false
            },
            responsive: [{
                breakpoint: 500,
                options: {
                    chart: {
                        width: '100%'
                    },
                    legend: {
                        show: false
                    }
                }
            }],
            legend: {
                position: 'right',
                offsetY: 0,
            }
        }
    );


    const [series, setSeries] = useState(
        [44, 55, 13]
    );

    return (
        <div style={{}}>
            <Chart options={options} series={series} type="donut" width={287} />
        </div>
    )
}

export { RiskLevel }
