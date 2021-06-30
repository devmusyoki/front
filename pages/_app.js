import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import LoadingPage from "components/templates/Loading";
 import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/styles/index.css"
// Layout needs to be declared elsewhere, and recive children as prop: {children}.
const Layout = ({ children }) => <>{children}</>;
 
const App = ({ Component, pageProps }) => {
  const router = useRouter();
 
  const [loading, setLoading] = useState(false);
 
  const pageLoading = () => setLoading(true);
  const pageLoaded = () => setLoading(false);
 
  // Executes on page load. // Server-side.
  useEffect(() => {
    router.events.on("routeChangeStart", pageLoading);
    router.events.on("routeChangeComplete", pageLoaded);
    router.events.on("routeChangeError", pageLoaded);
  }, []);
 
  return loading ? (
    < LoadingPage />
  ) : (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Project by Smusyoki</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
};
 

export const getInitialProps = async (ctx) => {
  
  return { props: {} }; 
};
 
export default App;