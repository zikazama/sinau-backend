const multer = require("multer");

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/"); // Files will be stored in public/uploads directory
  },
  filename: function (req, file, cb) {
    // Create unique filename with original extension
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// File filter to control which files are accepted
const fileFilter = (req, file, cb) => {
  // Accept only specific mime types
  const allowedMimes = ["image/jpeg", "image/png", "image/gif"];

  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type"), false);
  }
};

// Initialize multer with configuration
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB file size limit
  },
  fileFilter: fileFilter,
});

module.exports = { upload };
