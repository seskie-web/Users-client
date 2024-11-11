
<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

Technologies used: Laravel and Livewire

Why use Laravel
- Laravel is a popular PHP framework that is widely used for web application development, including building APIs.
- Elegant Syntax: Laravel is known for its clean, expressive, and readable syntax, which makes development faster and more enjoyable. This can significantly speed up the process of building APIs.
- Rich Documentation: Laravel provides comprehensive documentation, making it easy for developers to get started and find solutions to issues quickly.
- API Authentication: Laravel provides easy-to-use authentication systems, including options like Laravel Passport (OAuth2) for API authentication or Laravel Sanctum for simpler token-based authentication. This makes securing your API endpoints straightforward.
- CSRF Protection: Laravel automatically protects your app from Cross-Site Request Forgery (CSRF) attacks, though this is mostly for web applications, it still can be relevant for certain API interactions, especially if your API supports browser-based requests.
- Input Validation & Sanitization: Laravel offers powerful validation mechanisms to ensure that incoming API requests are properly validated, reducing the risk of malicious inputs.
- Laravel is designed with RESTful principles in mind, making it easy to define routes that correspond to CRUD operations (Create, Read, Update, Delete) for your API.
- You can define simple routes for each HTTP method (GET, POST, PUT, DELETE) in a way that is easy to understand and implement.
- Eloquent ORM: Laravel's Eloquent ORM (Object-Relational Mapping) is a powerful tool for interacting with databases. It simplifies database queries and relationships, making it easy to interact with your data models.
- Middleware: Laravel includes middleware for handling cross-cutting concerns, such as authentication, authorization, and logging. This is useful for API endpoints where you might want to apply global filters or authentication checks.

Why use Livewire
- Livewire is a full-stack framework for Laravel that makes building dynamic interfaces simple, without leaving the comfort of Laravel.
- Livewire allows Laravel developers to write front-end code in PHP, which is then compiled into JavaScript and HTML. This means that developers can create interactive, real-time user interfaces without the need for complex JavaScript frameworks. This tight integration results in cleaner code, easier maintenance, and a more streamlined development process.

To setup the project simply follow steps below:
- Clone or download the repo : https://github.com/seskie-web/Users-client.git
- Rename .env.example to .env
- Update the database connection string on the renamed .env file to point to your local db
- e.g 
    - DB_CONNECTION=mysql
    - DB_HOST=127.0.0.1
    - DB_PORT=3306
    - DB_DATABASE=tasks
    - DB_USERNAME=seskie  
    - DB_PASSWORD=seskiev
- Run command: composer update to download the needed packages by the framework
- Run command: npm install to install node modules
- Set permissions on the project to 755 or 777 since it's a local project, for detailed instructions please refer to: https://www.hostinger.com/tutorials/how-to-install-laravel-on-ubuntu
- Run command: php artisan migrate to run the database migrations, the migration command will create some default tables needed by laravel to run properly, the database migration files can be found on appname/database/migrations/
- Run command: php artisan serve to start the client server or setup apache vhost e.g https://phoenixnap.com/kb/how-to-set-up-apache-virtual-hosts-ubuntu


