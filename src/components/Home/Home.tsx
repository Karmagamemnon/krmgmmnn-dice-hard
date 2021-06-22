import Flexbox from '../Helpers/Flexbox/Flexbox';
import React, { FunctionComponent } from 'react';
import SearchBar from '../Helpers/SearchBar/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from "aphrodite";
import { Card } from 'react-bootstrap';

const styles = StyleSheet.create({
    column: {
        border: "1px solid black",
        padding: "10px"
    },
    row: {
        "@media only screen and (max-width : 768px)": {
            flexDirection: "column"
        }
    }
});

const Home: FunctionComponent = () => {

    return <Flexbox gap=".75rem" className={css(styles.row)}>
        
    </Flexbox>;

}

export default Home;