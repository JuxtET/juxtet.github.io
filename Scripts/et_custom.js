$(function () {

    arr_Q834 = [];
    isDomesticOpen = false;
    isDomesticHotelOpen = false;
    isDomesticTicketOpen = false;
    isInternationalOpen = false;
    isIntenationalHotelOpen = false;
    isInternationalTicketOpen = false;
    isFutureOpen = false;
    var $selectedValueQ801_D1 = 0;
    var $selectedValueQ801_D2 = 0;

    $('#Q817').hide();
    $('.H817').hide();
    $(".H826").hide();
    $("#Q826").hide();
    $('.H827').hide();
    $('#Q827').hide();
    $('#Q831_2').hide();
    $('.H836').hide();
    $('#Q855_1').hide();
    $(".H859").hide();
    $("#Q859").hide();
    $('.H860').hide();
    $('#Q860').hide();
    $('#Q865_2').hide();
    $('.H869').hide();
    $('#Q869').hide();
    $('.H870').hide();
    $('#Q870').hide();
    $('.H890').hide();
    $('#Q890').hide();
    $('#domesticTravel').hide();
    $('#sectionHotel').hide();
    $('#sectionTicket').hide();
    $('#internationalTravel').hide();
    $('#internationalHotelSection').hide();
    $('#internationalTicketSection').hide();
    $('#futureSection').hide();
    $('.H871').hide();
    $('#Q871').hide();

    if (!($('.form-border').hasClass('bottom-border'))) {
        $('.form-border').addClass('bottom-border');
    }
    else {
        $('.form-border').removeClass('bottom-border');
    }

    $(".dropdown-menu li a").click(function () {
        $(this).parents(".dropdown").find('.btn').html($(this).text() + '<span class="caret"></span>');
        $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
    });

    $("#Q801_D1").trigger("change");
    $("#Q808_D1").trigger("change");
    $("#Q816_D1").trigger("change");
    $('#Q843_D1').trigger("change");
    $('#Q855_D1').trigger("change");
    //$('.Q813').trigger("click");


    // =======================================================
    // ============== Jquery Click Event Code ================
    // =======================================================

    //$(document).on('change', '#Q801_D1', function () {
    //    $selectedValueQ801_D1 = $('#Q801_D1').val();
    //    $selectedValueQ801_D2 = $('#Q801_D2').val();
    //    if ($selectedValueQ801_D2 < 1) {
    //        if ($selectedValueQ801_D1 > 1) {

    //            isDomesticOpen = true;
    //            isFutureOpen = true;
    //            isInternationalOpen = false;
    //            $('#domesticTravel').show();
    //            $('#futureSection').show();
    //            $('#internationalTravel').hide();
    //            $('.H871').hide();
    //            $('#Q871').hide();

    //            if (!($('.form-border').hasClass('bottom-border'))) {
    //                $('.form-border').addClass('bottom-border');
    //            }

    //            //$('.hideit').show();
    //            //$('#sectionHotel').show();
    //            //$('#sectionTicket').show();
    //            $("#Q802").show();
    //            $('#Q804').show();
    //            $('#Q805').show();
    //            $('#Q806').show();
    //            $('#Q807').show();
    //            $('#Q808').show();
    //            $('#Q810').show();
    //            $('#Q811').show();
    //            $('#Q812').show();
    //            $('#Q813').show();
    //            $('#Q814').show();
    //            $('#Q815').show();
    //            $('#Q816').show();
    //            //$('#Q817').show(); to be changed later
    //            $('#Q818').show();
    //            $('#Q819').show();
    //            $('#Q820').show();
    //            $('#Q821').show();
    //            $('#Q822').show();
    //            $('#Q823').show();
    //            $('#Q824').show();
    //            $('.H802').show();
    //            $('.H804').show();
    //            $('.H805').show();
    //            $('.H807').show();
    //            $('.H808').show();
    //            $('.H809').show();
    //            $('.H810').show();
    //            $('.H811').show();
    //            $('.H812').show();
    //            $('.H813').show();
    //            $('.H814').show();
    //            $('.H815').show();
    //            $('.H816').show();
    //            $('.H806').show();
    //            //$('.H817').show(); to be changed later
    //            $('.H818').show();
    //            $('.H819').show();
    //            $('.H820').show();
    //            $('.H821').show();
    //            $('.H822').show();
    //            $('.H823').show();
    //            $('.H824').show();
    //        }

    //        else if ($selectedValueQ801_D1 == 1 && $selectedValueQ801_D2 == 1) {
    //            isFutureOpen = true;
    //            isDomesticOpen = false;
    //            isInternationalOpen = false;
    //            $('#futureSection').show();
    //            $('.H871').show();
    //            $('#Q871').show();
    //            $('#internationalTravel').hide();
    //            $('#domesticTravel').hide();
    //        }

    //        else {
    //            isDomesticOpen = false;
    //            isFutureOpen = false;
    //            isInternationalOpen = false;
    //            $('#domesticTravel').hide();
    //            $('#futureSection').hide();
    //            $('#internationalTravel').hide();
    //            $('.H871').hide();
    //            $('#Q871').hide();
    //            $('.form-border').removeClass('bottom-border');
    //            //$('.hideit').hide();
    //            $("#Q802").hide();
    //            $('#Q804').hide();
    //            $('#Q805').hide();
    //            $('#Q806').hide();
    //            $('#Q807').hide();
    //            $('#Q808').hide();
    //            $('#Q809').hide();
    //            $('#Q810').hide();
    //            $('#Q811').hide();
    //            $('#Q812').hide();
    //            $('#Q813').hide();
    //            $('#Q814').hide();
    //            $('#Q815').hide();
    //            $('#Q816').hide();
    //            $('#Q817').hide();
    //            $('#Q818').hide();
    //            $('#Q819').hide();
    //            $('#Q820').hide();
    //            $('#Q821').hide();
    //            $('#Q822').hide();
    //            $('#Q823').hide();
    //            $('#Q824').hide();
    //            $('.H802').hide();
    //            $('.H804').hide();
    //            $('.H805').hide();
    //            $('.H806').hide();
    //            $('.H807').hide();
    //            $('.H808').hide();
    //            $('.H809').hide();
    //            $('.H810').hide();
    //            $('.H811').hide();
    //            $('.H812').hide();
    //            $('.H813').hide();
    //            $('.H814').hide();
    //            $('.H815').hide();
    //            $('.H816').hide();
    //            $('.H817').hide();
    //            $('.H818').hide();
    //            $('.H819').hide();
    //            $('.H820').hide();
    //            $('.H821').hide();
    //            $('.H822').hide();
    //            $('.H823').hide();
    //            $('.H824').hide();
    //            $('#sectionHotel').hide();
    //            $('#sectionTicket').hide();
    //        }
    //    }

    //})

    //$(document).on('change', '#Q801_D2', function () {
    //    $selectedValueQ801_D2 = $('#Q801_D2').val();
    //    if ($selectedValueQ801_D2 > 1) {
    //        isInternationalOpen = true;
    //        isFutureOpen = true;
    //        isDomesticOpen = false;
    //        $('#internationalTravel').show();
    //        $('#internationalHotelSection').hide();
    //        $('#internationalTicketSection').hide();
    //        $('#futureSection').show();
    //        $('#domesticTravel').hide();
    //        $('.H871').hide();
    //        $('#Q871').hide();
    //    }
    //    else if ($selectedValueQ801_D1 == 1 && $selectedValueQ801_D2 == 1) {
    //        isFutureOpen = true;
    //        isDomesticOpen = false;
    //        isInternationalOpen = false;
    //        $('#futureSection').show();
    //        $('.H871').show();
    //        $('#Q871').show();
    //        $('#internationalTravel').hide();
    //        $('#domesticTravel').hide();
    //    }
    //    else {
    //        isDomesticOpen = false;
    //        isFutureOpen = false;
    //        isInternationalOpen = false;
    //        $('#domesticTravel').hide();
    //        $('#futureSection').hide();
    //        $('#internationalTravel').hide();
    //        $('.H871').hide();
    //        $('#Q871').hide();
    //    }
    //});

    $(document).on('change', '.Q801', function () {
        $selectedValueQ801_D1 = $('#Q801_D1').val();
        $selectedValueQ801_D2 = $('#Q801_D2').val();

        if ($selectedValueQ801_D2 > 1) {
            isDomesticOpen = false;
            isFutureOpen = true;
            isInternationalOpen = true;
            $('#domesticTravel').hide();
            $('#futureSection').show();
            $('#internationalTravel').show();
            $('.H871').hide();
            $('#Q871').hide();
        }

        else if ($selectedValueQ801_D2 <= 1 && $selectedValueQ801_D1 > 1) {
            isDomesticOpen = true;
            isFutureOpen = true;
            isInternationalOpen = false;
            $('#domesticTravel').show();
            $('#futureSection').show();
            $('#internationalTravel').hide();
            $('.H871').hide();
            $('#Q871').hide();
        }

        else if ($selectedValueQ801_D1 == 1 && $selectedValueQ801_D2 == 1) {
            isDomesticOpen = false;
            isFutureOpen = true;
            isInternationalOpen = false;
            $('#domesticTravel').hide();
            $('#futureSection').show();
            $('#internationalTravel').hide();
            $('.H871').show();
            $('#Q871').show();
        }

        else  {
            isDomesticOpen = false;
            isFutureOpen = false;
            isInternationalOpen = false;
            $('#domesticTravel').hide();
            $('#futureSection').hide();
            $('#internationalTravel').hide();
            $('.H871').hide();
            $('#Q871').hide();
        }
    });

    $(document).on('change', '#Q808_D1', function () {
        $selectedValue = $('#Q808_D1').val();

        if ($selectedValue != 0 && $selectedValue != 1) {
            $('#Q809').show(); // NO Header Hide+
        }
        else {
            $('#Q809').hide();
        }
    });

    $(document).on('change', '#Q813_D1', function () {
        $selectedValue = $('#Q813_D1').val();
        if ($selectedValue == 7) {
            $('#sectionHotel').hide();
        }
        else{
            $('#sectionHotel').show();
        }
    });

    $(document).on('click', '#Q814_D1', function () {
        var selectedValue = $('#Q814_D1').val();

        if (selectedValue == 4) {
            $('#sectionTicket').hide();
        }
        else {
            $('#sectionTicket').show();
        }
    });

    $(document).on('change', '#Q816_D1', function () {
        $selectedValue = $('#Q816_D1').val();
        
        if (($selectedValue == 4 || $selectedValue == 5) && (isDomesticOpen)) {
            $('#Q817').show();
            $('.H817').show();
        }
        else {
            $('#Q817').hide();
            $('.H817').hide();
        }
    });

    $(document).on('change', '#Q818_D1', function () {
        $selectedValue = $('#Q818_D1').val();

        if ($selectedValue == 1) {
            $('#Q819').hide();
        }
        else {
            $('#Q819').show();
        }
    });

    $(document).on('change', '#Q821_D1', function () {
        $selectedValue = $('#Q821_D1').val();

        if ($selectedValue == 5 || $selectedValue == 6 || $selectedValue == 7) {
            $('#Q822').show(); // NO Header Hide+
            //Hide other questions
            $('#Q823').hide();
            $('.H824').hide();
            $('#Q824').hide();
            $('.H825').hide();
            $('#Q825').hide();
            $('.H826').hide();
            $('#Q826').hide();
            $('.H827').hide();
            $('#Q827').hide();
        }
        else {
            $('#Q822').hide(); // NO Header Hide+
            //Hide other questions
            $('#Q823').show();
            $('.H824').show();
            $('#Q824').show();
            $('.H825').show();
            $('#Q825').show();
            $('.H826').show();
            $('#Q826').show();
            $('.H827').show();
            $('#Q827').show();
        }
    });


    $(document).on('change', '#Q828_D1', function () {
        $selectedValue = $('#Q828_D1').val();

        if ($selectedValue == 1) {
            $('#Q829').hide();
        }
        else {
            $('#Q829').show();
        }
    });

    $(document).on('change', '#Q831_D1', function () {
        $selectedValue = $('#Q831_D1').val();

        if ($selectedValue == 5 || $selectedValue == 6 || $selectedValue == 7) {
            $('#Q831_2').show(); // NO Header Hide+
            //Hide other questions
            $('#Q832').hide();
            $('.H833').hide();
            $('#Q833').hide();
            $('.H834').hide();
            $('#Q834').hide();
            $('.H835').hide();
            $('#Q835').hide();
            $('.H836').hide();
            $('#Q836').hide();
        }
        else {
            $('#Q831_2').hide(); // NO Header Hide+
            //Hide other questions
            $('#Q832').show();
            $('.H833').show();
            $('#Q833').show();
            $('.H834').show();
            $('#Q834').show();
            $('.H835').show();
            $('#Q835').show();
            $('.H836').show();
            $('#Q836').show();
        }
    });

    $(document).on('change', '#Q843_D1', function () {
        $selectedValue = $('#Q843_D1').val();

        if ($selectedValue != 0 && $selectedValue != 1) {
            $('#Q844').show(); // NO Header Hide+
        }
        else {
            $('#Q844').hide();
        }
    });

    $(document).on('change', '#Q848_D1', function () {
        $selectedValue = $('#Q848_D1').val();
        if ($selectedValue == 7) {
            $('#internationalHotelSection').hide();
            $('#internationalTicketSection').hide();
        }
        else {
            $('#internationalHotelSection').show();
            $('#internationalTicketSection').show();
        }
    });

    $(document).on('change', '#Q851_D1', function () {
        $selectedValue = $('#Q851_D1').val();

        if (($selectedValue == 4 || $selectedValue == 5) && (isInternationalOpen)) {
            $('#Q890').show();
            $('.H890').show();
        }
        else {
            $('#Q890').hide();
            $('.H890').hide();
        }
    });

    $(document).on('change', '#Q855_D1', function () {
        $selectedValue = $('#Q855_D1').val();

        if ($selectedValue == 5 || $selectedValue == 6 || $selectedValue == 7) {
            $('#Q855_1').show(); // NO Header Hide+
            //Hide other questions
            $('.H856').hide();
            $('#Q856').hide();
            $('.H857').hide();
            $('#Q857').hide();
            $('.H858').hide();
            $('#Q858').hide();
            $('.H859').hide();
            $('#Q859').hide();
            $('.H860').hide();
            $('#Q860').hide();
        }
        else {
            $('#Q855_1').hide();
            //Show other questions
            $('.H856').show();
            $('#Q856').show();
            $('.H857').show();
            $('#Q857').show();
            $('.H858').show();
            $('#Q858').show();
            $('.H859').show();
            $('#Q859').show();
            $('#Q860').show();
        }
    });

    ///// International Ticket 

    $(document).on('change', '#Q865_D1', function () {
        $selectedValue = $('#Q865_D1').val();

        if ($selectedValue == 5 || $selectedValue == 6 || $selectedValue == 7) {
            $('#Q865_2').show(); // NO Header Hide+
            //Hide other questions
            $('.H866').hide();
            $('#Q866').hide();
            $('.H867').hide();
            $('#Q867').hide();
            $('.H868').hide();
            $('#Q868').hide();
            $('.H869').hide();
            $('#Q869').hide();
            $('.H870').hide();
            $('#Q870').hide();
        }
        else {
            $('#Q865_2').hide();
            //Show other questions
            $('.H866').show();
            $('#Q866').show();
            $('.H867').show();
            $('#Q867').show();
            $('.H868').show();
            $('#Q868').show();
            $('.H869').show();
            $('#Q869').show();
            $('.H870').show();
            $('#Q870').show();
        }
    });

    // =======================================================
    // ================== Generate Textbox ===================
    // =======================================================

    $(document).on('click', '#Q807_C98', function () {
        generateTextBox('Q807_C98');
    });

    $(document).on('click', '#Q817_C98_1', function () {
        generateTextBox('Q817_C98_1');
    });

    $(document).on('click', '#Q817_C98_2', function () {
        generateTextBox('Q817_C98_2');
    });

    $(document).on('click', '#Q817_C98_3', function () {
        generateTextBox('Q817_C98_3');
    });

    $(document).on('click', '#Q817_C98_4', function () {
        generateTextBox('Q817_C98_4');
    });

    $(document).on('click', '#Q890_C98_1', function () {
        generateTextBox('Q890_C98_1');
    });

    $(document).on('click', '#Q890_C98_2', function () {
        generateTextBox('Q890_C98_2');
    });

    $(document).on('click', '#Q890_C98_3', function () {
        generateTextBox('Q890_C98_3');
    });

    $(document).on('click', '#Q890_C98_4', function () {
        generateTextBox('Q890_C98_4');
    });

    $(document).on('click', '#Q825_1_C98', function () {
        generateTextBox('Q825_1_C98');
    });

    $(document).on('click', '#Q825_2_C98', function () {
        generateTextBox('Q825_2_C98');
    });

    $(document).on('click', '#Q834_111_1_C98', function () {
        generateTextBox('Q834_111_1_C98');
    });

    $(document).on('click', '#Q834_2_C98', function () {
        generateTextBox('Q834_2_C98');
    });

    $(document).on('click', '#Q868_111_1_C98', function () {
        generateTextBox('Q868_111_1_C98');
    });

    $(document).on('click', '#Q858_2_C98', function () {
        generateTextBox('Q858_2_C98');
    });

    $(document).on('click', '#Q868_1_C98', function () {
        generateTextBox('Q868_1_C98');
    });

    $(document).on('click', '#Q868_2_C98', function () {
        generateTextBox('Q868_2_C98');
    });

    ///////////////Dropdown//////////////

    $(document).on('click', '#Q804_D1', function () {
        generateTextBoxForDropDown('Q804_D1', '98');
    });

    $(document).on('click', '#Q805_D1', function () {
        generateTextBoxForDropDown('Q805_D1', '98');
    });

    $(document).on('click', '#Q808_D1', function () {
        generateTextBoxForDropDown('Q808_D1', '98');
    });

    $(document).on('click', '#Q811_D1', function () {
        generateTextBoxForDropDown('Q811_D1', '98');
    });

    $(document).on('click', '#Q813_D1', function () {
        generateTextBoxForDropDown('Q813_D1', '98');
    });

    $(document).on('click', '#Q819_D1', function () {
        generateTextBoxForDropDown('Q819_D1', '98');
    });

    $(document).on('click', '#Q822_D1', function () {
        generateTextBoxForDropDown('Q822_D1', '98');
    });

    $(document).on('click', '#Q829_D1', function () {
        generateTextBoxForDropDown('Q829_D1', '98');
    });

    $(document).on('click', '#Q831_D2', function () {
        generateTextBoxForDropDown('Q831_D2', '98');
    });

    $(document).on('click', '#Q848_D1', function () {
        generateTextBoxForDropDown('Q848_D1', '98');
    });

    $(document).on('click', '#Q885_D1', function () {
        generateTextBoxForDropDown('Q885_D1', '98');
    });

    ///////////////////////////////////////////////////////////////////

    /////////////////////////////// Dialog Box /////////////////////////////////////////////////

    var radio1Value = "";
    var dialog1 = $('#dialog-form-1').dialog({
        resizable: false,
        autoOpen: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: {
            "Submit": function () {
                radio1Value = $('input[name="radio1"]:checked').val();
                if (radio1Value == "" || radio1Value == null || radio1Value == undefined) {
                    alert("Please select the right option");
                    return false;
                }
                else {
                    dialog1.dialog("close");
                }
            }
        },
        beforeClose: function () {
            radio1Value = $('input[name="radio1"]:checked').val();
            if (radio1Value == "" || radio1Value == null || radio1Value == undefined) {
                alert("Please select the right option");
                return false;
            }
            else {
                return true;
            }
        },
        close: function () {
            dialog1.dialog("close");
        }
    });

    var radio2Value = "";
    var dialog2 = $('#dialog-form-2').dialog({
        resizable: false,
        autoOpen: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: {
            "Submit": function () {
                radio2Value = $('input[name="radio2"]:checked').val();
                if (radio2Value == "" || radio2Value == null || radio2Value == undefined) {
                    alert("Please select the right option");
                    return false;
                }
                else {
                    dialog2.dialog("close");
                }
            }
        },
        beforeClose: function () {
            radio2Value = $('input[name="radio2"]:checked').val();
            if (radio2Value == "" || radio2Value == null || radio2Value == undefined) {
                alert("Please select the right option");
                return false;
            }
            else {
                return true;
            }
        },
        close: function () {
            dialog2.dialog("close");
        }
    });

    $(document).on('change', '#Q804_D1', function () {
        var val = $('#Q804_D1').val();
        if (val == 3) {
            dialog1.dialog("open");
        }
        else if (val == 4) {
            dialog2.dialog("open");
        }
    });

    $(document).on('change', '#Q839_D1', function () {
        var val = $('#Q839_D1').val();
        if (val == 3) {
            dialog1.dialog("open");
        }
        else if (val == 4) {
            dialog2.dialog("open");
        }
    });


    //////////////////////////////////////////////////////

    //travelSites = [
    //    'MakeMyTrip',
    //    'Thomas Cook',
    //    'Tripadvisor',
    //    'Ixigo',
    //    'Expedia',
    //    'Paytm',
    //    'ClearTrip',
    //    'Yatra',
    //    'Travelchacha',
    //    'Ezeego1',
    //    'Goibibo',
    //    'EaseMyTrip',
    //    'Travelguru.com'
    //]

    //For ayush
    //$(document).on('click', '.Q834', function () {
    //    //var Q834 = $('input:checkbox:checked.Q834').map(function () {
    //    //    alert('hello');
    //    //    return this.value;
    //    //}).get();
    //    if (this.checked == true) {
    //        if (arr_Q834.indexOf(this.value) == -1) {
    //            arr_Q834.push(this.value);
    //        }
    //        var options = '';
    //        if (arr_Q834.length != 0) {
    //            for (var i = 0; i < arr_Q834.length; i++) {
    //                options += '<option value="' + travelSites[arr_Q834[i] - 1] + '">' + travelSites[arr_Q834[i] - 1] + '</option>';
    //            }
    //            $(options).addBack($('.travel_parent')).last();
    //        }
    //    }
    //    else if(this.checked == false) {
    //        var index = arr_Q834.indexOf(this.value);
    //        if (index > -1) {
    //            arr_Q834.splice(index, 1);
    //        }
    //        var options = '';
    //        if (arr_Q834.length != 0) {
    //            for (var i = 0; i < arr_Q834.length; i++) {
    //                options += '<option value="' + travelSites[arr_Q834[i] - 1] + '">' + travelSites[arr_Q834[i] - 1] + '</option>';
    //            }
    //            $(options).add($('.travel_parent')).last();
    //        }
    //    }
    //var options = '';
    //if (arr_Q834.length != 0) {
    //    for (var i = 0; i < arr_Q834.length; i++) {
    //        options += '<option value="' + travelSites[arr_Q834[i]-1] + '">' + travelSites[arr_Q834[i]-1] + '</option>';
    //    }
    //    $(options).insertAfter($('.travel_parent')).last();
    //}
        
    //});


    hotelSites = [
        'MakeMyTrip',
        'Thomas Cook',
        'Tripadvisor',
        'Ixigo',
        'Expedia',
        'Paytm',
        'ClearTrip',
        'Yatra',
        'Travelchacha',
        'Airbnb',
        'Goibibo',
        'OYO rooms',
        'Trivago',
        'Cox & Kings',
        'SOTC',
        'Other',
        'None'
    ]

    var hotelSitesArr = [];
    var DublicateHotelArr = [];

    $(document).on('click', '.hotelSitesData', function () {
        //var Q825 = $('input:checkbox:checked.Q825').map(function () {
        //    return this.value;
        //}).get();
        if (this.checked == true) {
            //if (hotelSitesArr.indexOf(this.value) == -1) {
            DublicateHotelArr.push(this.value);
            //}
        }
        else if (this.checked == false) {
            var index = DublicateHotelArr.indexOf(this.value);
            if (index > -1) {
                DublicateHotelArr.splice(index, 1);
            }
        }
        
        hotelSitesArr = [];
        $.each(DublicateHotelArr, function (i, ele) {
            if ($.inArray(ele, hotelSitesArr) === -1) hotelSitesArr.push(ele);
        });
        
        if (hotelSitesArr.length > 1) {

            //Show Up the next questions
            $(".H826").show();
            $("#Q826").show();
            $('.H827').show();
            $('#Q827').show();

            SetDynamicHotelQues(); //For #Q827
            $("#Q826_D1").trigger("click");
            $("#Q826_D2").trigger("click");
            $("#Q826_D3").trigger("click");
            $("#Q826_D4").trigger("click");
            $("#Q826_D5").trigger("click");
            $("#Q826_D6").trigger("click");
            $("#Q826_D7").trigger("click");
            $("#Q826_D8").trigger("click");
            $("#Q826_D9").trigger("click");
            $("#Q826_D10").trigger("click");
            $("#Q826_D11").trigger("click");
            $("#Q826_D12").trigger("click");
            $("#Q826_D13").trigger("click");
            $("#Q826_D14").trigger("click");
        }
        else {
            //Show Up the next questions
            $(".H826").hide();
            $("#Q826").hide();
            $('.H827').hide();
            $('#Q827').hide();
        }
    });

    function SetDynamicHotelQues(){
        var section = $('#Q827').find('section');
        section.children().remove();
        if (hotelSitesArr.length == 0) {
            $('.H827').hide();
        }
        else {
            $('.H827').show();
        }

        $.each(hotelSitesArr, function (i, p) {
            console.log(p, hotelSites[p - 1]);
            if (hotelSites[p - 1] != "None") {
                section.append($("<p class='col-md-4' style='font-weight:normal;'></p>").text(hotelSites[p - 1]));
            }
        });
        section.children().each(function () {
            $("<select class='style_dd form-control' style='margin-top:5px;' name='Q827_1' id='Q827_D1' required=''>"
                        + "<option value='1'>Very likely to recommend</option>"
                        + "<option value='2'>May recommend</option>"
                        + "<option value='3'>May /may not recommend</option>"
                        + "<option value='4'>May not recommend</option>"
                        + "<option value='5'>Not at all likely to recommend</option>"
                        + "</select>").insertAfter($(this));
        });
    }

    $("#Q826_D1").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(hotelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i + 1).text(hotelSites[p - 1]));
        });
        $('#Q826_D1').append(myselect.html());

    });
        

    $("#Q826_D2").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(hotelSitesArr, function (i, p) {
            console.log(p);
            myselect.append($('<option></option>').val(i + 1).text(hotelSites[p - 1]));
        });
        $('#Q826_D2').append(myselect.html());
    });

    $("#Q826_D3").on("click", function () {
        console.log('populating data');
        console.log(travelSitesArr);
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(hotelSitesArr, function (i, p) {
            console.log(p);
            myselect.append($('<option></option>').val(i + 1).text(hotelSites[p - 1]));
        });
        $('#Q826_D3').append(myselect.html());
    });

    $("#Q826_D4").on("click", function () {
        console.log('populating data');
        console.log(travelSitesArr);
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(hotelSitesArr, function (i, p) {
            console.log(p);
            myselect.append($('<option></option>').val(i + 1).text(hotelSites[p - 1]));
        });
        $('#Q826_D4').append(myselect.html());
    });

    $("#Q826_D5").on("click", function () {
        console.log('populating data');
        console.log(travelSitesArr);
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(hotelSitesArr, function (i, p) {
            console.log(p);
            myselect.append($('<option></option>').val(i + 1).text(hotelSites[p - 1]));
        });
        $('#Q826_D5').append(myselect.html());
    });

    $("#Q826_D6").on("click", function () {
        console.log('populating data');
        console.log(travelSitesArr);
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(hotelSitesArr, function (i, p) {
            console.log(p);
            myselect.append($('<option></option>').val(i + 1).text(hotelSites[p - 1]));
        });
        $('#Q826_D6').append(myselect.html());
    });

    $("#Q826_D7").on("click", function () {
        console.log('populating data');
        console.log(travelSitesArr);
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(hotelSitesArr, function (i, p) {
            console.log(p);
            myselect.append($('<option></option>').val(i + 1).text(hotelSites[p - 1]));
        });
        $('#Q826_D7').append(myselect.html());
    });

    $("#Q826_D8").on("click", function () {
        console.log('populating data');
        console.log(travelSitesArr);
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(hotelSitesArr, function (i, p) {
            console.log(p);
            myselect.append($('<option></option>').val(i + 1).text(hotelSites[p - 1]));
        });
        $('#Q826_D8').append(myselect.html());
    });

    $("#Q826_D9").on("click", function () {
        console.log('populating data');
        console.log(travelSitesArr);
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(hotelSitesArr, function (i, p) {
            console.log(p);
            myselect.append($('<option></option>').val(i + 1).text(hotelSites[p - 1]));
        });
        $('#Q826_D9').append(myselect.html());
    });

    $("#Q826_D10").on("click", function () {
        console.log('populating data');
        console.log(travelSitesArr);
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(hotelSitesArr, function (i, p) {
            console.log(p);
            myselect.append($('<option></option>').val(i + 1).text(hotelSites[p - 1]));
        });
        $('#Q826_D10').append(myselect.html());
    });

    $("#Q826_D11").on("click", function () {
        console.log('populating data');
        console.log(travelSitesArr);
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(hotelSitesArr, function (i, p) {
            console.log(p);
            myselect.append($('<option></option>').val(i + 1).text(hotelSites[p - 1]));
        });
        $('#Q826_D11').append(myselect.html());
    });

    $("#Q826_D12").on("click", function () {
        console.log('populating data');
        console.log(travelSitesArr);
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(hotelSitesArr, function (i, p) {
            console.log(p);
            myselect.append($('<option></option>').val(i + 1).text(hotelSites[p - 1]));
        });
        $('#Q826_D12').append(myselect.html());
    });

    $("#Q826_D13").on("click", function () {
        console.log('populating data');
        console.log(travelSitesArr);
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(hotelSitesArr, function (i, p) {
            console.log(p);
            myselect.append($('<option></option>').val(i + 1).text(hotelSites[p - 1]));
        });
        $('#Q826_D13').append(myselect.html());
    });

    $("#Q826_D14").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(hotelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i + 1).text(hotelSites[p - 1]));
        });
        $('#Q826_D14').append(myselect.html());
    });

    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    travelSites = [
        'MakeMyTrip',
        'Thomas Cook',
        'Tripadvisor',
        'Ixigo',
        'Expedia',
        'Paytm',
        'ClearTrip',
        'Yatra',
        'Travelchacha',
        'Ezeego1',
        'Goibibo',
        'EaseMyTrip',
        'Travelguru.com',
        'Other',
        'None'
    ]

    var travelSitesArr = [];
    var dublicateTravelSitesArr = [];

    $(document).on('click', '.ticketSitesData', function () {
        //var Q834 = $('input:checkbox:checked.Q834').map(function () {
        //    return this.value;
        //}).get();
        if (this.checked == true) {
            //if (travelSitesArr.indexOf(this.value) == -1) {
                dublicateTravelSitesArr.push(this.value);
            //}
        }
        else if (this.checked == false) {
            var index = dublicateTravelSitesArr.indexOf(this.value);
            if (index > -1) {
                dublicateTravelSitesArr.splice(index, 1);
            }
        }

        travelSitesArr = [];
        $.each(dublicateTravelSitesArr, function (i, ele) {
            if ($.inArray(ele, travelSitesArr) === -1) travelSitesArr.push(ele);
        });

        SetDynamicTravelQues();
        $("#Q835_D1").trigger("click");
        $("#Q835_D2").trigger("click");
        $("#Q835_D3").trigger("click");
        $("#Q835_D4").trigger("click");
        $("#Q835_D5").trigger("click");
        $("#Q835_D6").trigger("click");
        $("#Q835_D7").trigger("click");
        $("#Q835_D8").trigger("click");
        $("#Q835_D9").trigger("click");
        $("#Q835_D10").trigger("click");
        $("#Q835_D11").trigger("click");
        $("#Q835_D12").trigger("click");
        $("#Q835_D13").trigger("click");
        $("#Q835_D14").trigger("click");
    });

    function SetDynamicTravelQues() {
        var section = $('#Q836').find('section');
        section.children().remove();
        if (travelSitesArr.length == 0) {
            $('.H836').hide();
        }
        else {
            $('.H836').show();
        }

        $.each(travelSitesArr, function (i, p) {
            if (travelSites[p - 1] != "None") {
                section.append($("<p class='col-md-4' style='font-weight:normal;'></p>").text(travelSites[p - 1]));
            }
        });
        section.children().each(function () {
            $("<select class='style_dd form-control' style='margin-top:5px;' name='Q836_1' id='Q836_D1' required=''>"
                        + "<option value='1'>Very likely to recommend</option>"
                        + "<option value='2'>May recommend</option>"
                        + "<option value='3'>May /may not recommend</option>"
                        + "<option value='4'>May not recommend</option>"
                        + "<option value='5'>Not at all likely to recommend</option>"
                        + "</select>").insertAfter($(this));
        });
    }

    //$('.Q834:checkbox:checked').each(function () {
    //    travelSitesArr.push($(this).attr('name'));
    //});

    $("#Q835_D1").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(travelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i+1).text(travelSites[p-1]));
        });
        $('#Q835_D1').append(myselect.html());
    });

    $("#Q835_D2").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(travelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i+1).text(travelSites[p-1]));
        });
        $('#Q835_D2').append(myselect.html());
    });

    $("#Q835_D3").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(travelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i+1).text(travelSites[p-1]));
        });
        $('#Q835_D3').append(myselect.html());
    });

    $("#Q835_D4").on("click", function () {
        console.log('populating data');
        console.log(travelSitesArr);
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(travelSitesArr, function (i, p) {
            console.log(p);
            myselect.append($('<option></option>').val(i+1).text(travelSites[p-1]));
        });
        $('#Q835_D4').append(myselect.html());
    });

    $("#Q835_D5").on("click", function () {
        console.log('populating data');
        console.log(travelSitesArr);
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(travelSitesArr, function (i, p) {
            console.log(p);
            myselect.append($('<option></option>').val(i+1).text(travelSites[p-1]));
        });
        $('#Q835_D5').append(myselect.html());
    });

    $("#Q835_D6").on("click", function () {
        console.log('populating data');
        console.log(travelSitesArr);
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(travelSitesArr, function (i, p) {
            console.log(p);
            myselect.append($('<option></option>').val(i+1).text(travelSites[p-1]));
        });
        $('#Q835_D6').append(myselect.html());
    });

    $("#Q835_D7").on("click", function () {
        console.log('populating data');
        console.log(travelSitesArr);
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(travelSitesArr, function (i, p) {
            console.log(p);
            myselect.append($('<option></option>').val(i+1).text(travelSites[p-1]));
        });
        $('#Q835_D7').append(myselect.html());
    });

    $("#Q835_D8").on("click", function () {
        console.log('populating data');
        console.log(travelSitesArr);
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(travelSitesArr, function (i, p) {
            console.log(p);
            myselect.append($('<option></option>').val(i+1).text(travelSites[p-1]));
        });
        $('#Q835_D8').append(myselect.html());
    });

    $("#Q835_D9").on("click", function () {
        console.log('populating data');
        console.log(travelSitesArr);
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(travelSitesArr, function (i, p) {
            console.log(p);
            myselect.append($('<option></option>').val(i+1).text(travelSites[p-1]));
        });
        $('#Q835_D9').append(myselect.html());
    });

    $("#Q835_D10").on("click", function () {
        console.log('populating data');
        console.log(travelSitesArr);
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(travelSitesArr, function (i, p) {
            console.log(p);
            myselect.append($('<option></option>').val(i+1).text(travelSites[p-1]));
        });
        $('#Q835_D10').append(myselect.html());
    });

    $("#Q835_D11").on("click", function () {
        console.log('populating data');
        console.log(travelSitesArr);
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(travelSitesArr, function (i, p) {
            console.log(p);
            myselect.append($('<option></option>').val(i+1).text(travelSites[p-1]));
        });
        $('#Q835_D11').append(myselect.html());
    });

    $("#Q835_D12").on("click", function () {
        console.log('populating data');
        console.log(travelSitesArr);
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(travelSitesArr, function (i, p) {
            console.log(p);
            myselect.append($('<option></option>').val(i+1).text(travelSites[p-1]));
        });
        $('#Q835_D12').append(myselect.html());
    });

    $("#Q835_D13").on("click", function () {
        console.log('populating data');
        console.log(travelSitesArr);
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(travelSitesArr, function (i, p) {
            console.log(p);
            myselect.append($('<option></option>').val(i+1).text(travelSites[p-1]));
        });
        $('#Q835_D13').append(myselect.html());
    });

    $("#Q835_D14").on("click", function () {
        console.log('populating data');
        console.log(travelSitesArr);
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(travelSitesArr, function (i, p) {
            console.log(p);
            myselect.append($('<option></option>').val(i+1).text(travelSites[p-1]));
        });
        $('#Q835_D14').append(myselect.html());
    });



    ///////////////////////////////////////////////////////////////////

    // ================= International Hotel Booking -===============================

    InthotelSites = [
        'MakeMyTrip',
        'Thomas Cook',
        'Tripadvisor',
        'Ixigo',
        'Expedia',
        'Paytm',
        'ClearTrip',
        'Yatra',
        'Travelchacha',
        'Airbnb',
        'Goibibo',
        'OYO rooms',
        'Trivago',
        'Cox & Kings',
        'SOTC',
        'Other',
        'None'
    ]

    var InthotelSitesArr = [];
    var IntDublicateHotelArr = [];

    $(document).on('click', '.internationalHotelSitesData', function () {

        if (this.checked == true) {
            IntDublicateHotelArr.push(this.value);
        }
        else if (this.checked == false) {
            var index = IntDublicateHotelArr.indexOf(this.value);
            if (index > -1) {
                IntDublicateHotelArr.splice(index, 1);
            }
        }

        InthotelSitesArr = [];
        $.each(IntDublicateHotelArr, function (i, ele) {
            if ($.inArray(ele, InthotelSitesArr) === -1) InthotelSitesArr.push(ele);
        });

        if (InthotelSitesArr.length > 1) {

            //Show Up the next questions
            $(".H859").show();
            $("#Q859").show();
            $('.H860').show();
            $('#Q860').show();

            SetDynamicIntHotelQues(); //For #Q860
            $("#Q859_D1").trigger("click");
            $("#Q859_D2").trigger("click");
            $("#Q859_D3").trigger("click");
            $("#Q859_D4").trigger("click");
            $("#Q859_D5").trigger("click");
            $("#Q859_D6").trigger("click");
            $("#Q859_D7").trigger("click");
            $("#Q859_D8").trigger("click");
            $("#Q859_D9").trigger("click");
            $("#Q859_D10").trigger("click");
            $("#Q859_D11").trigger("click");
            $("#Q859_D12").trigger("click");
            $("#Q859_D13").trigger("click");
            $("#Q859_D14").trigger("click");
        }
        else {
            //Show Up the next questions
            $(".H859").hide();
            $("#Q859").hide();
            $('.H860').hide();
            $('#Q860').hide();
        }
    });

    function SetDynamicIntHotelQues() {
        var section = $('#Q860').find('section');
        section.children().remove();
        if (InthotelSitesArr.length == 0) {
            $('.H860').hide();
        }
        else {
            $('.H860').show();
        }

        $.each(InthotelSitesArr, function (i, p) {
            console.log(p, InthotelSites[p - 1]);
            if (InthotelSites[p - 1] != "None") {
                section.append($("<p class='col-md-4' style='font-weight:normal;'></p>").text(InthotelSites[p - 1]));
            }
        });
        section.children().each(function () {
            $("<select class='style_dd form-control' style='margin-top:5px;' name='Q860_1' id='Q860_D1' required=''>"
                        + "<option value='1'>Very likely to recommend</option>"
                        + "<option value='2'>May recommend</option>"
                        + "<option value='3'>May /may not recommend</option>"
                        + "<option value='4'>May not recommend</option>"
                        + "<option value='5'>Not at all likely to recommend</option>"
                        + "</select>").insertAfter($(this));
        });
    }

    $("#Q859_D1").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(InthotelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i + 1).text(InthotelSites[p - 1]));
        });
        $('#Q859_D1').append(myselect.html());
    });

    $("#Q859_D2").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(InthotelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i + 1).text(InthotelSites[p - 1]));
        });
        $('#Q859_D2').append(myselect.html());
    });

    $("#Q859_D3").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(InthotelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i + 1).text(InthotelSites[p - 1]));
        });
        $('#Q859_D3').append(myselect.html());
    });

    $("#Q859_D4").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(InthotelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i + 1).text(InthotelSites[p - 1]));
        });
        $('#Q859_D4').append(myselect.html());
    });

    $("#Q859_D5").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(InthotelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i + 1).text(InthotelSites[p - 1]));
        });
        $('#Q859_D5').append(myselect.html());
    });

    $("#Q859_D6").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(InthotelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i + 1).text(InthotelSites[p - 1]));
        });
        $('#Q859_D6').append(myselect.html());
    });

    $("#Q859_D7").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(InthotelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i + 1).text(InthotelSites[p - 1]));
        });
        $('#Q859_D7').append(myselect.html());
    });

    $("#Q859_D8").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(InthotelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i + 1).text(InthotelSites[p - 1]));
        });
        $('#Q859_D8').append(myselect.html());
    });

    $("#Q859_D9").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(InthotelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i + 1).text(InthotelSites[p - 1]));
        });
        $('#Q859_D9').append(myselect.html());
    });

    $("#Q859_D10").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(InthotelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i + 1).text(InthotelSites[p - 1]));
        });
        $('#Q859_D10').append(myselect.html());
    });

    $("#Q859_D11").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(InthotelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i + 1).text(InthotelSites[p - 1]));
        });
        $('#Q859_D11').append(myselect.html());
    });

    $("#Q859_D12").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(InthotelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i + 1).text(InthotelSites[p - 1]));
        });
        $('#Q859_D12').append(myselect.html());
    });

    $("#Q859_D13").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(InthotelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i + 1).text(InthotelSites[p - 1]));
        });
        $('#Q859_D13').append(myselect.html());
    });

    $("#Q859_D14").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(InthotelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i + 1).text(InthotelSites[p - 1]));
        });
        $('#Q859_D14').append(myselect.html());
    });

    //============================= International Ticket Booking -======================================

    InttravelSites = [
        'MakeMyTrip',
        'Thomas Cook',
        'Tripadvisor',
        'Ixigo',
        'Expedia',
        'Paytm',
        'ClearTrip',
        'Yatra',
        'Travelchacha',
        'Ezeego1',
        'Goibibo',
        'EaseMyTrip',
        'Travelguru.com',
        'Other',
        'None'
    ]

    var InttravelSitesArr = [];
    var IntdublicateTravelSitesArr = [];

    $(document).on('click', '.IntticketSitesData', function () {

        if (this.checked == true) {
            IntdublicateTravelSitesArr.push(this.value);
        }
        else if (this.checked == false) {
            var index = IntdublicateTravelSitesArr.indexOf(this.value);
            if (index > -1) {
                IntdublicateTravelSitesArr.splice(index, 1);
            }
        }

        InttravelSitesArr = [];
        $.each(IntdublicateTravelSitesArr, function (i, ele) {
            if ($.inArray(ele, InttravelSitesArr) === -1) InttravelSitesArr.push(ele);
        });

        if (InttravelSitesArr.length > 1) {
            $('.H869').show();
            $('#Q869').show();
            $('.H870').show();
            $('#Q870').show();

            SetDynamicIntTravelQues();
            $("#Q869_D1").trigger("click");
            $("#Q869_D2").trigger("click");
            $("#Q869_D3").trigger("click");
            $("#Q869_D4").trigger("click");
            $("#Q869_D5").trigger("click");
            $("#Q869_D6").trigger("click");
            $("#Q869_D7").trigger("click");
            $("#Q869_D8").trigger("click");
            $("#Q869_D9").trigger("click");
            $("#Q869_D10").trigger("click");
            $("#Q869_D11").trigger("click");
            $("#Q869_D12").trigger("click");
            $("#Q869_D13").trigger("click");
            $("#Q869_D14").trigger("click");
        }
        else {
            $('.H869').hide();
            $('#Q869').hide();
            $('.H870').hide();
            $('#Q870').hide();
        }
    });

    function SetDynamicIntTravelQues() {
        var section = $('#Q870').find('section');
        section.children().remove();
        if (InttravelSitesArr.length == 0) {
            $('.H870').hide();
        }
        else {
            $('.H870').show();
        }

        $.each(InttravelSitesArr, function (i, p) {
            if (InttravelSites[p - 1] != "None") {
                section.append($("<p class='col-md-4' style='font-weight:normal;'></p>").text(InttravelSites[p - 1]));
            }
        });
        section.children().each(function () {
            $("<select class='style_dd form-control' style='margin-top:5px;' name='Q870_1' id='Q870_D1' required=''>"
                        + "<option value='1'>Very likely to recommend</option>"
                        + "<option value='2'>May recommend</option>"
                        + "<option value='3'>May /may not recommend</option>"
                        + "<option value='4'>May not recommend</option>"
                        + "<option value='5'>Not at all likely to recommend</option>"
                        + "</select>").insertAfter($(this));
        });
    }

    $("#Q869_D1").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(InttravelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i + 1).text(InttravelSites[p - 1]));
        });
        $('#Q869_D1').append(myselect.html());
    });

    $("#Q869_D2").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(InttravelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i + 1).text(InttravelSites[p - 1]));
        });
        $('#Q869_D2').append(myselect.html());
    });

    $("#Q869_D3").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(InttravelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i + 1).text(InttravelSites[p - 1]));
        });
        $('#Q869_D3').append(myselect.html());
    });

    $("#Q869_D4").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(InttravelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i + 1).text(InttravelSites[p - 1]));
        });
        $('#Q869_D4').append(myselect.html());
    });

    $("#Q869_D5").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(InttravelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i + 1).text(InttravelSites[p - 1]));
        });
        $('#Q869_D5').append(myselect.html());
    });

    $("#Q869_D6").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(InttravelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i + 1).text(InttravelSites[p - 1]));
        });
        $('#Q869_D6').append(myselect.html());
    });

    $("#Q869_D7").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(InttravelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i + 1).text(InttravelSites[p - 1]));
        });
        $('#Q869_D7').append(myselect.html());
    });

    $("#Q869_D8").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(InttravelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i + 1).text(InttravelSites[p - 1]));
        });
        $('#Q869_D8').append(myselect.html());
    });

    $("#Q869_D9").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(InttravelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i + 1).text(InttravelSites[p - 1]));
        });
        $('#Q869_D9').append(myselect.html());
    });

    $("#Q869_D10").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(InttravelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i + 1).text(InttravelSites[p - 1]));
        });
        $('#Q869_D10').append(myselect.html());
    });

    $("#Q869_D11").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(InttravelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i + 1).text(InttravelSites[p - 1]));
        });
        $('#Q869_D11').append(myselect.html());
    });

    $("#Q869_D12").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(InttravelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i + 1).text(InttravelSites[p - 1]));
        });
        $('#Q869_D12').append(myselect.html());
    });

    $("#Q869_D13").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(InttravelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i + 1).text(InttravelSites[p - 1]));
        });
        $('#Q869_D13').append(myselect.html());
    });

    $("#Q869_D14").on("click", function () {
        $(this).find("option:not(:first)").remove();
        var myselect = $('<select>');
        $.each(InttravelSitesArr, function (i, p) {
            myselect.append($('<option></option>').val(i + 1).text(InttravelSites[p - 1]));
        });
        $('#Q869_D14').append(myselect.html());
    });

    // =======================================================
    // ==================== Functions ========================
    // =======================================================

    function generateTextBox($source) {
        if ($('#' + $source).prop("checked") == true) {
            $('.' + $source).show();
        }
        else {
            $('.' + $source).hide();
        }
    }

    function generateTextBoxForDropDown($source, $value) {
        $selectedValue = $('#' + $source).val();
        if ($selectedValue == $value) {
            $('.' + $source).show();
        }
        else {
            $('.' + $source).hide();
        }
    }

});

