const express = require('express');
const axios   = require('axios');
const cors    = require('cors');
require('dotenv').config();

const app  = express();
const PORT = process.env.PORT || 5000;
const BASE = process.env.API_URL; 

app.use(cors({
  origin: `${process.env.FRONTEND_URL}`
}));
app.use(express.json());

app.get('/api/upcoming-soccer-matches', async (req, res) => {
  try {
    const today = new Date();
    const dates = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(today);
      d.setDate(d.getDate() + i);
      return d.toISOString().split('T')[0];
    });

    const requests = dates.map(date =>
      axios.get(`${BASE}d=${date}&s=Soccer`)
    );
    const responses = await Promise.all(requests);

    const allEvents = responses
      .map(r => r.data.events || [])
      .flat();

    const matches = allEvents.map(e => ({
      homeTeam: e.strHomeTeam,
      awayTeam: e.strAwayTeam,
      date:      e.dateEvent,
      time:      e.strTime,
    }));

    res.json({ matches });
    console.log(`Fetched ${matches.length} matches over the next 7 days.`);
  } catch (error) {
    console.error('Error fetching soccer match data:', error);
    res.status(500).json({ error: 'Failed to fetch data from TheSportsDB' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
