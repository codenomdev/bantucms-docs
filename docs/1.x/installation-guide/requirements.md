# System Requirements
Before installing Bantucms, make sure the server meets the following requirements:

## Server configuration

- **SERVER**: Apache 2 or NGINX
- **RAM**: 4GB or higher
- **Node**: 8.11.3 LTS or higher
- **PHP**: 7.4 or higher
- **Composer**: 1.6.5 or higher

::: tip
If you use Nginx, you can see the [Nginx configuration in more details](../installation-guide/server-configuration.md#nginx).
:::

## PHP Extensions

Make sure the following extensions are installed and enabled. You can check using the `phpinfo()` page or the `php -m` command.

- PHP >= 7.3
- BCMath PHP Extension
- Ctype PHP Extension
- Fileinfo PHP Extension
- JSON PHP Extension
- Mbstring PHP Extension
- OpenSSL PHP Extension
- PDO PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension
- php-intl extension
- php-gd extension

::: tip
  You must install the `php-gd` extension properly otherwise, the image does not work properly in the project.
:::

## PHP Configuration

Open your php configuration file **php.ini** and change the following settings.  

  ~~~ini
  memory_limit = 4G
  max_execution_time = 360
  date.timezone = Europe/Brussels <- Change this to your own timezone.
  ~~~

::: tip Restart your web server
  Whenever you make changes to the PHP configuration file, you must restart Apache or NGINX.
:::

## Supported Database Servers

- **MySQL**: 5.7.23 or higher
- **MariaDB**: 10.2.7 or higher

## Mail Server
Mail Transfer Agent (MTA) or an SMTP server.