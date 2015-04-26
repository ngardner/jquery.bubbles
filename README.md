# jQuery Bubbles plugin

This plugin makes any HTML element bubble or fizz like a carbonated drink.

[Checkout a quick demo](http://nathangardner.me/jQueryBubbles.example.html)

## Usage

The plugin requires [jQuery](http://jquery.com/). Integration is pretty simple:

* Add jQuery to the `<head>` of your HTML file:
```
<script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="js/jquery.bubbles.js"></script>
```

* Create an HTML element you'd like to bubble in your document's `<body>`:
```
<div class="bubble" style="width: 500px; height: 400px;"></div>
```

* Attach the plugin to element:
```
<script>
$('.bubble').bubbles();
</script>
```

## Documentation and Examples
During initialization, you can pass the following options

Option | Default | Description
--- | --- | ---
particle | bubble.png | Graphic to use as bubble
minSize | 10 | Minimum size in pixels of bubble
maxSize | 50 | Largest size in pixels of bubble
density | 100 | Density of liquid. Higher the number, the slower the bubbles rise
frequency | 500 | Milliseconds between bubble, small number generates lots of bubbles


See example.html

##Credits

Nathan Gardner (<http://helpmenathan.com/>)
