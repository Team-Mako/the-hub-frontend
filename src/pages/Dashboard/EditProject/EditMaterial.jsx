import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import api from '../../../services/api';
import Alerts from '../../../components/Alerts';
import Spinner from '../../../components/BiggerSpinner';

const EditMaterial = ({ id }) => {
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [loader, setLoader] = useState(false);
  const [materialFields, setMaterialFields] = useState([{ material: '', meas: '' }]);
  const [materialList, setMaterialList] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalCategory, setModalCategory] = useState('');
  const [modalMaterial, setModalMaterial] = useState('');

  useEffect(() => {
  }, []);

  const timer = () => {
    setTimeout(() => {
      setAlert(false);
    }, 5100);
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

  const handleMaterialList = async (e) => {
    const response = await api.get(`/list-material?pg=1&limit=5000&category=${e.target.value}`);
    setMaterialList(response.data);
  };

  const handleRemoveMaterialsFields = (index) => {
    const list = [...materialFields];
    list.splice(index, 1);
    setMaterialFields(list);
  };

  const handleModalCategory = (e) => {
    setModalCategory(e.target.value);
  };

  const handleModalMaterial = (e) => {
    setModalMaterial(e.target.value);
  };

  const handleModal = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
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

  return (
    <>

      <form method="post" encType="multipart/form-data">

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

      </form>

      <div className={modal ? 'modal modal--active' : 'modal'}>
        <form onSubmit={handleModalSubmit}>
          <label>
            <button type="button" onClick={handleModal}>X</button>
          </label>
          <label>
            <input type="text" placeholder="Material name" value={modalMaterial} onChange={handleModalMaterial} required />
          </label>
          <button type="submit">Create</button>
        </form>
      </div>

      <Alerts active={alert} message={alertMessage} />

      <Spinner active={loader} />
    </>
  );
};

export default EditMaterial;
