import { plainToClass } from "class-transformer";
import Boardgame from "../components/Boardgame/Boardgame";

const gameApi = () => {

    const baseUrl = "https://api.boardgameatlas.com/api/search?name=Catan&client_id=sJQ6UExjQp";

    const getOne = async (id: string, onSuccess: (game: Boardgame) => void, onError: (error: any) => void) => {
        const url: string = `${baseUrl}&id=${id}`;
        const init: RequestInit = {
            cache: "default",
            headers: { "Accept": "application/json" },
            method: "GET",
            mode: "cors"
        };
        fetch(url, init)
            .then(res => res.json())
            .then(json => plainToClass(Boardgame, json as Object))
            .then(onSuccess)
            .catch(onError);
    };

    const getAll = async (onSuccess: (games: Boardgame[]) => void, onError: (error: any) => void) => {
        const url: string = `${baseUrl}`;
        const init: RequestInit = {
            cache: "default",
            headers: { "Accept": "application/json" },
            method: "GET",
            mode: "cors"
        };
        fetch(url, init)
            .then(res => res.json())
            .then(json => plainToClass(Boardgame, json.games as Object[]))
            .then(onSuccess)
            .catch(onError);
    };

    return { getOne, getAll };
}

export default gameApi();