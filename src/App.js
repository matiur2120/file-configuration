import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import './App.css';
import Configuration from './components/Configuration';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
   
    backgroundColor: theme.palette.background.paper,
    // paddingLeft: theme.spacing(3),
    
    "&>.MuiAppBar-root":{
      // paddingLeft: '20px',
      // paddingRight: '20px',
      minWidth: '570px',
     
      
    },
    "& >.MuiBox-root-7":{
        padding: '0',
        paddingTop: '30px',
        background: '#dfe6e9'
    },
    muiBoxRoot:{
      padding: 0,
      background: '#000'
    }
  },
}));

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className='main_container'>
      <div className={classes.root}>
        <AppBar position="sticky" color="#fafafa">
          <Tabs
          //  orientation="vertical"
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          > 
          <Tab label="Configuration" />
            <Tab label="Templates" />
            <Tab label="DB Files"  />
            <Tab label="Log Files"  />
         
           
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} >
          <Configuration />
        </TabPanel>
       
      </div>
    </div>
  );
}
