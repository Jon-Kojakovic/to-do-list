import React, { useRef } from "react";
import PropTypes from "prop-types";

import { Button } from "../../";
import { useState } from "react";

const AddItemField = (props) => {
  const { onAddItem } = props;

  const [disableButton, setDisableButton] = useState(true);
  const itemName = useRef();

  return (
    <div className="flex align-items-center gap-4">
      <input
        type="text"
        className="form-control"
        id="itemname"
        placeholder="New Item"
        ref={itemName}
        onChange={(e) => setDisableButton(e.target.value.length === 0)}
      />

      <Button
        disabled={disableButton}
        onClick={() => {
          onAddItem({ item_name: itemName.current.value });
          setDisableButton(true);
          itemName.current.value = "";
        }}
      >
        ADD
      </Button>
    </div>
  );
};

AddItemField.defaultProps = {};
AddItemField.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};

export { AddItemField };
