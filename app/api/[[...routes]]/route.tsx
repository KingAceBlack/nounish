/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/', (c) => {



  return c.res({

    
    image : 'https://gateway.pinata.cloud/ipfs/QmQYGQD4LxtDW4Xnkgf2kHR2A9YjdoJjFQssZEzQJYhiLE',
  
    
    intents: [
     
      <Button action="/intro">Retro Cam View</Button>,
     
    ],
  }) 

});


app.frame('/intro', (c) => {


  return c.res({

    
    image : 'https://gateway.pinata.cloud/ipfs/Qmb4JgXWCjVpxdTFuwXPYhv1g1Aqa4fCpfJvJVDrSxuD1x',
  
    
    intents: [
     
      <Button action="/">Back</Button>,
     
    ],
  }) 

});

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
