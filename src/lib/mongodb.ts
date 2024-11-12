import mongoose from 'mongoose';

// Définition de l'interface pour le cache mongoose
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Définition du type pour global avec mongoose
interface CustomGlobal extends Global {
  mongoose?: MongooseCache;
}

// Déclaration du type global
declare const global: CustomGlobal;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MONGODB_URI to .env.local');
}

const MONGODB_URI = process.env.MONGODB_URI;

// Initialisation du cache mongoose avec typage explicite
const cached: MongooseCache = global.mongoose || {
  conn: null,
  promise: null,
};

// Assignation à global avec le bon type
if (!global.mongoose) {
  global.mongoose = cached;
}

async function dbConnect(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts);
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (e) {
    cached.promise = null;
    throw e;
  }
}

export default dbConnect;