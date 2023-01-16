# Create Routes Module
All module routes are defined in your route file, which is located in the `modules/ACME/HelloWorld/Routes/` directory. These files must be registered by `ACME\HelloWorld\Providers\RouteServiceProvider` in your application module.

In the `modules/ACME/HelloWorld/Routes/` folder there are two files, such as:
- `adminhtml.php`
- `api.php`
- `frontend.php`

[[toc]]

## Create Route Service Provider
All your module routes must be registered in `RouteServiceProvider.php` which is located in the `modules/ACME/HelloWorld/Providers/RouteServiceProvider.php` directory.

If you can't find it, you can create a file `RouteServiceProvider.php` in `modules/ACME/HelloWorld/Providers/` and copy and paste the code below:

```php
<?php

namespace ACME\HelloWorld\Providers;

use Bantucms\Framework\App\Providers\AbstractRouteServiceProvider;
use Bantucms\Framework\App\Route\Component\Register;
use Bantucms\Framework\Component\Registrar;
use Illuminate\Routing\Router;

class RouteServiceProvider extends AbstractRouteServiceProvider
{
    /**
     * The module name to assume when generating URLs to actions.
     *
     * @var string
     */
    protected $moduleName = 'ACME_HelloWorld';

    /**
     * Define the routes for frontend.
     * 
     * @return string
     */
    protected function getFrontendRoute()
    {
        return module_path($this->moduleName, Register::FRONTEND_ROUTE);
    }

    /**
     * Define the routes for admin.
     * 
     * @return string
     */
    protected function getAdminhtmlRoute()
    {
        return module_path($this->moduleName, Registrar::ADMINHTML_ROUTE);
    }

    /**
     * Define the routes for api.
     * 
     * @return string
     */
    protected function getApiRoute()
    {
        return return module_path($this->moduleName, Registrar::API_ROUTE);;
    }
}
```
> Note: If you created the module [using the module generator](../developments/creating-a-module.md#using-module-generator), you can skip this.

### Detail Route Service Provider
|   Name  |   Type    | Required    |   Return  |   Description |
|   ------  |   ----  | :------:    |   :---:   |   :---------- |
|   $moduleName |   property  | true    |   string    |   The module name to assume when generating URLs to actions
|   getFrontendRoute()  |   method  |   optional    |   string  |   Define the routes for frontend
|   getAdminhtmlRoute() |   method  |   optional    |   string  |   Define the routes for admin
|   getApiRoute()   |   method  |   optional    |   string  |   Define the routes for api

### Register Route Service Provider
If you have defined `RouteServiceProvider.php`, don't forget to register it with your module provider in `modules/ACME/HelloWorld/Providers/HelloWorldServiceProvider.php` as follows:
```php
<?php

namespace ACME\HelloWorld\Providers;

use Illuminate\Support\ServiceProvider;

/**
* HelloWorldServiceProvider
*
* @copyright 2020 Codenom Dev. (http://www.codenom.com)
*/
class HelloWorldServiceProvider extends ServiceProvider
{
    /**
     * @var string $moduleName
     */
    protected $moduleName = 'ACME_HelloWorld';

    /**
     * @var string $moduleNameLower
     */
    protected $moduleNameLower = 'acme_helloworld';

    ...

    public function register(){
        $this->app->register(RouteServiceProvider::class);
    }

    ....
}
```

::: tip
See what [HelloWorldProvider.php](../developments/creating-a-module.md#step-3) options you can do.
:::

## Create Backend Route
If your module can be accessed on the admin page, you must create a route for your module. Here is an example of creating a route for an admin page and giving it the name `adminhtml.php`:
~~~php
<?php

use Illuminate\Routing\Router;

/** @var Router $router */
$router->get('/index', ['uses' => 'IndexController@index']);
~~~

> If you have created a route, don't forget to register the `route` in `RouteServiceProvider.php` in the module directory `ACME\HelloWorld\Providers\RouteServiceProvider.php`

You can access it in a browser with the URL: `<domain>/admin_panel/acme_helloworld/index`

::: tip
You can see the route you just registered via `php artisan route:list` in detail like: `domain`, `method`, `action`, `name`, and `middleware`.
:::

## Create Frontend Route
If your module can be accessed on the frontend page, you must create a route for your module. Here is an example of creating a route for an frontend page and giving it the name `frontend.php`:
~~~php
<?php

use Illuminate\Routing\Router;

/** @var Router $router */
$router->get('/index', ['uses' => 'IndexController@index']);
~~~

> If you have created a route, don't forget to register the `route` in `RouteServiceProvider.php` in the module directory `ACME\HelloWorld\Providers\RouteServiceProvider.php`

You can access it in a browser with the URL: `<domain>/acme_helloworld/index`

::: tip
You can see the route you just registered via `php artisan route:list` in detail like: `domain`, `method`, `action`, `name`, and `middleware`.
:::

## Basic Route
### Available Router Methods
The router allows you to register routes that respond to any HTTP verb:
```php
$router->get($uri, $callback);
$router->post($uri, $callback);
$router->put($uri, $callback);
$router->patch($uri, $callback);
$router->delete($uri, $callback);
$router->options($uri, $callback);
```

### Route Groups
Route groups allow you to share route attributes, such as middleware, across a large number of routes without needing to define those attributes on each individual route.

Nested groups attempt to intelligently "merge" attributes with their parent group.<br/>Middleware and `where` conditions are merged while names and prefixes are appended. Namespace delimiters and slashes in URI prefixes are automatically added where appropriate.

- **Middleware**<br/>
  To assign middleware to all routes within a group, you may use the middleware method before defining the group. Middleware are executed in the order they are listed in the array:
```php
$router->middleware(['first', 'second'])->group(function ($router) {
    $router->get('/', function () {
        // Uses first & second middleware...
    });
 
    $router->get('/user/profile', function () {
        // Uses first & second middleware...
    });
});
```
- **Controllers**<br/>
  If a group of routes all utilize the same controller, you may use the `controller` method to define the common controller for all of the routes within the group. Then, when defining the routes, you only need to provide the controller method that they invoke:
```php
use ACME\HelloWorld\Http\Controllers\OrderController;
 
$router->controller(OrderController::class)->group(function ($router) {
    $router->get('/orders/{id}', 'show');
    $router->post('/orders', 'store');
});
```
- **Route Prefixes**<br/>
  The prefix method may be used to prefix each route in the group with a given URI. For example, you may want to prefix all route URIs within the group with `hello_world`:
```php
$router->prefix('hello_world')->group(function ($router) {
    $router->get('/users', function () {
        // Matches The "/hello_world/users" URL
    });
});
```
- **Route Name Prefixes**<br/>
  The name method may be used to prefix each route name in the group with a given string. For example, you may want to prefix all of the grouped route's names with admin. The given string is prefixed to the route name exactly as it is specified, so we will be sure to provide the trailing . character in the prefix:
```php
$router->name('hello_world.')->group(function ($router) {
    $router->get('/users', function () {
        // Route assigned name "hello_world.users"...
    })->name('users');
});
```