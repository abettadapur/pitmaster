import React from "react";
import { GetServerSidePropsContext, GetStaticProps } from "next";
import Layout from "../../components/Layout";
import { Typography } from "@material-ui/core";
import { PrismaClient, Team } from "@prisma/client";

// export async function getStaticPaths() {
//   return { paths: ["/teams/[team]"], fallback: false };
// }
export const getServerSideProps: GetStaticProps = async (
  context: GetServerSidePropsContext
) => {
  const teamID = Number(context.params?.team);
  const prisma = new PrismaClient();

  const team = await prisma.team.findOne({ where: { id: teamID } });
  return { props: { teamID, team } };
};

type Props = {
  team: Team;
  teamID: string;
};

export default function Home(props: Props) {
  return (
    <Layout>
      <Typography variant="h3">
        {props.teamID}
        {props.team.name}
      </Typography>
    </Layout>
  );
}
