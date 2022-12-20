import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="PIE CHART" subtitle="Simple Pie chart"/>
      </Box>
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;