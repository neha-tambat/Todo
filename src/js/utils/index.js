
export function createConstants(...constants) {
    return constants.reduce((acc, constant) => {
        acc[constant] = constant;
        return acc;
    }, {});
}

export function parseJSON(data) {
    return JSON.parse(data);
}