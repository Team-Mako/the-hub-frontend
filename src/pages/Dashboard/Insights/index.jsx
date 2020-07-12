import React from 'react';
import { Chart } from 'react-google-charts';
import Dashboard from '../Dashboard';

const Insights = () => {
  const colors = ['#f92962', '#782e74', '#0b7a75', '#0fa9a2', '#fa5b86'];

  return (
    <Dashboard>
      <div className="insights">

        <div className="insights__box">
          <h3>Top 3 Materials</h3>
          <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={[
              ['Category', 'Ratio'],
              ['Chicken', 5],
              ['Orange Juice', 2],
              ['Candle', 2],
            ]}
            options={{
              pieHole: 0.45,
              legend: {
                position: 'none',
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
            data={[
              ['Category', 'Ratio'],
              ['Drinks', 5],
              ['Clothing', 2],
              ['Cooking', 2],
              ['Crafts', 0.5],
              ['Furniture', 0.5]]}
            options={{
              pieHole: 0.5,
              legend: {
                position: 'none',
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

export default Insights;
