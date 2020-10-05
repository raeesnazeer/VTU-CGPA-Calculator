angular.module('CalculatorApp', [])
    .controller('CalculatorController', function($scope) {

$scope.reset = function(){
				$scope.sem1="";
				$scope.sem2="";
				$scope.sem3="";
				$scope.sem4="";
				$scope.sem5="";
				$scope.sem6="";
				$scope.sem7="";
				$scope.sem8="";

	};

        $scope.calCGPA = function() {
			var sem1 = isNaN( $scope.sem1 ) ? 0 : $scope.sem1;
			var sem2 = isNaN( $scope.sem2 ) ? 0 : $scope.sem2;
			var sem3 = isNaN( $scope.sem3 ) ? 0 : $scope.sem3;
			var sem4 = isNaN( $scope.sem4 ) ? 0 : $scope.sem4;
			var sem5 = isNaN( $scope.sem5 ) ? 0 : $scope.sem5;
			var sem6 = isNaN( $scope.sem6 ) ? 0 : $scope.sem6;
			var sem7 = isNaN( $scope.sem7 ) ? 0 : $scope.sem7;
			var sem8 = isNaN( $scope.sem8 ) ? 0 : $scope.sem8;
			var totalcredit = 0;

if(!isNaN( $scope.sem1 ))
{
	totalcredit += 20;
}  if(!isNaN( $scope.sem2 ))
{
	totalcredit += 20;
} if(!isNaN( $scope.sem3 ))
{
	totalcredit += 24;
} if(!isNaN( $scope.sem4 ))
{
	totalcredit += 24;
} if(!isNaN( $scope.sem5 ))
{
	totalcredit += 25;
} if(!isNaN( $scope.sem6 ))
{
	totalcredit += 24;
} if(!isNaN( $scope.sem7 ))
{
	totalcredit += 20;
} if(!isNaN( $scope.sem8 ))
{
	totalcredit += 18;
}
			
			var cgpa = ((sem1*20)+(sem2*20)+(sem3*24)+(sem4*24)+(sem5*25)+(sem6*24)+(sem7*20)+(sem8*18))/totalcredit;

			if(isNaN( cgpa ))
			{
				return "Enter the Marks";
			}
			else
			{
				return cgpa.toFixed(2);
			}
		
				}	;
});
