import React from "react";
import { Divider } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Main = () => {
  return (
    <div className="flex flex-col">
      <div
        className="flex items-center justify-between mb-2"
        style={{
          color: "#EF4F24",
        }}
      >
        <p className="m-0">To do</p>
        <InfoOutlinedIcon color="#EF4F24" style={{ height: 20, width: 20 }} />
      </div>

      <Divider style={{ color: "#00000080" }} />

      <div className="flex my-2">
        <button
          className="px-4 py-1"
          style={{
            backgroundColor: "#fff",
            border: "0.5px solid #EF4F24",
            borderRadius: 50,
            lineHeight: 1,
          }}
        >
          Priority
        </button>
      </div>

      <div
        className="flex items-center justify-between py-2"
        style={{
          borderBottom: "1px solid rgba(239, 79, 36, 0.3)",
        }}
      >
        <div className="flex items-center">
          <div
            className="flex items-center rounded-full p-1 mr-2"
            style={{
              backgroundColor: "#EF4F24",
              border: "1px solid #EF4F24",
              color: "#fff",
            }}
          >
            <InfoOutlinedIcon
              color="#EF4F24"
              style={{ height: 20, width: 20 }}
            />
          </div>
          <p className="m-0">Are you registered for GST</p>
        </div>

        <p className="m-0">Show Details</p>
      </div>

      <div
        className="flex items-center justify-between py-2"
        style={{
          borderBottom: "1px solid rgba(239, 79, 36, 0.3)",
        }}
      >
        <div className="flex items-center">
          <div
            className="flex items-center rounded-full p-1 mr-2"
            style={{
              backgroundColor: "#EF4F24",
              border: "1px solid #EF4F24",
              color: "#fff",
            }}
          >
            <InfoOutlinedIcon
              color="#EF4F24"
              style={{ height: 20, width: 20 }}
            />
          </div>
          <p className="m-0">BAS Lodgement</p>
        </div>

        <p className="m-0">Show Details</p>
      </div>

      <div
        className="flex items-center justify-between py-2"
        style={{
          borderBottom: "1px solid rgba(239, 79, 36, 0.3)",
        }}
      >
        <div className="flex items-center">
          <div
            className="flex items-center rounded-full rounded- p-1 mr-2"
            style={{
              backgroundColor: "#EF4F24",
              border: "1px solid #EF4F24",
              color: "#fff",
            }}
          >
            <InfoOutlinedIcon
              color="#EF4F24"
              style={{ height: 20, width: 20 }}
            />
          </div>
          <p className="m-0">Tax Return Due</p>
        </div>

        <p className="m-0">Show Details</p>
      </div>
    </div>
  );
};

export default React.memo(Main);
