jQuery(document).ready(function(e){e(window).scroll(function(){e(this).scrollTop()>80?e(".header").addClass("header-is-visible"):e(".header").removeClass("header-is-visible")})});$(document).ready(function(){$('.has-subnav').click(function(e){var $this=$('.nav-content');if($this.hasClass('active')){$this.removeClass('active')}else{$this.addClass('active')}
e.preventDefault()})});$('a.scroll[href*="#"]:not([href="#"])').click(function(){var offset=-$(".header").height();if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){$('html, body').animate({scrollTop:target.offset().top+offset},600,);return!1}}});(function($){$.fn.visible=function(partial){var $t=$(this),$w=$(window),viewTop=$w.scrollTop(),viewBottom=viewTop+$w.height(),_top=$t.offset().top,_bottom=_top+$t.height(),compareTop=partial===!0?_bottom:_top,compareBottom=partial===!0?_top:_bottom;return((compareBottom<=viewBottom)&&(compareTop>=viewTop))}})(jQuery);var win=$(window);var allMods=$(".anime");allMods.each(function(i,el){var el=$(el);if(el.visible(!0)){el.addClass("already-visible")}});win.scroll(function(event){allMods.each(function(i,el){var el=$(el);if(el.visible(!0)){el.addClass("come-in")}})})