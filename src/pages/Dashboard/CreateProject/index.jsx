import React, { useState, useEffect } from 'react';
import { FaTrashAlt, FaPlus } from 'react-icons/fa';
import api from '../../../services/api';
import Alerts from '../../../components/Alerts';

const CreateProject = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [materialList, setMaterialList] = useState([]);
  const [title, setTitle] = useState('');
  const [materialFields, setMaterialFields] = useState([{ material: '', meas: '' }]);
  const [steps, setSteps] = useState([{ stepDescription: '', stepVideo: '', stepCover: '' }]);
  const [modal, setModal] = useState(false);
  const [modalCategory, setModalCategory] = useState('');
  const [modalMaterial, setModalMaterial] = useState('');
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const timer = () => {
    setTimeout(() => {
      setAlert(false);
    }, 5100);
  };

  useEffect(() => {
    async function getCategories() {
      const response = await api.get('/list-category');
      setCategoryList(response.data);
    }
    getCategories();
  }, []);

  const handleModal = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleMaterialList = async (e) => {
    const response = await api.get(`/list-material?pg=1&limit=5000&category=${e.target.value}`);
    setMaterialList(response.data);
  };

  const handleMoreMaterials = () => {
    setMaterialFields([...materialFields, { material: '', meas: '' }]);
  };

  const handleMaterialsFields = (e, index) => {
    const { name, value } = e.target;
    const list = [...materialFields];
    list[index][name] = value;
    setMaterialFields(list);
  };

  const handleRemoveMaterialsFields = (index) => {
    const list = [...materialFields];
    list.splice(index, 1);
    setMaterialFields(list);
  };

  const handleMoreSteps = () => {
    setSteps([...steps, { stepDescription: '', stepVideo: '' }]);
  };

  const handleSteps = (e, index) => {
    const { name, value } = e.target;
    const list = [...steps];
    list[index][name] = value;
    setSteps(list);
  };

  const handleRemoveSteps = (index) => {
    const list = [...steps];
    list.splice(index, 1);
    setSteps(list);
  };

  const handleModalCategory = (e) => {
    setModalCategory(e.target.value);
  };

  const handleModalMaterial = (e) => {
    setModalMaterial(e.target.value);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();

    api.post('/create-material', {
      name: modalMaterial,
      category: modalCategory,
    })
      .then((res) => {
        const newList = {
          target: {
            value: modalCategory,
          },
        };

        handleMaterialList(newList);
        handleModal();
        setAlert(true);
        setAlertMessage(res.data.message);
        timer();
        setModalCategory('');
        setModalMaterial('');
      })
      .catch((err) => {
        setAlert(true);
        setAlertMessage(err.response.data.error);
        timer();
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (materialFields.length < 2) {
      setAlert(true);
      setAlertMessage('You need to choose at least 2 materials');
      timer();
      return false;
    }

    const formData = new FormData(e.target);

    api.post('/test', formData, { headers: { 'content-type': 'multipart/form-data' } })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <>
      <main className="create-post">
        <div className="create-post__inner">

          <h1>Start building your project</h1>

          <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="create-post__left">
              <label>
                <p>Select a category</p>
                <select name="category" onChange={handleMaterialList} required>
                  <option value="">Select...</option>
                  {categoryList.map((category) => (
                    <option key={category.category_id} value={category.category_id}>{category.category_title}</option>
                  ))}
                </select>
              </label>

              <label>
                <p>Title</p>
                <input type="text" name="title" value={title} onChange={handleTitle} required />
              </label>

              <label>
                <p>Difficulty</p>
                <select name="material" required>
                  <option value="">Select...</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </label>

              <label>
                <p>Duration</p>
                <select name="material" required>
                  <option value="">Select...</option>
                  <option value="1min to 30min">1min to 30min</option>
                  <option value="30min to 1hr">30min to 1hr</option>
                  <option value="1hr+">1hr+</option>
                </select>
              </label>

              <label>
                <p>Short description</p>
                <textarea name="desc" required />
              </label>
            </div>

            <div className="create-post__right">
              <p className="create-post__area-title">What will you need?</p>

              <div className="create-post__dynamic">
                {materialFields.map((materialField, index) => (
                  <div key={index} className="create-post__dynamic-material">
                    <select name="material" onChange={(e) => handleMaterialsFields(e, index)} required>
                      <option value="">Select...</option>
                      {materialList.map((material) => (
                        <option key={material.material_id} value={material.material_id}>{material.material_name}</option>
                      ))}
                    </select>
                    <input type="text" placeholder="measurement" name="meas" onChange={(e) => handleMaterialsFields(e, index)} required />
                    <button type="button" onClick={handleRemoveMaterialsFields}><span aria-hidden="true" className="visually-hidden">Remove Button</span><FaTrashAlt /></button>
                  </div>
                ))}
              </div>

              <button type="button" onClick={handleMoreMaterials}>Add another material</button>

              <p>Haven't you find what were you looking for? <button type="button" className="create-post__new-material" onClick={handleModal}>Click Here</button></p>

              <p className="create-post__area-title">How to do it?</p>

              <div className="create-post__dynamic">
                {steps.map((step, index) => (
                  <div key={index} className="create-post__dynamic-step">
                    <h3>Step {index + 1}</h3>
                    <textarea name="stepDescription" onChange={(e) => handleSteps(e, index)} required />
                    <label>
                      <input type="file" name="stepCover" accept="image/*" value={steps[index].stepCover} onChange={(e) => handleSteps(e, index)} />
                    </label>
                    <input type="text" name="stepVideo" placeholder="Video link" onChange={(e) => handleSteps(e, index)} />
                    <button type="button" onClick={handleRemoveSteps}><span aria-hidden="true" className="visually-hidden">Remove Button</span><FaTrashAlt /></button>
                  </div>
                ))}
              </div>
              <button type="button" onClick={handleMoreSteps}>Add another step</button>

              <button type="submit">Create</button>
            </div>
          </form>

        </div>

        <Alerts active={alert} message={alertMessage} />
      </main>

      <div className={modal ? 'modal modal--active' : 'modal'}>
        <form onSubmit={handleModalSubmit}>
          <label>
            <button type="button" onClick={handleModal}>X</button>
            <p>Select a category</p>
            <select name="category" value={modalCategory} onChange={handleModalCategory} required>
              <option value="">Select...</option>
              {categoryList.map((category) => (
                <option key={category.category_id} value={category.category_id}>{category.category_title}</option>
              ))}
            </select>
          </label>
          <label>
            <input type="text" placeholder="Material name" value={modalMaterial} onChange={handleModalMaterial} required />
          </label>
          <button type="submit">Create</button>
        </form>
      </div>
    </>
  );
};

export default CreateProject;
