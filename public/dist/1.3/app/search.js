define(function(require,exports,module){var o={elements:{},init:function(e){var s=$(e),t=s.find(".js-search"),a=s.find("#keywords"),n=s.find(".search-tips"),i=s.find(".autoshow");t.on("click",function(){var e=$.trim(a.val());return e?void o.searchGoods(e):(M.tips("关键字不能为空"),!1)}),s.on("click",".hot dd em",function(){var e=$(this).text();o.searchGoods(e,!1)}),s.on("click",".search-tips li, .history .list li",function(){var e=$(this).text();o.searchGoods(e)}),a.on("input",function(){var o=$.trim(a.val());o?M.ajax({showLoading:!1,url:"/api/searchKeywordTips",data:{data:JSON.stringify({keyword:o})},success:function(o){o.template?(i.addClass("none"),n.empty().append(o.template).removeClass("none")):(i.removeClass("none"),n.addClass("none"))}}):(i.removeClass("none"),n.addClass("none"))}),s.on("click",".js-del-history",function(){localStorage.removeItem(CONST.local_search_history),M.tips({body:"历史搜索记录已清除",callback:function(){$(".history").fadeOut(function(){$(this).remove()})}})})},searchGoods:function(o,e){if(e!==!1){var s=JSON.parse(localStorage.getItem(CONST.local_search_history))||[];s.unshift(o),localStorage.setItem(CONST.local_search_history,JSON.stringify(s.unique().slice(0,10)))}localStorage.removeItem(CONST.local_search_params),window.location.href="#/list/keywords="+encodeURIComponent(o)}};module.exports=o});