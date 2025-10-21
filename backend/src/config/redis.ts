import { Redis } from 'ioredis';

let redisClient: Redis;

const connectRedis = async () => {
  try {
    const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';

    redisClient = new Redis(redisUrl);

    redisClient.on('connect', () => {
      console.log('⚡ Conectado ao Redis com sucesso!');
    });

    redisClient.on('error', (error) => {
      console.error('❌ Erro ao conectar ao Redis:', error);
      process.exit(1);
    });

    await redisClient.ping();
    console.log('✅ Redis ping bem-sucedido');
  } catch (error) {
    console.error('🚨 Erro ao conectar ao Redis:', error);
    process.exit(1);
  }
};

const getRedisClient = () => {
  if (!redisClient) {
    throw new Error('Redis client ainda nao foi iniciado, use connectRedis()');
  }
  return redisClient;
};

export { connectRedis, getRedisClient };
