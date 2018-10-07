($(function() {
    //bscroll滚动条
    var better = new BScroll(".wrap", {
        click: true
    });
    //ajax数据
    $.ajax({
            url: "./data/data.json",
            dataType: "json",
            success: function(data) {
                if (data.code === 1) {
                    var datas = data.data;
                    tet(datas);
                }
            }
        })
        //整合数据
    function tet(data) {
        var obj = {};
        var arr = [];
        for (var i in data) {
            var first = data[i].Spelling.slice(0, 1);
            if (!obj[first]) {
                obj[first] = {
                    title: first,
                    list: []
                }
            }
            obj[first].list.push(data[i]);
        }
        // 追加到arr里面
        for (var i in obj) {
            arr.push(obj[i]);
        }
        // 排序
        arr.sort(function(a, b) {
            return a.title.charCodeAt(0) - b.title.charCodeAt(0);
        })
        render(arr);
        // 渲染li
        function render(arr) {
            console.log(arr);
            var html = "";
            arr.forEach(function(fil) {
                html += `<h2>${fil.title}</h2><li><ul>`;
                fil.list.forEach(function(int) {
                    html += `<li>${int.Name}</li>`;
                })
                html += `</ul></li>`;
            })
            $("ol").append(html);
        }
    }
}))