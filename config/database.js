const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  throw new Error('MONGODB_URI environment variable is required');
}

module.exports = {
  url: mongoUri
};
