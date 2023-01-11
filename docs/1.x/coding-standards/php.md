# PHP Coding Standard
**Bantucms** is a CMS framework built on top of the hottest opensource technologies such as [Laravel](https://laravel.com/), a [PHP](https://php.net/) framework and [Vue.js](https://vuejs.org/), a progressive Javascript framework.
We recommend that developers who create extensions and customizations also use this standard.

The Codenom Project or Bantucms Open Source Coding Standard provides a set of rules that covers the following:
 - [PSR-0](https://www.php-fig.org/psr/psr-0/), [PSR-1](https://www.php-fig.org/psr/psr-1/), [PSR-2](https://www.php-fig.org/psr/psr-2/), [PSR-3](https://www.php-fig.org/psr/psr-3/), and [PSR-4](https://www.php-fig.org/psr/psr-4/) compliance
 - The use of insecure functions
 - Unescaped output
 - The use of deprecated PHP functions
 - PHP code syntax
 - Naming convention
 - The use of PHP superglobals
 - Business logic should be in service class
 - Prefer to use Eloquent over using Query Builder and raw SQL queries. Prefer collections over arrays
 - Comment your code, but prefer descriptive method and variable names over comments
 - Mode "production" do not get data from the ".env"-file directly

 ## Naming Conventions
 Follow Laravel naming conventions accepted by Laravel Community
 |  Name    |   Type    |   Good    |   Bad   |
 |  ----    |   :--:    |   :--:    |   ---:  |
 |  Controller  |   singular    |   ArticleController   |   ArticlesController  |
 |  Route   |   plural  |   articles/1  |   article/1   |
 |  Named route |   snake_case with dot notation    |   users.show_active   |   users.show-active, show-active-users    |
 |  Model/Entities  |   singular    |   User    |   Users   |
 |  hasOne or belongsTo relationship    |   singular    |   articleComment  |   articleComments, article_comment    |
 |  All other relationships |   plural  |   articleComments |   articleComment, article_comments    |
 |  Table   |   plural  |   article_comments    |   article_comment, articleComments    |
 |  Pivot table |   singular model names in alphabetical order  |   article_user    |   user_article, articles_users    |
 |  Table column    |   snake_case without model name   |   meta_title  |MetaTitle; article_meta_title  |
 |  Foreign key |   singular model name with _id suffix |   article_id	|   ArticleId, id_article, articles_id  |
 |  Primary key |   -   |   id  |   custom_id   |
 |  Migration   |   -	|   2017_01_01_000000_create_articles_table |   2017_01_01_000000_articles  |
 |  Method  |   camelCase   |   getAll  |   get_all |
 |  Function    |   snake_case  |   abort_if    |   abortIf |
 |  Method in resource controller   |   -	|   store	|   saveArticle |
|   Method in test class	|   camelCase	|   testGuestCannotSeeArticle   |	test_guest_cannot_see_article   |
|   Model property  |   snake_case  |   $model->model_property  |   $model->modelProperty   |
|   Variable	|   camelCase	|   $anyOtherVariable	|   $any_other_variable |
|   Collection	|   descriptive, plural |	$activeUsers = User::active()->get()	|   $active, $data  |
|   Object	|   descriptive, singular	|   $activeUser = User::active()->first()   |	$users, $obj    |
|   Config and language files index |	snake_case	|   articles_enabled    |	ArticlesEnabled; articles-enabled   |
View    |   kebab-case |   show-filtered.blade.php |  showFiltered.blade.php, show_filtered.blade.php   |
Config  |   kebab-case   | google-calendar.php   |  googleCalendar.php, google_calendar.php |
Contract (interface)    |   adjective or noun  |   Authenticatable  | AuthenticationInterface, IAuthentication  |
Trait   |   adjective |    Notifiable  |   NotificationTrait    |

## Shorter and More Readable
Use shorter and more readable syntax where possible

**BAD:**
```php
$request->session()->get('cart');
    $request->input('name');
```

**GOOD:**
```php
session('cart');
    $request->name;
```

|   Common syntax   |   Shorter and more readable syntax    |
|   -------------   |   -------------------------------:    |
Session::get('cart')    |   session('cart') |
$request->session()->get('cart')    |   session('cart') |
Session::put('cart', $data) |   session(['cart' => $data])  |
$request->input('name'), Request::get('name')   |   $request->name, request('name') |
return Redirect::back() |   return back()   |
is_null($object->relation) ? $object->relation->id : null } |   optional($object->relation)->id |
return view('index')->with('title', $title)->with('client', $client)    |   return view('index', compact('title', 'client'))    |
$request->has('value') ? $request->value : 'default';   |   $request->get('value', 'default')   |
Carbon::now(), Carbon::today()  |   now(), today()  |
App::make('Class')  |   app('Class')    |
->where('column', '=', 1)   |   ->where('column', 1)    |
->orderBy('created_at', 'desc') |   ->latest()  |
->orderBy('age', 'desc')    |   ->latest('age') |
->orderBy('created_at', 'asc')  |   ->oldest()  |
->select('id', 'name')->get()   |   ->get(['id', 'name'])   |
->first()->name |   ->value('name') |

## Single Responsibility Principle
A class and a method should have only one responsibility.

**BAD:**
```php
    public function getFullNameAttribute()
    {
        if (auth()->user() && auth()->user()->hasRole('client') && auth()->user()->isVerified()) {
            return 'Mr. ' . $this->first_name . ' ' . $this->middle_name . ' ' . $this->last_name;
        } else {
            return $this->first_name[0] . '. ' . $this->last_name;
        }
    }
```

**GOOD:**
```php
    public function getFullNameAttribute()
    {
        return $this->isVerifiedClient() ? $this->getFullNameLong() : $this->getFullNameShort();
    }

    public function isVerifiedClient()
    {
        return auth()->user() && auth()->user()->hasRole('client') && auth()->user()->isVerified();
    }

    public function getFullNameLong()
    {
        return 'Mr. ' . $this->first_name . ' ' . $this->middle_name . ' ' . $this->last_name;
    }

    public function getFullNameShort()
    {
        return $this->first_name[0] . '. ' . $this->last_name;
    }
```

## Validation
Move validation from controllers to Request classes.

**BAD:**
```php
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|unique:posts|max:255',
            'body' => 'required',
            'publish_at' => 'nullable|date',
        ]);

        ....
    }
```

**GOOD:**
```php
    public function store(PostRequest $request)
    {
        ....
    }

    class PostRequest extends Request
    {
        public function rules()
        {
            return [
                'title' => 'required|unique:posts|max:255',
                'body' => 'required',
                'publish_at' => 'nullable|date',
            ];
        }
    }
```

## Don’t Repeat Yourself (DRY)
Reuse code when you can. SRP is helping you to avoid duplication. Also, reuse Blade templates, use Eloquent scopes etc.

**BAD:**
```php
    public function getActive()
    {
        return $this->where('verified', 1)->whereNotNull('deleted_at')->get();
    }

    public function getArticles()
    {
        return $this->whereHas('user', function ($q) {
                $q->where('verified', 1)->whereNotNull('deleted_at');
            })->get();
    }
```

**GOOD:**
```php
    public function scopeActive($q)
    {
        return $q->where('verified', 1)->whereNotNull('deleted_at');
    }

    public function getActive()
    {
        return $this->active()->get();
    }

    public function getArticles()
    {
        return $this->whereHas('user', function ($q) {
                $q->active();
            })->get();
    }
```

## Mass Assignment

**BAD:**
```php
    $article = new Article;
    $article->title = $request->title;
    $article->content = $request->content;
    $article->verified = $request->verified;
    // Add category to article
    $article->category_id = $category->id;
    $article->save();
```

**GOOD:**
```php
    $category->article()->create($request->all());
```

## Use Config and Language Files
Use config and language files, constants instead of text in the code

**BAD:**
```php
    public function isNormal()
    {
        return $article->type === 'normal';
    }

    return back()->with('message', 'Your article has been added!');
```

**GOOD:**
```php
    public function isNormal()
    {
        return $article->type === Article::TYPE_NORMAL;
    }

    return back()->with('message', __('app.article_added'));
```

## Use IoC Container or Facades
new Class syntax creates tight coupling between classes and complicates testing. Use IoC container or facades instead.

**BAD:**
```php
    $user = new User;
    $user->create($request->all());
```

**GOOD:**
```php
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    ....

    $this->user->create($request->all());
```

## Other Good Practices
:::tip
Never put any logic in routes files.<br/>
Minimize usage of vanilla PHP in Blade templates.
:::