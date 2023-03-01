# Creating a Module
There are two ways to create a module.
1. [By using Module Generator](../developments/creating-a-module.md#using-module-generator) **(Recommended)**
2. [By manually setting up all files](../developments/creating-a-module.md#using-module-manually) **(Expert Level)**

## Using Module Generator
- Creating a module is simple and straightforward. Run the following command to create a module.
```php
php artisan module:make <VendorName>_<ModuleName>
```
Replace `<VendorName>` by your company/organization name.<br/>
Replace `<ModuleName>` by your desired name.

- It is also possible to create multiple modules in one command.
```php
php artisan module:make <VendorName>_<ModuleNameOne> <VendorName>_<ModuleNameTwo> <VendorName>_<ModuleNameThree>
```
By default when you create a new module, the command will add some resources like a controller, seed class, service provider, etc. automatically. If you don't want these, you can add `--plain` flag, to generate a plain module.
```php
php artisan module:make <VendorName>_<ModuleName> --plain
# or
php artisan module:make <VendorName>_<ModuleName> -p
```
::: tip
Now start creating something cool
:::

## Using Module Manually
By manually setting up module, we assume that you are familiar with modules directory structures and flow.

If not then you can find a [basic tree structure of module](../README.md#directory-structure)
Let's start with first step by creating the modules folder.

### Step-1
In `modules` folder, create a folder with your company name and inside that create a folder with your module name. Let's say `ACME/HelloWorld`. So, your basic structure will look like this,
~~~directory-structure
- modules/
    - ACME/HelloWord/
~~~

### Step-2
In your module folder, this is the place where you need to put all your files related to your module. Now, your updated structure will look like this, [see folder structure module](../README.md#directory-structure).

### Step-3
- In `module` folder, create a folder named as Providers and inside that folder, create a file named as `ModulenameServiceProvider.php`. Let's say `HelloWorldServiceProvider.php`

::: tip
If you want to do this with the Module Generator then you need to type the following command, it will generate the service provider for you.
```php
php artisan module:make:provider HelloWorldServiceProvider ACME_HelloWorld
```
If somehow the file already exists then you can use `--force` to overwrite the file.
:::

- Copy the below code and paste it in `HelloWorldServiceProvider.php`:
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

    /**
    * Bootstrap services.
    *
    * @return void
    */
    public function boot()
    {

    }

    /**
    * Register services.
    *
    * @return void
    */
    public function register()
    {

    }
}
```

### Step-4
Update the module information in the `module.json` and `composer.json` files located in the root of your module folder, as follows:
#### module.json
```json
{
    "name": "ACME_HelloWorld",
    "alias": "acme_helloworld",
    "description": "",
    "keywords": [],
    "priority": 0,
    "providers": [
        "ACME\\HelloWorld\\Providers\\HelloWorldServiceProvider"
    ],
    "aliases": {},
    "files": [],
    "requires": []
}

```
If the `module.json` file in your module root folder doesn't exist, you can create one first

::: tip
You can provide detailed information about your module such as: `name`, `alias`, `description`, `keywords`, `priority`, `providers`, `aliases`, `files`, `requires`.
:::
#### composer.json
```json
{
    "name": "acme/helloworld",
    "authors": [
        {
            "name": "Your name of company or organization",
            "email": "email@example.com"
        }
    ],
    "extra": {
        "laravel": {
            "providers": [
                "ACME\\HelloWorld\\Providers\\HelloWorldServiceProvider"
            ],
            "aliases": {

            }
        }
    },
    "autoload": {
        "psr-4": {
            "ACME\\HelloWorld\\": ""
        }
    }
}

```
::: tip
See [basic usage composer.json](https://getcomposer.org/doc/01-basic-usage.md)
:::

### Step-5
Done, your module is successfully created. You can see the steps in more detail.
