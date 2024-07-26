import './body.css';
const $ = require("jquery");
import _ from 'lodash';

$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

const updateCounter = () => {
  $('button').on('click', () => {
    count++;
    $('#count').text(`${count} clicks on the button`);
  });
};

_.debounce(updateCounter, 500);
updateCounter();
