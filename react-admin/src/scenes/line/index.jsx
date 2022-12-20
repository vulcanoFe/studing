import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="PIE CHART" subtitle="Simple Pie chart"/>
      </Box>
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;