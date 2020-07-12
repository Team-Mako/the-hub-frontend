import React, { useState, useEffect } from 'react';
import api from '../../../services/api';

const CreateProject = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const response = await api.get('/list-category');
      setCategoryList(response.data);
    }
    getCategories();
  }, []);

  return (
    <main>
      <h1>Hey</h1>
      <select>
        <option value="">Select...</option>
        {categoryList.map((category) => (
          <option key={category.category_id}>{category.category_title}</option>
        ))}
      </select>
    </main>
  );
};

export default CreateProject;
