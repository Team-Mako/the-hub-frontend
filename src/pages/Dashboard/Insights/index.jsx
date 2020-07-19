import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Chart } from 'react-google-charts';
import Dashboard from '../Dashboard';
import api from '../../../services/api';

const Insights = ({ user }) => {
  const colors = ['#f92962', '#782e74', '#0b7a75', '#0fa9a2', '#fa5b86'];
  const [categories, setCategories] = useState([]);
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    async function getInsightsCategory() {
      await api.get(`/top-categories?userId=${user.user_id}`)
        .then((res) => {
          if (res.data.length > 0) {
            const dataArr = [['Category', 'Ratio']];
            res.data.map((item) => {
              dataArr.push([item.category_title, item.top]);
            });

            setCategories(dataArr);
          } else {
            setCategories([['Category', 'Ratio']]);
          }
        });
    }

    async function getInsightsMaterials() {
      await api.get(`/top-materials?userId=${user.user_id}`)
        .then((res) => {
          if (res.data.length > 0) {
            const dataArr = [['Material', 'Ratio']];
            res.data.map((item) => {
              dataArr.push([item.material_name, item.top]);
            });

            setMaterials(dataArr);
          } else {
            setMaterials([['Material', 'Ratio']]);
          }
        });
    }

    getInsightsCategory();
    getInsightsMaterials();
  }, [user.user_id]);

  return (
    <Dashboard nav>
      <div className="insights">

        <div className="insights__box">
          <h3>Top 3 Materials</h3>
          <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={materials}
            options={{
              pieHole: 0.45,
              legend: {
                position: 'bottom',
              },
              colors,
            }}
          />
        </div>

        <div className="insights__box">
          <h3>Top 5 Categories</h3>
          <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={categories}
            options={{
              pieHole: 0.5,
              legend: {
                position: 'bottom',
              },
              colors,
            }}
          />
        </div>

        <div className="insights__box--big">
          <h3>Project Views this Week</h3>
          <Chart
            width="100%"
            height="400px"
            chartType="Line"
            data={[
              ['date', 'views'],
              [0, 0],
              [1, 2],
              [2, 2],
              [3, 2],
              [4, 4],
              [5, 0],
              [6, 6],
              [7, 0],
            ]}
            options={{
              curveType: 'function',
              legend: {
                position: 'none',
              },
              series: {
                0: { color: '#f92962' },
              },
            }}
          />
        </div>

        <div className="insights__box">
          <h3>You Have Receieved (All Time)</h3>
          <p>Poject Views <span>180</span></p>
          <p>Poject Likes <span>180</span></p>
          <p>Comments <span>180</span></p>
        </div>

        <div className="insights__box">
          <h3>You Have Given (All Time)</h3>
          <p>Poject Likes <span>180</span></p>
          <p>Comments <span>180</span></p>
        </div>

      </div>
    </Dashboard>
  );
};

export default connect((state) => ({
  user: state.user,
}))(Insights);
