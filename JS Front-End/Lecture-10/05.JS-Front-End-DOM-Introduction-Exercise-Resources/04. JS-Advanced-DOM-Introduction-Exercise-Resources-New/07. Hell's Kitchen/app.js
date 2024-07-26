function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let input = document.querySelector('#inputs textarea').value;
      let arr = JSON.parse(input);

      let restaurants = {};

      arr.forEach(line => {
         let [restaurant, workers] = line.split(' - ');
         workers = workers.split(', ').map(worker => {
            let [name, salary] = worker.split(' ');
            return { name, salary: Number(salary) };
         });

         if (restaurants[restaurant]) {
            workers = workers.concat(restaurants[restaurant].workers);
         }

         workers.sort((worker1, worker2) => worker2.salary - worker1.salary);
         let bestSalary = workers[0].salary;
         let averageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;

         restaurants[restaurant] = {
            workers,
            averageSalary,
            bestSalary
         };
      });

      let bestRestaurant = undefined;
      let bestAverageSalary = 0;

      for (const name in restaurants) {
         if (restaurants[name].averageSalary > bestAverageSalary) {
            bestAverageSalary = restaurants[name].averageSalary;
            bestRestaurant = {
               name,
               workers: restaurants[name].workers,
               averageSalary: restaurants[name].averageSalary,
               bestSalary: restaurants[name].bestSalary
            };
         }
      }

      let bestRestaurantString = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
      let workersString = bestRestaurant.workers.map(worker => `Name: ${worker.name} With Salary: ${worker.salary}`).join(' ');

      document.querySelector('#bestRestaurant p').textContent = bestRestaurantString;
      document.querySelector('#workers p').textContent = workersString;
   }
}