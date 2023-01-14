# Store Data Through Repository
[[toc]]

## Contract
Laravel's Contracts are a set of interfaces that define the core services provided by the framework. For example, an `Illuminate\Contracts\Queue\Queue` contract defines the methods needed for queueing jobs, while the `Illuminate\Contracts\Mail\Mailer` contract defines the methods needed for sending an e-mail.

Each contract has a corresponding implementation provided by the framework. For example, Laravel provides a queue implementation with a variety of drivers, and a mailer implementation that is powered by SwiftMailer.

All of the Laravel contracts live in their own GitHub repository. This provides a quick reference point for all available contracts, as well as a single, decoupled package that may be utilized by package developers.

### Create Contract
- You have to understand the [folder structure in the module](../README.md#directory-structure)
::: tip
If you do not find the `Contracts` folder in the root of your module, you can create a `Contracts` folder first
:::
The `Contracts` folder structure in your module:
~~~directory-structure
- modules/
    - ACME/HelloWorld/
        ...
        - Contracts/
        ...
~~~
- Now, create an interface file named as `HelloWorld.php`
```php
<?php

namespace ACME\HelloWorld\Contracts;

interface HelloWorld
{
}
```
::: tip
The contract file allows you to modify file names like: `HelloWorld.php`, `HelloWorldInterface.php`, and `HelloWorldContract.php`
:::
::: warning
**DO NOT** use the file names `HelloWorldModel.php`, and `HelloWorldRepository.php`. The file name will be the same as the Model and Repository name. See the topic [Naming Conventions for details](../../coding-standards/php.md).
:::

## Repositories
Generally, we wrote all of our application logic in the controller. There’s an alternative approach of development that abstracts some calls into PHP classes called Repositories. The idea is that we can decouple models from controllers and assign a readable name's to complicated queries.

This file defines our Repository class. Instances of this class have a model property that we tie to an Eloquent model. Once this is bound in the constructor we can call Eloquent methods like findOrFail, update or all from the class methods.

### Create Repositories
- You have to understand the [folder structure in the module](../README.md#directory-structure)
::: tip
If you do not find the `Repository` folder in the root of your module, you can create a `Repository` folder first
:::
The `Repository` folder structure in your module:
~~~directory-structure
- modules/
    - ACME/HelloWorld/
        ...
        - Repository/
        ...
~~~
- Now, create a file `HelloWorldRepository.php` and create the `model()` method in repository class which returns the path of your contract class:
```php
<?php

namespace ACME\HelloWorld\Repositories;

use Bantucms\Framework\App\Eloquent\AbstractRepository;

class HelloWorldRepository extends AbstractRepository
{
    /**
    * Specify Model class name
    *
    * @return mixed
    */
    function model()
    {
        return 'ACME/HelloWorld/Contracts/HelloWorld';
    }
}
```
::: warning
**DO NOT** use the file names `HelloWorldModel.php`, and `HelloWorldContract.php`. The file name will be the same as the Model and Contract name. See the topic [Naming Conventions for details](../../coding-standards/php.md).
:::

## Binding Interfaces To Implementations
A very powerful feature of the service container is its ability to bind an interface to a given implementation. [More information about bindings, see the official information](https://laravel.com/docs/8.x/container#binding-interfaces-to-implementations).

### Register Binding
After creating all the files stated above, we have to modified a provider as `HelloWorldServiceProvider.php`. In this file, models which are used in this package are registered. You may check below code:

```php
<?php

namespace ACME\HelloWorld\Providers;

use Illuminate\Support\ServiceProvider;
use ACME\HelloWorld\Contracts\HelloWorld as HelloWorldContract;
use ACME\HelloWorld\Models\HelloWorldModel;

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

    /**
    * Register services.
    *
    * @return void
    */
    public function register()
    {
        $this->app->bind(
            HelloWorldContract::clas,
            HelloWorldModel::class
        );
    }
}
```
