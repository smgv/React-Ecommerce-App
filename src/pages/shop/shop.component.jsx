import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionPageConatiner from "../collection/collection.container";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.action";

class ShopPage extends React.Component {
  componentDidMount() {
    // Code deleted see the previous version from this version.
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageConatiner}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
