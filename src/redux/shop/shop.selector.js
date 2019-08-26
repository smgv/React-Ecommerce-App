import { createSelector } from "reselect";

const shopSelector = state => state.shop;

export const selectShopItems = createSelector(
  [shopSelector],
  data => data.collections
);

// As Array is converted to Objects we can't use map on objects
// So this selector is used to convert an object to an array so component can use collections
export const selectCollectionsForPreview = createSelector(
  [selectShopItems],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

// Using Hash.
export const selectCollections = collectionUrlParam =>
  createSelector(
    [selectShopItems],
    collections => (collections ? collections[collectionUrlParam] : null)
  );

// Using Array.
// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5
// };

// export const selectCollections = collectionUrlParam =>
//   createSelector(
//     [selectShopItems],
//     collections =>
//       collections.find(
//         collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//  )
// );
