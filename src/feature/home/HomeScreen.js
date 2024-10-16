import { CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState, } from "react";
import { CONSTANT, Constant } from "../../utils/constant/constant";
import CardList from "../../components/Cards/CardList";

const HomeScreen = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        setData(data)
        console.log(data, "data")

      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);



  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsTitleVisible(false);
    } else {
      setIsTitleVisible(true);
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!data) {
    return <CircularProgress style={{
      position: "absolute",
      top: "50%",
      alignItems: "center",
      justifyContent: "center",
    }} />
  }

  return (
    <div style={{ height: "100vh" }}>

      {isTitleVisible && (
        <Typography variant="h6" style={{ backgroundColor: "#7130d5" }}>
          <div style={styles.content}>
            <img src={"profile.png"}
              alt={"profile.png"}
              style={styles.profile}

            />
            <div style={styles.greetings}>
              <div style={styles.textStyle}>Welcome to e-commerce</div>
              <div style={styles.textStyleBold}>Good Morning, Nicole</div>
            </div>
          </div>

        </Typography>
      )
      }
      <div style={styles.cardlistView}>
        <CardList data={data} lane={CONSTANT.foryou.name} label={CONSTANT.foryou.label} />
        <CardList data={data} lane={CONSTANT.hot.name} label={CONSTANT.hot.label} />
        <CardList data={data} lane={CONSTANT.features.name} label={CONSTANT.features.label} />
        <CardList data={data} lane={null} label={""} />
        <div style={styles.bottomSpace} />
      </div>


    </div >
  );
}

const styles = {
  content: {
    display: "flex",
    flexDirection: "row",
    padding: 20,
    alignContent: "center"
  },
  profile: {
    height: "20%",
    width: "20%"
  },
  greetings: {
    marginLeft: 10, display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "3vw"
  },
  textStyle: { color: "#fff", textAlign: "left" },
  textStyleBold: { color: "#fff", fontWeight: 600, textAlign: "left", },
  cardlistView: { height: "100vh", marginBottom: 20 },
  bottomSpace: { height: 100 }
}

export default HomeScreen;