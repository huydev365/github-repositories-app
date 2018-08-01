import { repositoriesAction } from "../actions/repositories.action";

const initialState = {
  repositories: []
};

export default function repositoriesReducer(state = initialState, action) {
  switch (action.type) {
    case repositoriesAction.fulfilled:
      return Object.assign({}, state, {
        repositories: action.repositories
      });
    case repositoriesAction.savedComment:
      const { repository, comment } = action;
      return {
        ...state,
        repositories: state.repositories.map(item => {
          const copiedItem = { ...item };
          if (copiedItem.id === repository.id) copiedItem.comment = comment;
          return copiedItem;
        })
      };
    default:
      return state;
  }
}
