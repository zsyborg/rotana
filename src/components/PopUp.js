import { useState } from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";

const SimpleDialog = (props) => {
    const [open, setOpen] = useState(true)
    const [show, setShow] = useState(true);
  return (
      <Dialog open = {open} className="overflow-visible">
        
      {/* <DialogTitle>Ramadan Kareem<br/> Packages</DialogTitle>
      <DialogContent>
        <h2>Starting from Rs. 1,50,000/- </h2>
        <h4>Call For More Details </h4>
      </DialogContent> */}
      <img src="assets/images/exit.png" width={50} className="exit" style={{ position: "absolute", top: "-24px", right: "-24px" }}
          onClick={() => setOpen(false)}  />
      <img src="assets/images/RamadanKareem.jpg" />
    </Dialog>
    
  );
};

export default SimpleDialog;
