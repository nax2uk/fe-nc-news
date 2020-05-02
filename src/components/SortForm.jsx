import React from 'react';

const SortForm = (props) => {

  const onChange = (event) => {
    const { sortArticles, topic } = props;
    const { name, value } = event.target;

    sortArticles({ [name]: value, topic });
  }

  const { sort_by, order } = props.params;

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