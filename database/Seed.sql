CREATE TABLE tenants (
    id int NOT NULL AUTO_INCREMENT,
    firstName char(20) NOT NULL,
    lastName char(20) NOT NULL,
    phoneNumber varchar(10) NOT NULL,
    email varchar(30) NOT NULL,
    PRIMARY KEY (id)
);

Insert into tenants (firstName,lastName,phoneNumber,email) values ("Daniel", "Flores", 4159269091, "Danielflores125@gmail.com");