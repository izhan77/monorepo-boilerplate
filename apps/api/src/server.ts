import app from "./app";
import 'dotenv/config';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Your Org backend is running on http://localhost:${PORT}`)
});

