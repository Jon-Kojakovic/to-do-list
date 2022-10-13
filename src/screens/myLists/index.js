import React, { useEffect, useState } from "react";
import { auth, db } from "../../utils/firebase";
import {
  getDocs,
  collection,
  query,
  where,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import {
  ContentWrapper,
  LoadingIndicator,
  Navbar,
} from "../../atomic-components";
import { ListCard } from "../../atomic-components/molecules/listCard";

function MyListsScreen() {
  const [listsList, setListsList] = useState();

  useEffect(() => {
    const listsCollectionRef = collection(db, "lists");

    getDocs(
      query(
        listsCollectionRef,
        where("list_owner", "==", auth.currentUser.email)
      )
    ).then((data) => {
      setListsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  const removeItemFromList = (selectedListId, index) => {
    const newListsList = [...listsList];
    const selectedList = newListsList.find(
      (list) => list.id === selectedListId
    );

    if (!selectedList) return;

    selectedList.items.splice(index, 1);
    setListsList(newListsList);

    updateDoc(doc(db, "lists", selectedListId), { items: selectedList.items });
  };

  const removeList = (selectedListId) => {
    const newListsList = [...listsList];
    const selectedListIndex = newListsList.findIndex(
      (list) => list.id === selectedListId
    );

    newListsList.splice(selectedListIndex, 1);
    setListsList(newListsList);

    deleteDoc(doc(db, "lists", selectedListId));
  };

  const onAddItem = (selectedListId, item) => {
    const newListsList = [...listsList];
    const selectedList = newListsList.find(
      (list) => list.id === selectedListId
    );

    selectedList.items = [...selectedList.items, item];
    setListsList(newListsList);
    updateDoc(doc(db, "lists", selectedListId), { items: selectedList.items });
  };

  const createContent = () => {
    if (listsList == null) {
      return <LoadingIndicator />;
    } else if (listsList.length === 0) {
      return (
        <div className="text-center">
          <h2>You dont have any lists</h2>
          <p>Go to "New Lists" in the navigation bar.</p>
        </div>
      );
    }

    return listsList.map((list, index) => (
      <ListCard
        list={list}
        removeItemFromList={removeItemFromList}
        removeList={removeList}
        onAddItem={onAddItem}
        key={`list-${index}`}
      />
    ));
  };

  return (
    <>
      <Navbar />
      <ContentWrapper center>{createContent()}</ContentWrapper>
    </>
  );
}

export default MyListsScreen;
