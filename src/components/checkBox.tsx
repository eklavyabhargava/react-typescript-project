// Check Box Component
import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function CheckboxGroup() {
  const [checked, setChecked] = React.useState({
    customerService: false,
    support: false,
    customerSuccess: false,
    design: false,
    graphicDesign: false,
    productDesign: false,
    webDesign: false,
  });

  // change state of child checkbox
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked({
      ...checked,
      [event.target.name]: event.target.checked,
    });
  };

  // change parent checkbox and also its child checkboxes
  const handleParent1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setChecked((prevChecked) => ({
      ...prevChecked,
      customerService: checked,
      support: checked,
      customerSuccess: checked,
    }));
  };

  // change parent checkbox and also its child checkboxes (for second parent checkbox)
  const handleParent2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setChecked((prevChecked) => ({
      ...prevChecked,
      design: checked,
      graphicDesign: checked,
      productDesign: checked,
      webDesign: checked,
    }));
  };

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked.customerService}
              onChange={handleParent1Change}
              name="customerService"
            />
          }
          label="Customer Service"
        />
        <Box sx={{ ml: 3 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.support}
                onChange={handleChange}
                name="support"
              />
            }
            label="Support"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.customerSuccess}
                onChange={handleChange}
                name="customerSuccess"
              />
            }
            label="Customer Success"
          />
        </Box>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked.design}
              onChange={handleParent2Change}
              name="design"
            />
          }
          label="Design"
        />
        <Box sx={{ ml: 3 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.graphicDesign}
                onChange={handleChange}
                name="graphicDesign"
              />
            }
            label="Graphic Design"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.productDesign}
                onChange={handleChange}
                name="productDesign"
              />
            }
            label="Product Design"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.webDesign}
                onChange={handleChange}
                name="webDesign"
              />
            }
            label="Web Design"
          />
        </Box>
      </div>
    </div>
  );
}
