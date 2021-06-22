export default class Boardgame {

    id: string = "";
    description: string = "";
    description_preview: string = "";
    image_url: string = "";
    max_players: number = 0;
    max_playtime: number = 0;
    min_age: number = 0;
    min_players: number = 0;
    min_playtime: number = 0;
    name: string = "";
    thumb_url: string = "";
    year_published: number = 0;

    shortened_description = (): string => {
        let trimmedString = this.description.substr(0, 300);
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
        return trimmedString + "...";
    };

};