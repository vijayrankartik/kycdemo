import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div>
    <Card align="center">  
    <form className={classes.root} align="center">
      <TextField size="small" id="Name" label="Full Name" variant="outlined" required/>
      <br />
      <TextField multiline id="Address" label="Address"  variant="outlined" required/>
      <br />
      <TextField type="email" size="small" id="Email" label="E-Mail" variant="outlined" required/>
      <br />
      <TextField type="tel" size="small" id="Mobile No" label="Phone Number" variant="outlined" required/>
      <br />
      <TextField size="small" id="AADHAAR" label="AADHAAR" variant="outlined" required/>    
      <br />
      <TextField size="small" id="PAN" label="PAN" variant="outlined" required/>
      <br />
      <TextField type="file" variant="outlined" accept="image/*" />
      <br />
    </form>
    </Card><br />
        <div align="center">
          <Button type="reset" variant="filled" color="primary">Reset</Button>
          <Button type="submit">Submit</Button>
        </div>
    </div>
  );
}
