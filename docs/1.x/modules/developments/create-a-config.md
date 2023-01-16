# Create a Config Module
[[toc]]

## Register Config
Before adding some configurations to your module, you are required to register via the module provider, i.e `HelloWorldServiceProvider.php`:
~~~php
    ...
    /**
     * Boot the application events.
     *
     * @return void
     */
    public function boot(){
        $this->registerConfig();
    }

    /**
     * Register config.
     *
     * @return void
     */
    protected function registerConfig(){
        ...
    }
    ...
~~~

## Create Menu In Admin
### Create Menu File
In your module's source directory i.e. `modules/ACME/HelloWorld/`, create the `Config/adminhtml/` folder and create a file named `menu.php`.

```php
<?php

return [
    [
      'key'        => 'acme_helloworld',
      'name'       => 'Hello World',
      'route'      => 'acme_helloworld.adminhtml.index',
      'sort'       => 1,
      'icon-class' => 'dashboard-icon',
    ]
];

```

### Menu Detail Table
In this file, we provide the name of the menu, route & its icon.

| Params     | Description                                         |
| ---------- | --------------------------------------------------- |
| key        | Unique key for menu icon.                           |
| name       | Name of menu icon.                                  |
| route      | Route name for your menu icon.                      |
| sort       | Sort number on which your menu icon should display. |
| icon-class | Class for menu icon.                                |

### Menu Route Name Specified
For the route, just add the named route which specified above i.e. `acme_helloworld.adminhtml.index`:
~~~php
$router->get('/index', ['as'=>'index', 'uses' => 'IndexController@index']);
~~~
See details about [routes and how they work in Adminhtml](../developments/create-a-routes.md).
::: tip
The route name must be available in the route list. See the active routes list table
:::

### Register Menu
After that, we need to merge this `menu.php` folder with a core menu file. For this, we use the method `MergeConfigForm()` in the register method of the service provider.
~~~php
use use Bantucms\Framework\Component\Registrar;
...
    $this->mergeConfigFrom(
            module_path($this->moduleName, 'Config/adminhtml/menu.php'),
            Registrar::ADMINHTML_MENU
    );
...
~~~
Add the above function to the method between `protected registerConfig(){}`, [see register config details](../developments/create-a-config.md#register-config).

::: tip
Now, the menu will display in the admin panel. You can change the icon according to your needs.
:::

## Create Access Control List (ACL)
In addition to providing authentication services out of the box, Codenom Project or Bantucms Open Source. also provides a functionality ACL (Access Control List).

With this feature the administrator can allow/disallow other users to access parts of Codenom Project or Bantucms Open Source.

### Create ACL file
Create a new file named `acl.php` in your module Config folder, for example, `modules/ACME/HelloWorld/Config/adminhtml` and add the following code.
~~~php
<?php

return [
    [
        'key' => 'helloworld',
        'name' => 'HelloWorld',
        'route' => 'helloworld.adminhtml.index',
        'sort' => 2
    ]
];
~~~
If you check the above code we have created an array for an individual's menu with the parameters (key, name, route & sort).<br/>
Just like that, we need to define the menu here which we want to include in our ACL.

### Register ACL
After that, we need to merge the ACL config also just like we have done with menu items,
~~~php
use Bantucms\Framework\Component\Registrar;
...
    $this->mergeConfigFrom(
        dirname(__DIR__) . '/Config/adminhtml/acl.php', Registrar::ADMINHTML_ACL
    );
...
~~~
Add the above function to the method between `protected registerConfig(){}`, [see register config details](../developments/create-a-config.md#register-config).

::: tip
Now check the latest ACL.
:::

### Checking Roles and Permissions
If you check the `Admin` model in the namespace `Bantucms\Backend\Entities`, you will see the relationship binding with the `Role` model in the same namespace. From here you can grab all the permissions of the current user.

We have provided the `bouncer()` helper, which helps you to check the permissions. Let's check the current user has permission or not,

~~~php
bouncer()->hasPermission($permission)
~~~

## Create Custom Configuration
Creating a custom configuration ease the task for a developer or any non-developer person. Generally, in Codenom Project or Bantucms Open Source, you can find it in admin panel **Configuration Menu**.

### Create Custom Configuration File
To create a custom configuration for your application, you just need to create a `system.php` file in the Config folder of your module.

Inside the file, you can include the code below,
~~~php
<?php

return [
    [
        'key' => 'helloworld',
        'name' => 'Hello World',
        'sort' => 1
    ], [
        'key' => 'helloworld.settings',
        'name' => 'Custom Settings',
        'sort' => 1,
    ], [
        'key' => 'helloworld.settings.settings',
        'name' => 'Custom Groupings',
        'sort' => 1,
        'fields' => [
            [
                'name' => 'status',
                'title' => 'Status',
                'type' => 'boolean',
                'channel_based' => true,
                'locale_based' => false
            ]
        ]
    ]
];
~~~

### Custom Configuration Detail Table
| Params     | Description                                         |
| ---------- | --------------------------------------------------- |
| key        | This key accept the unique value and nested with '.' (dot) operator.                           |
| name       | This key accept the value as a placeholder for your configuration. Generally, in Bantucms, we consider writing it using translation.                                 |
| sort       | This key accept the sort position for the configuration menu. |
| fields | This key accept the array for the value of the custom configuration.                                |
| tab_active | This tab panel will be default open if `true` or close if `false`.                                |

### Register Custom Configuration
After that, we need to merge this `system.php` folder with a core system file. For this, we use the method MergeConfigForm() in the register method of the service provider.
~~~php
use use Bantucms\Framework\Component\Registrar;
...
    $this->mergeConfigFrom(
        module_path($this->moduleName, 'Config/adminhtml/system.php'),
        Registrar::ADMINHTML_SYSTEM
    );
...
~~~
Add the above function to the method between `protected registerConfig(){}`, [see register config details](../developments/create-a-config.md#register-config).