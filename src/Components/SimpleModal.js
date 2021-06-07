import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 5 + rand();
  // const left = 50 + rand();

  return {
    top: `${top}%`,
    margin: "auto",
    // left: `${left}%`,
    // transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 250,
    backgroundColor: theme.palette.background.paper,
    border: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const displayPackingList = () =>
    props.lists.map((element) =>
      element.items.replace("[", "").replace("]", "").replace(/['"]+/g, "")
    );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Details
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        id="simple-modal"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={modalStyle} className={classes.paper} id="modal">
          <h2 id="simple-modal-title">{props.name} Trip Details</h2>
          <br />
          <p>Category: {props.category}</p>
          <p>Miles: {props.miles} </p>
          <p>Difficulty: {props.difficulty}</p>
          <p>Rating: {props.rating}</p>
          <p>Notes: {props.notes}</p>
          <p>
            Packing list: <ul>{displayPackingList()}</ul>
          </p>
          <br />
          <button onClick={() => handleClose()}>Close</button>
        </div>
      </Modal>
    </div>
  );
}
