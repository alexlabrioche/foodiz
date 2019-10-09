import { sortBy } from '../helpers/sorting';

const sortReducer = (state, action) => {
  switch (action.type) {
    case 'alpha':
      return {
        isAlphaAsc: !state.isAlphaAsc,
        isRatingAsc: undefined,
        isAmountAsc: undefined,
        results: [...state.results.sort(sortBy('alias', state.isAlphaAsc))],
      };
    case 'rating':
      return {
        isAlphaAsc: undefined,
        isRatingAsc: !state.isRatingAsc,
        isAmountAsc: undefined,
        results: [...state.results.sort(sortBy('rating', !state.isRatingAsc))],
      };
    case 'amount':
      return {
        isAlphaAsc: undefined,
        isRatingAsc: undefined,
        isAmountAsc: !state.isAmountAsc,
        results: [...state.results.sort(sortBy('review_count', !state.isAmountAsc))],
      };
    case 'new-search':
      return {
        isAlphaAsc: undefined,
        isRatingAsc: undefined,
        isAmountAsc: undefined,
        results: [...action.data],
      };
    default:
      throw new Error();
  }
};
export default sortReducer;
