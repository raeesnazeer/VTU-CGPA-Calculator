angular.module('CalculatorApp', [])
    .controller('CalculatorController', function($scope) {
		
		$scope.arrlist = [{
"userid": 1,
"name": "CS"
}, {
"userid": 2,
"name": "IS"
},{
"userid": 3,
"name": "EC"
}, {
"userid": 4,
"name": "CIVIL"
},{
"userid": 5,
"name": "MECH"
}];
$scope.getdetails = function () {
if ($scope.userselected.userid == "1")
{
$scope.cs = true;
$scope.is = false;
$scope.ec = false;
$scope.civil = false;
$scope.mech = false;
}
else if ($scope.userselected.userid == "2")
{
$scope.cs = false;
$scope.is = true;
$scope.ec = false;
$scope.civil = false;
$scope.mech = false;
}
else if ($scope.userselected.userid == "3")
{
$scope.cs = false;
$scope.is = false;
$scope.ec = true;
$scope.civil =false ;
$scope.mech = false;
}
else if ($scope.userselected.userid == "4")
{
$scope.cs = false;
$scope.is = false;
$scope.ec = false;
$scope.civil = true;
$scope.mech = false;
}
else if ($scope.userselected.userid == "5")
{
	$scope.cs = false;
	$scope.is = false;
$scope.ec = false;
$scope.civil = false ;
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
			
			 
			 var sgpa = ((gradeSub1*4)+(gradeSub2*4)+(gradeSub3*3)+(gradeSub4*2)+(gradeSub5*5)+(gradeSub6*2))/20;
			 
			 
	
			
			if( isNaN( sgpa ) ){
return "Enter the Marks";
}else
{
	if($scope.userselected.userid == "3" || $scope.userselected.userid == "4" || $scope.userselected.userid == "5")
					var sgpa = ((gradeSub1*4)+(gradeSub2*4)+(gradeSub3*3)+(gradeSub4*2)+(gradeSub5*6)+(gradeSub6*1))/20;
				sgpa=sgpa.toFixed(2);
			return sgpa;
			
}        };
$scope.cgpa8sem = function() {
					var cgpa=(($scope.cg1234567*204)+($scope.cg8*20))/224;
								if( isNaN( cgpa ) ){
return "0";
}else
					cgpa=cgpa.toFixed(2);
					
					return cgpa;
				};
    });