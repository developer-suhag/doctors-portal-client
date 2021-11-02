import { Box } from "@mui/system";
import React from "react";
import error from "../../images/404.svg";

const PageNotFound = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <img style={{ width: "50%" }} src={error} alt="" />
    </Box>
  );
};

export default PageNotFound;
