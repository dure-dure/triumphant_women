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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";
import FeaturesOne from "pages/Presentation/sections/give";
import Download from "pages/Presentation/sections/Download";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-presentation.jpg";

function Presentation() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://calendly.com/duredure2402/60min",
          label: "Prise de rendez-vous",
          color: "primary",
        }}
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              py={0}
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              TRIUMPHANT WOMEN{" "}
            </MKTypography>
            <MKTypography variant="body1" color="white" textAlign="center" px={{ xs: 6, lg: 12 }} mt={1}>
              Help women to experience the love of God , Have intimacy with God and Know their divine destiny.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.5),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        {/* <Counters /> */}
        <Information />
        <Download />

        {/* <DesignBlocks /> */}
        {/* <Pages /> */}

        <Container>
          <Grid container spacing={1}>
            <Grid item xs={12} lg={4} sx={{ alignItems: "center" }}>
              <FilledInfoCard
                variant="gradient"
                color="primary"
                icon="flag"
                title="Triumphant Women ministry Monthly programs"
                description={
                  <>
                    <br />
                    On zoom <br />
                    ID: 585 073 7300
                    <br />
                    CODE: 86 79 22
                    <br />
                  </>
                }
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                // icon="precision_manufacturing"
                title=""
                description={
                  <>
                    *1st Friday of the month
                    <br />
                    From 8PM CST -9:30PM CST
                    <br />
                    Testimony and Talk Show
                    <br />
                    <br />
                    *2nd Friday of the month
                    <br />
                    From 8PM CST -9: 30PM CST
                    <br />
                    Teaching and Intercession prayer
                  </>
                }
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                // icon="apps"
                title=""
                description={
                  <>
                    *3rd Friday of the month
                    <br />
                    From 8PM CST -9PM CST
                    <br />
                    Teaching and Intercession prayer
                    <br />
                    <br />
                    *4th Friday of the month
                    <br />
                    From 8PM cst-9:30 PM
                    <br />
                    Miracle Service
                  </>
                }
              />
            </Grid>
          </Grid>
        </Container>
        <Container sx={{ mt: 1 }}>
          {/* <BuiltByDevelopers /> */}
          <FeaturesOne />
        </Container>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
