import React, { useState } from "react";
import PropTypes from "prop-types";

import { StyledListCard, StyledButtons } from "./styles";

import { AddItemField, Button, ListItem } from "../../";
import { useEffect } from "react";

const ListCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAddingItem, setIsAddingItem] = useState(false);

  useEffect(() => {
    if (isAddingItem && !isOpen) setIsOpen(true);
  }, [isAddingItem]);

  const { list, removeItemFromList, removeList, onAddItem } = props;
  const { items, id } = list;

  const toggleIsOpen = () => setIsOpen(!isOpen);
  const toggleIsAdding = () => setIsAddingItem(!isAddingItem);

  return (
    <StyledListCard>
      <h3 className="listName">{list.list_name}</h3>
      {isOpen &&
        items.map((item, index) => (
          <ListItem
            key={`item-${index}`}
            item={item}
            index={index + 1}
            removeItemFromList={() => removeItemFromList(id, index)}
          />
        ))}
      <StyledButtons>
        <Button onClick={toggleIsOpen}>
          {isOpen ? "Hide items" : "Show items"}
        </Button>
        <Button onClick={toggleIsAdding}>
          {isAddingItem ? "Stop editing list" : "Edit list"}
        </Button>
        <Button onClick={() => removeList(id)}> &#128465; </Button>
      </StyledButtons>
      {isAddingItem && (
        <AddItemField onAddItem={(params) => onAddItem(id, params)} />
      )}
    </StyledListCard>
  );
};

ListCard.defaultProps = {
  removeItemFromList: () => {},
  removeList: () => {},
  onAddItem: () => {},
};

ListCard.propTypes = {
  removeItemFromList: PropTypes.func.isRequired,
  removeList: PropTypes.func.isRequired,
  onAddItem: PropTypes.func.isRequired,
  list: PropTypes.shape({
    id: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        item_name: PropTypes.string,
        id: PropTypes.string,
      })
    ),
  }).isRequired,
};

export { ListCard };
