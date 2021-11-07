import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import error from "../../images/404.svg";

const PageNotFound = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <img style={{ width: "50%" }} src={error} alt="" />
      <Box sx={{ textAlign: "center" }}>
        <Link to="/">Back to Home</Link>
      </Box>
    </Box>
  );
};

export default PageNotFound;
