exports.port = process.argv[2] || process.env.PORT || 8080;
exports.mongoUrl = process.env.MONGO_URL || 'mongodb+srv://mariabp:mariabolanos89@burger-queen-732oh.mongodb.net/burger-queen';
exports.secret = process.env.JWT_SECRET || 'burgerqueen2019'; // JWT secret
exports.adminEmail = process.env.ADMIN_EMAIL || 'admin@localhost';
exports.adminPassword = process.env.ADMIN_PASSWORD || 'dontchangeme';
