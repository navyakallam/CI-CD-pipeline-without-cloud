const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const currentTime = new Date().toLocaleString();
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>CI/CD Status</title>
      <style>
        body {
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
          height: 100vh;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          overflow: hidden;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
          }
        }

        .card {
          background: rgba(0, 0, 0, 0.4);
          padding: 30px 40px;
          border-radius: 20px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
          text-align: center;
          max-width: 500px;
          animation: fadeInUp 1s ease-out, pulse 3s infinite;
        }

        h1 {
          font-size: 2.2em;
          margin-bottom: 10px;
          transition: transform 0.3s ease;
        }

        .card:hover h1 {
          transform: scale(1.05);
        }

        p {
          margin: 10px 0;
          font-size: 1.1em;
          opacity: 0.95;
        }

        .emoji {
          font-size: 2.5em;
          margin-bottom: 10px;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="emoji">🚀✨</div>
        <h1>CI/CD Pipeline Deployed!</h1>
        <p><strong>✔️ Build:</strong> Docker</p>
        <p><strong>⚙️ CI/CD:</strong> GitHub Actions</p>
        <p><strong>📅 Last updated:</strong> ${currentTime}</p>
        <p><strong>🔁 Auto-deployment is working smoothly!</strong></p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`🌐 Server running at http://localhost:${PORT}`);
});


