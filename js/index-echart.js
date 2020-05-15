//设备
function shebei() {
	var sb01 = $("#sb01").text();
	var sb02 = $("#sb02").text();
	var sb03 = $("#sb03").text();
	for(var i = 0; i < sb01; i++) {
		$("#sb-img01").append("<img src='img/shebei.png'>")
	};
	for(var j = 0; j < sb02; j++) {
		$('#sb-img02').append("<img src='img/shebei.png'>");

	};
	for(var k = 0; k < sb03; k++) {
		$('#sb-img03').append("<img src='img/shebei.png'>");
	};
}
$(shebei);

//柱状图-网点基本情况
function bar() {
	var personnel = echarts.init(document.getElementById('personnel-content')); //初始化echarts实例
	var perOption = {
		//		    color:['#feb92d','#298aff','#004890'],
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			},
			confine: false,
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			data: ['客户经理', '柜台人员', '管理人数'],
			axisTick: {
				alignWithLabel: true
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: '#fff'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#fff',
					//                          width:2,//这里是为了突出显示加上的
				}
			},
			splitLine: {
				show: false
			}
		}],
		yAxis: [{
			type: 'value',
			axisLabel: {
				show: true,
				textStyle: {
					color: '#fff'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#fff',
					//                          width:2,//这里是为了突出显示加上的
				}
			},
			splitLine: {
				show: false
			}
		}],
		series: [{
			name: '人数',
			type: 'bar',
			barWidth: '40%',
			data: [6, 8, 4],
			itemStyle: {
				normal: {
					// 定制显示（按顺序）
					color: function(params) {
						var colorList = ['#feb92d', '#298aff', '#004890'];
						return colorList[params.dataIndex]
					}
				},
			},
			label: {
				show: true, //开启显示
				position: 'top', //在上方显示
				textStyle: { //数值样式
					color: '#28d6fc',
					fontSize: 16,
					fontWeight: 600
				}
			}
		}]
	};
	personnel.setOption(perOption);

	//自动轮播
	var app = {
		currentIndex: -1,
	};
	setInterval(function() {
		var dataLen = perOption.series[0].data.length;
		// 取消之前高亮的图形
		personnel.dispatchAction({
			type: 'downplay',
			seriesIndex: 0,
			dataIndex: app.currentIndex
		});
		app.currentIndex = (app.currentIndex + 1) % dataLen;
		console.log(app.currentIndex);
		// 高亮当前图形
		personnel.dispatchAction({
			type: 'highlight',
			seriesIndex: 0,
			dataIndex: app.currentIndex,
		});
		// 显示 tooltip
		personnel.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: app.currentIndex
		});
	}, 2500);
}
$(bar);

//玫瑰图-网点销售业绩
function rose() {

	var container02 = echarts.init(document.getElementById('container02')); //初始化echarts实例
	var conOption = {
		title: {
			text: '',
			subtext: '',
			x: 'center',
			itemGap: 20
		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient: 'vertical', //垂直显示
			y: 'center', //延Y轴居中
			x: 'left', //居右显示
			left: "40",
			top: "56",
			itemGap: 20,
			//		        padding:[40,40,40,40], //调节legend的位置
			//图例文字样式
			textStyle: {
				color: '#fff',
				fontSize: 14,
				fontWeight: '700',
			},
			data: ['产品1', '产品2', '产品3', '产品4', '产品5']
		},
		toolbox: {
			show: false,
		},
		calculable: true,
		color: ['#004890', '#feb92d', '#298aff', '#147ea8', '#28d6fc'],
		//	color:[],
		series: [{
			name: '产品',
			type: 'pie',
			radius: [20, 85],
			center: ['60%', 140],
			roseType: 'radius',
			//          padding: [0, -120],     //文字和图的边距
			x: '50%', // for funnel
			max: 40, // for funnel
			sort: 'ascending', // for funnel
			data: [{ "value": 32, "name": "产品1" },
				{ "value": 26, "name": "产品2" },
				{ "value": 18, "name": "产品3" },
				{ "value": 14, "name": "产品4" },
				{ "value": 10, "name": "产品5" }
			],
			//标线的属性设置，以及显示的文字
			itemStyle: {
				normal: {
					label: {
						show: true,
						formatter: '{c}次',
						textStyle: {
							color: '#fff',
							fontSize: 14,
							fontWeight: '700',
						}
					},
					//标线长度，宽度
					labelLine: {
						show: true,
						length: 30,
						lineStyle: {
							width: 2
						}
					}
				},
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},
		}]
	};

	//	var jsondatas = [];
	//	var titledata = [];
	//	$.ajax({
	//		type:'get',
	//		url:'list.json',
	//		dataType:"json",
	//		success:function(result){
	//			console.log("result",result);
	//			
	//			for(var x=0;x<result.list.length;x++)
	//			{
	//				jsondatas.push(result.list[x]);
	//				titledata.push(result.list[x]);
	//			}
	//		    console.log("jsondatas",jsondatas);
	//		    	    console.log("titledata",titledata);
	//			container02.setOption({
	//				legend: {
	//					data:titledata
	//				},
	//				series:[{
	//					name: '产品:',
	//					data:jsondatas
	//				}]
	//			});
	//		},
	//		error : function(errorMsg) {
	//	 	}
	//	});

	container02.setOption(conOption);

	var app = {
		currentIndex: -1,
	};
	setInterval(function() {
		var dataLen = conOption.series[0].data.length;
		// 取消之前高亮的图形
		container02.dispatchAction({
			type: 'downplay',
			seriesIndex: 0,
			dataIndex: app.currentIndex
		});
		app.currentIndex = (app.currentIndex + 1) % dataLen;
		console.log(app.currentIndex);
		// 高亮当前图形
		container02.dispatchAction({
			type: 'highlight',
			seriesIndex: 0,
			dataIndex: app.currentIndex,
		});
		// 显示 tooltip
		container02.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: app.currentIndex
		});
	}, 2500);
};
$(rose);

