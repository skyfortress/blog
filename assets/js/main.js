$(function () {
    if( ! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        var jQuerywindow = $(window);
        var jQuerydoc = $(document);
        var fortress = $('#paralaxFortress');
        var cloud = $('#paralaxCloud');
        $(window).scroll(function() {
            // HTML5 proves useful for helping with creating JS functions!
            // also, negative value because we're scrolling upwards
            var yPos = jQuerywindow.scrollTop();

            var coords1 = yPos/1.5 + 'px';
            var coords2 = yPos/1.2 + 'px';

            if(yPos<1000){
                cloud.css({
                    '-webkit-transform' : 'translateY(' + coords1 + ')',
                    '-moz-transform'    : 'translateY(' + coords1 + ')',
                    '-ms-transform'     : 'translateY(' + coords1 + ')',
                    '-o-transform'      : 'translateY(' + coords1 + ')',
                    'transform'         : 'translateY(' + coords1 + ')'
                });

                fortress.css({
                    '-webkit-transform' : 'translateY(' + coords2 + ')',
                    '-moz-transform'    : 'translateY(' + coords2 + ')',
                    '-ms-transform'     : 'translateY(' + coords2 + ')',
                    '-o-transform'      : 'translateY(' + coords2 + ')',
                    'transform'         : 'translateY(' + coords2 + ')'
                });
            }

        });

        if ($().fluidbox !== undefined) {
            $('a').fluidbox();
        }
    }


});




(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-45672848-2', 'auto');
ga('send', 'pageview');

