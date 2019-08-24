import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollections } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";
import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  console.log(collection)
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// Currying.
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollections(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
