import React from "react";
import DashboardIcon from "@/icons/Dashboard.svg";
import InvoicesIcon from "@/icons/Invoices.svg";
import BookkeepingIcon from "@/icons/Bookkeeping.svg";
import LogbookIcon from "@/icons/Logbook.svg";
import TaxReturnIcon from "@/icons/TaxReturn.svg";

const Footer = () => {
  const menu = [
    {
      id: "dashboard",
      icon: DashboardIcon,
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      id: "invoices",
      icon: InvoicesIcon,
      title: "Invoices",
      path: "/Invoices",
    },
    {
      id: "bookkeeping",
      icon: BookkeepingIcon,
      title: "Bookkeeping",
      path: "/bookkeeping",
    },
    {
      id: "logbook",
      icon: LogbookIcon,
      title: "Logbook",
      path: "/logbook",
    },
    {
      id: "tax-return",
      icon: TaxReturnIcon,
      title: "Tax Return",
      path: "/tax-return",
    },
  ];

  return (
    <div
      className="tw-bg-white tw-fixed tw-px-3 tw-py-2 tw-w-full tw-md:hidden tw-md:relative"
      style={{
        borderTop: "0.5px solid #00000033",
        bottom: 0,
        zIndex: 999,
      }}
    >
      <div
        className="tw-flex tw-items-center tw-justify-between"
        style={{ fontSize: 10 }}
      >
        {menu.map((m) => (
          <div className="tw-flex tw-items-center tw-flex-col" key={m.id}>
            <img
              className="mb-1"
              style={{ color: "#000" }}
              src={m.icon}
              alt={m.title}
              height={20}
              width={20}
            />
            <div>{m.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Footer);
