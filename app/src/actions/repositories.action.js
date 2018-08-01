export const repositoriesAction = {
  requested: "repositories_requested",
  fulfilled: "repositories_fulfilled",
  savedComment: "repositories_saved_comment"
};

export const fetchRepositories = () => {
  return {
    type: repositoriesAction.requested
  };
};

export const fulfilledRepositories = repositories => {
  return {
    type: repositoriesAction.fulfilled,
    repositories
  };
};

export const savedRepositoryComment = (repository, comment) => {
  return {
    type: repositoriesAction.savedComment,
    repository,
    comment
  };
};
