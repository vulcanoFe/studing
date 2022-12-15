import { Box } from "@mui/material";
import Header from "../../components/Header";

const Line = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="LINE" subtitle="Line chart"/>
      </Box>
    </Box>
  );
};

export default Line;