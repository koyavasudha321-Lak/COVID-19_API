//const URL = 'https://api.covid19api.com/summary';
const URL = 'https://covid19.mathdro.id/api';

let app = angular.module("MyApp",[]);

app.controller('MyCtrl', ($scope, $http)=>{
	//this is controller
	$scope.title="Please Wear Masks!!!!";

	$scope.changeValue=()=>{
		$scope.title = "COVID19 LIVE TRACKER";

	}
	console.log("App Loaded!!");


	$http.get(URL).then( (response)=>{
		//success
		//console.log("success");
		console.log(response.data);

		$scope.all_data = response.data;

	}, (error)=>{
		//error
		console.log("fail!!!")
		console.log(error);
	});



	//get country data
	$scope.get_c_data = ()=>{
		//console.log($scope.c);
		let country = $scope.c;

		if( country == "")
			return;

		$http.get(`${URL}/countries/${country}`)
		.then((response)=>{
			console.log(response.data);
			$scope.c_data = response.data;
		}, (error)=>{
			console.log(error);
		})

	};

});