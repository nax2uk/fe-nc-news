import React from 'react';

const SortForm = (props) => {

  const onChange = (event) => {
    const { sortArticles, topic, sort_by, order } = props;
    const { name, value } = event.target;
    console.log(name);
    if (name === "sort_by")
      sortArticles({ sort_by: value, topic, order: order });
    else sortArticles({ sort_by: sort_by, topic, order: value });
  }

  const { sort_by, order } = props;

  return (
    <div>
      <label>Sort : </label>
      <select name="sort_by" value={sort_by} onChange={onChange}>
        <option value="created_at">Date Added</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>
      <select name="order" value={order} onChange={onChange}>
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </div>
  );
};

export default SortForm;