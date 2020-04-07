# Server Aritecture

## Data layer

The data layer is implemented using repositories that hide the underlying data sources (database, network, cache, etc.) and provide abstraction above them, so that other parts of the application that use repositories do not care about the origin of the data and are separated from specific implementations used, such as the Mongoose ORM (MongoDb), which is used by this application. In addition, repositories are responsible for mapping the entities they choose from data sources to the models used in the applications. This is important for reducing connectivity.

## Domain layer

The domain layer is implemented using services. They depend on the repository interfaces to obtain application models and apply business rules to them. They are not related to a specific database implementation and can be reused if we add more data sources to the application or even if we change the database, for example from MongoDB to Postgres.

## Router/controller layer

This layer is used in the `Express` application and depends on the domain layer(s). Here we define the routes that can be called from the outside. Services are always used as the last `middleware` in routes, and we should not rely on `res.locals` from `Express` to get data from previous middleware. This means that `middleware` registered earlier must not change the data transmitted to the domain level. They are only allowed to affect the data without changes, e.g. data validation and `next()`call skip.

## Entry point

The entry point for applications is the file `server.ts`. It is responsible for creating application layer instances, connecting to the database, connecting the http server to a specified port, and processing signals to complete the work correctly.
