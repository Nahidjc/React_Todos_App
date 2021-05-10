import React from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup } from "reactstrap";

const FilterController = ({ handleFilter, selectButton }) => {
  console.log(selectButton);
  return (
    <ButtonGroup>
      <Button
        className={selectButton === "all" ? "btn-success" : "btn-light"}
        onClick={() => handleFilter("all")}
        key="all"
      >
        All
      </Button>
      <Button
        className={selectButton === "running" ? "btn-success" : "btn-light"}
        onClick={() => handleFilter("running")}
        key="running"
      >
        Running
      </Button>
      <Button
        className={selectButton === "completed" ? "btn-success" : "btn-light"}
        onClick={() => handleFilter("completed")}
        key="completed"
      >
        Completed
      </Button>
    </ButtonGroup>
  );
};

FilterController.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  selectButton: PropTypes.func.isRequired,
};
export default FilterController;
