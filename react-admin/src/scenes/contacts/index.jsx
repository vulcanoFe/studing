import { Box } from "@mui/material";
import Header from "../../components/Header";

const Contacts = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="CONTACTS" subtitle="Contatti"/>
      </Box>
    </Box>
  );
};

export default Contacts;