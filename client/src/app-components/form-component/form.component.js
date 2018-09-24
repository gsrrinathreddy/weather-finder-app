import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import './form.component.css';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    textColor:'white',
    borderColor:'white'
  }
});
 class FormComponent extends Component {
  render() {
    const {classes} = this.props;
    return (
        <form>
          <div className="row">
            <div className="col">
              <input type="text" className="form-control input-control" placeholder="Enter City Name"/>
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Enter City Zip Code"/>
            </div>
          </div>
        </form>    
    )
  }
}
export default  withStyles(styles)(FormComponent)