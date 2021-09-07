import {useEffect} from 'react'
var axios = require('axios');

function App() {


  useEffect(()=>{
  try {
    var config = {
      method: 'get',
      rejectUnauthorized: false,
      url: 'https://161.35.44.19:8443/laundry-rest/customer/get?phoneNumber=966581823199',
      headers: { 
        'Authorization': 'Basic TGF1bmRyeUFwcDpFNjA1NzBkMkA2M2YhNzRCMjA3'
      }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  } catch (error) {
    console.log( 'errrrror', error);

  }

  },[])


  return (
  <> </>
  );
}

export default App;
