# Module Development

A package is a unit added to your application for enhancement which includes routes, controllers, views, and configuration specifically. Packages are created to manage your large applications into smaller units.

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
    - Entities/
    - Http/
        - Controllers/
            - Adminhtml/
                - IndexController.php
            - IndexController.php
        - Middleware/
        - Requests/     
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

## Naming Convention
Because we are autoloading the modules using [psr-0](https://www.php-fig.org/psr/psr-0/) and [psr-4](https://www.php-fig.org/psr/psr-4/), we strongly recommend using StudlyCase convention.