require('dotenv').config();
const express = require('express');
const { OpenAI } = require('openai');

const app = express();
const PORT = 3000;
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Middleware to allow all origins (CORS)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.json()); // Add this if not already present

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.post('/api/generate', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // or "gpt-4" if you have access
      messages: [{ role: "user", content: prompt }]
    });
    res.json({ result: completion.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Handle 404 - Not Found
app.use((req, res) => {
  res.status(404).send('Not found');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
