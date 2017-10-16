
export const loginWithFacebook = () => {
  fetch('http://13.125.1.79:3000/auth/facebook', {
    headers: {
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json',
    },
    method: 'GET',
  })
  .then((resp) => resp.json())
  .then( (data) => {
      console.log(data)
    }
  )
}


