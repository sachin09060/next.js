import { NextApiRequest, NextApiResponse } from "next";
import { query, User } from "../../lib/db";

interface RegistrationData {
  name: string;
  age: string;
  gender: string;
  address: string;
  phone: string;
}

interface ApiResponse {
  message?: string;
  user?: User;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method === "POST") {
    const { name, age, gender, address, phone }: RegistrationData = req.body;

    try {
      const result = await query<User>(
        "INSERT INTO users (name, age, gender, address, phone) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [name, age, gender, address, phone]
      );

      const user = result[0];

      res.status(200).json({
        message: "User registered successfully!",
        user,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to register user" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
