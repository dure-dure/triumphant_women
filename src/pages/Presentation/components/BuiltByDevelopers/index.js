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
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function BuiltByDevelopers() {
  const bgImage =
    "https://img.freepik.com/free-photo/pink-ribbon-pink-background_23-2151064689.jpg?t=st=1713339174~exp=1713342774~hmac=74bad3c09b85700a4bbe6ef40540a9432e130fdd7f01629d21a95ab9c5e2ed8c&w=1380";

  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.5),
            rgba(gradients.dark.state, 0.5)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container alignItems="center" item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
          <MKTypography variant="h1" color="white" mb={1}>
            Ways to give
          </MKTypography>
          <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
            {
              <>
                Cash app 952-245-6688 $triumphantwomenint <br />
                <br />
                PayPal 952-245-6688 Triumphantwomenint@gmail.com
                <br />
                <br />
                Zelle 612-644-2514 AMI Tsogbe
              </>
            }
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
