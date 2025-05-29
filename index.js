const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(' CI/CD Pipeline working successfully!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
// update
// update
