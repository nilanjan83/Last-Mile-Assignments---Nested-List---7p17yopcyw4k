import React, { Component, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  nestedMore: {
    paddingLeft: theme.spacing(8),
  },
  main:{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container:{
    width: '60%',
  }
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [currentState, setCurrentState] = React.useState(null);
  const [currentCity, setCurrentCity] = React.useState(null);
  const [openCity, setOpenCity] = React.useState(false);

  const handleClick = (index) => {
    setOpen(!open);
    setCurrentState(index);
  };
  const handleCityClick =(index)=>{
    setOpenCity(!openCity)
    setCurrentCity(index);
  }

  return <div id="main" className={classes.main}>
    <h1>Nested List </h1>
    <div className={classes.container}>
      {states.map((item,index)=>{
        return(
          <List id = {`state${index+1}`}>
            <ListItem button id = {`state${index+1}`} onClick={()=>handleClick(index)}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={item.name} id = {`state${index+1}`} />
            {
              open ?  <ExpandLess /> : <ExpandMore />
            }
            </ListItem>
          { currentState === index &&<Collapse in={open} timeout="auto" unmountOnExit>
          {item.cities.map((items,index)=>{
            return(
              <List id = {`city${index+1}`} >
              <ListItem button className={classes.nested} id = {`city${index+1}`} onClick={()=>handleCityClick(index)}>
                <ListItemIcon>
                  <ArrowForwardIosIcon />
                </ListItemIcon>
                <ListItemText primary={items.name} id = {`city${index+1}`}/>
                {openCity ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              { currentCity === index && 
              <Collapse in={openCity} timeout="auto" unmountOnExit>
              {items.towns.map((towns,index)=>{
                return(
                  <List id = {`town${index+1}`} >
                    <ListItem button className={classes.nestedMore} id = {`town${index+1}`}>
                      <ListItemIcon>
                        <ArrowRightIcon />
                      </ListItemIcon>
                      <ListItemText primary= {towns.name} id = {`town${index+1}`} />
                    </ListItem>
                </List>
                )
              })}
              </Collapse>
              }
            </List>     
            )
          })}
            
        </Collapse>
          }
      </List>
        )
      })}
    </div>

  </div>;
}
export default App; 