/*********地图标注点********/
var map = new BMap.Map("container");
var point = new BMap.Point(114.66373, 33.590136);
map.centerAndZoom(point, 12);
var marker = new BMap.Marker(point);
map.disableDragging(); //禁止拖拽
map.disableScrollWheelZoom(); //禁止缩放
map.disableDoubleClickZoom();
map.disablePinchToZoom();
var mapPoints = [
	{ x: 33.63807, y: 114.710912, title: "文昌大道总行", id: "2", branch: "" },
	{ x: 33.643796, y: 114.677054, title: "建设路东段支行", id: "3", branch: "" },
	{ x: 33.618453, y: 114.655491, title: "川汇区交通路18号", id: "4", branch: "" },
	{ x: 33.605005, y: 114.638434, title: "汉阳路南段支行", id: "5", branch: "" },
	{ x: 33.61734, y: 114.661521, title: "八一路中段支行", id: "6", branch: "" }
];
var i = 0;
map.addOverlay(marker);
map.enableScrollWheelZoom(true);
// 函数 创建多个标注
function markerFun(points, label, infoWindows, id) {
	var markers = new BMap.Marker(points,{icon:icon});
	markers.setLabel(label);
	markers.getLabel().setTitle(id);
	map.addOverlay(markers);
};

for(var i = 0; i < mapPoints.length; i++) {
	var points = new BMap.Point(mapPoints[i].y, mapPoints[i].x); //创建坐标点
	var opts = {
		width: 210,
		height: 72,
		title: mapPoints[i].title
	};
	var icon = new BMap.Icon('./img/position-icon.png', new BMap.Size(20, 32), {  
	    anchor: new BMap.Size(10, 15)  
	});
	var label = new BMap.Label(mapPoints[i].branch, {
		offset: new BMap.Size(25, 5)
	});

	var htmlStr = "<div class='map-pop'><div class='pop-title'>" + mapPoints[i].title + "</div><p>距离:<span>2</span>KM</p></div>";
	var infoWindows = new BMap.InfoWindow(htmlStr);
	markerFun(points, label, infoWindows, mapPoints[i].id);
};

var idx = 1;
var timer;
var mapPop = document.getElementsByClassName("map-pop");

$(function() {
	setTimeout(function() {
		//$(".BMap_noprint").append("<div class='map-pop'><div class='pop-title'>周口农商银行</div><p>距离:<span>2</span>KM</p></div>");
		var label = $(".BMap_Marker .BMapLabel");

		for(var i = 0; i < mapPoints.length; i++) {
			for(var j = 0; j < label.length; j++) {

				if((mapPoints[i].id == label[j].title) && (label[j].innerHTML != "shandow")) {
					// alert(label[j].innerHTML)
					label[i].innerHTML = "<div class='map-pop'><div class='pop-title'>" + mapPoints[i].title + "</div><p>距离:<span>2</span>KM</p></div>";
					break;
				}
			}
		}
		$(".BMapLabel").parent().eq(1).find(".map-pop").show();
		$(".BMapLabel").parent().eq(1).siblings().find(".map-pop").hide();
	}, 500)

	timer = setInterval(function() {
		if(idx == mapPop.length + 1 ) {
			idx = 1;
		}
		$(".BMapLabel").parent().eq(idx).find(".map-pop").fadeIn(1000);
		$(".BMapLabel").parent().eq(idx).siblings().find(".map-pop").stop(true, true).fadeOut(1000);
		idx++;
	}, 3000);
});