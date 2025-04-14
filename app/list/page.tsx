import { IsClient } from "@/components/IsClient";
import { MemeList } from "@/components/memes/MemeList";
import React from "react";

const ListViewPage = () => {
  return (
    <IsClient>
      <MemeList />
    </IsClient>
  );
};

export default ListViewPage;
