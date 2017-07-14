$(function () {

    $('.appendTextBox').hide();
    $('.hideit').hide();
    $("#Q802").hide();
    $('#Q804').hide();
    $('#Q805').hide();
    $('#Q806').hide();
    $('#Q807').hide();
    $('#Q808').hide();
    $('#Q809').hide();
    $('#Q810').hide();
    $('#Q811').hide();
    $('#Q812').hide();
    $('#Q813').hide();
    $('#Q814').hide();
    $('#Q815').hide();
    $('#Q816').hide();
    $('#Q817').hide();

    $("#Q801_D1").trigger("change");
    $("#Q808_D1").trigger("change");


    // =======================================================
    // ============== Jquery Click Event Code ================
    // =======================================================

    $(document).on('change', '#Q801_D1', function () {
        $selectedValue = $('#Q801_D1').val();
        $selectedValueQ601_D2 = $('#Q801_D2').val();

        if ($selectedValue != 0 && $selectedValue != 1) {
            $('.hideit').show();
            $("#Q802").show();
            $('#Q804').show();
            $('#Q805').show();
            $('#Q806').show();
            $('#Q807').show();
            $('#Q808').show();
            $('#Q810').show();
            $('#Q811').show();
            $('#Q812').show();
            $('#Q813').show();
            $('#Q814').show();
            $('#Q815').show();
            $('#Q816').show();
            $('#Q817').show();
        }
        else {
            $('.hideit').hide();
            $("#Q802").hide();
            $('#Q804').hide();
            $('#Q805').hide();
            $('#Q806').hide();
            $('#Q807').hide();
            $('#Q808').hide();
            $('#Q809').hide();
            $('#Q810').hide();
            $('#Q811').hide();
            $('#Q812').hide();
            $('#Q813').hide();
            $('#Q814').hide();
            $('#Q815').hide();
            $('#Q816').hide();
            $('#Q817').hide();
        }

    })

    $(document).on('change', '#Q808_D1', function () {
        $selectedValue = $('#Q808_D1').val();

        if ($selectedValue != 0 && $selectedValue != 1) {
            $('#Q809').show();
        }
        else {
            $('#Q809').hide();
        }
    })

});

