// import React, { useState } from 'react'
// import Chart from 'react-apexcharts'
// import { CaseTypes123 } from './dounautchart2';
// import TableData from './tableData';
// function RiskLevel({ }) {

//     let [caseDonutData, setCaseDonutData] = useState([]);
//     let cases = [0, 0, 0];


//     const staticDashboardData = {
//         "httpCode": 200,
//         "httpMessage": "Valid Token",
//         "closedCasesCount": 5,
//         "openCasesCount": 4639,
//         "overdueCasesCount": 3732,
//         "totalCasesCount": 4644,
//         "low": null,
//         "medium": null,
//         "high": null,
//         "unrated": null,
//         "total": null,
//         "newCases": null,
//         "amberzoneCases": null,
//         "aboutToDueCases": null,
//         "rfiResponses": null,
//         "rfaResponses": null,
//         "newAlerts": null,
//         "approvedSTRs": null
//     }

//     let [dashboardData, setDashboardData] = useState([staticDashboardData]);

//     const getDashboardheader = async () => {
//         let donutData = []
//         setDashboardData(...dashboardData, dashboardData)
//         // let res = await getDashboradHeaderDetails(user)
//         // if (res?.htt  pCode === 200) {
//         // setDashboardData(...dashboardData, res);
//         donutData.push(staticDashboardData.closedCasesCount === null ? 0 : staticDashboardData?.closedCasesCount)
//         donutData.push(staticDashboardData.openCasesCount === null ? 0 : staticDashboardData?.openCasesCount)
//         donutData.push(staticDashboardData.overdueCasesCount === null ? 0 : staticDashboardData?.overdueCasesCount)
//         setCaseDonutData(donutData)
//         // dashboardData = res;
//         // } else if (res?.httpCode === 500) {
//         // dashboardData = [];
//         // } else if (res?.httpCode === 401) {
//         // logout();
//         // } else {
//         // dashboardData = [];
//         // }


//     }

//     const DonutChartOptions = {
//         labels: [
//             "Closed", "Open", "Overdue"
//         ],
//         colors: [
//             "#59A2F6", "#0DA931", "#B00020"
//         ],
//         dataLabels: {
//             enabled: true,
//             formatter: function (val, opts) {
//                 return opts.w.config.series[opts.seriesIndex]
//             }
//         },
//         plotOptions: {
//             pie: {
//                 expandOnclick: true,
//                 donut: {
//                     labels: {
//                         show: true,
//                         total: {
//                             show: true,
//                             showAlways: true,
//                             label: "Total Cases",
//                             color: "black",
//                             formatter: function (val) {
//                                 let data = val.config.series;
//                                 return data[0] + data[1];
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }



//     return (
//         <div>
//             <Chart options={DonutChartOptions}
//                 series={caseDonutData}
//                 type="donut"
//                 height={"227px"}
//                 width={"100%"} />
//         </div>
//     )
// }

// export {
//     RiskLevel
// }


// jhcoudhfoh


import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

function RiskLevel() {
  const [caseDonutData, setCaseDonutData] = useState([0, 0, 0]);
  const staticDashboardData = {
    "httpCode": 200,
    "httpMessage": "Valid Token",
    "closedCasesCount": 5,
    "openCasesCount": 4639,
    "overdueCasesCount": 3732,
    "totalCasesCount": 4644,
    "low": null,
    "medium": null,
    "high": null,
    "unrated": null,
    "total": null,
    "newCases": null,
    "amberzoneCases": null,
    "aboutToDueCases": null,
    "rfiResponses": null,
    "rfaResponses": null,
    "newAlerts": null,
    "approvedSTRs": null
  };
  const [dashboardData, setDashboardData] = useState(staticDashboardData);

  const updateDonutData = (data) => {
    const donutData = [
      data.closedCasesCount || 0,
      data.openCasesCount || 0,
      data.overdueCasesCount || 0,
    ];
    setCaseDonutData(donutData);
  };

  useEffect(() => {
    updateDonutData(dashboardData);
  }, [dashboardData]);

  const DonutChartOptions = {
    labels: ["Closed", "Open", "Overdue"],
    colors: ["#59A2F6", "#0DA931", "#B00020"],
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        return opts.w.config.series[opts.seriesIndex];
      },
    },
    plotOptions: {
      pie: {
        expandOnClick: true,
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              label: "Total Cases",
              color: "black",
              formatter: function (val) {
                let data = val.config.series;
                return data[0] + data[1];
              },
            },
          },
        },
      },
    },
  };

  return (
    <div>
      <Chart
        options={DonutChartOptions}
        series={caseDonutData}
        type="donut"
        height={"239px"}
        width={"100%"}
      />
    </div>
  );
}

export { RiskLevel };
