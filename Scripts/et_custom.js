﻿$(function () {

    $('#Q817').hide();
    $('.H817').hide();
    $('#sectionHotel').hide();

    $(".dropdown-menu li a").click(function () {
        $(this).parents(".dropdown").find('.btn').html($(this).text() + '<span class="caret"></span>');
        $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
    });

    $("#Q801_D1").trigger("change");
    $("#Q808_D1").trigger("change");
    $("#Q816_D1").trigger("change");
    //$('.Q813').trigger("click");


    // =======================================================
    // ============== Jquery Click Event Code ================
    // =======================================================

    $(document).on('change', '#Q801_D1', function () {
        $selectedValue = $('#Q801_D1').val();
        $selectedValueQ801_D2 = $('#Q801_D2').val();

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
            //$('#Q817').show(); to be changed later
            $('#Q818').show();
            $('#Q819').show();
            $('#Q820').show();
            $('#Q821').show();
            $('#Q822').show();
            $('#Q823').show();
            $('#Q824').show();
            $('.H802').show();
            $('.H804').show();
            $('.H805').show();
            $('.H807').show();
            $('.H808').show();
            $('.H809').show();
            $('.H810').show();
            $('.H811').show();
            $('.H812').show();
            $('.H813').show();
            $('.H814').show();
            $('.H815').show();
            $('.H816').show();
            $('.H806').show();
            //$('.H817').show(); to be changed later
            $('.H818').hide();
            $('.H819').hide();
            $('.H820').hide();
            $('.H821').hide();
            $('.H822').hide();
            $('.H823').hide();
            $('.H824').hide();
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
            //$('#Q817').hide(); to be changed later
            $('#Q818').hide();
            $('#Q819').hide();
            $('#Q820').hide();
            $('#Q821').hide();
            $('#Q822').hide();
            $('#Q823').hide();
            $('#Q824').hide();
            $('.H802').hide();
            $('.H804').hide();
            $('.H805').hide();
            $('.H806').hide();
            $('.H807').hide();
            $('.H808').hide();
            $('.H809').hide();
            $('.H810').hide();
            $('.H811').hide();
            $('.H812').hide();
            $('.H813').hide();
            $('.H814').hide();
            $('.H815').hide();
            $('.H816').hide();
            //$('.H817').hide(); to be changed later
            $('.H818').hide();
            $('.H819').hide();
            $('.H820').hide();
            $('.H821').hide();
            $('.H822').hide();
            $('.H823').hide();
            $('.H824').hide();
        }

    })

    $(document).on('change', '#Q808_D1', function () {
        $selectedValue = $('#Q808_D1').val();

        if ($selectedValue != 0 && $selectedValue != 1) {
            $('#Q809').show(); // NO Header Hide+
        }
        else {
            $('#Q809').hide();
        }
    });

    $(document).on('change', '#Q816_D1', function () {
        $selectedValue = $('#Q816_D1').val();

        if ($selectedValue == 4 || $selectedValue == 5) {
            $('#Q817').show();
            $('.H817').show();
        }
        else {
            $('#Q817').hide();
            $('.H817').hide();
        }
    });

    $(document).on('click', '.Q813', function () {
        if ($('#Q813_C7').prop("checked") == true) {
            $('#sectionHotel').hide();
        }
        else if ($('#Q813_C1').prop("checked") == true ||
            $('#Q813_C2').prop("checked") == true ||
            $('#Q813_C3').prop("checked") == true ||
            $('#Q813_C4').prop("checked") == true ||
            $('#Q813_C5').prop("checked") == true ||
            $('#Q813_C6').prop("checked") == true ||
            $('#Q813_C98').prop("checked") == true) {
                $('#sectionHotel').show();
        }
    });

});

