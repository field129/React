import React, { Suspense } from "react";

const seasonConfig = {
  Summer: {
    text: "Sun's out Guns out ",
    iconName: "sun",
  },

  Winter: {
    text: "Brrrrrr it is cold ",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
    // if we are in northern hemisphere (lat>0) and in march to october return summer, otherwise return winter
    // months star at 0 for january 1 february
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season]; //{text,iconName}
  //   const text =season === "Winter" ? "Brrrrrr it is cold " : "Suns out guns out";
  //   //  ? is a ternary operator. condition ? value if true   : value if false
  //   const icon = season === "Winter" ? "snowflake" : "sun";
  return (
    <div>
      <i className={`${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
