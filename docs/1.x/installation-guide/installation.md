# Overview Installation
Before you install Codenom Project or Bantucms Open Source, you must do the following:
 - Set up one or more hosts that meet the [system requirements](../installation-guide/requirements.html).
 - If you are setting up more than one web node with load balancing, set up and test that part of your system before you install the application.
 - Make sure you can back up your entire system at various points during the installation so that you can roll it back if the are issues.

 ::: tip
    We assume you are installing the Codenom Project or Bantucms Open Source in a development environment, that you have root user access to the machine, and that the machine does not need to be highly secure. If you are setting up a more secure machine, we strongly recommend you consult a network administrator for additional assistance.
 :::

We strongly recommend you update and upgrade your operating system software. These upgrades can provide security and software fixes that might prevent future problems. Do not know what any of this means? Check out our [installation overview page](../installation-guide/overview.html)

## Upgrade Operation System
Enter the following commands as a user with root privileges:
 - Ubuntu
 ~~~sh
 apt-get update
 ~~~
 ~~~sh
 apt-get upgrade
 ~~~
- CentOS
~~~sh
yum -y update
~~~
~~~sh
yum -y upgrade
~~~

## Check Web Server
To check your system for prerequisites enter the following commands:

### Apache
 - CentOS: httpd-v
 - Ubuntu: apache2 -v
Codenom Project and Bantucms Open Source support Apache version 2.4 as the following result indicates:

~~~ini
Server version: Apache/2.4.0 (Unix)
Server built:   Jul 23 2017 14:17:29
~~~

To install or upgrade Apache, see [Apache](https://httpd.apache.org/docs/2.4/upgrading.html).

### PHP
See [system requirements](../installation-guide/requirements.html) for supported versions of PHP and [PHP] for PHP requirements.

### MySQL
~~~sh
mysql -u <database root user or database owner name> -p
~~~

For Example:
~~~sh
mysql -u bantucms -p
~~~

Check that you have the correct version of MySQL for the version of Codenom Project or Bantucms Open Source you are installing ([check here for supported versions](../installation-guide/requirements.html#supported-database-servers). The following result indicates the version that you are running.)

~~~ini
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 871
Server version: 5.7.9 MySQL Community Server (GPL)

Copyright (c) 2000, 2019, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.
~~~

Type help or \h for help. Type \c to clear the current input statement.
Enter exit at the mysql> prompt to exit.

To install or upgrade MySQL, see [MySQL](https://dev.mysql.com/doc/).

## Install Manualy
1. [Download Bantucms](https://bantucms.com/download/).
2. Extract the contents of the zip file.
3. Point your HTTP server to the public/ directory of the project and open it on your browser.<br/>For example: `https://example.com/`.
4.This will detect Bantucms adn start the installer.

::: warning
We do not recommend installing this manually.
::: 

## Install Via Composer
We use [Composer](https://getcomposer.org) to manage Codenom Project and Bantucms Open Source components and their dependencies.
Using Composer to get the Codenom Project and Bantucms Open Source [metapackage](../modules/) provides the following advantages:
 - Reuse third-party libraries without bundling them with source code
 - Reduce extension conflicts and compatibility issues by using a component-based architecture with robust dependency management
 - Adhere to [PHP-Framework Interoperability Group (FIG)](https://www.php-fig.org) standards
 - Repackage Bantucms Open Source with other components
 - Use the Codenom Project or Bantucms Open Source software in a production environment

::: tip
Developers contributing to Bantucms Open Source should use the git-based installation method.
:::

### Prerequisites
Before you continue, you must do the following:
 - Complete all [prerequisite tasks](../installation-guide/requirements.html).
 - [Install Composer](https://getcomposer.org/download/).

### Get the metapackage
To get the Codenom Project or Bantucms Open Source metapackage:
1. Log in to your application server as, or switch to, the file system owner.
2. Change to the web server docroot directory or a directory that you have configured as a virtual host docroot.
3. Create Composer project using the Codenom Project or Bantucms Open Source metapackage:
    ~~~sh
    composer create-project bantucms/bantucms <install-directory-name>
    ~~~
    If you encounter errors, such as Could not find _package... or ...no matching package found_, make sure that there are no typos in your command. If you still encounter errors, you may not be authorized to download Codenom Project. Contact [Codenom Project Support](https://codenom.com/contact) for help.

### Start the installation script
~~~sh
php artisan bantucms:install
~~~

### Features of above installation command
::: warning
It will check existence of the .env file, if it exists then please update the file manually with the below details.  
::: 

```
-   APP_TIMEZONE
-   APP_LOCALE
-   DB_DATABASE
-   DB_USERNAME
-   DB_PASSWORD
```

::: warning
If the .env file does not exists then it will ask to provide the details on command prompts.  

::: 
- To start the installation, provide the details of the following command prompts: 
```sh
-  Please select the default locale or press enter to continue [en]: 
-  Please enter the default timezone [Asia/Kolkata]:
-  What is the database name to be used by Bantucms?: 
-  What is your database username?:
-  What is your database password?:
```

## Start Using Bantucms
If all the configurations are correct, there are several environments that you can choose from:
1. Production Server
   Open your domain on the browser, for example: `https://example.com/`
2. Local Server
   ```sh
   php artisan serve
   ```

## Access Admin Panel
Go to `https://example.com/admin_panel/`, in case `php artisan bantucms:install` is opted, use the following credentials.
```
email: admin@example.com
password: admin123
```