var dom = document.getElementById("map");
var myChart = echarts.init(dom);

myChart.clear();
myChart.setOption(option = {
	bmap: {
		center: [114.665405, 33.597204],
		zoom: 12,
		roam: true,
		mapStyle: {
			'styleJson': [{
					'featureType': 'water',
					'elementType': 'all',
					'stylers': {
						'color': '#112f8a'
					}
				},
				{
					'featureType': 'land',
					'elementType': 'geometry',
					'stylers': {
						'color': '#101928'
					}
				},
				{
					'featureType': 'highway',
					'elementType': 'all',
					'stylers': {
						'visibility': 'off'
					}
				},
				{
					'featureType': 'arterial',
					'elementType': 'geometry.fill',
					'stylers': {
						'color': '#34456b'
					}
				},
				{
					'featureType': 'arterial',
					'elementType': 'geometry.stroke',
					'stylers': {
						'color': '#111a29	'
					}
				},
				{
					'featureType': 'local',
					'elementType': 'geometry',
					'stylers': {
						'color': '#39497c'
					}
				},
				{
					'featureType': 'railway',
					'elementType': 'geometry.fill',
					'stylers': {
						'color': '#112f8a'
					}
				},
				{
					'featureType': 'railway',
					'elementType': 'geometry.stroke',
					'stylers': {
						'color': '#08304b'
					}
				},
				{
					'featureType': 'subway',
					'elementType': 'geometry',
					'stylers': {
						'lightness': -70
					}
				},
				{
					'featureType': 'building',
					'elementType': 'geometry.fill',
					'stylers': {
						'color': '#112f8a'
					}
				},
				{
					'featureType': 'all',
					'elementType': 'labels.text.fill',
					'stylers': {
						'color': '#ffffff'
					}
				},
				{
					'featureType': 'all',
					'elementType': 'labels.text.stroke',
					'stylers': {
						'color': '#101a2a'
					}
				},
				{
					'featureType': 'building',
					'elementType': 'geometry',
					'stylers': {
						'color': '#022338'
					}
				},
				{
					'featureType': 'green',
					'elementType': 'geometry',
					'stylers': {
						'color': '#062032'
					}
				},
				{
					'featureType': 'boundary',
					'elementType': 'all',
					'stylers': {
						'color': '#465b6c'
					}
				},
				{
					'featureType': 'manmade',
					'elementType': 'all',
					'stylers': {
						'color': '#022338'
					}
				},
				{
					'featureType': 'label',
					'elementType': 'all',
					'stylers': {
						'visibility': 'off'
					}
				}
			]
		}
	}
});

$.getJSON('data/line.data', function(data) {
	var hStep = 300 / (data.length - 1);
	var busLines = [].concat.apply([], data.map(function(busLine, idx) {
		var prevPt;
		var points = [];
		for(var i = 0; i < busLine.length; i += 2) {
			var pt = [busLine[i], busLine[i + 1]];
			if(i > 0) {
				pt = [
					prevPt[0] + pt[0],
					prevPt[1] + pt[1]
				];
			}
			prevPt = pt;
			points.push([pt[0], pt[1]]);
		}
		return {
			coords: points,
			lineStyle: {
				normal: {
					color: echarts.color.modifyHSL('#5A94DF', Math.round(hStep * idx))
				}
			}
		};
	}));
	myChart.setOption(option = {
		series: [{
			type: 'lines',
			coordinateSystem: 'bmap',
			polyline: true,
			data: busLines,
			slient: true,
			lineStyle: {
				normal: {
					// color: '#c23531',
					// color: 'rgb(200, 35, 45)',
					opacity: 0.4,
					width: 2
				}
			},
			progressiveThreshold: 500,
			progressive: 200
		}, {
			type: 'lines',
			coordinateSystem: 'bmap',
			polyline: true,
			data: busLines,
			lineStyle: {
				normal: {
					width: 0
				}
			},
			effect: {
				constantSpeed: 40,
				show: true,
				trailLength: 0.5,
				symbolSize: 2.8
			},
			zlevel: 1
		}],
	});
});