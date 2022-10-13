import React from "react";
import PropTypes from "prop-types";

import { StyledListItem } from "./styles";

const ListItem = (props) => {
  const { index, item, removeItemFromList } = props;
  const { item_name } = item;

  return (
    <StyledListItem>
      <span>
        {index > 0 ? `${index}.` : ""} {item_name}
      </span>
      <div>
        <button type="button" onClick={removeItemFromList}>
          &#128465;
        </button>
      </div>
    </StyledListItem>
  );
};

ListItem.defaultProps = {
  index: 0,
  item: {},
  removeItemFromList: () => {},
};
ListItem.propTypes = {
  index: PropTypes.number,
  removeItemFromList: PropTypes.func.isRequired,
  item: PropTypes.shape({
    item_name: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export { ListItem };
