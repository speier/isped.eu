const redirect = async (request) => {
  const cookies = request.headers.get('cookie') || ''
  if (cookies.includes('returning=true')) {
    return fetch(request)
  }

  if (request.cf.country !== 'HU') {
    return new Response(null, {
      status: 302,
      headers: {
        location: 'https://isped.eu/en',
        'set-cookie': 'returning=true'
      }
    })
  }

  let response = await fetch(request)
  response = new Response(response.body, response)
  response.headers.set('set-cookie', 'returning=true')

  return response
}

addEventListener('fetch', (event) => {
  event.respondWith(redirect(event.request))
})
