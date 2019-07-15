angular.module('CalculatorApp', [])
    .controller('CalculatorController', function($scope) {
		$scope.arrlist = [{
"userid": 1,
"name": "CS/IS"
}, {
"userid": 2,
"name": "EC"
}, {
"userid": 3,
"name": "CIVIL"
},{
"userid": 4,
"name": "MECH"
}];
$scope.getdetails = function () {
if ($scope.userselected.userid == "1")
{
$scope.cs = true;
$scope.ec = false;
$scope.civil = false;
$scope.mech = false;
}
else if ($scope.userselected.userid == "2")
{
	$scope.cs = false;
$scope.ec = true;
$scope.civil = false;
$scope.mech = false;
}
else if ($scope.userselected.userid == "3")
{
	$scope.cs = false;
$scope.ec = false;
$scope.civil = true;
$scope.mech = false;
}
else if ($scope.userselected.userid == "4")
{
	$scope.cs = false;
$scope.ec = false;
$scope.civil = false;
$scope.mech = true;
}
}

		$scope.calculateGrade = function(item) {			
        if (item < 40)
        return 0;
    else if (item < 45 && item >=40)
        return 4;
    else if (item < 50 && item >=45)
        return 5;
    else if (item < 60 && item >=50)
        return 6;
    else if (item < 70 && item >=60)
        return 7;
    else if (item < 80 && item >=70)
        return 8;
    else if (item < 90 && item >=80)
        return 9;
    else if (item >=90)
        return 10;
};


        $scope.result = function() {
			var gradeSub1 = $scope.calculateGrade($scope.sub1);
			var gradeSub2 = $scope.calculateGrade($scope.sub2);
			var gradeSub3 = $scope.calculateGrade($scope.sub3);
			var gradeSub4 = $scope.calculateGrade($scope.sub4);
			var gradeSub5 = $scope.calculateGrade($scope.sub5);
			var gradeSub6 = $scope.calculateGrade($scope.sub6);
			var gradeSub7 = $scope.calculateGrade(($scope.sub7)*2);
			var gradeLab1 = $scope.calculateGrade($scope.lab1);
			var gradeLab2 = $scope.calculateGrade($scope.lab2);
			
			var sgpa = ((gradeSub1*4)+(gradeSub2*4)+(gradeSub3*4)+(gradeSub4*4)+(gradeSub5*3)+(gradeSub6*4)+(gradeSub7*1)+(gradeLab1*2)+(gradeLab2*2))/28;
			if( isNaN( sgpa ) ){
return "Enter the Marks";
}else
			return sgpa;
			

        };
    });