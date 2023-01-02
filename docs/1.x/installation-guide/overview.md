# On-premises installation overview

The general installation flow is as follows:
1. Set up your server environment.<br/>Install the prerequisite software, including PHP, Apache/Nginx, MySQL, Composer, and the VueJS. See the [system requirements](../installation-guide/requirements.html) for more information.
2. [Sign-in account](https://bantucms.com/) for get more modules from official packages.
3. Get the Codenom Project or Bantucms Open Source software.
    - **(Recommended)** Get the [Composer metapackage](../modules) to manage modules and their dependencies.
    - If you want to contribute to the Bantucms Open Source codebase or customize application, [clone](https://github.com/bantucms/bantucms) the GitHub repository. This method requires familiarity with both GitHub and Composer.
4. Install the application using the command line.<br/>If the step fails because prerequisite software isn’t set up correctly, review the prerequisites.If the step fails because prerequisite software isn’t set up correctly, review the [prerequisites](../installation-guide/composer.html).
5. [Verify](../installation-guide/verify.html) the installation by viewing your storefront and the Admin.