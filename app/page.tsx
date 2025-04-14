import { IsClient } from "@/components/IsClient";
import { MemeTable } from "@/components/memes/MemeTable";
import React from "react";

const TableViewPage = () => {
  return (
    <IsClient>
      <MemeTable />
    </IsClient>
  );
};

export default TableViewPage;
