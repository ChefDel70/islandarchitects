
const axios = require('axios');

// Make a request for a user with a given ID
axios.post('http://islandarchitects.local/wp-json/contact_form/send_mail/', {
  subject: 'This is my subject',
  message: 'This is what I will send'
})
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

export default function(){return null};
