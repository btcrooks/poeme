[![Netlify Status](https://api.netlify.com/api/v1/badges/19c183da-ef99-40dc-b95d-311227052368/deploy-status)](https://app.netlify.com/sites/focused-williams-5cfe47/deploys)

# Poéme  
Serverless function demo  

## Concepts
- Weighted random responses
- accept a header for strict mode  
    - strict mode enabled: e.g. keys with no value will throw error
    - strict mode disabled: rules are lax... e.g. keys with no value will be ignored
- if more than n responses are returned, show message.

Get a random random:
/functions/poem

/functions/set
/functions/get
/functions/delete
/functions/edit