# Module Development

A package is a unit added to your application for enhancement which includes routes, controllers, views, and configuration specifically. Packages are created to manage your large applications into smaller units.

[[toc]]

## Directory Structure
In Bantucms, we have created plenty of packages at path `modules/<VendorName>/<ModuleName>`. You can find a basic tree-structure of the package below:

~~~directory-structure
- modules/VendorName/ModuleName
    - Config/
        - adminhtml/
            - acl.php
            - menu.php
            - system.php
    - Console/
    - Databse/
        - factories/
        - Migrations/
        - Seeders/
    - Events/
    - Http/
        - Controllers/
            - Adminhtml/
                - IndexController.php
            - IndexController.php
        - Middleware/
        - Requests/     
    - Models/
    - Providers/
        - RouteServiceProvider.php
        - ModuleNameServiceProvider.php
    - Resources/
        - assets/
            - js/
                - app.js
            - sass/
                - app.scss
        - lang/
        - views/
            - adminhtml/index.blade.php
            - frontend/index.blade.php
    - Routes/
        - adminhtml.php
        - frontend.php
        - api.php
    - Test/
        - Feature/
        - Unit/
    - composer.json
    - module.json
    - package.json
    - webpack.mix.js
~~~

### The Config Directory
The `Config` directory, as the name implies, contains all of your application's module configuration files.
The config folder consists of:
- `adminhtml/`: In this folder, you can perform several options for the purposes of the Admin page. See what options are available in the application. 
- `/`: In the root of this folder, you can perform several options for global purposes. See what options are available in the application.

### The Console Directory
The `Console` directory contains all the Artisan commands specific to your app module. These commands can be generated using the `module:make:console` or `make:command` command. This directory also holds your console kernel, where your custom Artisan commands are registered and your scheduled tasks are defined.

### The Database Directory
The `Database` directory contains your database `migrations`, model `factories`, and `seeds`. If you wish, you may also use this directory to hold an SQLite database.

### The Events Directory
This directory does not exist by default, but will be created for you by the `module:make:events`, `event:generate`, and `make:event` Artisan commands. The Events directory houses event classes. Events may be used to alert other parts of your application that a given action has occurred, providing a great deal of flexibility and decoupling.

### The Http Directory
The `Http` directory contains your controllers, middleware, and form requests. Almost all of the logic to handle requests entering your application will be placed in this directory.
In this directory, you will find two options:
- `Controllers/Adminhtml/`: In this folder, all controllers will be used for Admin pages.
- `Controllers/`: In this folder, all controllers are used globally.

### The Models Directory
The `Models` directory contains all of your [Eloquent model classes](../modules/developments/create-models.md). The Eloquent ORM included with Bantucms provides a beautiful, simple ActiveRecord implementation for working with your database. Each database table has a corresponding "Model" which is used to interact with that table. Models allow you to query for data in your tables, as well as insert new records into the table.

### The Providers Directory
The `Providers` directory contains all of the [service providers](../modules/developments/creating-a-module.md#step-3) for your module application. Service providers bootstrap your application by binding services in the service container, registering events, or performing any other tasks to prepare your module application for incoming requests.

### The Resources Directory
The resources directory contains your views as well as your raw, un-compiled assets such as `CSS` or `JavaScript`. This directory also houses all of your `language` files.

In this folder, there are several sub-folders available:
- `assets/`: In this folder, you will find folders like `js/` and `saas/`.
- `lang/`: This is the folder for storing language resources that you can create or modify.
- `views/`: This is the folder to store all views in your module. Within this folder, there are sub-folders such as: `frontend/` for the frontend page view and `adminhtml` for the Admin page view.

::: tip
All of these resource folders are available by default if you build a module [using the module generator](../modules/developments/creating-a-module.md#using-module-generator).
:::

### The Routes Directory
The `route` directory contains all route definitions for your application.
If you build a module [using the module generator](../modules/developments/creating-a-module.md#using-module-generator) by default, some route files are included: `frontend.php`.

If you want to create routes for Admin pages, you have to create them manually with the file name `adminhtml.php`. [See the topic about the route module](../modules/developments/create-a-routes.md).

### The Test Directory
The `tests` directory contains your automated tests. Example [PHPUnit](https://phpunit.de) unit tests and feature tests are provided out of the box. Each test class should be suffixed with the word `Test`. You may run your tests using the `phpunit` or `php vendor/bin/phpunit` commands. Or, if you would like a more detailed and beautiful representation of your test results, you may run your tests using the `php artisan test` Artisan command.

## Naming Convention
Because we are autoloading the modules using [psr-0](https://www.php-fig.org/psr/psr-0/) and [psr-4](https://www.php-fig.org/psr/psr-4/), we strongly recommend using StudlyCase convention.