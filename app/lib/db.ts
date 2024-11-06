import { Pool } from "pg";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is missing");
}

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});

export interface User {
  id: number;
  name: string;
  age: string;
  gender: string;
  address: string;
  phone: string;
}

export const query = async <T>(text: string, params?: any[]): Promise<T[]> => {
  const res = await pool.query(text, params);
  return res.rows;
};
