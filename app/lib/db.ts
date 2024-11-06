import { Pool } from "pg";

interface EnvVariables {
  DATABASE_URL: string;
}

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is missing");
}

export interface User {
  id: number;
  name: string;
  age: string;
  gender: string;
  address: string;
  phone: string;
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Function to query the database with a generic type for the result rows
export const query = async <T>(text: string, params?: any[]): Promise<T[]> => {
  const res = await pool.query<T>(text, params);
  return res.rows;
};
