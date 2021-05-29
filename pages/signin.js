import React from "react";
import Head from "next/head";

import { providers, signIn, getSession } from "next-auth/client";

export default function SignIn({ providers }) {
  return (
    <div>
      <Head>
        <title>Together</title>
      </Head>
      <h1>
        Welcome to our custom page
      </h1>
        {Object.values(providers).map((provider) => {
          return (
            <div key={provider.name}>
              <button variant="outline" onClick={() => signIn(provider.id)}>
                Sign in with {provider.name}
              </button>
            </div>
          );
        })}
    </div>
  );
}

SignIn.getInitialProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: "/",
    });
    res.end();
    console.log(res)
    return;
  }

  return {
    session: undefined,
    providers: await providers(context),
  };
};