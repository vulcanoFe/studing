import { Box } from "@mui/material";
import Header from "../../components/Header";

const Team = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="TEAM" subtitle="Team members"/>
      </Box>
    </Box>
  );
};

export default Team;