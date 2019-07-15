$(function(){
	var dom = document.getElementById("quxian");
	var myChart = echarts.init(dom);
	var app = {};
	var option = null;
	$.ajax({
		type: "get",
		async: true, 
		url: "https://edu.telking.com/api/?type=month",
		data: {},
		dataType: "json", 
		success: function (result) {
			option = {
				title: {
					text: "曲线图数据展示",
					top: '7%',
					right: '45%'
				},
			    xAxis: {
			        type: 'category',
			        data: result.data.xAxis
			    },
			    yAxis: {
			        type: 'value'
			    },
			    grid: {
			    	top: 102,
			    	right: 60,
			    	width: 980,
			    	height: 200
			    },
			    series: [{
			        data: result.data.series,
			        type: 'line',
			        label: {
		                normal: {
		                    show: true,
		                    position: 'top'
		                }
		            },
			        smooth: true
			    }]
			};
			if (option && typeof option === "object") {
			    myChart.setOption(option, true);
			}
		},
		error: function (errorMsg) {
			alert("不好意思，图表请求数据失败啦!");
		}
	});
});
$(function(){
	var dom = document.getElementById("bingzhuang");
	var myChart = echarts.init(dom);
	var app = {};
	var option = null;
	var myData = [];
	$.ajax({
		type: "get",
		async: true, 
		url: "https://edu.telking.com/api/?type=month",
		data: {},
		dataType: "json", 
		success: function (result) {
			for(var i=0;i<result.data.xAxis.length;i++){
				var obj=new Object();//一定要用Object,不能用字符串拼接形式
				obj.value=result.data.series[i];
				obj.name=result.data.xAxis[i];
				myData[i]=obj;
			}
			option = {
			    title: {
			        text: '饼状图数据展示',
			        top: '10%',
			        left: 'center',
			        x: 'left'
			    },
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },/*legend: {  
                    orient : 'vertical',  
                    x : 'left',  
                    data: myData.name  
                },*/
                
			    series : [
			        {
			            type: 'pie',
			            radius : '50%',
			            center: ['50%', '60%'],
			            selectedMode: 'single',
			            data: myData,
			        }
			    ]
			};
			
			if (option && typeof option === "object") {
			    myChart.setOption(option, true);
			}
		},
		error: function (errorMsg) {
			alert("不好意思，图表请求数据失败啦!");
		}
	});
});
$(function(){
	var dom = document.getElementById("zhuzhuang");
	var myChart = echarts.init(dom);
	var app = {};
	var option = null;
	$.ajax({
		type: "get",
		async: true, 
		url: "https://edu.telking.com/api/?type=month",
		data: {},
		dataType: "json", 
		success: function (result) {
			option = {
				title: {
					text: "柱状图数据展示",
					top: '9%',
					right: '40%'
				},
			    xAxis: {
			        type: 'category',
			        data: result.data.xAxis
			    },
			    yAxis: {
			        type: 'value'
			    },
			    grid: {
			    	top: 118,
			    	width: 480,
			    	height: 190
			    },
			    series: [{
			        data: result.data.series,
			        type: 'bar',
			        label: {
		                normal: {
		                    show: true,
		                    position: 'top'
		                }
		            }
			    }]
			};
			if (option && typeof option === "object") {
			    myChart.setOption(option, true);
			}
		},
		error: function (errorMsg) {
			alert("不好意思，图表请求数据失败啦!");
		}
	});
});