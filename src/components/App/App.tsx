import Layout from "./Layout/Layout";
import { FunctionComponent } from "react";

const App: FunctionComponent = (props) => {

  return <Layout>{props.children}</Layout>

};

export default App;
