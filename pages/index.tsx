import React from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
import { Typography, Button } from "@material-ui/core";
import { PrismaClient, Team } from "@prisma/client";

export const getStaticProps: GetStaticProps = async () => {
  const prisma = new PrismaClient();
  const teams = await prisma.team.findMany();
  return { props: { teams } };
};

type Props = {
  teams: Team[];
};

export default function Home(props: Props) {
  return (
    <Layout>
      <Typography variant="h3">Teams</Typography>
      {props.teams?.map((t) => (
        <Link href={`/teams/${t.id}`}>
          <a>{t.name}</a>
        </Link>
      ))}
      <div>
        <Link href="teams/create">
          <Button variant="contained" color="primary">
            Create Team
          </Button>
        </Link>
      </div>
    </Layout>
  );
}
