/**
 * jQuery Bubbles
 * A soda pop visual effect.
 * Make an html element bubble or fizz like a soda pop.
 * Works great for beer too!
 *
 * Developed by: Nathan Gardner <nathan@factory8.com>
 * 
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 */

(function($) {
  
  $.fn.bubbles = function(options) {
    
    var opts = $.extend( {}, $.fn.bubbles.defaults, options);
    
    return this.each(function() {
      
      var elem = $(this);
      elem.addClass('jquery-bubbles');
      
      // calcualte container size
      opts.width = elem.width();
      opts.height = elem.height();
      
      var bubbler = setInterval(function() {
        
        var bubble = createBubble(opts);
        
        elem.append(bubble);
        
      }, opts.frequency);
      
    });
    
  }
  
  function createBubble(opts) {
    
    // determine size
    var size = Math.floor(Math.random() * opts.maxSize) + opts.minSize;
    
    // determine speed
    var speed = (size*opts.density);
    
    // determine location (x axis)
    var x = Math.floor(Math.random() * (opts.width - size));
    
    // build bubble element
    var bubbleElement = $('<div/>').addClass('jquery-bubble');
    bubbleElement.css('left',x+'px');
    bubbleElement.css('bottom','0px');
    bubbleElement.css('width',size+'px');
    bubbleElement.css('height',size+'px');
    bubbleElement.css('position','absolute');
    bubbleElement.css('opacity',0);
    bubbleElement.append('<img src="'+opts.particle+'"/>');
    
    bubbleElement.animate(
      {'bottom': opts.height-size + 'px', 'opacity': 1}, // properties to animate
      speed, // duration
      'linear', // easing
      function () { $(this).remove(); } // complete
    );
    
    return bubbleElement;
    
  }
  
  $.fn.bubbles.defaults = {
    particle: 'bubble.png',
    minSize: 10, // smallest bubble
    maxSize: 50, // largest bubble
    density: 100, // how slow they rise (plus size multiplier)
    frequency: 500 // how long to wait between each bubble (plus randomizer)
  }
  
}(jQuery));