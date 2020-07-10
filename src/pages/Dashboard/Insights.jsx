import React from 'react';
import { Chart } from 'react-google-charts';

const Insights = () => (
  <div className="insights">
    {/* Top 3 Materials */}
    <div className="insights__materials">
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
        options={{ pieHole: 0.45, legend: { position: 'none' } }}
      />
    </div>

    {/* Top 5 Categories */}
    <div className="insights__categories">
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
        options={{ pieHole: 0.5, legend: { position: 'none' } }}

      />
    </div>

    {/* Project Views this Week */}
    <div className="insights__views">
      <h3>Project Views this Week</h3>
      <Chart
        width="600px"
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
          legend: { position: 'none' },
          series: {
            0: { color: '#f92962' },
          } }}
      />
    </div>

    {/* You Have Receieved (All Time) */}
    <div className="insights__receieved">
      <h3>You Have Receieved (All Time)</h3>
      <span><h4>Project Views</h4> <p>180</p></span>
      <span><h4>Project Likes</h4> <p>48</p></span>
      <span><h4>Comments</h4> <p>12</p></span>
    </div>

    {/* You Have Given (All Time) */}
    <div className="insights__given">
      <h3>You Have Given (All Time)</h3>
      <span><h4>Project Views</h4> <p>180</p></span>
      <span><h4>Project Likes</h4> <p>48</p></span>
      <span><h4>Comments</h4> <p>12</p></span>
    </div>

  </div>
);

export default Insights;
