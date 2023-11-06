import React from 'react'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
import {
  Button
} from "@mui/material";

const GridContainer = (props) => {
  return (
    <div
      className={props.borderless ? "h-100 bg-white p-2  rounded-3 mt-0" : "border h-100 bg-white p-2  rounded-3 mt-0 "}
      style={{ borderColor: "ebedf4" }}
    >
      {
        props.title && 
      <div className={"border  bg-white p-2  rounded-3 mt-0 flex justify-between align-baseline"} style={{ borderColor: "ebedf4", marginBottom: "5px" }}>
        <div>
          <h5 className="fw-bold" >{props.title}</h5>
          {/* <Underline className="my-1" /> */}
        </div>
        <div>
          {
            props.viewAll ? (
              <div>
                <div style={{ display: "flex" }}>
                  <Link to={props.viewAll} target="_blank" rel='noopener'>
                    <Button style={{ textTransform: "none", color: "#FF5E00" }}>
                      View All <ArrowRightAltIcon />
                    </Button>
                  </Link>
                  <div />
                </div>
              </div>
            ) : ""
          }
        </div>
      </div>
}
      <div className="h-100">
        {props.children}
      </div>
    </div>
  )

}

export { GridContainer }