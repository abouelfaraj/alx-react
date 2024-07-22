const $ = require("jquery");
import _ from 'lodash';

let count = 0;

const updateCounter = _.debounce(() => {
    count++;
    $('#count').text(`${count} clicks on the button`);
}, 500);

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>')
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');
