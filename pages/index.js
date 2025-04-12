import Head from "next/head";
import dynamic from "next/dynamic";

const AccountSearch = dynamic(() => import("../components/AccountSearch"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Account Manager</title>
      </Head>
      <main>
        <AccountSearch />
      </main>
    </>
  );
}