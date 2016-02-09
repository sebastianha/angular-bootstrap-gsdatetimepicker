angular-bootstrap-gsdatetimepicker
==================================

A wrapper around the bootstrap-datetimepicker

### Installation via Bower:

```
$ bower install angular-bootstrap-gsdatetimepicker --save
```

### Usage:

Add "ui.gsdatetimepicker" to your modules list. Then you can use it like follows:

```
<input gsdatetimepicker
    type="text"
    class="form-control"
    options="{format: 'MMMM DD, YYYY'}"
    ng-model="model"
>
```

See index.html and app.js for examples and how it works.

### Testing:

Start web server e.g. via Python:
```
$ python -m SimpleHTTPServer 8000
```

### License

Copyright (c) 2016 Sebastian Hammerl, Getslash GmbH

Licensed under the MIT License