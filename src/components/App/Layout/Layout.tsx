import Container from "react-bootstrap/Container";
import Flexbox from "../../Helpers/Flexbox/Flexbox";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { FunctionComponent } from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#d31165",
    height: "100vh"
  },
  innerContainer: {
    backgroundColor: "white",
    height: "100vh"
  },
  content: {
    flexGrow: 1,
    // margin: "10px",
    padding: "10px",
    overflowX: "hidden",
    overflowY: "visible",
  }
});

const Layout: FunctionComponent = (props) => {

  return <Container className={css(styles.container)}>
    <Flexbox flexDirection="column" className={css(styles.innerContainer)}>
      <Header />
      <div className={css(styles.content)}>
        {props.children}
      </div>
      <Footer />
    </Flexbox>
  </Container >

}

export default Layout;