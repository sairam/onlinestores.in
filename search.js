$(document).ready(function(){

  searchSites = function() {
    var searched = $('#search').val();
    location.hash = "_"+searched;
    var selectedElements = $('div.item').addClass('hide').filter(function() {
      return $(this).find('h4').html().search(new RegExp(searched,'i' )) >= 0;// ("selected") == true
    }).removeClass('hide');
    $('#search_counter').html(selectedElements.size());

    // Display images lazily
    $("img.lazy").show().lazyload({ threshold : 200 });
  }

  // $("img.lazy").show().lazyload({ threshold : 200, effect : "fadeIn" });

  $('#search').keyup(searchSites);
  if(! location.hash == "")
    $('#search').attr('value',location.hash.substring(2,500))
  searchSites();

});