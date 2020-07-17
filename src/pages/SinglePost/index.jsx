import React from 'react';
import { FaHeart, FaEye, FaPaperPlane, FaStar } from 'react-icons/fa';
import CallToAction from '../../components/CallToAction';
import Comments from './Comments';

const SinglePost = () => (
  <>
    <div className="single-post">
      <main>

        <div className="single-post__inner">
          {/* POST TITLE */}
          <span className="single-post__title">
            <h1>Seriously Good Moscow Mule Cocktail</h1>
            <FaStar />
          </span>

          {/* AUTHOR INFO */}
          <div className="single-post__details">
            <div className="single-post__author">
              <img src="" alt="Post Author" />
              <p>Leona Davis</p>
            </div>

            <div className="single-post__meta">
              <span><FaHeart /> 609</span>
              <span><FaEye /> 120</span>
            </div>
          </div>

          {/* POST COVER IMG */}
          <img src="" alt="Post Cover" className="single-post__cover" />

          {/* POST DESCRIPTION */}
          <p className="single-post__description">A Moscow mule is a cocktail made with vodka, spicy ginger beer, and lime juice, garnished with a slice or wedge of lime. It is a type of buck, therefore sometimes called a vodka buck. The Moscow mule is popularly served in a copper mug, which takes on the cold temperature of the liquid.</p>

          {/* INGREDIENTS LIST */}
          <div className="single-post__ingredients">
            <div className="single-post__ingredients-inner">

              <span>You are going to need</span>

              <ul>
                <li> 4 oz Ginger beer </li>
                <li> 1 1/2 oz Vodka </li>
                <li> 1/6 oz Lime juice </li>
              </ul>

              <a href="# "><FaPaperPlane />Send ingridients as a text message</a>
            </div>
          </div>

          {/* STEPS */}
          <div className="single-post__steps">

            <h2>How to do it yourself</h2>

            <ul>
              <li>
                <span>Step 1</span>

                <p>
                  Smirnoff brand vodka is my favourite for Moscow mules. It has an excellent price and is easy to find. The ginger beer is going to bring up all the flavours, so don’t worry too much if you can’t find a good Vodka.

                  Fever-Tree brand ginger beer is perfect for this drink. You can find them at Natural Grocers, an even at Superstore or Whole foods. Please, share in the comments if you have any suggestions of other places to find it,

                  I usually squeeze the lime juice myself. You can sure try a bottled juice, but the results will not be as fresh.
                </p>

                <img src="" alt="" />
              </li>

              <li>
                <span>Step 2</span>

                <p>
                  Serve it in a Copper mug or highball glass. On the rocks; poured over ice.
                </p>

                <img src="" alt="" />
              </li>
            </ul>
          </div>

        </div>

      </main>

      <Comments />
    </div>

    <CallToAction />
  </>
);

export default SinglePost;
