import React from "react";
import SearchPanel from "./search-panel";
import PropTypes from "prop-types";
import { Col, Row } from "reactstrap";
import FilterController from "./filter-controller";
import ViewControll from "./view-controll";
import BulkController from "./bulk-controller";
const Controller = ({
  term,
  handleSearch,
  toggleForm,
  view,
  changeView,
  handleFilter,
  clearSelected,
  clearCompleted,
  reset,
}) => (
  <div>
    <SearchPanel
      term={term}
      handleSearch={handleSearch}
      toggleForm={toggleForm}
    />
    <Row className="my-4">
      <Col md={{ size: 4 }}>
        <FilterController handleFilter={handleFilter} />
      </Col>
      <Col md={{ size: 4 }}>
        <ViewControll view={view} changeView={changeView} />
      </Col>
      <Col md={{ size: 4 }} className="d-flex">
        <div className="ml-auto">
          <BulkController
            clearSelected={clearSelected}
            clearCompleted={clearCompleted}
            reset={reset}
          />
        </div>
      </Col>
    </Row>
  </div>
);
SearchPanel.propTypes = {
  term: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  changeView: PropTypes.func.isRequired,
  clearSelected: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired,
  selectButton: PropTypes.func.isRequired,
};
export default Controller;
