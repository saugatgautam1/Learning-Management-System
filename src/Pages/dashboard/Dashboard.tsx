// import React from 'react'
import Heading from "../../commons/Heading";
import Dashboardcard from "../../components/Dashboard/Dashboardcard";
import icon from "../../assets/bgimg.svg";
import Stayupdated from "../../components/Dashboard/Stayupdated";

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

      <div className="flex w-full gap-6  px-6 ">
        <Dashboardcard
          image="https://picsum.photos/200"
          tags={["Photograpgy", "Photoshop", "Art"]}
          author="Saugat Gautam"
          authorimg="https://picsum.photos/200"
          title="Photograpghy"
        />
        <Dashboardcard
          image="https://picsum.photos/200"
          tags={["Photograpgy", "Photoshop", "Art"]}
          author="Saugat Gautam"
          authorimg="https://picsum.photos/200"
          title="Photograpghy"
        />
        <Dashboardcard
          image="https://picsum.photos/200"
          tags={["Photograpgy", "Photoshop", "Art"]}
          author="Saugat Gautam"
          authorimg="https://picsum.photos/200"
          title="Photograpghy"
        />
        <Dashboardcard
          image="https://picsum.photos/200"
          tags={["Photograpgy", "Photoshop", "Art"]}
          author="Saugat Gautam"
          authorimg="https://picsum.photos/200"
          title="Photograpghy"
        />
      </div>

      <div className="flex flex-col gap-8">
        <div className="ml-[40px]">
          {" "}
          <Heading
            heading="Stay Updated"
            subheading="Stay up to date with various alerts and notification"
          />
        </div>

        <div className="bg-black/5 mx-10 gap-10 px-6 flex py-8">
          <Stayupdated
            image={icon}
            heading="Live Session"
            time="3:30PM - 4:20PM"
            subheading="Craft a headline that is informative and will capture reader"
          />
          <Stayupdated
            image={icon}
            heading="Live Session"
            time="3:30PM - 4:20PM"
            subheading="Craft a headline that is informative and will capture reader"
          />
          <Stayupdated
            image={icon}
            heading="Live Session"
            time="3:30PM - 4:20PM"
            subheading="Craft a headline that is informative and will capture reader"
          />
          <Stayupdated
            image={icon}
            heading="Live Session"
            time="3:30PM - 4:20PM"
            subheading="Craft a headline that is informative and will capture reader"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
