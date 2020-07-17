import React from 'react';

const Comments = () => (
  <div className="comments">

    <div className="comments__form">
      <label>Comments</label>
      <textarea id="comments" name="comments" placeholder="Leave a comment..." />
    </div>

    <ul className="comments__list">
      <li>
        <img src="" alt="" />

        <div><span>Mark Lunna</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et </p>
        </div>
      </li>
    </ul>
  </div>
);

export default Comments;
