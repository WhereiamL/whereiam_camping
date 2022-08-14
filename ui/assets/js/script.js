
window.addEventListener('message', function(event) {
    let data = event.data
    if (data.action == "open") {
      $('body').fadeIn("fast")
      $(".main-flw").html('')
      for (var i = 0; i < data.outfit.length; i++) {  
        $(".main-flw").append(`
        <div class="auta-dugme" id="presvuci" model = "${data.outfit[i].value}">
            <div class="auta-text-1">
                <div class="auta-text-2">&nbsp;${data.outfit[i].label}</div>
                <div class="auta-text-3"><i class="fas fa-mouse"></i>&nbsp; TO TAKE</div>
            </div>
        </div>`
        )
      }
    }
  });
  
  
  $(document).on("click", "#presvuci", function(){
    let odjeca = $(this).attr("model")
    // console.log(odjeca)
    $.post(`https://${GetParentResourceName()}/changeSavedToCurrent`, odjeca);
  })

  $(document).on("click", "#save", function(){
    $.post(`https://${GetParentResourceName()}/save`, JSON.stringify({}));
  })
  $(document).on("click", "#delete", function(){
    $.post(`https://${GetParentResourceName()}/delete`, JSON.stringify({}));
    CloseMenu()
  })
  
  function CloseMenu() {
    $('body').fadeOut("fast")
    $.post(`https://${GetParentResourceName()}/close`, JSON.stringify({}));
  }
  

document.onkeyup = function (data) {
    if (data.which == 27) {
      CloseMenu()
    }
};