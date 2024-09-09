// import React from 'react'
import Heading from "../../commons/Heading";
import Dashboardcard from "../../components/Dashboard/Dashboardcard";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="ml-[40px] mt-[40px]">
        <div>
          {" "}
          <Heading
            heading="Browse Relevant Playlist"
            subheading="Explore the playlist to excel in your career"
          />
        </div>
      </div>

      <div>
        <Dashboardcard
          image="https://picsum.photos/200"
          tags={["Photograpgy", "Photoshop","Art"]}
          author="Saugat Gautam"
          authorimg="https://picsum.photos/200"
          title="Photograpghy"
        />
      </div>
    </div>
  );
};

export default Dashboard;
