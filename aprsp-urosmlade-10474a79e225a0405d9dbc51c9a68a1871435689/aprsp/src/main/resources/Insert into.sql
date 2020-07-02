insert into "smer" 
values (nextval('SMER_SEQ'),'Industrijsko inzenjerstvo', 'II');
insert into "smer" 
values (nextval('SMER_SEQ'),'Inzenjerski menadzment', 'IM');

insert into "projekat"
values (nextval('PROJEKAT_SEQ'),'Projektovanje baza podataka','PBP','Bezbednost i zastita na radu');
insert into "projekat"
values (nextval('PROJEKAT_SEQ'),'Agilni pristupi u razvoju softverskih proizvoda', 'APRSP','Student radi na projektu');

insert into "grupa"
values (nextval('GRUPA_SEQ'),'PBP-BZR', 1);
insert into "grupa"
values (nextval('GRUPA_SEQ'),'APRSP-3', 2);


insert into "student"
values(nextval('STUDENT_SEQ'),'Uros', 'Mladenovic', 'II48/2015', 1, 1);
insert into "student"
values(nextval('STUDENT_SEQ'),'Vladimir', 'Mikic', 'II53/2015', 2, 2);