/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import Slide from 'material-ui/transitions/Slide';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={styles.container}>
          <Dialog
            open={this.state.open}
            transition={Slide}
            onRequestClose={this.handleRequestClose}
          >
            <DialogTitle>{"Super Secret Password"}</DialogTitle>
            <DialogContent>
              <DialogContentText>1-2-3-4-5</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleRequestClose} color="primary">
                OK
              </Button>
            </DialogActions>
          </Dialog>
          <h1>Material-UI</h1>
          <h2>example project</h2>
          <Button
            raised
            color="accent"
            onTouchTap={this.handleTouchTap}
          >Super Secret Password</Button>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
