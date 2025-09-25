const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`Hello from Kubernetes CI/CD pipeline! Timestamp: ${new Date().toISOString()}`);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
