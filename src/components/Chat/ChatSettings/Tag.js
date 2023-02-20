<<<<<<< HEAD
=======
import React, { useState } from 'react';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

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
>>>>>>> 18a548cb5bf0f8720b4f7fb33f2ad6eefcba955c
