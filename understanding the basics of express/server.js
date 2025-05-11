const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// About Page Data
const aboutData = {
  title: "About TRIMAA",
  subtitle: "Nigeria’s leading real estate solution, built with love and trust.",
  whoWeAre: "TRIMAA is a top-tier real estate company dedicated to helping individuals and families find their dream homes in Nigeria. We provide a seamless property search experience with our curated listings for sales and rentals across major cities like Abuja, Lagos, Port Harcourt, and beyond.",
  mission: "To simplify the real estate process by connecting buyers, renters, and agents in a secure and efficient environment, offering transparency and excellent customer support.",
  offers: [
    "Verified property listings for sale and rent",
    "User-friendly search and filter tools",
    "Trusted and experienced agents",
    "Responsive customer service"
  ],
  contact: {
    address: "Old Ogorode Road, Sapele, Delta State",
    email: "orikuolarotimi12345@gmail.com"
  }
};

// Routes
app.get('/api/about', (req, res) => {
  res.json(aboutData);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
