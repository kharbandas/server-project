// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '3uyp70uykd'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'kharbanda.sonvi.auth0.com',            // Auth0 domain
  clientId: 'j5YpiIoJGsFtgU2A20Ey9Db6K9CgssPR',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
