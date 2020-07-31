import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import api from '../../../services/api';
import Alerts from '../../../components/Alerts';
import Spinner from '../../../components/BiggerSpinner';

const EditMaterial = ({ id, cat }) => {
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [loader, setLoader] = useState(false);
  const [materialFields, setMaterialFields] = useState([{ material: '', meas: '' }]);
  const [materialList, setMaterialList] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalMaterial, setModalMaterial] = useState('');
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    async function getMaterials() {
      const materialData = await api.get(`/post-material/${id}`);
      setMaterials(materialData.data);
    }

    async function getMaterialList() {
      const response = await api.get(`/list-material?pg=1&limit=5000&category=${cat}`);
      setMaterialList(response.data);
    }

    getMaterialList();
    getMaterials();
  }, []);

  const timer = () => {
    setTimeout(() => {
      setAlert(false);
    }, 5100);
  };

  const handleMaterials = (e) => {
    const { name, value } = e.target;
    const list = { ...materialFields };
    list[name] = value;
    setMaterialFields(list);
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
      category: cat,
    })
      .then((res) => {
        handleModal();
        setAlert(true);
        setAlertMessage(res.data.message);
        timer();
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

        <div className="create-post__left">

          <p>Haven't you find what were you looking for? <button type="button" className="create-post__new-material" onClick={handleModal}>Click Here</button></p>

          <div className="create-post__dynamic">
            <div className="create-post__dynamic-material">

              <select name="material" onChange={handleMaterials} required>
                <option value="">Select...</option>
                {materialList.map((material) => (
                  <option key={material.material_id} value={material.material_id}>{material.material_name}</option>
                ))}
              </select>

              <input type="text" placeholder="measurement" name="meas" onChange={handleMaterials} required />

            </div>
          </div>

          <button type="submit">Save</button>
        </div>

        <div className="create-post__right">
          {materials.map((item, index) => (
            <p key={index}><button type="button" onClick={() => handleModal(0)}><span aria-hidden="true" className="visually-hidden">Remove Button</span><FaTrashAlt /></button> {item.material_name} {item.post_material_meas}</p>
          ))}
        </div>

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
