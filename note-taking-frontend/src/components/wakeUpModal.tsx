import React from "react";
import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";

interface Props {
  open: boolean;
}

const WakeUpModal: React.FC<Props> = ({ open }) => {
  return (
    <Backdrop
      open={open}
      sx={{
        zIndex: 9999,
        color: "#fff",
        backgroundColor: "rgba(0,0,0,0.7)",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          p: 4,
          borderRadius: 2,
          maxWidth: 320,
        }}
      >
        <CircularProgress color="inherit" />
        <Typography mt={3} fontSize={16} fontWeight={500}>
          Waking up the server…
        </Typography>
        <Typography mt={1} fontSize={14} color="rgba(255,255,255,0.8)">
          This may take up to 30 seconds
        </Typography>
      </Box>
    </Backdrop>
  );
};

export default WakeUpModal;
