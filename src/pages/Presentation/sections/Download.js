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
import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import Testimonials from "pages/Presentation/sections/Testimonials";

// Images
import bgImage from "assets/images/shapes/waves-white.svg";
import colors from "assets/theme/base/colors";
import { Color } from "chroma-js";

function Download() {
  return (
    <MKBox component="section" py={6}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid container item xs={12} md={7} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography variant="h3" color="primary" mb={1}>
              Vision
            </MKTypography>
            <MKTypography variant="body1" color="white" mb={6}>
              Help women to Experience the love of God Have intimacy with God Know their divine
              destiny.
            </MKTypography>
            <MKTypography variant="h3" color="primary" mb={1}>
              Mission
            </MKTypography>
            <MKTypography variant="body1" color="white" mb={6}>
              Travel to the nation to bring good news. Help children spiritually, emotionally and
              physically.
            </MKTypography>
            <MKButton
              variant="gradient"
              color="primary"
              size="large"
              component="a"
              href="https://calendly.com/duredure2402/60min"
              sx={{ mb: 2 }}
            >
              Prise de rendez-vous
            </MKButton>
          </Grid>
        </Container>
      </MKBox>

      <Testimonials />
    </MKBox>
  );
}

export default Download;
