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
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images
import appleLogo from "assets/images/logos/gray-logos/logo-apple.svg";
import facebookLogo from "assets/images/logos/gray-logos/logo-facebook.svg";
import nasaLogo from "assets/images/logos/gray-logos/logo-nasa.svg";
import vodafoneLogo from "assets/images/logos/gray-logos/logo-vodafone.svg";
import digitalOceanLogo from "assets/images/logos/gray-logos/logo-digitalocean.svg";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        
        <Grid container spacing={1} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={6}>
            <DefaultReviewCard
              name="Coaching and mentorship"
              // date="1 day ago"
              review={
                <>
                * Identity<br />
                * Destiny<br />
                * Inner wound<br />
                * Trauma<br />
                * Restoration<br />
                * Marriage
                </>
              }
              rating={5}
            />
          </Grid>
          
          <Grid item xs={12} md={6} lg={6}>
            <DefaultReviewCard
              // color="info"
              name="Programme de coaching and mentorship"
              // date="1 week ago"
              review={
                <>
                * Ton identite en Christ et identite specifique.
                <br />
                * Destinee ,ton apel ou vocation.
                <br />
                * Tes dons et tes talents<br />
                * Tes blessures interieures et traumatizes<br />
                * Restauration<br />
                * Preparation au marriage (Physique,emotionnelle,ou spirituelle)
                </>
              }
              rating={5}
              
            />
          </Grid>
          
        </Grid>
        <Divider  sx={{ my: 1 }} />
        
      </Container>
    </MKBox>
  );
}

export default Information;
