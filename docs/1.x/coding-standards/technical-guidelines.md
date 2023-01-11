# Technical Guidelines
**Core developers use this document as a reference during code reviews; some rules have corresponding code checks in the static tests.**

These guidelines came from many years of hard work, experience, and discussions. We strongly believe that new technical initiatives should follow these recommendations, and the existing code should be improved to meet them.

## Text Conventions
Use [RFC2119](https://www.rfc-editor.org/rfc/rfc2119) to interpret keywords like:
- MUST and MUST NOT
- REQUIRED
- SHALL and SHALL NOT
- SHOULD and SHOULD NOT
- RECOMMENDED
- MAY
- OPTIONAL

## Basic Programming Principles
- Function arguments SHOULD NOT be modified.
- Explicit return types MUST BE declared on functions.
- Type hints for scalar arguments SHOULD be used.
- All new PHP files MUST have strict type mode enabled by starting with `declare(strict_types=1)`;. All updated PHP files SHOULD have strict type mode enabled. PHP interfaces MAY have this declaration.

## Class Design
- Object decomposition MUST follow the [SOLID principles](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)).
- Object instantiation.
- An object MUST be ready for use after instantiation. No additional public initialization methods are allowed.
- Class constructor can have only dependency assignment operations and/or argument validation operations. No other operations are allowed.
- Constructor SHOULD throw an exception when validation of an argument has failed.
- Events MUST NOT be triggered in constructors.
- All dependencies MUST be requested by the most generic type that is required by the client object.
- Proxies and interceptors MUST NEVER be explicitly requested in constructors.
- Inheritance SHOULD NOT be used. Composition SHOULD be used for code reuse.
- All non-public properties and methods SHOULD be private.
- Method chaining in class design MUST be avoided.
- Patterns.

## Security
- Use prepared statements for SQL queries.
- Broken Authentication protection.
- Where possible, implement multi-factor authentication to prevent automated, credential stuffing, brute force, and stolen credential re-use attacks.
- Do not ship or deploy with any default credentials, particularly for admin users.
- Implement weak-password checks, such as testing new or changed passwords against a list of the [top 10000 worst passwords](https://github.com/danielmiessler/SecLists/tree/master/Passwords).
- Align password length, complexity, and rotation policies with [NIST 800-63 B's guidelines in section 5.1.1 for Memorized Secrets](https://pages.nist.gov/800-63-3/sp800-63b.html#memsecret) or other modern, evidence-based password policies.
- Ensure registration, credential recovery, and API pathways are hardened against account enumeration attacks by using the same messages for all outcomes.
- Limit or increasingly delay failed login attempts. Log all failures and alert administrators when credential stuffing, brute force, or other attacks are detected.
- Use a server-side, secure, built-in session manager that generates a new random session ID with high entropy after login. Session IDs should not be in the URL, be securely stored and invalidated after logout, idle, and absolute timeouts.
- Cross-Site Scripting (XSS) protection.
- Sanitize input; escape output.
- Follow [XSS prevention strategies guidelines](../development/security/cross-site-scripting.md) for escaping output.
- Incoming data should be casted to the expected type. String data should be validated/sanitized.
- Incoming string data length should be checked.
- Special characters, like null byte characters, should be dropped from Incoming string data.
- A module that introduces Admin Panel functionality should have ACL.
- Misconfiguration protection.
- Do not include/require unused libraries/frameworks.
- A segmented application architecture that provides effective, secure separation between components or tenants, with segmentation, containerization, or cloud security groups (ACLs).
- Sending security directives to clients, e.g. [Security Headers](https://owasp.org/www-project-secure-headers/).
- Sensitive Data Exposure protection.
- Exceptions/Notices/Warnings should be caught and logged.
- Error output should not be displayed to the user. Display standard messages to inform the user.
- Logs should not be excessive, e.g. PDO exception contains MySQL credentials that should not be logged.
- Cross-Site Request Forgery (CSRF) protection.
- CSRF tokens mechanism should be utilized.
- All data manipulation requests should be made with POST requests.
- Frequently update third-party libraries used in the project/component to eliminate known vulnerabilities.
- Local File Inclusion (LFI) protection.
- User-submitted requests containing path and file name SHOULD NOT be trusted.
- User-submitted path and file values SHOULD be sanitized to remove dot-dot-slash from the request.
- Remote Code Execution (RCE) protection.
- `eval()`, `passthru()`, `system()`, `shell_exec()`, `serialize()`, `unserialize()`, `md5()`, `srand()`, `mt_srand()` SHOULD NOT be used.
- User-submitted values SHOULD NOT be passed directly to `include*()`, `require*()`, `create_function()`, `fopen()`, `preg_replace()`.
- Variable functions SHOULD NOT be used if the variable values are submitted by the user.
- Security capabilities SHOULD be implemented either on the Magento Framework level or in a dedicated module(s) and utilized by the entire application in a centralize manner.
- Files MUST be secured by a web server configuration (e.g., `.htaccess` or `nginx.conf`), except files that are intended to be publicly accessible.
- Presentation layer classes that access user input directly MUST NOT assume it has been validated.

## Cron
Cron job SHOULD be an [idempotent method](https://tools.ietf.org/html/rfc7231#section-4.2.2).

## Services
New features with limited customization scenarios SHOULD be implemented as a thin extension that will communicate to a service that contains business logic. This allows developers to release features independently of Magento and makes feature upgrades easier.