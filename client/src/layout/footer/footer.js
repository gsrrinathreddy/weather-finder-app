import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
const styles = theme =>({
  footer: {
    backgroundColor: 'black',
    padding: theme.spacing.unit * 6,
   
  },
  typography:{
    color:'white'
  }
})
class  Footer extends Component {
  
  render(){
    const {classes} = this.props;
    return (
    
      <footer className={classes.footer}>
      <Typography className={classes.typography} variant="title" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography className={classes.typography} variant="subheading" align="center" color="textSecondary" component="p">
        Something here to give the footer a purpose!
      </Typography>
    </footer>
    )
  }
 
}


export default withStyles(styles)(Footer);
