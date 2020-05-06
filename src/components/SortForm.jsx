import React from 'react';

const SortForm = (props) => {

  const onChange = (event) => {
    const { sortArticles, topic, sort_by } = props;
    const { name, value } = event.target;
    console.log(name);
    if (name === "sort_by")
      sortArticles({ sort_by: value, topic, order: "desc" });
    else sortArticles({ sort_by: sort_by, topic, order: value });
  }

  const { sort_by, order } = props;

  return (
    <React.Fragment>
      <label className="mr-2">Sort : </label>
      <select className="custom-select my-1 mr-sm-2 custom-select-sm" name="sort_by" value={sort_by} onChange={onChange}>
        <option value="created_at">Date Added</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>
      <select className="custom-select my-1 mr-sm-2 custom-select-sm" name="order" value={order} onChange={onChange}>
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </React.Fragment>
  );
};

export default SortForm;