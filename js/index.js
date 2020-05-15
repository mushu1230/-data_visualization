//利率表
/*
 * 参数说明
 * obj : 动画的节点，ul
 * top : 动画的高度，
 * time : 动画的速度，500毫秒
 * function : 回调函数，每次动画完成，marginTop归零，并把此时第一条信息添加到列表最后;
 * 
 */
var obj, top, time;

function noticeUp(obj, top, time) {
	$(obj).animate({
		marginTop: top
	}, time, function() {
		$(this).css({
			marginTop: "0"
		}).find(":first").appendTo(this);
	})
}
rollObj = ".tableBody ul";
rollTop = "-38px";
rollTime = "5";
setInterval("noticeUp(rollObj,rollTop,500)", rollTime * 1000);

//计数器
function visitorCount() {
	$(".waveBall-container .border").append("<div class='count'>+1</div>")
	var count = $(".waveBall-container .count")
	count.addClass("active")
	setTimeout(
		function() {
			count.remove()
		}, 1000
	)
}
function lineUpCountSub() {
	alert(113)
	$(".wait-left").append("<div class='countSub'>-1</div>")
	var count = $(".wait-left .countSub")
	count.addClass("active")
	setTimeout(
		function() {
			count.remove()
		}, 1000
	)
}
function lineUpCountAdd() {
	$(".wait-left").append("<div class='countAdd'>+1</div>")
	var count = $(".wait-left .countAdd")
	count.addClass("active")
	setTimeout(
		function() {
			count.remove()
		}, 1000
	)
}
//波浪
var waveHeight = $(".waveBall-content").height()
var wave1 = $('#feel-the-wave1').wavify({
	//面积%
	height: waveHeight - 0.65 * waveHeight,
	//波浪数
	bones: 9,
	//波幅
	amplitude: 16,
	//颜色
	color: '#427ede',
	//速度
	speed: .4
});

var wave2 = $('#feel-the-wave2').wavify({
	height: waveHeight - 0.63 * waveHeight,
	bones: 10,
	amplitude: 13,
	color: 'rgba(76, 130, 243, 1)',
	speed: .26
});
var wave3 = $('#feel-the-wave3').wavify({
	//面积%
	height: waveHeight - 0.65 * waveHeight,
	//波浪数
	bones: 12,
	//波幅
	amplitude: 20,
	//颜色
	color: '#427ede',
	//速度
	speed: .4
});

var wave4 = $('#feel-the-wave4').wavify({
	height: waveHeight - 0.63 * waveHeight,
	bones: 14,
	amplitude: 16,
	color: 'rgba(76, 130, 243, 1)',
	speed: .26
});
$("[data-pause]").on('click', function() {
	wave1.pause();
	wave2.pause();
	return false;
});

$("[data-play]").on('click', function() {
	wave1.play();
	wave2.play();
	return false;
});

//气泡
var len = $(".waveBall-content .math").text().length;

function bubble01() {
	$(".waveBall-content").eq(0).append("<div class='bubble'></div>")
	var qi = $(".waveBall-content").eq(0).children(".bubble").last()
	//半径
	var radius = Math.floor(Math.random() * 10 + 10);
	//位置
	var seat = Math.floor(Math.random() * 120);
	//上升速度
	var speed = (Math.random() * 4 + 2);
	$(qi).css({
		"left": seat,
		"transition-duration": speed + "s"
	})
	setTimeout(function() {
		$(qi).css({
			"transform": "translateY(-150px)",
			"width": radius,
			"height": radius,
		})
	}, 60)
	setTimeout(function() {
		$(qi).remove()
	}, speed * 1000)

}

function bubble02() {
	$(".waveBall-content").eq(1).append("<div class='bubble'></div>")
	var qi = $(".waveBall-content").eq(1).children(".bubble").last()
	var radius = Math.floor(Math.random() * 10 + 10);
	var seat = Math.floor(Math.random() * 130);
	var speed = (Math.random() * 4 + 2);
	$(qi).css({
		"left": seat,
		"transition-duration": speed + "s"
	})
	setTimeout(function() {
		$(qi).css({
			"transform": "translateY(-150px)",
			"width": radius,
			"height": radius,
		})
	}, 60)
	setTimeout(function() {
		$(qi).remove()
	}, speed * 1000)
	//数字字体大小自适应
	var length = $(".waveBall-content .border2 .math").text().length;
	if(length != len) {
		len = length;
		if(length == 4) {
			$(".waveBall-content .border2 .math").css({
				"font-size": "54px"
			})
		} else if(length == 5) {
			$(".waveBall-content .border2 .math").css({
				"font-size": "44px"
			})
		} else if(length == 6) {
			$(".waveBall-content .border2 .math").css({
				"font-size": "36px"
			})
		} else if(length == 7) {
			$(".waveBall-content .border2 .math").css({
				"font-size": "32px"
			})
		}
	}
}
setInterval(bubble01, 500)
setInterval(bubble02, 500)


//时钟
function nowTime() {
	var timeObj = new Date(),
		nowHours = timeObj.getHours(),
		nowMinutes = timeObj.getMinutes(),
		nowSeconds = timeObj.getSeconds(),
		nowDay = timeObj.getDay(),
		nowYear = timeObj.getFullYear(),
		nowMonth = timeObj.getMonth() + 1,
		nowDate = timeObj.getDate(),
		str = '';
	nowMonth = nowMonth < 10 ? '0' + nowMonth : nowMonth;
	nowDate = nowDate < 10 ? '0' + nowDate : nowDate;
	nowHours = nowHours < 10 ? '0' + nowHours : nowHours;
	nowMinutes = nowMinutes < 10 ? '0' + nowMinutes : nowMinutes;
	nowSeconds = nowSeconds < 10 ? '0' + nowSeconds : nowSeconds;
	switch(nowDay) {
		case 0:
			nowDay = '星期日';
			break;
		case 1:
			nowDay = '星期一';
			break;
		case 2:
			nowDay = '星期二';
			break;
		case 3:
			nowDay = '星期三';
			break;
		case 4:
			nowDay = '星期四';
			break;
		case 5:
			nowDay = '星期五';
			break;
		case 6:
			nowDay = '星期六';
	}
	str = '<span class="date" style="margin-right:10px">' + nowYear + "-" + nowMonth + "-" + nowDate + '</span>' +
		'<span class="time">' + nowHours + ":" + nowMinutes + ":" + nowSeconds + '</span>'

	$(".headerDate").html(str)
	setTimeout(nowTime, 1000);
}
nowTime();