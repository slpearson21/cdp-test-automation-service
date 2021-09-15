# Tiered Application Structure

The structure of this service is broken down into 3 parts

## Key Directories

### /src/app

Your business logic, validation logic, and model definitions as the apply to the business should live here.

#### /src/app/actions

The logic that makes your service important lives here. JavaScript files defined in this directory will represent a single unit of business logic. The JavaScript files that are defined in the `/src/app` should follow the following structure.

```JavaScript

module.exports = (dependencyContext) => (actionParams) => {
  /*
   * your code
   */
}

```

### /src/apis

This is where your client logic lives. If you are building a rest service, all rest related logic will be nested within this directory. Alternatively, if you're creating a graphql client, this is where that will live.

In your client you will create a dependency container that will be used to handle client requests.

### /src/external

This is where all logic required to interact with external resources will live. Database, event bus, logging infrastructure, it will all live here. The structure of these files should look like either of these examples:

#### Single Function Export

```JavaScript

module.exports = (dependencyContext) => (params) => {
  /*
   * your code
   */
}

```

#### Multiple Function Export

```JavaScript

module.exports = (dependencyContext) => ({
  function1: (params)=>{
    /*
     * your code
     */
  },
  function2: (params)=>{
    /*
     * more of your code
     */
  }
  
})

```

## The Glue That Joins Them

This project uses a dependency injection library that creates a single context object that is provided to each JavaScript file in your `/src/app/actions`, and `/src/external` directories. Dependency lifecycles are singleton by default, but can be configured in `/src/main.js`. This file should only include dependency injection configuration.
