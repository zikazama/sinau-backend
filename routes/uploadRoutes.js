// Create a new route file (e.g., uploadRoutes.js)
const express = require('express');
const router = express.Router();
const {upload} = require('./../utils/multer');

// Single file upload
router.post('/single', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    res.json({
      message: 'File uploaded successfully',
      file: {
        filename: req.file.filename,
        path: req.file.path,
        size: req.file.size
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Multiple files upload (max 5 files)
router.post('/multiple', upload.array('files', 5), (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    const filesInfo = req.files.map(file => ({
      filename: file.filename,
      path: file.path,
      size: file.size
    }));

    res.json({
      message: 'Files uploaded successfully',
      files: filesInfo
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;