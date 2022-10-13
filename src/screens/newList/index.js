import React, { useRef, useState } from "react";
import { auth, db } from "../../utils/firebase";
import {
  collection,
  doc,
  deleteDoc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "react-datetime/css/react-datetime.css";

import {
  Button,
  ContentWrapper,
  Navbar,
  AddItemField,
  ListItem,
} from "../../atomic-components/";
import ALL_ROUTES from "../../router/routes";

const NewListScreen = () => {
  const navigate = useNavigate();

  const [addingItems, setAddingItems] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const [listId, setListId] = useState("");
  const [items, setItems] = useState([]);

  const listName = useRef();

  const onCreateList = async () => {
    const list = {
      list_name: listName.current.value,
      list_owner: auth.currentUser.email,
      items: [],
    };

    const listRef = await addDoc(collection(db, "lists"), list);

    setListId(listRef.id);

    setAddingItems(true);
  };

  const onDeleteList = async () => {
    await deleteDoc(doc(db, "lists", listId));

    setAddingItems(false);
    setItems([]);
    setListId("");
    listName.current.value = "";
  };

  const onAddItem = (item) => {
    const newItems = [...items, item];
    updateDoc(doc(db, "lists", listId), { items: newItems });
    setItems(newItems);
  };

  const removeItemFromList = async (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    updateDoc(doc(db, "lists", listId), { items: newItems });
  };

  return (
    <>
      <Navbar />
      <ContentWrapper center>
        <div className="row">
          <h1 className="text-4xl font-black text-gray-600">New List</h1>
        </div>
        <form className="flex flex-column gap-4 col-md-4">
          <div>
            <label
              htmlFor="listname"
              className="form-label font-black text-gray-500 py-2"
            >
              List name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="List Name"
              id="listname"
              ref={listName}
              required
              disabled={addingItems}
              onChange={(e) => setDisableButton(e.target.value.length === 0)}
            />
          </div>
          {addingItems ? (
            <>
              {items.map((item, index) => (
                <ListItem
                  item={item}
                  key={`item-${index}`}
                  removeItemFromList={() => removeItemFromList(index)}
                />
              ))}
              <AddItemField onAddItem={onAddItem} />
              <Button onClick={onDeleteList}>DELETE LIST</Button>
              <Button onClick={() => navigate(ALL_ROUTES.MY_LISTS.path)}>
                BACK to all lists
              </Button>
            </>
          ) : (
            <div className="col-sm-4 pb-4">
              <div className="col-sm-auto pr-16">
                <Button disabled={disableButton} onClick={() => onCreateList()}>
                  NEXT
                </Button>
              </div>
            </div>
          )}
        </form>
      </ContentWrapper>
    </>
  );
};

export default NewListScreen;
