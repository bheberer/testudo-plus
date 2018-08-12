import React from 'react';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Section from '../Containers/section-container';

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const styles = theme => ({
  modal: {
    flexGrow: 0,
    position: 'absolute',
    maxWidth: 1000,
    maxHeight: 500,
    overflow: 'auto',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: 8,
    borderRadius: 4
  },
  paper: {
    display: 'flex',
    flexGrow: 1,
    overflow: 'auto',
  }
});

const CourseModal = (props) => {

  const { classes } = props;

  const handleClose = () => props.closeModal();

  const renderSections = () => {
    if(props.sections) {
      return props.sections.map((section, index) =>
        <Section id={ index } />
      )
    }
  }

  return (
    <Modal open={ props.open } onClose={ handleClose } aria-labelledby='modal-title'>
      <div style={ getModalStyle() } className={ classes.modal }>
        <Typography variant='headline' id='modal-title'>
          { `${props.id}: ${props.name}` }
        </Typography>
        <Typography variant='subheader'>
          { `credits: ${props.credits}  gen-eds: ${props.genEds}` }
        </Typography>
        <Typography variant='subheader'>
          { props.description }
        </Typography>
        <Typography variant='subheader'>
          Sections:
        </Typography>
        <Paper>
          { renderSections() }
        </Paper>
      </div>
    </Modal>
  )
}

export default withStyles(styles)(CourseModal);