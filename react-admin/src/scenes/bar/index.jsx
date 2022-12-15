import { Box } from "@mui/material";
import Header from "../../components/Header";

const Bar = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="BAR CHART" subtitle="Bar chart"/>
      </Box>
    </Box>
  );
};

export default Bar;