import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// POST /api/teams
export default async function handle(req, res) {
  const json = JSON.parse(req.body);
  if (req.method === "POST") {
    const team = await prisma.team.create({
      data: {
        name: json.name,
        Car: undefined,
        users: undefined,
      },
    });
    return res.json(team);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
