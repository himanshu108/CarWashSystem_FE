import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

    

function CustomNavbar() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        
        <Box sx={{ flexGrow: 1, maxWidth: 700, bgcolor: 'background.paper' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="visible arrows tabs example"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.3 },
            },
          }}
        >
          <Tab label="How it Works" />
          <Tab label="Washer" />
          <Tab label="Wash Pack" />
          <Tab label="Customer Reviews" />
          <Tab label="FAQs" />
          <Tab label="Guide" />
        </Tabs>
      </Box>
           
      
    );
}

export default CustomNavbar
