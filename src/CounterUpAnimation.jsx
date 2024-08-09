import React, { useEffect, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

const CounterUpAnimation = () => {
  const [dataItems, setDataItems] = useState([
    { icon: "bi bi-mortarboard", value: "300", text: "Students" },
    { icon: "bi bi-person-workspace", value: "200", text: "Faculty" },
    { icon: "bi bi-people-fill", value: "150", text: "Staff" },
    { icon: "bi bi-person-plus-fill", value: "400", text: "Visitors" },
  ]);

  const interval = 2;

  const containerStyles = {
    width: "25%",
    paddingTop: "0.5em",
    paddingBottom: "0.5em",
    boxSizing: "border-box",
    textAlign: "center",
    backgroundColor: "black",
    margin: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const iconStyles = {
    color: "red",
    fontSize: "3.8em",
  };

  const numStyles = {
    color: "white",
    fontWeight: 600,
    fontSize: "3em",
    width: "4em",
    display: "block",
  };

  const textStyles = {
    color: "white",
    fontSize: "1em",
    padding: "5px",
    fontWeight: 400,
    display: "block",
  };

  const updateValues = () => {
    const updatedDataItems = dataItems.map((item) => {
      const endValue = parseInt(item.value);
      let startValue = 0;
      const duration = Math.floor(interval / endValue);

      const counter = setInterval(() => {
        startValue += 1;
        if (startValue <= endValue) {
          setDataItems((prevDataItems) =>
            prevDataItems.map((prevItem) =>
              prevItem.text === item.text
                ? { ...prevItem, value: startValue.toString() }
                : prevItem
            )
          );
        } else {
          clearInterval(counter);
        }
      }, duration);

      return { ...item, value: startValue.toString() };
    });

    setDataItems(updatedDataItems);
  };

  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      // Start the counter animation when the component becomes visible
      updateValues();
    }
  };

  return (
    <div className="wrapper" style={{ display: "flex", justifyContent: "space-between", backgroundColor: "grey", marginTop: "20px", marginBottom: "20px", paddingTop: "4em",paddingBottom: "4em" }}>
      {dataItems.map((item, index) => (
        <VisibilitySensor
          key={index}
          onChange={(isVisible) => handleVisibilityChange(isVisible)}
        >
          <div style={containerStyles}>
            <i className={item.icon} style={iconStyles}></i>
            <span className="num" id={item.text} style={numStyles}>
              {item.value}
            </span>
            <span className="text" style={textStyles}>
              {item.text}
            </span>
          </div>
        </VisibilitySensor>
      ))}
    </div>
  );
};

export default CounterUpAnimation;
