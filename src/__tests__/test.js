import {canIterate} from '../caniterate';

test("cheking canIterate", () => {
    let mapIterator = canIterate(new Map()); // true
    let setIterator = canIterate(new Set()); // true
    let nullIterator = canIterate(null); // false
    let numberIterator = canIterate(10); // false
    let stringIterator = canIterate("Netology"); // true

    expect(mapIterator).toBe(true);
    expect(setIterator).toBe(true);
    expect(nullIterator).toBe(false);
    expect(numberIterator).toBe(false);
    expect(stringIterator).toBe(true);
})

