import "dotenv/config";

enum EnvValues {
  PORT = "PORT",
  OPEN_API_KEY = "OPEN_API_KEY",
}

const getConfigValue = <T>(key: string) => {
  const value = process.env[key] as T;
  if (!value) {
    throw new Error(`${key} not found in environment variables`);
  }
  return value;
};

export const getPort = (): number => getConfigValue<number>(EnvValues.PORT);

export const getApiKey = (): string => getConfigValue<string>(EnvValues.PORT);
