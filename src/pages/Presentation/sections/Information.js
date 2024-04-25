/* eslint-disable no-unused-vars */
/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";
import colors from "assets/theme/base/colors";

function Information() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                color="primary"
                image={bgFront}
                // icon="touch_app"
                title={
                  <>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </>
                }
                description=""
              />
              <RotatingCardBack
                color="primary"
                image={bgBack}
                title=""
                description=""
                // action={{
                //   type: "internal",
                //   route: "/sections/page-sections/page-headers",
                //   label: "",
                // }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <DefaultInfoCard
              // icon="content_copy"
              title={
                <>
                  `Prophetess Deborah TSOGBE`
                  <br /> <br />
                </>
              }
              description="is married and have three kids. 
              She was called into prophetic ministry in 2016 she started with women intercession group called Triumphant Women.
              2019 she did her first Women retreat.2022 she started women conference, and every year she host women retreat and conference which is a blessing to many.
              2023 she did her first trip to Canada Montreal when she hosted healing and Deliverance Crusade.
              The ministry is base in Minnesota."
            />
            <br />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
