exports.port = process.argv[2] || process.env.PORT || 8080;
exports.mongoUrl = process.env.MONGO_URL || 'mongodb+srv://mariabp:mariabolanos89@my-first-cluster-732oh.mongodb.net/test?retryWrites=true&w=majority';
exports.secret = process.env.JWT_SECRET || 'xxxxxxxx'; // JWT secret
exports.adminEmail = process.env.ADMIN_EMAIL || 'admin@localhost';
exports.adminPassword = process.env.ADMIN_PASSWORD || 'changeme';
