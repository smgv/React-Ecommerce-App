import React from "react";
import { connect } from "react-redux";

import { selectCollections } from "../../redux/shop/shop.selector";

import CollectionItem from "../../components/collection-item/collection-item.component";

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from "./collection.styles";

// import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {

  // below code is just for practise purpose only.
  // useEffect(() => {
  //   console.log("I am Subscribing i.e mounted");
  //   const unSubscribe = firestore
  //     .collection("collections")
  //     .onSnapshot(snapshot => console.log(snapshot));

  //   return () => {
  //     console.log("I am unSubscribing i.e unmounted");
  //     unSubscribe();
  //   };
  // });

  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

// Currying.
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollections(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
