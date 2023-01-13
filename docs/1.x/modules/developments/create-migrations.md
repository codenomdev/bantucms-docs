# Create Migrations Module
You can create migration in two ways,

1. [By using Module Generator](../developments/create-migrations.md#using-module-generator).
2. [By normal laravel command and then manually copy to the respective folder](../developments/create-migrations.md#using-laravel-command).

## Using Module Generator
This command will create a new migration class in `modules/ACME/HelloWorld/Database/Migrations` directory.
```php
php artisan module:make:migration CreateUsersTable ACME_HelloWorld
```

## Using Laravel Command
By normal laravel command and then manually copy to the respective folder.<br/>

To create a migration, use the `make:migration` artisan command:
```php
php artisan make:migration create_users_table
```

The new migration will be placed in your `database/migrations` directory. Each migration file name contains a timestamp which allows Laravel to determine the order of the migrations.

The `--table` and `--create` options may also be used to indicate the name of the table and whether the migration will be creating a new table.

You may also specify a `--path` option when creating the migration. The path should be relative to the root directory of your installation:
```php
php artisan make:migration create_demo_table --path=modules/ACME/HelloWorld/Database/Migrations
```

## Register Migrations Module
After you create a migration in your module, Migration must be registered via the module provider:
```php
...
    public function boot(){
        ...
        $this->loadMigrationsFrom(module_path($this->moduleName, 'Database/Migrations'));
        ...
    }
...
```
::: tip
Migration registration should be in `boot` service provider.
:::
::: warning
We **DO NOT** recommend registering migrations other than within the `boot` function
:::