const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Autorise uniquement ton site GitHub à accéder à l’API
app.use(cors({
  origin: "https://liam1434.github.io"
}));

// Pour lire le JSON dans les requêtes
app.use(bodyParser.json());

// ✨ Exemple d’endpoint pour discuter avec l’IA
app.post("/api/chat", async (req, res) => {
  const { model, messages, stream } = req.body;

  // ici tu rediriges vers ton IA réelle, par exemple OpenRouter ou LM Studio
  // ou tu traites localement

  res.json({
    message: {
      content: "💬 Réponse simulée de Nyros !"
    }
  });
});

// 🚀 Démarre le serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur en ligne sur http://localhost:${PORT}`);
});
