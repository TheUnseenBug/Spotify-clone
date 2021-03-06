import { Box, Skeleton } from "@mui/material";
import { Link } from "react-router-dom";

const NavPlaylist = ({ name, id, loading }) => {
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={loading ? "" : `/playlist/${id}`}
    >
      <Box
        px={3}
        py={1}
        sx={{
          color: "text.secondary",
          cursor: "pointer",
          fontsize: 4,
          "&:hover": { color: "text.primary" },
          textDecoration: "none",
        }}
      >
        {loading ? (
          <Skeleton variant={"text"} height={"14px"} width={"70px"} />
        ) : (
          name
        )}
      </Box>
    </Link>
  );
};

export default NavPlaylist;
