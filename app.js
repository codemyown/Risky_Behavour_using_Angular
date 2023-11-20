var app = angular.module('dashboardApp', []);

app.controller('DashboardController', ['$scope', function ($scope) {
  // ... (unchanged code)

  // Open Update User Modal
  $scope.openUpdateModal = function (user) {
    $scope.selectedUser = angular.copy(user); // Create a copy to avoid modifying the original user
    $('#updateUserModal').modal('show');
  };

  // Update User
  $scope.updateUser = function () {
    // Find the index of the selected user in the array
    var index = $scope.users.findIndex(function (user) {
      return user.name === $scope.selectedUser.name;
    });

    // Update the user in the array
    if (index !== -1) {
      $scope.users[index] = angular.copy($scope.selectedUser); // Create a copy to avoid reference issues
    }

    // Close the modal
    $('#updateUserModal').modal('hide');
  };
}]);
