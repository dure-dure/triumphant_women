/* eslint-disable no-unused-vars */
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import bgFront from "assets/images/rotating-card-bg-front.jpeg";

function FeaturesOne() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 6 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} sx={{ textAlign: "center" }} lg={5}>
            <MKTypography variant="h3" my={1} mt={2} alignItems="left">
              Ways to give
            </MKTypography>
            {/* <MKTypography variant="body2" color="text" mb={2}>
              Pain is what we go through as we become older. We get insulted by others, lose trust
              for those others. We get back stabbed by friends. It becomes harder for us to give
              others a hand.
            </MKTypography> */}
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
            <Stack>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="primary"
                  color="white"
                  coloredShadow="primary"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <Icon fontSize="small">Cash app</Icon>
                </MKBox>
                <MKTypography variant="body2" color="text" pl={2}>
                  Cash app 952-245-6688
                  <br />
                  $triumphantwomenint
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="primary"
                  color="white"
                  coloredShadow="primary"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <Icon fontSize="small">PayPal</Icon>
                </MKBox>
                <MKTypography variant="body2" color="text" pl={2}>
                  PayPal 952-245-6688
                  <br />
                  Triumphantwomenint@gmail.com
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="primary"
                  color="white"
                  coloredShadow="primary"
                  display="center"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <Icon fontSize="small">Zelle</Icon>
                </MKBox>
                <MKTypography variant="body2" color="text" pl={2}>
                  Zelle 612-644-2514
                  <br />
                  AMI Tsogbe
                </MKTypography>
              </MKBox>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FeaturesOne;
