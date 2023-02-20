import React, { useState } from 'react';
import TagsInput from 'react-tagsinput';

const Tag = () => {
  const [tags, setTags] = useState([]);

  const handleChange = (tags) => {
    setTags(tags);
  }

  return (
    <TagsInput value={tags} onChange={handleChange} />
  );
};

export default Tag;
