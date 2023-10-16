### How to use vercel envs with cli

First thing first we need to login with `vercel login`

after it we need to import our env variables from vercel dashboard

after we import our variables now we can use them with `vercel env pull --environment=${environment}` vercel provides 3 default environments `development` `production` and `preview`