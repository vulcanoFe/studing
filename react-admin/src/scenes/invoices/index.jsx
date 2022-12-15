import { Box } from "@mui/material";
import Header from "../../components/Header";

const Invoices = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="INVOICES" subtitle="Invoices list"/>
      </Box>
    </Box>
  );
};

export default Invoices;