/**
 * Style your input and add a suffix to value when it change
 *
 * <div class="select" data-suffix=" Your suffix">
 *     <span>Your Select</span> <--- Here are added "option value" + "Your suffix" on change of select
 *     <select name="num_children">
 *            <option value="0">Options</option>
 *            <option value="1">Options</option>
 *            <option value="2">Options</option>
 *     </select>
 * </div>

 * @constructor
 */
function SelectTag() {
    $('.select select').change(function () {
        var $this = $(this),
            _suffix = $this.parent('.select').data('suffix'),
            $span = $this.parent('.select').find('span');

        if (typeof _suffix == 'undefined') {
            _suffix = '';
        }

        var textchange = $this.find('option:selected').text() + _suffix;

        $span.text(textchange);
    });

    $('.select select').each(function () {
        var $this = $(this),
            _suffix = $this.parent('.select').data('suffix'),
            $span = $this.parent('.select').find('span');

        if (typeof _suffix == 'undefined') {
            _suffix = '';
        }

        var textchange = $this.find('option:selected').text() + _suffix;

        // if (textchange != $span.text()) {
        //     $span.text($span.text() + ' ' + textchange + _suffix);
        // }
    });
}

// run
SelectTag();