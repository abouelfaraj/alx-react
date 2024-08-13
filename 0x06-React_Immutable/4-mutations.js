import Map from 'immutable';

export const map = Map({
    1: 'Liam',
    2: 'Noah',
    3: 'Elijah',
    4: 'Oliver',
    5: 'Jacob',
    6: 'Lucas',
});

export const map2 = map.withMutations((values) => {
    values.set(2, 'benjamin').set(4, 'Oliver');
});