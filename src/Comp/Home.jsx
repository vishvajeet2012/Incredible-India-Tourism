import React, { lazy, Suspense } from "react";
// import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
// import { GenerateSlides } from "../utils/GenerateSlides";
import DoneIcon from "@mui/icons-material/Done";
import mobilee from "../media/mobile/01.png";
import { Link } from "react-router-dom";
import styless from "../css/MyComponent.module.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import HomeScreen from "./HomeScreen";


// Lazy load the components
const CardSlider = lazy(() => import("./CardSlider"));
 lazy(() => import("./ViewallCard"));

const Home = () => {
  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    height: "30rem",
  };

  return (
    <>
     <HomeScreen/>



      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box
            sx={{
              bgcolor: "white",
              width: "100%",
              height: "50vh",
              overflow: "hidden",
            }}
          >
            <h3 className={styless.sub}>Why choose The India Pass®? </h3>
            <h1 className={styless.heading}>
              We guarantee you'll save on your sightseeing!
            </h1>
            <Box
              sx={{ display: "flex", flexDirection: "row", flex: "nowrap" }}
            >
              <Box
                className={styless.flexinfo}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <div className={styless.fex}>
                  <DoneIcon />
                  <p>
                    The India Pass® is a credit-based package, giving you a set
                    number of credits to use over the number of days you select.
                  </p>
                </div>
                <div className={styless.fex}>
                  <DoneIcon />
                  <p>
                    It's easy to scan in at attractions to redeem your credits.
                  </p>
                </div>
                <div className={styless.fex}>
                  <DoneIcon />
                  <p>
                    Enjoy savings of up to 50% on all your sightseeing vs.
                    buying individual attraction tickets.
                  </p>
                </div>
              </Box>
              <Box className={styless.boxmobile}>
                <img
                  className={styless.mobileee}
                  src={mobilee}
                  alt="Example"
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </React.Fragment>

      <hr />

      <Box sx={{ width: "97%", bgcolor: "white" }}>
        <h3 className={styless.headingg}>Access 90+ Indian attractions</h3>
        <h2 className={styless.headingg}>
          "From the Ganges to ancient forts, discover India's wonders with us..."
        </h2>

        {/* Lazy-loaded CardSlider */}
        <Suspense fallback={<div>Loading Card Slider...</div>}>
          <CardSlider />
        </Suspense>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Link to="/viewallcard/">
            <button className={styless.viewall}>
              View all 90+ attractions
            </button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Home;
