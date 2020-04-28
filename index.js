document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var options = {
        "height": 350,
        "interval": 4000
    }
    var instances = M.Slider.init(elems, options);
  });