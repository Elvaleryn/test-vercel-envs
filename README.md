### How to use vercel envs with cli

First thing first we need to login with `vercel login`

after it we need to import our env variables from vercel dashboard

after we import our variables now we can use them with `vercel env pull --environment=${environment}` vercel provides 3 default environments `development` `production` and `preview`


### WORK FLOW

Preview & Develop => dev branch (Testnet envs)

Free account app (staging as prod branch) => staging branch (mainnet envs)

Main => Prod (Mainnet envs)

### External test app (Unity games)

Free account app (unity-games as prod branch) => mainnet envs




