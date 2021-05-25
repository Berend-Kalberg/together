import React from "react";
import { providers, signIn, getSession, csrfToken } from "next-auth/client";

export default function SignIn({ providers, csrfToken }) {
  return (
    <div maxW="xl" centerContent>
      <h1 as="h1" textAlign="center">
        Welcome to our custom page
      </h1>
        {Object.values(providers).map((provider) => {
          if (provider.name === "Email") {
            return;
          }
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
    return;
  }

  return {
    session: undefined,
    providers: await providers(context),
    csrfToken: await csrfToken(context),
  };
};