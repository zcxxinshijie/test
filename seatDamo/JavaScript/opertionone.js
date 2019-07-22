/*!
 * JavaScript Operation Library
 *
 * Copyright JS zcx
 *
 * Date: 2019-06-27
 */
var zhuangtaii=[];
$(document).ready(function() {
    var $cart1 = $('#selected-seatss'), //座位区
        $counter1 = $('#counter'); //票数

    var scc = $('#seat-maps').seatCharts({
        map: [  //座位图
            '________aaaaaaaaaaaaaaaaaaaaaaaa_______',
            '______aaaaaaaaaaaaaaaaaaaaaaaaaaaa_____',
            '_______________________________________',
            '___aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa__',
            '__aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa__',
            '_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            '_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            '_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            '_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            '_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa_',
            '_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            '_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa_',
            '__aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa_',
            '__aaaaaaaaaaaa___________aaaaaaaaaaaa__',
            '___aaaaaaaaaaaa___________aaaaaaaaaaa__',
            'aaaaaaaaaaaaaaaa________aaaaaaaaaaa____'
        ],
        naming: {
            top: false,
            columns: ['39', '37','35', '33', '31', '29', '27','25','23', '21', '19', '17', '15','13','11', '9', '7','5','3', '1', '2', '4','6','8', '10','12', '14','16','18', '20','22', '24','26','28', '30','32', '34','36','38'],
            rows: ['AA', 'BB', ' ','A', 'B', 'C', 'D', 'E', 'F','G','H','J','K','L','M','N','O','P','Q'],
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
                    .appendTo($cart1);

                $counter1.text(scc.find('selected').length + 1 + scc1.find('selected').length);

                return 'selected';
            } else if (this.status() === 'selected') { //已选中
                //更新数量
                $counter1.text(scc.find('selected').length - 1 + scc1.find('selected').length);

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
    var scc1 = $('#seat-maps1').seatCharts({
        map: [  //座位图
            '__aaaaaaaa_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa_aaaaaaaa___',
            'aaaaaaaa_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa_aaaaaaaa',
            '____________aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa_____________',
            '______________aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa______________',
            '_______________aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa________________'
        ],
        naming: {
            top: false,
            columns: ['65','63','61', '59','57', '55', '53','51', '49','47', '45', '43','41','39', '37','35', '33', '31', '29', '27','25','23', '21', '19', '17', '15','13','11', '9', '7','5','3', '1', '2', '4','6','8', '10','12', '14','16','18', '20','22', '24','26','28', '30','32', '34','36','38', '40','42','44','46','48', '50','52','54','56','58', '60','62','64','66'],
            rows: ['A1', 'B1', 'C1', 'D1', 'E1'],
            getLabel: function (character, row, column) {
                return column;
            }
        },
        click: function () { //点击事件
            if (this.status() === 'available') { //可选座
                $('<li>'+ this.settings.id + ' </li>')
                    .attr('id', 'cart-item-' + this.settings.id)
                    .data('seatId', this.settings.id)
                    .appendTo($cart1);

                $counter1.text(scc1.find('selected').length + 1+scc.find('selected').length);

                return 'selected';
            } else if (this.status() === 'selected') { //已选中
                //更新数量
                $counter1.text(scc1.find('selected').length - 1+scc.find('selected').length);

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

    var resultabcd=[];
    $.ajax({
        type:"GET",
        url:"http://47.95.244.139:8080/theatre/look2",
        contentType: "application/json;charset=utf-8",
        timeout : 2000,
        jsonp:"jsoncallback",
        jsonCallback:"show",
        dataType: "jsonp",
        success:function (info) {
            $.each(info,function (i,info) {
                console.log(info);
                resultabcd.push(info["location"]);
            });
            //已售出的座位
            console.log(resultabcd);
            scc.get(resultabcd).status('unavailable');
            scc1.get(resultabcd).status('unavailable');
            resultabcd=0;
        },
        error:function () {
            alert("连接失败,请检查网络");
        }
    });

    $(".checkout-button").click(function () {
        var contt=$("#selected-seatss");
        var zlzll=contt.text().split(" ");
        zhuangtaii=zlzll.pop();

        // console.log(zlzll);

        $.ajax({
            type:"POST",
            url:"http://47.95.244.139:8080/theatre/buy4",
            data:{"info":zlzll},
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
                    scc.get(zlzll).status('unavailable');
                    scc1.get(zlzll).status('unavailable');

                    alert("提交成功");
                    $("li").remove();
                    $counter1.text("0");
                    console.log(zlzll);
                }

            },
            error:function () {
                alert("提交失败,请检查网络");
            }
        });

        zhuangtaii=0;
    });
});

function releasthou() {
    var person1=prompt("请输入口令");
    // console.log(person);
    $.ajax({
        type:"POST",
        url:"http://47.95.244.139:8080/theatre/clear2",
        data:{"pwd":person1},
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
