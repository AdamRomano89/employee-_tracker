INSERT INTO department (department_name)
VALUES

  ("Engineering"),
  ("Produect"),
  ("Sales"),
  ("Operations"),
  ("Community"),
  ("Marketing"),
  ("Planning");

INSERT INTO roles (title, salary, department_id)
VALUES
-- Engineering 
-- -----------------------------------------------------
("Sr. Engineer", 200000.00, 1),
("Engineer I", 222222.00, 1),
("Engineer II", 233333.00, 1),
-- Product
-- -----------------------------------------------------
("Customer Service Associate", 222222.00, 2),
-- Sales
-- -----------------------------------------------------
("Head of Sales", 233333.00, 3),
("Sales Associate", 233333.00, 3),
-- Operations
-- -----------------------------------------------------
("VP of Operations", 300222.00, 4),
("Operations Manager", 300222.00, 4),
-- Community
-- -----------------------------------------------------
("Head of Commnunity Finance", 165000.00, 5),
("Head of Data", 160000.00, 5),
("CEO", 500000.00, 5),
("Executive Assistant", 500000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ("Rinah", "Rylee",6,4),
  ("Quinn", "Leila",6,1),
  ("Vernon", "Elvis",10,2),
  ("Julian", "Dominique",8,3),
  ("Hamilton", "Nicholas",12,3),
  ("Jemima", "Hilel",3,2),
  ("Kenneth", "Kennedy",3,1),
  ("Ulysses", "Perry",2,2),
  ("Forrest", "Veronica",8,5),
  ("Aline", "Stacey",4,3),
  ("Hedley", "Christian",8,2),
  ("Paula", "Maya",5,5),
  ("Brian", "Madonna",3,3),
  ("Caryn", "Aristotle",9,2),
  ("Rigel", "Carlos",4,1);