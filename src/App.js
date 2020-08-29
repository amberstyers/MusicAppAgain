// import React, {Component} from 'react';
// import NavBar from './Components/NavBar'
// import './App.css';







// class App extends Component {
//   render() {
//     return (
//       <div>
//         <NavBar />
//       </div>
//     );
//   }
// }



  
// export default App;

import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
// import { Button} from '@material-ui/core'
// import { makeStyles } from '@material-ui/core/styles';
import LogIn from './Components/LogIn'
import { Button, TextField} from '@material-ui/core'



const NavBar = () => {
  return(
    <div>
      <AppBar position="static">
        <Toolbar>
            < Typography variant="title" color="inherit">
                 My Music App
            </Typography>
        </Toolbar>
      </AppBar>
      <TextField label="Username*" />
      <br />
      <Button variant="contained" color="primary" >
        Login</Button>
      <TextField label="Password*" />
      <br />
    
    </div>

  )
}



export default NavBar;










