import React from "react";
import { Chart as ChartJS, ArcElement, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

import ProgressBar from "../ProgressBar";

const data = {
  datasets: [
    {
      label: "# of votes",
      data: [62, 28],
      backgroundColor: ["#76987F", "#F46E6E"],
      borderWidth: 0,
    },
  ],
};

const options = {
  plugins: {
    datalabels: {
      formatter: (value) => `${value}%`,
      color: "#fff",
      font: {
        size: "22px",
      },
    },
  },
};

ChartJS.register(ArcElement, Legend);

const Sidebar = () => {
  return (
    <div className="side-bar">
      <div
        className="tw-flex tw-items-center"
        style={{
          background:
            "linear-gradient(82.89deg, #EF4F24 34.24%, #EFCC20 102.64%)",
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
          color: "#fff",
          padding: "16px",
          marginBottom: "4px",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(255, 255, 255, 0.35)",
            borderRadius: "50%",
            padding: "2px",
          }}
        >
          <div
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: "50%",
            }}
          >
            <div
              className="tw-flex tw-flex-col tw-items-center tw-justify-center"
              style={{
                height: 104,
                width: 104,
              }}
            >
              <p style={{ fontSize: "22px", margin: "0 0 4px 0" }}>$461.58</p>
              <p style={{ fontSize: "12px", margin: 0 }}>GST Payable</p>
            </div>
          </div>
        </div>

        <div
          className="tw-flex tw-justify-between tw-w-full"
          style={{
            marginLeft: "16px",
          }}
        >
          <div
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: "4px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              padding: "8px",
              marginRight: "8px",
              textAlign: "center",
              width: "50%",
            }}
          >
            <p style={{ margin: "0 0 4px 0" }}>Business</p>
            <span style={{ fontSize: 12 }}>Transaction Type</span>
          </div>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: "4px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              padding: "8px",
              marginLeft: "8px",
              textAlign: "center",
              width: "50%",
            }}
          >
            <p style={{ margin: "0 0 4px 0" }}>Monthly</p>
            <span style={{ fontSize: 12 }}>January</span>
          </div>
        </div>
      </div>

      <div className="tw-grid tw-grid-cols-2 tw-gap-1 tw-w-full tw-mb-1">
        <div
          className="tw-flex tw-flex-col tw-justify-between tw-bg-primary tw-text-white tw-p-4"
        >
          <div>Total Income</div>
          <div style={{ fontSize: 22, textAlign: "center" }}>$6,400.00</div>
          <div className="flex justify-between">
            <span>GST</span>
            <span>$581.82</span>
          </div>
        </div>

        <div
          className="tw-flex tw-flex-col tw-justify-between tw-bg-primary tw-text-white tw-p-4"
        >
          <div>Total Expenses</div>
          <div style={{ fontSize: 22, textAlign: "center" }}>$2,520.00</div>
          <div className="tw-flex tw-justify-between">
            <span>GST</span>
            <span>$120.24</span>
          </div>
        </div>
      </div>

      <div className="tw-grid tw-grid-cols-2 tw-gap-1 tw-w-full tw-mb-6">
        <div
          className="tw-flex tw-flex-col tw-justify-between tw-bg-primary tw-text-white tw-p-4"
          style={{
            borderBottomLeftRadius: "4px",
          }}
        >
          <div className="tw-mb-2">Profit</div>
          <div style={{ fontSize: 22, textAlign: "center" }}>$3,800.00</div>
        </div>

        <div
          className="tw-flex tw-flex-col tw-justify-between tw-bg-primary tw-text-white tw-p-4"
          style={{
            borderBottomRightRadius: "4px",
          }}
        >
          <div>View Graph</div>
          <div className="tw-text-right">None</div>
        </div>
      </div>

      <div
        className="tw-flex tw-items-center tw-justify-center"
        style={{
          marginBottom: "32px",
        }}
      >
        <div style={{ width: 320 }}>
          <Pie data={data} options={options} plugins={[ChartDataLabels]} />
        </div>
      </div>

      <div className="tw-mb-6">
        <div className="tw-flex tw-justify-between tw-mb-2">
          <p className="tw-m-0">Income</p>
          <p className="tw-m-0">$6,400.00</p>
        </div>
        <ProgressBar
          totalColor="#A1D0AE66"
          completeColor="#A1D0AE"
          completed={60}
        />
      </div>

      <div className="tw-mb-6">
        <div className="tw-flex tw-justify-between tw-mb-2">
          <p className="tw-m-0">Expenses</p>
          <p className="tw-m-0">$2,520.00</p>
        </div>
        <ProgressBar
          totalColor="#E473734F"
          completeColor="#E47373"
          completed={20}
        />
      </div>

      <div className="tw-mb-6">
        <div className="tw-flex tw-justify-between tw-mb-2">
          <p className="tw-m-0">Balance</p>
          <p className="tw-m-0">$3,800.00</p>
        </div>
        <ProgressBar
          totalColor="#AEAEAE59"
          completeColor="#AEAEAE"
          completed={25}
        />
      </div>
    </div>
  );
};

export default React.memo(Sidebar);
