import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import { filesURL } from '../../../config/filesBucket';
import api from '../../../services/api';
import Alerts from '../../../components/Alerts';
import Spinner from '../../../components/BiggerSpinner';

const EditStep = ({ id }) => {
  const [steps, setSteps] = useState([{ stepDescription: '', stepCover: '' }]);
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [loader, setLoader] = useState(false);

  useEffect(() => {
  }, []);

  const timer = () => {
    setTimeout(() => {
      setAlert(false);
    }, 5100);
  };

  const handleMoreSteps = () => {
    setSteps([...steps, { stepDescription: '' }]);
  };

  const handleSteps = (e, index) => {
    if (e.target.files) {
      if (e.target.files[0].size > 1572864) {
        setAlert(true);
        setAlertMessage('Your image is bigger thant 1.5MB!');
        timer();
        return false;
      }
    }
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

  return (
    <>

      <form method="post" encType="multipart/form-data">

        <div className="create-post__left">
          <div className="create-post__dynamic">
            {steps.map((step, index) => (
              <div key={index} className="create-post__dynamic-step">

                <h3>Step {index + 1}</h3>

                <textarea name="stepDescription" onChange={(e) => handleSteps(e, index)} required />

                <label className="create-post__file-label">
                  <span className="create-post__file-btn">Add a Image 1.5MB</span>
                  {steps[index].stepCover ? step.stepCover.substr(12) : ''}
                  <input type="file" name="stepCover" accept="image/*" onChange={(e) => handleSteps(e, index)} />
                </label>

                <button type="button" onClick={handleRemoveSteps}><span aria-hidden="true" className="visually-hidden">Remove Button</span><FaTrashAlt /></button>

              </div>
            ))}
          </div>
          <button type="button" onClick={handleMoreSteps}>Add another step</button>

        </div>

      </form>

      <Alerts active={alert} message={alertMessage} />

      <Spinner active={loader} />
    </>
  );
};

export default EditStep;
