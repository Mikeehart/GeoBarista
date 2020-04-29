import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
import FilterListIcon from '@material-ui/icons/FilterList';
import Switch from '@material-ui/core/Switch';
import FileManipulationButton from './../FileManipulationButton';

const defaultToolbarStyles = {
  iconButton: {
  },
};

class ImageMenuToolbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      overlays: [],
    };
  }

  handleChange = (event) => {
    // this.setState({checked: event.target.checked });
    // console.log("toggle: " + event.target.checked);
    
    // let currentOverlays = this.state.overlays
    // if(event.target.checked){
    //   for (const image of this.props.images) {
    //       if (!(image._id in this.state.overlays)) {
    //         var overlay = this.props.createOverlay(image.file_path, JSON.parse(image.points))      //The order of four points from DB: topLeft,topRight,bottomRight,bottomLeft
    //         currentOverlays[image._id] = overlay
    //         this.setState({
    //           overlays: currentOverlays
    //         })
    //     }
    //     this.props.addOverlayToMap(currentOverlays[image._id])
    //   }      
    // } 
    // else {
    //   for (let [key, value] of Object.entries(this.state.overlays)) {
    //     this.props.removeOverlayOffMap(value)
    //   }
    // }
    
  }

  render() {
    const { classes, openDialog, toggleFilterDialogOpen, toggleSortDialogOpen, FileManipulationButton } = this.props;

    return (
      <React.Fragment>
        <Tooltip title={"Add Image"}>
          <IconButton className={classes.iconButton} onClick={openDialog}>
            <AddIcon className={classes.deleteIcon} />
          </IconButton>
        </Tooltip>
        <Tooltip title={"Filter Images"}>
          <IconButton className={classes.iconButton} onClick={() => { toggleFilterDialogOpen(true) }}>
            <FilterListIcon className={classes.deleteIcon} />
          </IconButton>
        </Tooltip>
        <Switch
          title={"Display Thumbnail"}
          checked={this.state.checked}
          onChange={this.handleChange}
          color="primary"
          name="toggleThumbnail"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <FileManipulationButton />
      </React.Fragment>
    );
  }

}

export default withStyles(defaultToolbarStyles, { name: "CustomToolbar" })(ImageMenuToolbar);