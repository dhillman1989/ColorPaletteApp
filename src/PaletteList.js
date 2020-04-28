import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

import MiniPalette from "./MiniPalette";

import styles from "./styles/PaletteListStyles";

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = { deleteDialogOpen: false, deletingId: "" };
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.gotoPalette = this.gotoPalette.bind(this);
  }
  handleDelete() {
    this.props.deletePalette(this.state.deletingId);
    this.closeDialog();
  }
  openDialog(id) {
    this.setState({ deleteDialogOpen: true, deletingId: id });
  }
  closeDialog() {
    this.setState({ deleteDialogOpen: false, deletingId: "" });
  }
  gotoPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { palettes, classes } = this.props;
    const { deleteDialogOpen } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link to="/palette/new">Create New Palette</Link>
          </nav>

          <TransitionGroup className={classes.palettes}>
            {palettes.map((palette) => (
              <CSSTransition key={palette.id} classNames="fade" timeout={700}>
                <MiniPalette
                  {...palette}
                  // handleDeletePalette={deletePalette}
                  openDialog={this.openDialog}
                  gotoPalette={this.gotoPalette}
                  id={palette.id}
                  key={palette.id}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
          <Dialog
            open={deleteDialogOpen}
            aria-labelled-by="deletPaletteDialog"
            onClose={this.closeDialog}>
            <DialogTitle id="deletePaletteDialog">Are you sure?</DialogTitle>
            <List>
              <ListItem button onClick={this.handleDelete}>
                <ListItemAvatar>
                  <Avatar
                    style={{ backgroundColor: blue[200], color: blue[800] }}>
                    <CheckIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>Yes, get it done!</ListItemText>
              </ListItem>
              <ListItem button onClick={this.closeDialog}>
                <ListItemAvatar>
                  <Avatar
                    style={{ backgroundColor: red[200], color: red[800] }}>
                    <CloseIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>No, Cancel</ListItemText>
              </ListItem>
            </List>
          </Dialog>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
