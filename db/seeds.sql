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
  ("Rinah Russo", "Rylee Powell",6,4),
  ("Quinn Parker", "Leila Tyson",6,1),
  ("Vernon Summers", "Elvis Levy",10,2),
  ("Julian Lambert", "Dominique Hill",8,3),
  ("Hamilton Lucas", "Nicholas Hudson",12,3),
  ("Jemima Pierce", "Hilel Bray",3,2),
  ("Kenneth Stevenson", "Kennedy Macdonald",3,1),
  ("Ulysses Hunt", "Perry Haley",2,2),
  ("Forrest Parsons", "Veronica Byers",8,5),
  ("Aline Mcneil", "Stacey Beach",4,3),
  ("Hedley Blair", "Christian Simpson",8,2),
  ("Paula Anthony", "Maya Barnett",5,5),
  ("Brian Berry", "Madonna Reid",3,3),
  ("Caryn Moran", "Aristotle Sharpe",9,2),
  ("Rigel Stevenson", "Carlos Sparks",4,1);