import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.action";

import Spinner from "../../components/spinner/spinner.component";
import ErrorBoundary from "../../components/error-boundary/error-boundary.component";

const CollectionOverviewContainer = lazy(() =>
  import("../../components/collection-overview/collection-overview.container")
);
const CollectionPageConatiner = lazy(() =>
  import("../collection/collection.container")
);

const ShopPage = ({ fetchCollectionsStartAsync, match }) => {
  // Code deleted see the previous version from this version.

  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  return (
    <div className="shop-page">
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Route
            exact
            path={`${match.path}`}
            component={CollectionOverviewContainer}
          />
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPageConatiner}
          />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
