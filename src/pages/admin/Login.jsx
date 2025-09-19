import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";

export default function Login() {
 

  return (
    <Container
      maxWidth="xs"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          width: "100%",
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          fontWeight="bold"
          mb={3}
        >
          Admin Login
        </Typography>
        <Box component="form">
          <TextField
            label="Tên đăng nhập"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Mật khẩu"
            type="password"
            fullWidth
            margin="normal"
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{
              mt: 3,
              backgroundColor: "#1976d2",
              "&:hover": { backgroundColor: "#115293" },
              borderRadius: 2,
            }}
          >
            Đăng nhập
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}