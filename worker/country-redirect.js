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
}

addEventListener('fetch', (event) => {
  event.respondWith(redirect(event.request))
})
