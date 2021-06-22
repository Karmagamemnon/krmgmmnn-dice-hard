import Flexbox from '../Helpers/Flexbox/Flexbox';
import Boardgame from './Boardgame';
import Loader from '../Helpers/Loader/Loader';
import SearchBar from '../Helpers/SearchBar/SearchBar';
import boardgameApi from '../../apis/boardgameApi';
import { Card } from 'react-bootstrap';
import { FunctionComponent, useEffect, useState } from 'react';
import { StyleSheet, css } from "aphrodite";
import Interweave from 'interweave';

const styles = StyleSheet.create({
    illustration: {
        width: "100px",
        alignSelf: "center",
    },
    boardgameCard: {
        flexBasis: "33%",
        flexDirection: "row",
    }
});

const BoardgameList: FunctionComponent = () => {

    const [boardgames, setBoardgames] = useState<Boardgame[]>([]);

    useEffect(() => {
        boardgameApi.getAll(
            (boardgames: Boardgame[]) => setBoardgames(boardgames),
            (error: any) => console.error(error)
        );
    }, []);

    return <Flexbox flexDirection="column">
        <Flexbox alignItems="center" gap="15px">
            <h1>Jeux</h1>
            <SearchBar />
        </Flexbox>
        {boardgames.length === 0
            ? <Loader />
            : <Flexbox flexDirection="column" gap="5px">
                {boardgames.map((boardgame: Boardgame, index: number) => {
                    const { name, image_url, year_published } = boardgame;
                    return <Card key={index} className={css(styles.boardgameCard)}>
                        <Card.Img variant="top" src={image_url} className={css(styles.illustration)} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Subtitle>{year_published}</Card.Subtitle>
                            <Card.Text>
                                <Interweave content={boardgame.shortened_description()} />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                })}
            </Flexbox>
        }
    </Flexbox>;

}

export default BoardgameList;