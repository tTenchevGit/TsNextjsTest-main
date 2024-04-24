
import React from "react";
import AgencySelection from "../sections/AgencySelection/AgencySelection";



const Home = () => {
  const image = { src: "/img/video.png", alt: "", width: 2000, height: 3100 };
  const title = "Managed agency selection";
  const description = "Strengthen your onboarding process";

  return (
    <div>
      <AgencySelection
        image={image}
        title={title}
        description={description}
        isHomePage={true}
      />
    </div>
  );
};

export default Home;
