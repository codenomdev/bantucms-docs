# Introduction
Codenom Project or Bantucms Open Source uses the Laravel Framework for backend developers, we take advantage of the Eloquent feature as an object-relational mapper (ORM) that makes it enjoyable to interact with your database. When using Eloquent, each database table has a corresponding "Model" that is used to interact with that table. In addition to retrieving records from the database table, Eloquent models allow you to insert, update, and delete records from the table as well.

[[toc]]

## Using Module Generator
This command will create a new model class in `modules/ACME/HelloWorld/Models` directory.

Generate the given model for the specified module.
~~~php
php artisan module:make:models HelloWorldModel ACME_HelloWorld
~~~
Replace `ACME` by your company/organization name.
Replace `HelloWorld` by your desired name.

Optional options:
 - `--fillable=field1,field2`: set the fillale fields on the generated model.
 - `--migration`, `-m`: create the migration file for the given model
 - `--help`: for detail specified options.

## Using Laravel Generator
Models typically live in the app directory, but you are free to place them anywhere that can be auto-loaded according to your composer.json file. All Eloquent models extend `Illuminate\Database\Eloquent\Model` class.

The simple way to create a model is executing the command `make:model` artisan command,

~~~php
php artisan make:model User
~~~

After creating model, to generate database migration, you may append `--migration` or `-m` option artisan command as stated below,

~~~php
php artisan make:model User --migration
~~~
~~~php
php artisan make:model User -m
~~~

## Using Manually
Maybe there are several possible factors so you choose to make it manually.<br/> If you want to continue, please follow the steps below:
1. You have to understand the [folder structure in the module](../README.md#directory-structure)
2. Create a file `HelloWorldModel.php` in the `modules/ACME/HelloWorld/Models` folder then write the code below:
~~~php
<?php

namespace ACME\HelloWorld\Models;

use Illuminate\Database\Eloquent\Model;
use ACME\HelloWorld\Contracts\HelloWorld as HelloWorldContract;

class HelloWorldModel extends Model implements HelloWorldContract{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = '';

    /**
     * @inheritdoc
     */
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [];

    ...
}
~~~
For more information about Eloquent, you can visit about [Eloquent on the official Laravel Framework](https://laravel.com/docs/8.x/eloquent).

::: tip
You can see `HelloWorldContract` in the [Store Data Repository](../developments/store-data-through-repositories.md#contract).
:::

3. Done, you have successfully created the model manually and are ready to use.