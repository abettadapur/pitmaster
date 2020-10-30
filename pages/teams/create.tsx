import React, { useCallback } from "react";
import { GetServerSidePropsContext, GetStaticProps } from "next";
import Layout from "../../components/Layout";
import { Typography, TextField, Button } from "@material-ui/core";
import { PrismaClient } from "@prisma/client";
import { useForm } from "react-hook-form";
import styles from "./create.module.scss";
import { useRouter } from "next/router";

type Props = {};

export default function Home(props: Props) {
  const { register, handleSubmit, errors } = useForm();
  const router = useRouter();
  const onSubmit = async (data) => {
    const resp = await fetch(`http://localhost:3000/api/team`, {
      method: "POST",
      body: JSON.stringify({ name: data.name }),
    });

    const respJson = await resp.json();

    router.replace({
      pathname: "/teams/[team]",
      query: { team: respJson["id"] },
    });
  };

  return (
    <Layout>
      <Typography variant="h3">Create a Team</Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles["create-team-form"]}
      >
        <TextField
          inputRef={register}
          name="name"
          label="Team Name"
          variant="outlined"
        />
        <Button variant="contained" color="primary" type="submit">
          Create
        </Button>
      </form>
    </Layout>
  );
}
