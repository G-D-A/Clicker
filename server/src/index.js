const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express(); // ✅ ПЕРЕНЕСЛИ ВВЕРХ

// отдаём фронтенд
app.use(express.static(path.join(__dirname, '../../public')));

const Video = require('./models/Video');

app.use((req, res, next) => {
  console.log('REQ:', req.method, req.url);
  next();
});
app.use(cors());
app.use(express.json());

const MONGO_URL = 'mongodb://127.0.0.1:27017/video_db';

mongoose
  .connect(MONGO_URL)
  .then(() => console.log('MongoDB connected'))
  .catch((e) => console.error('MongoDB error:', e.message));

app.get('/', (req, res) => {
  res.send('API is running. Try GET /videos');
});

app.get('/videos', async (req, res) => {
  const videos = await Video.find().sort({ createdAt: -1 });
  res.json(videos);
});

app.post('/videos', async (req, res) => {
  try {
    const { title, fileName } = req.body;
    const doc = await Video.create({ title, fileName });
    res.status(201).json(doc);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

app.get('/videos/:id/download', async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ error: 'Video not found' });

    const filePath = path.join(__dirname, '..', 'videos', video.fileName);
    return res.download(filePath, video.fileName, (err) => {
      if (err) return res.status(404).json({ error: 'File not found on server' });
    });
  } catch (e) {
    return res.status(400).json({ error: 'Bad id format' });
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));