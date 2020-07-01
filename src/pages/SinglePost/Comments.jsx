import React from 'react';
import { AuthorImgExample } from '../../components/Assets';

function Comments() {
  return (
    <div className="comments">
      {/* COMMENT FORM */}
      <div className="comments__form">
        <label>Comments</label>
        <textarea id="comments" name="comments" placeholder="Leave a comment..." />
      </div>

      {/* POSTED COMMENT */}
      <ul className="comments__list">
        <li>
          <img src={AuthorImgExample} alt="" />

          <div><span>Mark Lunna</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Comments;
