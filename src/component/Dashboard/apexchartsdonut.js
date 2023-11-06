import React, { useState } from "react";
import Chart from "react-apexcharts";
// import CommingSoon from "../../ComingSoon/ComingSoon";
const CasePriority = () => {
  const [options, setOptions] = useState(
    {
      chart: {
        type: 'bar',
        height: 400,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          dataLabels: {
            total: {
              enabled: true,
              style: {
                fontSize: '13px',
                fontWeight: 900
              }
            }
          }
        },
      },
      xaxis: {
        type: 'date',
        // categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT'
        // ],
      },
      legend: {
        position: 'right',
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    },
  );

  const [series, setSeries] = useState([{
    name: 'Label 1',
    data: [44, 55, 41]
  }, {
    name: 'Label 2',
    data: [13, 23, 20]
  }, {
    name: 'Label 3',
    data: [11, 17, 15]
  }]);

  return (
    
    <div className="RiskScoreChart">
      <Chart
        options={options}
        series={series}
        type="bar"
        height={'227px'}
        width={"100%"}
      />
      {/* <CommingSoon/> */}
    </div>
  );
};

export { CasePriority };
