$(function () {

    // =======================================================
    // ==================== Jquery Events ====================
    // =======================================================

    $('.appendTextBox').hide();
    $('#Q605').hide();
    $('#Q606').hide();
    $('#Q607').hide();
    $('#Q608').hide();
    $('#Q609').hide();
    $('#Q610').hide();
    $('#Q611').hide();
    $('#Q612').hide();
    $('#Q613').hide();
    $('#Q614').hide();
    $('#Q615').hide();
    $('#Q616').hide();
    $('#Q617').hide();
    $('#Q618').hide();
    $('#Q619').hide();
    $('#Q620').hide();
    $('#Q621').hide();
    $('#Q622').hide();
    $('#Q623').hide();
    $('#Q624').hide();
    $('#Q625').hide();
    $('#Q626').hide();
    $('#Q627').hide();
    $('#Q628').hide();
    $('#Q629').hide();
    $('#Q630').hide();
    $('#Q631').hide();
    $('#Q632').hide();
    $('#Q633').hide();
    $('#Q634').hide();
    $('#Q635').hide();
    $('#Q636').hide();
    $('#Q637').hide();
    $('#Q638').hide();
    $('#Q639').hide();
    $('#Q640').hide();
    $('#Q641').hide();
    $('#Q642').hide();
    $('#Q642_1').hide();
    $('#Q642_2').hide();
    $('#Q642_3').hide();
    $('#Q642_4').hide();
    $('#Q642_5').hide();
    $('#Q642_6').hide();
    $('#Q642_7').hide();
    $('#Q642_8').hide();
    $('#Q642_9').hide();
    $('#Q642_10').hide();
    $('#Q643').hide();
    $('#Q644').hide();
    $('#Q644_1').hide();
    $('#Q644_2').hide();
    $('#Q644_3').hide();
    $('#Q644_4').hide();
    $('#Q644_5').hide();
    $('#Q644_6').hide();
    $('#Q644_7').hide();
    $('#Q644_8').hide();
    $('#Q644_9').hide();
    $('#Q644_10').hide();
    $('#Q645').hide();
    $('#Q646').hide();
    $('#Q646_1').hide();
    $('#Q646_2').hide();
    $('#Q646_3').hide();
    $('#Q646_4').hide();
    $('#Q646_5').hide();
    $('#Q646_6').hide();
    $('#Q646_7').hide();
    $('#Q646_8').hide();
    $('#Q646_9').hide();
    $('#Q646_10').hide();

    $("#Q601_D1").trigger("change");
    $("#Q601_D2").trigger("change");
    // $("#Q604_D1").trigger("change");
    $("#Q609_D1").trigger("change");
    $("#Q613_D1").trigger("change");
    $("#Q616_D1").trigger("change");


    $(".rating li").hover(function () {
        var ind = $(this).index();
        var stars = $(this).parent().find('li');
        starLoop(ind, stars);
    }, function () {
        var rate_v = $(this).parent().find('.rating_value').val();
        var stars = $(this).parent().find('li');
        stars.removeClass('active');
        if (rate_v) {
            starLoop(rate_v - 1, stars);
        }
    });
    $(document).on('click', '.rating li', function () {
        var ind = $(this).index();
        var stars = $(this).parent().find('li');
        console.log("ind : " + ind);
        $(this).parent().find('.rating_value').val(ind + 1);
        starLoop(ind, stars);
    });

    function starLoop(index, stars) {
        stars.removeClass('active');
        for (var i = index; i >= 0; i--) {
            stars.eq(i).addClass('active');
        }
    }

    // =======================================================
    // ================== Jquery Events End ==================
    // =======================================================


    // =======================================================
    // ====================== Functions ======================
    // =======================================================

    function removeFromSourceToDestination($source, $destination) {
        $selectedValue = $('#' + $destination).val();
        $("#" + $source + " option[value='" + $selectedValue + "']").hide();
    }

    function checkForCheckBox($source) {
        if ($('#' + $source).prop("checked") == true) {
            $rst = $('.' + $source).val();
            console.log($source + " : " + $rst);
            if ($rst == "") {
                return true;
            }
        }
        return false;
    }

    function checkForDropdown($source, $value) {
        $selectedValue = $('#' + $source).val();
        if ($selectedValue == $value) {
            $rst = $('.' + $source).val();
            if ($rst == "") {
                return true;
            }
        }
        return false;
    }

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

    function uncheckCheckBox($source, $value) {
        if ($('#' + $value).is(':checked')) {
            $('.' + $source).removeAttr('checked');
            $('.' + $source).attr("disabled", true);
            $('.' + $source + '_C98').hide();
            $('#' + $value).prop('checked', true);
            $('#' + $value).removeAttr('disabled');
        }
        else {
            $('.' + $source).removeAttr("disabled");
        }
    }

    // =======================================================
    // ==================== Functions End ====================
    // =======================================================	


    // =======================================================
    // ================== Generate Textbox ===================
    // =======================================================

    $(document).on('click', '#Q606_C98', function () {
        generateTextBox('Q606_C98');
    });

    $(document).on('click', '#Q617_C98', function () {
        generateTextBox('Q617_C98');
    });

    $(document).on('click', '#Q607_C98', function () {
        generateTextBox('Q607_C98');
    });

    $(document).on('click', '#Q626_C98', function () {
        generateTextBox('Q626_C98');
    });

    $(document).on('click', '#Q627_C98', function () {
        generateTextBox('Q627_C98');
    });

    $(document).on('click', '#Q608_C98', function () {
        generateTextBox('Q608_C98');
    });

    $(document).on('click', '#Q615_C98', function () {
        generateTextBox('Q615_C98');
    });

    $(document).on('click', '#Q618_C98', function () {
        generateTextBox('Q618_C98');
    });

    $(document).on('click', '#Q611_D1', function () {
        generateTextBoxForDropDown('Q611_D1', '19');
    });

    $(document).on('click', '#Q611_D2', function () {
        generateTextBoxForDropDown('Q611_D2', '19');
    });

    $(document).on('click', '#Q611_D3', function () {
        generateTextBoxForDropDown('Q611_D3', '19');
    });

    $(document).on('click', '#Q624_D1', function () {
        generateTextBoxForDropDown('Q624_D1', '13');
    });

    $(document).on('click', '#Q624_D2', function () {
        generateTextBoxForDropDown('Q624_D2', '13');
    });

    $(document).on('click', '#Q624_D3', function () {
        generateTextBoxForDropDown('Q624_D3', '13');
    });

    $(document).on('click', '#Q625_D1', function () {
        generateTextBoxForDropDown('Q625_D1', '15');
    });

    $(document).on('click', '#Q625_D2', function () {
        generateTextBoxForDropDown('Q625_D2', '15');
    });

    $(document).on('click', '#Q625_D3', function () {
        generateTextBoxForDropDown('Q625_D3', '15');
    });

    $(document).on('click', '#Q628_D1', function () {
        generateTextBoxForDropDown('Q628_D1', '98');
    });

    $(document).on('click', '#Q631_C98', function () {
        generateTextBox('Q631_C98');
    });

    $(document).on('click', '#Q631_C99', function () {
        uncheckCheckBox('Q631', 'Q631_C99');
    });

    $(document).on('click', '#Q632_C98', function () {
        generateTextBox('Q632_C98');
    });

    $(document).on('click', '#Q632_C99', function () {
        uncheckCheckBox('Q632', 'Q632_C99');
    });

    $(document).on('click', '#Q633_C98', function () {
        generateTextBox('Q633_C98');
    });

    $(document).on('click', '#Q633_C99', function () {
        uncheckCheckBox('Q633', 'Q633_C99');
    });

    $(document).on('click', '#Q634_C98', function () {
        generateTextBox('Q634_C98');
    });
    $(document).on('click', '#Q634_C99', function () {
        uncheckCheckBox('Q634', 'Q634_C99');
    });

    $(document).on('click', '#Q635_C98', function () {
        generateTextBox('Q635_C98');
    });
    $(document).on('click', '#Q635_C99', function () {
        uncheckCheckBox('Q635', 'Q635_C99');
    });

    $(document).on('click', '#Q603_C99', function () {
        uncheckCheckBox('Q603', 'Q603_C99');
    });

    $(document).on('click', '#Q636_C98', function () {
        generateTextBox('Q636_C98');
    });
    $(document).on('click', '#Q636_C99', function () {
        uncheckCheckBox('Q636', 'Q636_C99');
    });

    $(document).on('click', '#Q638_C98', function () {
        generateTextBox('Q638_C98');
    });
    $(document).on('click', '#Q638_C99', function () {
        uncheckCheckBox('Q638', 'Q638_C99');
    });

    $(document).on('click', '#Q639_C98', function () {
        generateTextBox('Q639_C98');
    });
    $(document).on('click', '#Q639_C99', function () {
        uncheckCheckBox('Q639', 'Q639_C99');
    });

    $(document).on('click', '#Q640_C98', function () {
        generateTextBox('Q640_C98');
    });
    $(document).on('click', '#Q640_C99', function () {
        uncheckCheckBox('Q640', 'Q640_C99');
    });
    $(document).on('click', '#Q637_C99', function () {
        uncheckCheckBox('Q637', 'Q637_C99');
    });

    /*	$(document).on('click','#Q647_C98',function(){
            generateTextBox('Q647_C98');
        });
        */
    // =======================================================
    // ================ Generate Textbox End =================
    // =======================================================

    // =======================================================
    // ================ Remove From Dropdown =================
    // =======================================================

    $selectedValueQ611D1 = $('#Q611_D1').val();
    $("#Q611_D2 option[value='" + $selectedValueQ611D1 + "']").hide();
    $selectedValueQ611D2 = $('#Q611_D2').val();
    $("#Q611_D3 option[value='" + $selectedValueQ611D1 + "']").hide();
    $("#Q611_D3 option[value='" + $selectedValueQ611D2 + "']").hide();

    $(document).on('change', '#Q611_D1', function () {
        $('#Q611_D2 option').show();
        $('#Q611_D3 option').show();
        removeFromSourceToDestination('Q611_D2', "Q611_D1");
        removeFromSourceToDestination('Q611_D3', "Q611_D1");
        removeFromSourceToDestination('Q611_D3', "Q611_D2");
    });

    $(document).on('change', '#Q611_D2', function () {
        $('#Q611_D3 option').show();
        removeFromSourceToDestination('Q611_D3', "Q611_D1");
        removeFromSourceToDestination('Q611_D3', "Q611_D2");
    });

    $selectedValueQ624D1 = $('#Q624_D1').val();
    $("#Q624_D2 option[value='" + $selectedValueQ624D1 + "']").hide();
    $selectedValueQ624D2 = $('#Q624_D2').val();
    $("#Q624_D3 option[value='" + $selectedValueQ624D1 + "']").hide();
    $("#Q624_D3 option[value='" + $selectedValueQ624D2 + "']").hide();

    $(document).on('change', '#Q624_D1', function () {
        $('#Q624_D2 option').show();
        $('#Q624_D3 option').show();
        removeFromSourceToDestination('Q624_D2', "Q624_D1");
        removeFromSourceToDestination('Q624_D3', "Q624_D1");
        removeFromSourceToDestination('Q624_D3', "Q624_D2");
    });

    $(document).on('change', '#Q624_D2', function () {
        $('#Q624_D3 option').show();
        removeFromSourceToDestination('Q624_D3', "Q624_D1");
        removeFromSourceToDestination('Q624_D3', "Q624_D2");
    });

    $selectedValueQ625D1 = $('#Q625_D1').val();
    $("#Q625_D2 option[value='" + $selectedValueQ625D1 + "']").hide();
    $selectedValueQ625D2 = $('#Q625_D2').val();
    $("#Q625_D3 option[value='" + $selectedValueQ625D1 + "']").hide();
    $("#Q625_D3 option[value='" + $selectedValueQ625D2 + "']").hide();

    $(document).on('change', '#Q625_D1', function () {
        $('#Q625_D2 option').show();
        $('#Q625_D3 option').show();
        removeFromSourceToDestination('Q625_D2', "Q625_D1");
        removeFromSourceToDestination('Q625_D3', "Q625_D1");
        removeFromSourceToDestination('Q625_D3', "Q625_D2");
    });

    $(document).on('change', '#Q625_D2', function () {
        $('#Q625_D3 option').show();
        removeFromSourceToDestination('Q625_D3', "Q625_D1");
        removeFromSourceToDestination('Q625_D3', "Q625_D2");
    });

    // =======================================================
    // ============== Remove From Dropdown End ===============
    // =======================================================


    // =======================================================
    // ============== Jquery Click Event Code ================
    // =======================================================


    $(document).on('change', '#Q601_D1', function () {
        $selectedValue = $('#Q601_D1').val();
        $selectedValueQ601_D2 = $('#Q601_D2').val();

        if ($selectedValue == "3" || $selectedValue == "4" || $selectedValue == "6" || $selectedValue == "7") {
            $('#Q605').show();
            $('#Q606').show();
            $('#Q607').show();
            $('#Q608').show();
            $('#Q609').show();
            $('#Q611').show();
            $('#Q612').show();
            $('#Q613').show();
            $('#Q615').show();
            $('#Q630').show();
        }
        else {
            $('#Q605').hide();
            $('#Q606').hide();
            $('#Q607').hide();
            $('#Q608').hide();
            $('#Q609').hide();
            $('#Q611').hide();
            $('#Q612').hide();
            $('#Q613').hide();
            $('#Q615').hide();
            $('#Q630').hide();
        }

        if ($selectedValue != "3" && $selectedValue != "4" && $selectedValue != "6" && $selectedValue != "7" && $selectedValue != "0") {
            $('#Q626').show();
            $value = $('input[name=Q604]:checked').val();
            if ($value == "2") {
                console.log("	$('#Q628').show();");
                $('#Q628').show();
            }
        }
        else {
            $('#Q626').hide();
            $('#Q628').hide();
        }
        if ($selectedValue == "3" || $selectedValue == "4" || $selectedValue == "6" || $selectedValue == "7" || $selectedValueQ601_D2 == "3" || $selectedValueQ601_D2 == "4" || $selectedValueQ601_D2 == "6" || $selectedValueQ601_D2 == "7") {
            $('#Q624').show();
            $('#Q625').show();
        }
        else {
            $('#Q624').hide();
            $('#Q625').hide();
        }
    });

    $(document).on('change', '#Q601_D2', function () {
        $selectedValue = $('#Q601_D2').val();
        $selectedValueQ601_D1 = $('#Q601_D1').val();
        if ($selectedValue == "3" || $selectedValue == "4" || $selectedValue == "6" || $selectedValue == "7") {
            $('#Q616').show();
        }
        else {
            $('#Q616').hide();
        }
        if ($selectedValue == "3" || $selectedValue == "4" || $selectedValue == "6" || $selectedValue == "7" || $selectedValueQ601_D1 == "3" || $selectedValueQ601_D1 == "4" || $selectedValueQ601_D1 == "6" || $selectedValueQ601_D1 == "7") {
            $('#Q624').show();
            $('#Q625').show();
        }
        else {
            $('#Q624').hide();
            $('#Q625').hide();
        }
    });

    $(document).on('click', '.Q604', function () {
        $selectedValue = $('input[name=Q604]:checked').val();
        $value = $('#Q601_D1').val();
        if ($selectedValue == "2") {
            if ($value != "3" && $value != "4" && $value != "6" && $value != "7" && $value != "0") {
                $('#Q627').show();
            }
        }
        else {
            $('#Q627').hide();
        }
        if ($selectedValue == "1") {
            if ($value != "0") {
                if ($value != "3" && $value != "4" && $value != "6" && $value != "7") {
                    $('#Q628').show();
                }
                $('#Q629').show();
            }
        }
        else {
            $('#Q628').hide();
            $('#Q629').hide();
        }
    });

    $(document).on('change', '#Q609_D1', function () {
        $selectedValue = $('#Q609_D1').val();
        if ($selectedValue == "2" || $selectedValue == "3" || $selectedValue == "4" || $selectedValue == "5") {
            $('#Q610').show();
        }
        else {
            $('#Q610').hide();
        }
    });


    $(document).on('change', '#Q613_D1', function () {
        $selectedValue = $('#Q613_D1').val();
        if ($selectedValue == "2" || $selectedValue == "3" || $selectedValue == "4" || $selectedValue == "5") {
            $('#Q614').show();
        }
        else {
            $('#Q614').hide();
        }
    });

    $(document).on('click', '.Q615', function () {
        if ($('#Q615_C4').prop("checked") == true || $('#Q615_C6').prop("checked") == true || $('#Q615_C7').prop("checked") == true) {
            $('#Q619').show();
            $('#Q620').show();
            $('#Q621').show();
            $('#Q622').show();
            $('#Q623').show();
        } else if ($('#Q615_C3').prop("checked") == true || $('#Q615_C5').prop("checked") == true) {
            $('#Q621').show();
            $('#Q622').show();
            $('#Q623').show();
        }
        else {
            $('#Q619').hide();
            $('#Q620').hide();
            $('#Q621').hide();
            $('#Q622').hide();
            $('#Q623').hide();
        }
    });

    $(document).on('click', '#Q616', function () {
        $selectedValue = $('input[name=Q616]:checked').val();
        if ($selectedValue == "1") {
            $('#Q617').show();
            $('#Q618').show();
        }
        else {
            $('#Q617').hide();
            $('#Q618').hide();
        }
    });


    var selected = [];
    $(document).on('click', '.Q631', function () {
        if ($('#Q631_C1').prop("checked") == true) {
            $('#Q632').show();
        }
        else {
            $('#Q632').hide();
        }
        if ($('#Q631_C2').prop("checked") == true) {
            $('#Q634').show();
        }
        else {
            $('#Q634').hide();
        }
        if ($('#Q631_C3').prop("checked") == true) {
            $('#Q635').show();
        }
        else {
            $('#Q635').hide();
        }
        if ($('#Q631_C99').prop("checked") == true) {
            selected = [];
        }

        var html = "<option value='0'>Select</option>"
        $('#Q631 input:checked').each(function () {
            var str = $(this).attr('name')
            var value = str.split("_")[1];
            var textValue = $(this).parent("label").text();
            html += "<option value=" + value + ">" + textValue + "</option>";
        });
        $("#Q642_1_1").html(html);
        $("#Q642_1_2").html(html);
        $("#Q642_1_3").html(html);
        $("#Q642_1_4").html(html);
        $("#Q642_1_5").html(html);
        $("#Q642_1_6").html(html);
        $("#Q642_1_7").html(html);
        $("#Q642_1_8").html(html);
        $("#Q642_1_9").html(html);
        $("#Q642_1_10").html(html);
        $("#Q644_1_1").html(html);
        $("#Q644_1_2").html(html);
        $("#Q644_1_3").html(html);
        $("#Q644_1_4").html(html);
        $("#Q644_1_5").html(html);
        $("#Q644_1_6").html(html);
        $("#Q644_1_7").html(html);
        $("#Q644_1_8").html(html);
        $("#Q644_1_9").html(html);
        $("#Q644_1_10").html(html);
        $("#Q646_1_1").html(html);
        $("#Q646_1_2").html(html);
        $("#Q646_1_3").html(html);
        $("#Q646_1_4").html(html);
        $("#Q646_1_5").html(html);
        $("#Q646_1_6").html(html);
        $("#Q646_1_7").html(html);
        $("#Q646_1_8").html(html);
        $("#Q646_1_9").html(html);
        $("#Q646_1_10").html(html);

    });
    $(document).on('click', '.Q632', function () {
        if ($('#Q632_C5').prop("checked") == true) {
            $('#Q633').show();
        }
        else {
            $('#Q633').hide();
        }
    });

    $(document).on('click', '.Q636', function () {
        if ($('#Q636_C1').prop("checked") == true && $Q604_page == "1") {
            $('#Q637').show();
        }
        else {
            $('#Q637').hide();
        }
        if ($('#Q636_C2').prop("checked") == true && $Q604_page == "1") {
            $('#Q639').show();
        }
        else {
            $('#Q639').hide();
        }
        if ($('#Q636_C3').prop("checked") == true && $Q604_page == "1") {
            $('#Q640').show();
        }
        else {
            $('#Q640').hide();
        }
    });


    if ($Q601_2_page == "3" || $Q601_2_page == "4" || $Q601_2_page == "6" || $Q601_2_page == "7") {
        $('#Q631').show();
        $('#Q641').show();
        $('#Q643').show();
        $('#Q645').show();
    }

    if ($Q604_page == "1") {
        $('#Q636').show();
        $('#Q638').show();
    }


    $(document).on('click', '.Q637', function () {
        if ($('#Q637_C4').prop("checked") == true) {
            $('#Q638').show();
        }
        else {
            $('#Q638').hide();
        }
    });

    $(document).on('change', '#Q641_D1', function () {
        $('#Q642').show();
        $('#Q642_1').hide();
        $('#Q642_2').hide();
        $('#Q642_3').hide();
        $('#Q642_4').hide();
        $('#Q642_5').hide();
        $('#Q642_6').hide();
        $('#Q642_7').hide();
        $('#Q642_8').hide();
        $('#Q642_9').hide();
        $('#Q642_10').hide();
        $selectedValue = $('#Q641_D1').val();
        if ($selectedValue != "11") {
            for ($i = 1 ; $i <= $selectedValue; $i++) {
                $('#Q642_' + $i).show();
            }
        }
        else {
            $('#Q642').hide();
        }
    });

    $(document).on('change', '#Q643_D1', function () {
        $('#Q644').show();
        $('#Q644_1').hide();
        $('#Q644_2').hide();
        $('#Q644_3').hide();
        $('#Q644_4').hide();
        $('#Q644_5').hide();
        $('#Q644_6').hide();
        $('#Q644_7').hide();
        $('#Q644_8').hide();
        $('#Q644_9').hide();
        $('#Q644_10').hide();
        $selectedValue = $('#Q643_D1').val();
        if ($selectedValue != "11") {
            for ($i = 1 ; $i <= $selectedValue; $i++) {
                $('#Q644_' + $i).show();
            }
        }
        else {
            $('#Q644').hide();
        }
    });

    $(document).on('change', '#Q645_D1', function () {
        $('#Q646').show();
        $('#Q646_1').hide();
        $('#Q646_2').hide();
        $('#Q646_3').hide();
        $('#Q646_4').hide();
        $('#Q646_5').hide();
        $('#Q646_6').hide();
        $('#Q646_7').hide();
        $('#Q646_8').hide();
        $('#Q646_9').hide();
        $('#Q646_10').hide();
        $selectedValue = $('#Q645_D1').val();
        if ($selectedValue != "11") {
            for ($i = 1 ; $i <= $selectedValue; $i++) {
                $('#Q646_' + $i).show();
            }
        }
        else {
            $('#Q646').hide();
        }
    });
    // =======================================================
    // ============ Jquery Click Event Code End ==============
    // =======================================================


    // =======================================================
    // ================== Page1 Validation ===================
    // =======================================================

    $(document).on('click', '#page1', function (event) {
        event.preventDefault()
        var errors = false;
        var Q601_D1 = $("#Q601_D1 option:selected").val();
        var Q601_D2 = $("#Q601_D2 option:selected").val();
        var Q602_D1 = $("#Q602_D1 option:selected").val();
        var Q603 = $('input:checkbox:checked.Q603').map(function () {
            return this.value;
        }).get();
        var Q604_D1 = $('input[name=Q604]:checked').val();
        var Q605_D1 = $("#Q605_D1 option:selected").val();
        var Q606 = $('input:checkbox:checked.Q606').map(function () {
            return this.value;
        }).get();
        var Q607 = $('input:checkbox:checked.Q607').map(function () {
            return this.value;
        }).get();
        var Q608 = $('input:checkbox:checked.Q608').map(function () {
            return this.value;
        }).get();
        var Q609_D1 = $("#Q609_D1 option:selected").val();
        var Q609_D2 = $("#Q609_D2 option:selected").val();
        var Q609_D3 = $("#Q609_D3 option:selected").val();
        var Q610_D1 = $("#Q610_D1 option:selected").val();
        var Q611_D1 = $("#Q611_D1 option:selected").val();
        var Q611_D2 = $("#Q611_D2 option:selected").val();
        var Q611_D3 = $("#Q611_D3 option:selected").val();
        var Q612_D1 = $("#Q612_D1 option:selected").val();
        var Q613_D1 = $("#Q613_D1 option:selected").val();
        var Q614_D1 = $("#Q614_D1 option:selected").val();
        var Q615 = $('input:checkbox:checked.Q615').map(function () {
            return this.value;
        }).get();
        var Q616_D1 = $('input[name=Q616]:checked').val();
        var Q617 = $('input:checkbox:checked.Q617').map(function () {
            return this.value;
        }).get();
        var Q618 = $('input:checkbox:checked.Q618').map(function () {
            return this.value;
        }).get();
        var Q619_D1 = $("#Q619_D1 option:selected").val();
        var Q620_D1 = $("#Q620_D1 option:selected").val();
        var Q622_D1 = $("#Q622_D1 option:selected").val();
        var Q623_D1 = $("#Q623_D1 option:selected").val();
        var Q623_D2 = $("#Q623_D2 option:selected").val();
        var Q623_D3 = $("#Q623_D3 option:selected").val();
        var Q623_D4 = $("#Q623_D4 option:selected").val();
        var Q623_D5 = $("#Q623_D5 option:selected").val();
        var Q624_D1 = $("#Q624_D1 option:selected").val();
        var Q624_D2 = $("#Q624_D2 option:selected").val();
        var Q624_D3 = $("#Q624_D3 option:selected").val();
        var Q625_D1 = $("#Q625_D1 option:selected").val();
        var Q625_D2 = $("#Q625_D2 option:selected").val();
        var Q625_D3 = $("#Q625_D3 option:selected").val();
        var Q626 = $('input:checkbox:checked.Q626').map(function () {
            return this.value;
        }).get();
        var Q627 = $('input:checkbox:checked.Q627').map(function () {
            return this.value;
        }).get();
        var Q628_D1 = $("#Q628_D1 option:selected").val();
        var Q629 = $('input:checkbox:checked.Q629').map(function () {
            return this.value;
        }).get();

        if (Q601_D1 == "0" || Q601_D2 == "0") {
            errors = true;
            alert("Please select " + $('#Q601_que').text());
            return;
        }
        if (Q602_D1 == "0") {
            errors = true;
            alert("Please select " + $('#Q602_que').text());
            return;
        }
        if (Q603.length == "0") {
            errors = true;
            alert("Please select " + $('#Q603_que').text());
            return;
        }
        if (!$("input:radio[name='Q604']").is(":checked")) {
            errors = true;
            alert("Please select " + $('#Q604_que').text());
            return;
        }
        if (Q601_D1 == "3" || Q601_D1 == "4" || Q601_D1 == "6" || Q601_D1 == "7") {
            if (Q605_D1 == "0" && $("#Q605").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q605_que').text());
                return;
            }
            else if (Q606.length == "0" && $("#Q606").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q606_que').text());
                return;
            }
            else if (checkForCheckBox("Q606_C98") && $("#Q606").is(":visible")) {
                errors = true;
                alert("Please provide others value for " + $('#Q606_que').text());
                return;
            }
            else if (Q607.length == "0" && $("#Q607").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q607_que').text());
                return;
            }
            else if (checkForCheckBox("Q607_C98") && $("#Q607").is(":visible")) {
                errors = true;
                alert("Please provide others value for " + $('#Q607_que').text());
                return;
            }
            else if (Q608.length == "0" && $("#Q608").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q608_que').text());
                return;
            }
            else if (checkForCheckBox("Q608_C98") && $("#Q608").is(":visible")) {
                errors = true;
                alert("Please provide others value for " + $('#Q608_que').text());
                return;
            }
            else if ((Q609_D1 == "0" || Q609_D2 == "0" || Q609_D3 == "0") && $("#Q609").is(":visible")) {
                errors = true;
                alert("Please select all dropdown of " + $('#Q609_que').text());
                return;
            }
            else if ((Q611_D1 == "0" || Q611_D2 == "0" || Q611_D3 == "0") && $("#Q611").is(":visible")) {
                errors = true;
                alert("Please select all dropdown of " + $('#Q611_que').text());
                return;
            }
            else if (checkForDropdown('Q611_D1', '19') && $("#Q611").is(":visible")) {
                errors = true;
                alert("Please provide others value for " + $('#Q611_que').text());
                return;
            }
            else if (checkForDropdown('Q611_D2', '19') && $("#Q611").is(":visible")) {
                errors = true;
                alert("Please provide others value for " + $('#Q611_que').text());
                return;
            }
            else if (checkForDropdown('Q611_D3', '19') && $("#Q611").is(":visible")) {
                errors = true;
                alert("Please provide others value for " + $('#Q611_que').text());
                return;
            }
            else if (Q612_D1 == "0" && $("#Q612").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q612_que').text());
                return;
            }
            else if (Q613_D1 == "0" && $("#Q613").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q613_que').text());
                return;
            }
            else if (Q615.length == "0" && $("#Q615").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q615_que').text());
                return;
            }
            else if (checkForCheckBox("Q615_C98") & $("#Q615").is(":visible")) {
                errors = true;
                alert("Please provide others value for  " + $('#Q615_que').text());
                return;
            }
            else if ((Q624_D1 == "0" || Q624_D2 == "0" || Q624_D3 == "0") && $("#Q624").is(":visible")) {
                errors = true;
                alert("Please select all dropdown of " + $('#Q624_que').text());
                return;
            }
            else if (checkForDropdown("Q624_D1", '13') && $("#Q624").is(":visible")) {
                errors = true;
                alert("Please select all dropdown of " + $('#Q624_que').text());
                return;
            }
            else if (checkForDropdown("Q624_D2", '13') && $("#Q624").is(":visible")) {
                errors = true;
                alert("Please select all dropdown of " + $('#Q624_que').text());
                return;
            }
            else if (checkForDropdown("Q624_D3", '13') && $("#Q624").is(":visible")) {
                errors = true;
                alert("Please select all dropdown of " + $('#Q624_que').text());
                return;
            }
            else if ((Q625_D1 == "0" || Q625_D2 == "0" || Q625_D2 == "0") && $("#Q625").is(":visible")) {
                errors = true;
                alert("Please select all dropdown of " + $('#Q625_que').text());
                return;
            }
            else if (checkForDropdown('Q625_D1', '15') && $("#Q625").is(":visible")) {
                errors = true;
                alert("Please select all dropdown of " + $('#Q625_que').text());
                return;
            }
            else if (checkForDropdown('Q625_D2', '15') && $("#Q625").is(":visible")) {
                errors = true;
                alert("Please select all dropdown of " + $('#Q625_que').text());
                return;
            }
            else if (checkForDropdown('Q625_D3', '15') && $("#Q625").is(":visible")) {
                errors = true;
                alert("Please select all dropdown of " + $('#Q625_que').text());
                return;
            }
            else if (($('#Q630_1').val() == "" || $('#Q630_2').val() == "" || $('#Q630_3').val() == "" || $('#Q630_4').val() == "" || $('#Q630_5').val() == "" || $('#Q630_6').val() == "" || $('#Q630_7').val() == "" || $('#Q630_8').val() == "" || $('#Q630_9').val() == "" || $('#Q630_10').val() == "") && $("#Q630").is(":visible")) {
                errors = true;
                alert("Please rate all options of " + $('#Q630_que').text());
                return;
            }
        }
        if (Q601_D1 != "3" && Q601_D1 != "4" && Q601_D1 != "6" && Q601_D1 != "7" && Q601_D1 != "0") {
            if (Q626.length == "0" && $("#Q626").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q626_que').text());
                return;
            }
            else if (checkForCheckBox("Q626_C98") && $("#Q626").is(":visible")) {
                errors = true;
                alert("Please provide others value for " + $('#Q626_que').text());
                return;
            }
            if (Q604_D1 == "2") {
                if (Q628_D1 == "0" && $("#Q628").is(":visible")) {
                    errors = true;
                    alert("Please select " + $('#Q628_que').text());
                    return;
                }
            }
        }
        if (Q601_D2 == "3" || Q601_D2 == "4" || Q601_D2 == "6" || Q601_D2 == "7") {
            if (Q616_D1 == "0" && $("#Q616").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q616_que').text());
                return;
            }
            else if ((Q624_D1 == "0" || Q624_D2 == "0" || Q624_D3 == "0") && $("#Q624").is(":visible")) {
                errors = true;
                alert("Please select all dropdown of " + $('#Q624_que').text());
                return;
            }
            else if (checkForDropdown("Q624_D1", '13') && $("#Q624").is(":visible")) {
                errors = true;
                alert("Please select all dropdown of " + $('#Q624_que').text());
                return;
            }
            else if (checkForDropdown("Q624_D2", '13') && $("#Q624").is(":visible")) {
                errors = true;
                alert("Please select all dropdown of " + $('#Q624_que').text());
                return;
            }
            else if (checkForDropdown("Q624_D3", '13') && $("#Q624").is(":visible")) {
                errors = true;
                alert("Please select all dropdown of " + $('#Q624_que').text());
                return;
            }
            else if ((Q625_D1 == "0" || Q625_D2 == "0" || Q625_D2 == "0") && $("#Q625").is(":visible")) {
                errors = true;
                alert("Please select all dropdown of " + $('#Q625_que').text());
                return;
            }
            else if (checkForDropdown('Q625_D1', '15') && $("#Q625").is(":visible")) {
                errors = true;
                alert("Please select all dropdown of " + $('#Q625_que').text());
                return;
            }
            else if (checkForDropdown('Q625_D2', '15') && $("#Q625").is(":visible")) {
                errors = true;
                alert("Please select all dropdown of " + $('#Q625_que').text());
                return;
            }
            else if (checkForDropdown('Q625_D3', '15') && $("#Q625").is(":visible")) {
                errors = true;
                alert("Please select all dropdown of " + $('#Q625_que').text());
                return;
            }
        }
        if (Q604_D1 == "2") {
            if (Q601_D1 != "3" && Q601_D1 != "4" && Q601_D1 != "6" && Q601_D1 != "7" && Q601_D1 != "0") {
                if (Q627.length == "0" && $("#Q627").is(":visible")) {
                    errors = true;
                    alert("Please select " + $('#Q627_que').text());
                    return;
                }
                else if (checkForCheckBox("Q627_C98") && $("#Q627").is(":visible")) {
                    errors = true;
                    alert("Please provide others value for " + $('#Q627_que').text());
                    return;
                }
            }
        }
        if (Q604_D1 == "1") {
            if (Q601_D1 != "0") {
                if (Q601_D1 != "3" && Q601_D1 != "4" && Q601_D1 != "6" && Q601_D1 != "7") {
                    if (Q628_D1 == "0" && $("#Q628").is(":visible")) {
                        errors = true;
                        alert("Please select " + $('#Q628_que').text());
                        return;
                    }
                }
                if (Q629.length == "0" && $("#Q629").is(":visible")) {
                    errors = true;
                    alert("Please select " + $('#Q629_que').text());
                    return;
                }
            }
        }
        if (Q609_D1 == "2" || Q609_D1 == "3" || Q609_D1 == "4" || Q609_D1 == "5") {
            if (Q610_D1 == "0" && $("#Q610").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q610_que').text());
                return;
            }
        }
        if (Q613_D1 == "2" || Q613_D1 == "3" || Q613_D1 == "4" || Q613_D1 == "5") {
            if (Q614_D1 == "0" && $("#Q614").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q614_que').text());
                return;
            }
        }
        if ($('#Q615_C4').prop("checked") == true || $('#Q615_C6').prop("checked") == true || $('#Q615_C7').prop("checked") == true) {
            if (Q619_D1 == "0" && $("#Q619").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q619_que').text());
                return;
            }
            else if (Q620_D1 == "0" && $("#Q620").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q620_que').text());
                return;
            }
            else if (($('#Q621_1').val() == "" || $('#Q621_2').val() == "" || $('#Q621_3').val() == "" || $('#Q621_4').val() == "" || $('#Q621_5').val() == "" || $('#Q621_6').val() == "" || $('#Q621_7').val() == "" || $('#Q621_8').val() == "" || $('#Q621_9').val() == "" || $('#Q621_10').val() == "" || $('#Q621_11').val() == "" || $('#Q621_12').val() == "" || $('#Q621_13').val() == "" || $('#Q621_14').val() == "" || $('#Q621_15').val() == "" || $('#Q621_16').val() == "") && $("#Q621").is(":visible")) {
                errors = true;
                alert("Please rate all options of " + $('#Q621_que').text());
                return;
            }
            else if (Q622_D1 == "0" && $("#Q622").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q622_que').text());
                return;
            }
            else if ((Q623_D1 == "0" || Q623_D2 == "0" || Q623_D3 == "0" || Q623_D4 == "0" || Q623_D5 == "0") && $("#Q623").is(":visible")) {
                errors = true;
                alert("Please select all dropdown of " + $('#Q623_que').text());
                return;
            }
        }
        if ($('#Q615_C3').prop("checked") == true || $('#Q615_C5').prop("checked") == true) {
            if (($('#Q621_1').val() == "" || $('#Q621_2').val() == "" || $('#Q621_3').val() == "" || $('#Q621_4').val() == "" || $('#Q621_5').val() == "" || $('#Q621_6').val() == "" || $('#Q621_7').val() == "" || $('#Q621_8').val() == "" || $('#Q621_9').val() == "" || $('#Q621_10').val() == "" || $('#Q621_11').val() == "" || $('#Q621_12').val() == "" || $('#Q621_13').val() == "" || $('#Q621_14').val() == "" || $('#Q621_15').val() == "" || $('#Q621_16').val() == "") && $("#Q621").is(":visible")) {
                errors = true;
                alert("Please rate all options of " + $('#Q621_que').text());
                return;
            }
            else if (Q622_D1 == "0" && $("#Q622").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q622_que').text());
                return;
            }
            else if ((Q623_D1 == "0" || Q623_D2 == "0" || Q623_D3 == "0" || Q623_D4 == "0" || Q623_D5 == "0") && $("#Q623").is(":visible")) {
                errors = true;
                alert("Please select all dropdown of " + $('#Q623_que').text());
                return;
            }
        }
        if (Q616_D1 == "1") {
            if (Q617.length == "0" && $("#Q617").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q617_que').text());
                return;
            }
            else if (checkForCheckBox("Q617_C98") && $("#Q617").is(":visible")) {
                errors = true;
                alert("Please provide others value for " + $('#Q617_que').text());
                return;
            }
            else if (Q618.length == "0" && $("#Q618").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q618_que').text());
                return;
            }
            else if (checkForCheckBox("Q618_C98") && $("#Q618").is(":visible")) {
                errors = true;
                alert("Please provide others value for " + $('#Q618_que').text());
                return;
            }
        }
        if (!errors) {
            $("#page1Form").submit();
        }
    });

    // =======================================================
    // ================ Page1 Validation End ==================
    // =======================================================

    // =======================================================
    // ================== Page2 Validation ===================
    // =======================================================

    $(document).on('click', '#page2', function (event) {
        event.preventDefault()
        var errors = false;
        var Q631 = $('input:checkbox:checked.Q631').map(function () {
            return this.value;
        }).get();
        var Q632 = $('input:checkbox:checked.Q632').map(function () {
            return this.value;
        }).get();
        var Q633 = $('input:checkbox:checked.Q633').map(function () {
            return this.value;
        }).get();
        var Q634 = $('input:checkbox:checked.Q634').map(function () {
            return this.value;
        }).get();
        var Q635 = $('input:checkbox:checked.Q635').map(function () {
            return this.value;
        }).get();
        var Q636 = $('input:checkbox:checked.Q636').map(function () {
            return this.value;
        }).get();
        var Q637 = $('input:checkbox:checked.Q637').map(function () {
            return this.value;
        }).get();
        var Q638 = $('input:checkbox:checked.Q638').map(function () {
            return this.value;
        }).get();
        var Q639 = $('input:checkbox:checked.Q639').map(function () {
            return this.value;
        }).get();
        var Q640 = $('input:checkbox:checked.Q640').map(function () {
            return this.value;
        }).get();
        var Q641_D1 = $("#Q641_D1 option:selected").val();
        var Q643_D1 = $("#Q643_D1 option:selected").val();
        var Q645_D1 = $("#Q645_D1 option:selected").val();
        /* var Q647 = $('input:checkbox:checked.Q647').map(function () {
			return this.value;
			}).get(); */

        if ($Q601_2_page == "3" || $Q601_2_page == "4" || $Q601_2_page == "6" || $Q601_2_page == "7") {
            if (Q631.length == "0" && $("#Q631").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q631_que').text());
                return;
            }
            else if (checkForCheckBox("Q631_C98") && $("#Q631").is(":visible")) {
                errors = true;
                alert("Please provide others value for " + $('#Q631_que').text());
                return;
            }
        }
        if ($Q604_page == "1") {
            if (Q636.length == "0" && $("#Q636").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q636_que').text());
                return;
            }
            else if (checkForCheckBox("Q636_C98") && $("#Q636").is(":visible")) {
                errors = true;
                alert("Please provide others value for " + $('#Q636_que').text());
                return;
            }
            if (Q638.length == "0" && $("#Q638").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q638_que').text());
                return;
            }
            else if (checkForCheckBox("Q638_C98") && $("#Q638").is(":visible")) {
                errors = true;
                alert("Please provide others value for " + $('#Q638_que').text());
                return;
            }
        }
        if ($Q609_1_page == "2" || $Q609_1_page == "3" || $Q609_1_page == "4" || $Q609_1_page == "5") {
            if (Q641_D1 == "0" && $("#Q641").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q641_que').text());
                return;
            }
        }
        if ($Q609_2_page == "7" || $Q609_2_page == "8" || $Q609_2_page == "9" || $Q609_2_page == "10") {
            if (Q643_D1 == "0" && $("#Q643").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q643_que').text());
                return;
            }
        }
        if ($Q609_3_page == "12" || $Q609_3_page == "13" || $Q609_3_page == "14") {
            if (Q645_D1 == "0" && $("#Q645").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q645_que').text());
                return;
            }
        }
        if ($('#Q631_C1').prop("checked") == true) {
            if (Q632.length == "0" && $("#Q632").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q632_que').text());
                return;
            }
            else if (checkForCheckBox("Q632_C98") && $("#Q632").is(":visible")) {
                errors = true;
                alert("Please provide others value for " + $('#Q632_que').text());
                return;
            }
        }
        if ($('#Q631_C2').prop("checked") == true) {
            if (Q634.length == "0" && $("#Q634").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q634_que').text());
                return;
            }
            else if (checkForCheckBox("Q634_C98") && $("#Q634").is(":visible")) {
                errors = true;
                alert("Please provide others value for " + $('#Q634_que').text());
                return;
            }
        }
        if ($('#Q631_C3').prop("checked") == true) {
            if (Q635.length == "0" && $("#Q635").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q635_que').text());
                return;
            }
            else if (checkForCheckBox("Q635_C98") && $("#Q635").is(":visible")) {
                errors = true;
                alert("Please provide others value for " + $('#Q635_que').text());
                return;
            }
        }
        if ($('#Q632_C5').prop("checked") == true) {
            if (Q633.length == "0" && $("#Q633").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q633_que').text());
                return;
            }
            else if (checkForCheckBox("Q633_C98") && $("#Q633").is(":visible")) {
                errors = true;
                alert("Please provide others value for " + $('#Q633_que').text());
                return;
            }
        }
        if ($('#Q636_C1').prop("checked") == true && $Q604_page == "1") {
            if (Q637.length == "0" && $("#Q637").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q637_que').text());
                return;
            }
            else if (checkForCheckBox("Q637_C98") && $("#Q637").is(":visible")) {
                errors = true;
                alert("Please provide others value for " + $('#Q637_que').text());
                return;
            }
        }
        if ($('#Q636_C2').prop("checked") == true && $Q604_page == "1") {
            if (Q639.length == "0" && $("#Q639").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q639_que').text());
                return;
            }
            else if (checkForCheckBox("Q639_C98") && $("#Q639").is(":visible")) {
                errors = true;
                alert("Please provide others value for " + $('#Q639_que').text());
                return;
            }
        }
        if ($('#Q636_C3').prop("checked") == true && $Q604_page == "1") {
            if (Q640.length == "0" && $("#Q640").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q640_que').text());
                return;
            }
            else if (checkForCheckBox("Q640_C98") && $("#Q640").is(":visible")) {
                errors = true;
                alert("Please provide others value for " + $('#Q640_que').text());
                return;
            }
        }
        if ($('#Q637_C4').prop("checked") == true) {
            if (Q638.length == "0" && $("#Q638").is(":visible")) {
                errors = true;
                alert("Please select " + $('#Q638_que').text());
                return;
            }
            else if (checkForCheckBox("Q638_C98") && $("#Q638").is(":visible")) {
                errors = true;
                alert("Please provide others value for " + $('#Q638_que').text());
                return;
            }
        }
        if (Q641_D1 != 0 && Q641_D1 != "11") {
            $selectedValue = $('#Q641_D1').val();
            for ($i = 1 ; $i <= $selectedValue; $i++) {
                var firstDropdown = $('#Q642_1_' + $i).val();
                var secondDropdown = $('#Q642_2_' + $i).val();
                var thirdDropdown = $('#Q642_3_' + $i).val();
                if (firstDropdown == "0" && $("#Q642_" + $i).is(":visible")) {
                    errors = true;
                    alert("Please select SIP " + $i + " for " + $('#Q642_que').text());
                    return;
                }
                if (secondDropdown == "0" && $("#Q642_" + $i).is(":visible")) {
                    errors = true;
                    alert("Please select SIP " + $i + " for " + $('#Q642_que').text());
                    return;
                }
                if (thirdDropdown == "0" && $("#Q642_" + $i).is(":visible")) {
                    errors = true;
                    alert("Please select SIP " + $i + " for " + $('#Q642_que').text());
                    return;
                }
            }
        }
        if (Q643_D1 != 0 && Q643_D1 != "11") {
            $selectedValue = $('#Q643_D1').val();
            for ($i = 1 ; $i <= $selectedValue; $i++) {
                var firstDropdown = $('#Q644_1_' + $i).val();
                var secondDropdown = $('#Q644_2_' + $i).val();
                var thirdDropdown = $('#Q644_3_' + $i).val();
                if (firstDropdown == "0" && $("#Q644_" + $i).is(":visible")) {
                    errors = true;
                    alert("Please select Regular " + $i + " for " + $('#Q644_que').text());
                    return;
                }
                if (secondDropdown == "0" && $("#Q644_" + $i).is(":visible")) {
                    errors = true;
                    alert("Please select Regular " + $i + " for " + $('#Q644_que').text());
                    return;
                }
                if (thirdDropdown == "0" && $("#Q644_" + $i).is(":visible")) {
                    errors = true;
                    alert("Please select Regular " + $i + " for " + $('#Q644_que').text());
                    return;
                }
            }
        }
        if (Q645_D1 != 0 && Q645_D1 != "11") {
            $selectedValue = $('#Q645_D1').val();
            for ($i = 1 ; $i <= $selectedValue; $i++) {
                var firstDropdown = $('#Q646_1_' + $i).val();
                var secondDropdown = $('#Q646_2_' + $i).val();
                var thirdDropdown = $('#Q646_3_' + $i).val();
                if (firstDropdown == "0" && $("#Q646_" + $i).is(":visible")) {
                    errors = true;
                    alert("Please select Lumpsum " + $i + " for " + $('#Q646_que').text());
                    return;
                }
                if (secondDropdown == "0" && $("#Q646_" + $i).is(":visible")) {
                    errors = true;
                    alert("Please select Lumpsum " + $i + " for " + $('#Q646_que').text());
                    return;
                }
                if (thirdDropdown == "0" && $("#Q646_" + $i).is(":visible")) {
                    errors = true;
                    alert("Please select Lumpsum " + $i + " for " + $('#Q646_que').text());
                    return;
                }
            }
        }
        if (Q645_D1 != 0 && Q645_D1 != "11") {
            for ($i = 1 ; $i <= $selectedValue; $i++) {
                var firstDropdown = $('#Q646_1_' + $i).val();
                var secondDropdown = $('#Q646_2_' + $i).val();
                var thirdDropdown = $('#Q646_3_' + $i).val();
                if (firstDropdown == "0" && $("#Q646_" + $i).is(":visible")) {
                    errors = true;
                    alert("Please select " + $('#Q646_que').text());
                    return;
                }
                if (secondDropdown == "0" && $("#Q646_" + $i).is(":visible")) {
                    errors = true;
                    alert("Please select " + $('#Q646_que').text());
                    return;
                }
                if (thirdDropdown == "0" && $("#Q646_" + $i).is(":visible")) {
                    errors = true;
                    alert("Please select " + $('#Q646_que').text());
                    return;
                }
            }
        }
        /*if(Q647.length == "0" && $("#Q647").is(":visible")) 
		{
			errors = true;
			alert("Please select "+$('#Q647_que').text());
			return;
		}*/
        if (!errors) {
            $("#page2Form").submit();
        }
    });

    // =======================================================
    // ================ Page2 Validation End =================
    // =======================================================
});