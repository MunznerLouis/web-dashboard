# web-dashboard

This repository documents my journey in building an interactive dashboard using React and D3. The project utilizes PostgreSQL as the database and Express.js to handle the API, bridging the gap between PostgreSQL and the frontend.

### 01/09 - Display of a D3 graph

After setting up the React project and installing the necessary dependencies, I delved into the React environment to gain a deeper understanding. Here's a snapshot of what the website looked like after my initial commit:


<img src="/react-d3-app/history-git/Capture.PNG" alt="website after 1st commit" style="width: 70%; clip-path: polygon(0 0, 100% 0, 100% 65%, 0 65%);">

### 02/09 - API endpoint set up

To create graphs based on real data, I chose to use data from an API endpoint I set up. While I could have loaded the data from a CSV file, this approach would have imposed a significant processing burden on the frontend and raised security concerns. To create this API endpoint, I utilized Express.js to execute a SQL query to PostgreSQL and then converted the retrieved data into JSON format. The data is sent to a different server, which still resides on localhost but uses a different port, specifically at http://localhost:5000/api/data.

<img src="/react-d3-app/history-git/Capture2.PNG" alt="website after 1st commit" style="width: 70%;">