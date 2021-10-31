#### Employee Tracker
A command line application to manage a company's employee database, using Node.js, Inquirer, Console.table and MySQL2.

#### Built With 🧰
- Node.js
- Mysql
- MySQL2
- Inquirer
- Console.table

#### To use:
###### Database
/ create the database
/source db files in CLI
###### CLI
/ clone files
/ npm i
/ npm start
/ follow prompts

#### Work Completed
A database was created allowing company users to view and modify information about their workforce, covering salary, departments, role types and more in the CLI.

#### Project Visuals :sunglasses:
<img width="1156" alt="Screenshot" src="images/Screen Shot 2021-10-31 at 10.00.26 AM.png">


#### Video [Here](https://www.youtube.com/watch?v=WSNENZAp2tg)
   
#### User Story 📖

> AS A business owner     
> I WANT to be able to view and manage the departments, roles, and employees in my company     
> SO THAT I can organize and plan my business     

#### Acceptance Criteria ✅

> GIVEN a command-line application that accepts user input     
> WHEN I start the application     
> THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role     
> WHEN I choose to view all departments     
> THEN I am presented with a formatted table showing department names and department ids     
> WHEN I choose to view all roles     
> THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role     
> WHEN I choose to view all employees     
> THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to     
> WHEN I choose to add a department     
> THEN I am prompted to enter the name of the department and that department is added to the database     
> WHEN I choose to add a role     
> THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database     
> WHEN I choose to add an employee     
> THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database     
> WHEN I choose to update an employee role     
> THEN I am prompted to select an employee to update and their new role and this information is updated in the database      

#### Information and Resources Used

- [NPM mySQL](https://www.npmjs.com/package/mysql)
- [Console Table NPM](https://www.npmjs.com/package/console.table)
- [Inquirer NPM](https://www.npmjs.com/package/inquirer)
- [Mysql2](https://www.npmjs.com/package/mysql2)

