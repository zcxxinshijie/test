/*!
 * JavaScript Operation Library
 *
 * Copyright JS zcx
 *
 * Date: 2019-06-27
 */
var zhuangtai=[];
$(document).ready(function() {
    var $cart = $('#selected-seats'), //座位区
        $counter = $('#counter'); //票数

    var sc = $('#seat-map').seatCharts({
        map: [  //座位图
            '_________________aaaaaaaaaaaaaaaaaa_________________',
            '________________aaaaaaaaaaaaaaaaaaaa________________',
            '________________aaaaaaaaaaaaaaaaaaaa________________',
            '____________________________________________________',
            '_____________aaaaaaaaaaaaaaaaaaaaaaaaa______________',
            '___________aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa___________',
            '_________aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa_________',
            '________aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa________',
            '______aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa_______',
            '______aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa______',
            '_____aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa_____',
            '____aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa_____',
            '____aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa_____',
            '___aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa____',
            '___aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa___',
            '__aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa___',
            '__aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa__',
            '__aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa__',
            '_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa__',
            'aaaaaaaaaaaaaa__aaaaaaaaaaaaaaaaaaaa__aaaaaaaaaaaaaa',
            '___aaaaaaaaaaa__aaaaaaaa____aaaaaaaa__aaaaaaaaaaa___',
            '___aaaaaaaaaa__aaaaaaaaa____aaaaaaaa__aaaaaaaaaaa___',
            '_____aaaaaaaaa__________________aaaa__aaaaaaaaaa____'
        ],
        naming: {
            top: false,
            columns: ['51', '49','47', '45', '43','41','39', '37','35', '33', '31', '29', '27','25','23', '21', '19', '17', '15','13','11', '9', '7','5','3', '1', '2', '4','6','8', '10','12', '14','16','18', '20','22', '24','26','28', '30','32', '34','36','38', '40','42','44','46','48', '50','52'],
            rows: ['AA', 'BB', 'CC',' ','A', 'B', 'C', 'D', 'E', 'F','G','H','J','K','L','M','N','O','P','Q','R','S','T'],
            getLabel: function (character, row, column) {
                return column;
            }
        },
        legend: { //定义图例
            node: $('#legend'),
            items: [
                ['a', 'available', '可选座'],
                ['a', 'unavailable', '已售出']
            ]
        },
        click: function () { //点击事件
            if (this.status() === 'available') { //可选座
                $('<li>' + this.settings.id + ' </li>')
                    .attr('id', 'cart-item-' + this.settings.id)
                    .data('seatId', this.settings.id)
                    .appendTo($cart);

                $counter.text(sc.find('selected').length + 1 + sc1.find('selected').length+sc2.find('selected').length);

                return 'selected';
            } else if (this.status() === 'selected') { //已选中
                //更新数量
                $counter.text(sc.find('selected').length - 1 + sc1.find('selected').length+sc2.find('selected').length);

                //删除已预订座位
                $('#cart-item-' + this.settings.id).remove();

                return 'available';
            } else if (this.status() === 'unavailable') { //已售出
                return 'unavailable';
            } else {
                return this.style();
            }
        }
    });
    var sc1 = $('#seat-map1').seatCharts({
        map: [  //座位图
            'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa_aaaa',
            '____aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa____',
            '___aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa____',
            '___aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa___',
            'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa_',
            '_aaaaaa_______aaaaaaa________________________aaaaaaa_______aaaaaa',
            '___aaaaaa________________________________________________aaaaaa__'
        ],
        naming: {
            top: false,
            columns: ['63','61', '59','57', '55', '53','51', '49','47', '45', '43','41','39', '37','35', '33', '31', '29', '27','25','23', '21', '19', '17', '15','13','11', '9', '7','5','3', '1', '2', '4','6','8', '10','12', '14','16','18', '20','22', '24','26','28', '30','32', '34','36','38', '40','42','44','46','48', '50','52','54','56','58', '60','62','64','66'],
            rows: ['A1', 'B1', 'C1', 'D1', 'E1', 'F1','G1'],
            getLabel: function (character, row, column) {
                return column;
            }
        },
        click: function () { //点击事件
            if (this.status() === 'available') { //可选座
                $('<li>'+ this.settings.id + ' </li>')
                    .attr('id', 'cart-item-' + this.settings.id)
                    .data('seatId', this.settings.id)
                    .appendTo($cart);

                $counter.text(sc1.find('selected').length + 1+sc.find('selected').length+sc2.find('selected').length);

                return 'selected';
            } else if (this.status() === 'selected') { //已选中
                //更新数量
                $counter.text(sc1.find('selected').length - 1+sc.find('selected').length+sc2.find('selected').length);

                //删除已预订座位
                $('#cart-item-' + this.settings.id).remove();

                return 'available';
            } else if (this.status() === 'unavailable') { //已售出
                return 'unavailable';
            } else {
                return this.style();
            }
        }
    });
    var sc2 = $('#seat-map2').seatCharts({
        map: [  //座位图
            'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa_aaaaaaaa',
            '______aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa_______',
            '______aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa_______',
            '______aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa_______',
            '_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa___'
        ],
        naming: {
            top: false,
            columns: ['67', '65','63','61', '59','57', '55', '53','51', '49','47', '45', '43','41','39', '37','35', '33', '31', '29', '27','25','23', '21', '19', '17', '15','13','11', '9', '7','5','3', '1', '2', '4','6','8', '10','12', '14','16','18', '20','22', '24','26','28', '30','32', '34','36','38', '40','42','44','46','48', '50','52','54','56','58', '60','62','64','66','68'],
            rows: ['A2', 'B2', 'C2', 'D2', 'E2'],
            getLabel: function (character, row, column) {
                return column;
            }
        },
        click: function () { //点击事件
            if (this.status() === 'available') { //可选座
                $('<li>'+ this.settings.id + ' </li>')
                    .attr('id', 'cart-item-' + this.settings.id)
                    .data('seatId', this.settings.id)
                    .appendTo($cart);

                $counter.text(sc2.find('selected').length +1 +sc.find('selected').length+sc1.find('selected').length);

                return 'selected';
            } else if (this.status() === 'selected') { //已选中
                //更新数量
                $counter.text(sc2.find('selected').length - 1+sc.find('selected').length+sc1.find('selected').length);

                //删除已预订座位
                $('#cart-item-' + this.settings.id).remove();

                return 'available';
            } else if (this.status() === 'unavailable') { //已售出
                return 'unavailable';
            } else {
                return this.style();
            }
        }
    });
    var resultabc=[];
    $.ajax({
        type:"GET",
        url:"http://47.95.244.139:8080/theatre/look1",
        contentType: "application/json;charset=utf-8",
        timeout : 2000,
        jsonp:"jsoncallback",
        jsonCallback:"show",
        dataType: "jsonp",
        success:function (info) {
            $.each(info,function (i,info) {
                console.log(info);
                resultabc.push(info["location"]);
            });
            //已售出的座位
            console.log(resultabc);
            sc.get(resultabc).status('unavailable');
            sc1.get(resultabc).status('unavailable');
            sc2.get(resultabc).status('unavailable');
            resultabc=0;
        },
        error:function () {
            alert("连接失败,请检查网络");
        }
    });

    $(".checkout-button").click(function () {
        var cont=$("#selected-seats");
        var zlzl=cont.text().split(" ");
        zhuangtai=zlzl.pop();

        console.log(zlzl);

        $.ajax({
            type:"POST",
            url:"http://47.95.244.139:8080/theatre/buy3",
            data:{"info":zlzl},
            contentType: "application/json;charset=utf-8",
            timeout : 2000,
            traditional: true,
            jsonp:"jsoncallback",
            jsonCallback:"show",
            dataType: "jsonp",
            success:function (info) {
                if (info["result"]===0) {
                    alert("请刷新页面重选");
                }
                else {
                    //已售出的座位
                    sc.get(zlzl).status('unavailable');
                    sc1.get(zlzl).status('unavailable');
                    sc2.get(zlzl).status('unavailable');
                    alert("提交成功");
                    $("li").remove();
                    $counter.text("0");
                }

            },
            error:function () {
                alert("提交失败,请检查网络");
            }
        });

        zhuangtai=0;
    });
});

function releasthou() {
    var person=prompt("请输入口令");
    // console.log(person);
    $.ajax({
        type:"POST",
        url:"http://47.95.244.139:8080/theatre/clear",
        data:{"pwd":person},
        contentType: "application/json;charset=utf-8",
        timeout : 2000,
        traditional: true,
        jsonp:"jsoncallback",
        jsonCallback:"show",
        dataType: "jsonp",
        success:function (info) {
            if (info["result"] === -1) {
                alert("输入口令无效");
            }
            else {
                location.reload();
            }
        },
        error:function () {
            alert("连接失败,请检查网络");
        }
    });
}
