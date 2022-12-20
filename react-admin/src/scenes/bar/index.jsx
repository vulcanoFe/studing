import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="BAR CHART" subtitle="Simple Bar chart"/>
      </Box>
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;