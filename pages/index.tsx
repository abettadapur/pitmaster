import pageStyles from "./styles/page.module.scss";
import React from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
import { Typography } from "@material-ui/core";
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
      <div className={pageStyles["page"]}>
        <Typography variant="h3">Teams</Typography>
        <main>
          {props.teams?.map((t) => (
            <Link href={`/teams/${t.id}`}>
              <a>{t.name}</a>
            </Link>
          ))}
        </main>
      </div>
    </Layout>
  );
}
