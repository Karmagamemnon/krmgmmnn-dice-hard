export const rn2br = (str: string) => {
    return str.split('\n').map((line: string, index: number) =>
        index === 0 ? line : [<br key={index} />, line]
    );
};

export const dateDiff = (d1: Date, d2: Date): number => {
    const msBetweenDates = d1.getTime() - d2.getTime();
    const msInADay = 1000 * 3600 * 24;
    return Math.abs(Math.ceil(msBetweenDates / msInADay)) + 1;
};