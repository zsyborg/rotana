import { useState } from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";

const SimpleDialog = (props) => {
    const [open, setOpen] = useState(true)
  return (
        <Dialog open = {open}>
      <DialogTitle>Ramadan Kareem<br/> Packages</DialogTitle>
      <DialogContent>
        <h2>Starting from Rs. 1,50,000/- </h2>
        <h4>Call For More Details </h4>
      </DialogContent>
    </Dialog>
    
  );
};

export default SimpleDialog;
