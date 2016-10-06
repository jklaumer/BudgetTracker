var myApp = angular.module('myApp', []);

	myApp.controller('MainController', ['$scope', function($scope) {

	$scope.totalIncome = 0;
    $scope.totalExpenses = 0;
    $scope.listOfIncomeItems = [];
    $scope.listOfExpenseItems = [];

var incomeItem = {
    "amount": $scope.incomeInput, "description": $scope.incomeDescription
};

$scope.addIncome = function() {
	$scope.incomeDescription = "";
	$scope.listOfIncomeItems.push({incomeItem});
	console.log($scope.listOfIncomeItems);
	};


// Still need to figure out how to get amount and description to go through and define incomeItem and expenseItem properly 

$scope.addExpense = function() {
	$scope.expenseDescription = "";
	$scope.listOfExpenseItems.push({"amount": $scope.expenseInput, "description": $scope.expenseDescription});
	console.log($scope.listOfExpenseItems);
	};

    $scope.totalIncome += $scope.incomeAmount;
    $scope.totalExpenses += $scope.expenseAmount;
    
    
    

}

]);

