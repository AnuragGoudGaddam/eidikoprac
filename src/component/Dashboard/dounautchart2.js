import React, { useState } from "react";
import Chart from "react-apexcharts";
export function CaseTypes123(props) {
  //let cases=props.data ;
  //console.log("case data:",props.data);
  //let [casesCountList,setCasesCountList]=useState(props.data);
  const [series, setSeries] = useState(props.data);

  const [options, setOptions] = useState(
    {

      labels: ["Closed", "Open", "Overdue"],
      dataLables: {
        enabled: true,

        formatter: function (val, opts) {
          return opts.w.config.series[opts.seriesIndex]
        }
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
                // name: true,
                // value: true,
                label: "Total Cases",
                color: "FFFFFF",
              },
              // dataLables:{
              //   formatter:function(val,opts){
              //     return opts.w.config.series[opts.seriesIndex];
              //   }
              // }
            },

          },

        },


      },
    } //end
  );
  // let closedCases;
  // let openCases;
  // let overduedCases;
  //console.log("count"+ casesCountList);
  // if(typeof cases !== 'undefined' && cases.length > 0){
  //     closedCases = cases.closedCasesCount;
  //     openCases=cases.openCasesCount;
  //     overduedCases=cases.overdueCasesCount;
  //   // }
  // let a=props.data[0]
  // let b=props.data[1]
  // let c=props.data[2]
  //  console.log(a+"::"+b+"::"+c);


  //console.log(closedCases+"::"+openCases+"::"+overduedCases);
  console.log("props.data: ", props);
  // console.log("props.data: ",props.data.length);

  // const [series, setSeries] = useState([0, 1 ,0]);
  // console.log("series: ",series);
  return (
    // <div className="CaseTypesChart">
    <div >
      {/* {props.data.length > 0 &&  */}
      <Chart
        options={options}
        // series={[1,4,10]}
        series={props.data}
        type="donut"
        height={"227px"}
        width={"100%"}
      />
      {/* } */}
    </div>
  );
}



