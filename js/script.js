// build time:Thu Mar 23 2023 21:37:43 GMT+0800 (中国标准时间)
(function(t){var a=t("#search-form-wrap"),e=false,n=200;var i=function(){e=true};var r=function(t){setTimeout(function(){e=false;t&&t()},n)};t("#nav-search-btn").on("click",function(){if(e)return;i();a.addClass("on");r(function(){t(".search-form-input").focus()})});t(".search-form-input").on("blur",function(){i();a.removeClass("on");r()});t("body").on("click",function(){t(".article-share-box.on").removeClass("on")}).on("click",".article-share-link",function(a){a.stopPropagation();var e=t(this),n=e.attr("data-url"),i=encodeURIComponent(n),r="article-share-box-"+e.attr("data-id"),o=e.attr("data-title"),s=e.offset();if(t("#"+r).length){var c=t("#"+r);if(c.hasClass("on")){c.removeClass("on");return}}else{var l=['<div id="'+r+'" class="article-share-box">','<input class="article-share-input" value="'+n+'">','<div class="article-share-links">','<a href="https://twitter.com/intent/tweet?text='+encodeURIComponent(o)+"&url="+i+'" class="article-share-twitter" target="_blank" title="Twitter"></a>','<a href="https://www.facebook.com/sharer.php?u='+i+'" class="article-share-facebook" target="_blank" title="Facebook"></a>','<a href="http://pinterest.com/pin/create/button/?url='+i+'" class="article-share-pinterest" target="_blank" title="Pinterest"></a>','<a href="https://www.linkedin.com/shareArticle?mini=true&url='+i+'" class="article-share-linkedin" target="_blank" title="LinkedIn"></a>',"</div>","</div>"].join("");var c=t(l);t("body").append(c)}t(".article-share-box.on").hide();c.css({top:s.top+25,left:s.left}).addClass("on")}).on("click",".article-share-box",function(t){t.stopPropagation()}).on("click",".article-share-box-input",function(){t(this).select()}).on("click",".article-share-box-link",function(t){t.preventDefault();t.stopPropagation();window.open(this.href,"article-share-box-window-"+Date.now(),"width=500,height=450")});t(".article-entry").each(function(a){t(this).find("img").each(function(){if(t(this).parent().hasClass("fancybox")||t(this).parent().is("a"))return;var a=this.alt;if(a)t(this).after('<span class="caption">'+a+"</span>");t(this).wrap('<a href="'+this.src+'" data-fancybox="gallery" data-caption="'+a+'"></a>')});t(this).find(".fancybox").each(function(){t(this).attr("rel","article"+a)})});if(t.fancybox){t(".fancybox").fancybox()}var o=t("#container"),s=false,c=200;var l=function(){s=true};var f=function(){setTimeout(function(){s=false},c)};t("#main-nav-toggle").on("click",function(){if(s)return;l();o.toggleClass("mobile-nav-on");f()});t("#wrap").on("click",function(){if(s||!o.hasClass("mobile-nav-on"))return;o.removeClass("mobile-nav-on")})})(jQuery);
//rebuild by hrmmi 