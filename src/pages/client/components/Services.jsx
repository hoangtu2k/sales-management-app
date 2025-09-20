import { Box, Grid, Typography } from "@mui/material";
import { LocalShipping, AttachMoney, HeadsetMic, Payment } from "@mui/icons-material";

export default function Services() {
  const services = [
    {
      icon: <LocalShipping fontSize="large" color="primary" />,
      title: "Free Shipping",
      desc: "For all orders over $99",
    },
    {
      icon: <AttachMoney fontSize="large" color="primary" />,
      title: "Money Back Guarantee",
      desc: "If goods have problems",
    },
    {
      icon: <HeadsetMic fontSize="large" color="primary" />,
      title: "Online Support 24/7",
      desc: "Dedicated support",
    },
    {
      icon: <Payment fontSize="large" color="primary" />,
      title: "Payment Secure",
      desc: "100% secure payment",
    },
  ];

  return (
    <section className="services spad">
      <div className="container">
        <Grid container spacing={3} justifyContent="center">
          {services.map((srv, i) => (
            <Grid key={i} item lg={3} md={6} sm={6} xs={12}>
              <Box
                className="services__item"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                p={3}
              >
                {srv.icon}
                <Typography variant="subtitle1" mt={1} fontWeight="bold">
                  {srv.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {srv.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
}
