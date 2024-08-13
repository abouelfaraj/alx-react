import { fromJs } from 'immutable';

export default function accessImmutableObject(object, array) {
    const mappedObj = fromJs(object);
    return mappedObj.getIn(array, undefined);
}