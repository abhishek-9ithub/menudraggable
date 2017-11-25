$(function() {
    $.fn.menuScroller = function() {
        /*
        var __parent = $(this).find('ul');
        var wrapperWidth = $(this).outerWidth();
        var wrapperLeft = $(this).offset().left;
        var _scale = 0;
        var ele = wrapperWidth + wrapperLeft;
        var _menuItem = $(__parent).find('li');
        $(_menuItem).click(function() {
            var _listsize = parseInt($(_menuItem).length);
            var _thisIndex = parseInt($(_menuItem).index(this) + 1);
            var outerWidth = $(this).outerWidth();
            var outerLeft = $(this).offset().left;
            var elePos = outerLeft + outerWidth;
            if (wrapperLeft + outerWidth > outerLeft) {
                if (_thisIndex == 1) {
                    outerWidth = _scale;
                }
                _scale = _scale - outerWidth;
                $(__parent).attr('current-translate', _scale);
                $(__parent).css({
                    'transform': "translateX(-" + _scale + "px)"
                });
            }
            if (elePos > ele - outerWidth) {
                if (_listsize == _thisIndex) {
                    outerWidth = elePos - ele;
                }
                _scale = outerWidth + _scale;
                $(__parent).attr('current-translate', _scale);
                $(__parent).css({
                    'transform': "translateX(-" + _scale + "px)"
                });
            }
        });
         */

        ///dragging only plugin
        var wrapper = $(this).parent();
        var _ele = $(this);
        var isTouchDevice = false;
        var isClicked = false;
        var mouseXposition = 0;
        var innerXposition = 0;
        var newPosition = 0;
        $(wrapper).css({
            'max-height': $(_ele).find('li').outerHeight(),
            'overflow': 'hidden',
            '-webkit-user-select': 'none',
            '-moz-user-select': 'none',
            '-ms-user-select': 'none'
        });
        $(_ele).css({
            'white-space': 'nowrap',
            'position': 'relative',
            'white-space': 'nowrap',
            'overflow-x': 'auto',
            'overflow-y': 'hidden',
            '-webkit-overflow-scrolling': 'touch',
            '-webkit-transition': 'all 0.5s ease',
            '-moz-transition': 'all 0.5s ease',
            'transition': 'all 0.5s ease'
        });
        var updatePosition = function updatePosition(e) {
            if (!isTouchDevice) {
                newPosition = innerXposition + (mouseXposition - e.pageX);
                $('.drag-menu').scrollLeft(newPosition);
            }
        };
        $(wrapper).on('mousedown', function(e) {
            e.preventDefault ? e.preventDefault() : e.returnValue = false
            isClicked = true;
            mouseXposition = e.pageX;
            innerXposition = $(_ele).scrollLeft();
        });
        $(document).on('mousemove', function(e) {
            isClicked && updatePosition(e);
        });
        $(document).on('mouseup', function() {
            isClicked = false;
        });
        $(wrapper).css({
            'max-height': $(_ele).find('li').outerHeight(),
            'overflow': 'hidden',
            '-webkit-user-select': 'none',
            '-moz-user-select': 'none',
            '-ms-user-select': 'none'
        })

    }

});