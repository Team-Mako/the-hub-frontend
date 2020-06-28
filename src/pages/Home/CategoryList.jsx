import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import api from '../../services/api';

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('list-category');
    this.setState({ categories: response.data });
  }

  render() {
    const { categories } = this.state;

    return (
      <section className="category-list">
        <div className="category-list__inner">
          <h2 className="home-main__title">Browse DIY projects<br /> <span>by category</span></h2>

          <div className="category-list__list">
            {categories.map((category) => (
              <NavLink key={category.id} to="/" className="category-list__box" style={{ backgroundImage: `url(${require(`../../assets/uploads/${category.category_cover_small}`)})` }}>
                <div className="category-list__gradient">
                  <h3>{category.category_title}</h3>
                  <p>{category.category_subtitle}</p>
                  <p>See Projects <FaArrowRight /></p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default CategoryList;
