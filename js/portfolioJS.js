// var $el = $("#very-specific-design");
// var elHeight = $el.outerHeight();
// var elWidth = $el.outerWidth();
//
// var $wrapper = $("#scaleable-wrapper");
//
// $wrapper.resizable({
//     resize: doResize
// });
//
// function doResize(event, ui) {
//
//     var scale, origin;
//
//     scale = Math.min(
//         ui.size.width / elWidth,
//         ui.size.height / elHeight
//     );
//
//     $el.css({
//         transform: "translate(-50%, -50%) " + "scale(" + scale + ")"
//     });
//     console.log($el.css({
//         transform: "translate(-50%, -50%) " + "scale(" + scale + ")"
//     }));
//
// }
//
// var starterData = {
//     size: {
//         width: $wrapper.width(),
//         height: $wrapper.height()
//     }
// }
// doResize(null, starterData);


// (function( $ ) {
//     $.fn.keepRatio = function(which) {
//         var $this = $(this);
//         var w = $this.width();
//         var h = $this.height();
//         var ratio = w/h;
//         $(window).resize(function() {
//             switch(which) {
//                 case 'width':
//                     var nh = $this.width() / ratio;
//                     $this.css('height', nh + 'px');
//                     break;
//                 case 'height':
//                     var nw = $this.height() * ratio;
//                     $this.css('width', nw + 'px');
//                     break;
//             }
//         });
//
//     }
// })( jQuery );
//
// $(document).ready(function(){
//     $('#very-specific-design').keepRatio('width');
// });

// $(window).resize(function () {
//     var $this = $("#very-specific-design");
//     var w = $this.width();
//     var h = $this.height();
//     var ratio = w / h;
//
//     var nh = $this.width() / ratio;
//     $this.css('height', nh + 'px');
//
//     var nw = $this.height() * ratio;
//     $this.css('width', nw + 'px');
//
// })

var getAspectRatio = function () {
    $(window).load(function () {
        var currentWidth = $(this).width()
        console.log(currentWidth)
        var currentHeight = $(this).height()
        console.log(currentHeight)
        var screenCurrentWidth = $("#very-specific-design").width()
        console.log("screen: " + screenCurrentWidth)
        var screenCurrentHeight = $("#very-specific-design").height()
        console.log("screen: " + screenCurrentHeight)

        var aspectRatio = screenCurrentWidth / screenCurrentHeight
        // var aspectRatioHeight = currentHeight / screenCurrentHeight

        console.log(aspectRatio);


        $(window).resize( function () {
            var newHeight = Math.round(screenCurrentHeight * aspectRatio)
            $("#very-specific-design").css("height", newHeight + 'px')
            console.log(newHeight)

            var newWidth = Math.round(screenCurrentWidth * aspectRatio)
            $("#very-specific-design").css("width", newWidth + 'px')
            console.log(newWidth)
        })


    })
}

getAspectRatio()

