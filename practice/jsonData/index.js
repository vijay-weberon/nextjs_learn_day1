// const express = require('express');
// const cors = require('cors');
// const fs = require('fs');
// const path = require('path');

// const app = express();

// // Enable CORS for all routes
// app.use(cors());

// app.options('/data', cors()); // Handle preflight OPTIONS request

// app.get('/', (req, res) => {
//   const filePath = path.join(__dirname, 'template_data.json');
  
//   // Read the JSON file
//   fs.readFile(filePath, 'utf-8', (err, data) => {
//     if (err) {
//       // Handle the error by sending an error response
//       res.status(500).json({ error: 'Internal Server Error' });
//       console.error(err);
//     } else {
//       // Send the JSON data as a response
//       res.json(JSON.parse(data));
//     }
//   });
// });

// app.listen(8080, () => {
//   console.log('Server is running on port 8080');
// });




const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

// Enable CORS for all routes
app.use(cors());

app.options('/', cors()); // Handle preflight OPTIONS request

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'template_data.json');

  // Read the JSON file
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      // Handle the error by sending an error response
      res.status(500).json({ error: 'Internal Server Error' });
      console.error(err);
    } else {
      // Send the JSON data as a response
      res.json(JSON.parse(data));
    }
  });
});

const port = 8080;
app.listen(port, () => {
  console.log(`JSON server is running on port ${port}`);
});

