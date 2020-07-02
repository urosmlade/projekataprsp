drop table if exists smer cascade;
drop table if exists grupa cascade;
drop table if exists projekat cascade;
drop table if exists student cascade;


drop sequence if exists SMER_SEQ;
drop sequence if exists GRUPA_SEQ;
drop sequence if exists PROJEKAT_SEQ;
drop sequence if exists STUDENT_SEQ;


create table smer (
	id integer primary key,
	naziv varchar(100) not null,
	oznaka varchar(50) not null
);

create table grupa(
	id integer primary key,
	oznaka varchar(10) not null,
	smer integer not null,
	constraint grupa_smer_fk foreign key (smer) references smer(id)
);

create table projekat(
	id integer primary key,
	naziv varchar(100) not null,
	oznaka varchar(10) not null,
	opis varchar(500) not null
);


create table student(
	id integer primary key,
	ime varchar(50) not null,
	prezime varchar(50) not null,
	broj_indeksa varchar(20) not null,
	grupa integer not null,
	projekat integer not null,
	constraint student_grupa_fk foreign key (grupa) references grupa(id),
	constraint student_projekat_fk foreign key (projekat) references projekat(id)
);


create sequence SMER_SEQ
increment 1
start 1;
create sequence GRUPA_SEQ
increment 1
start 1;
create sequence PROJEKAT_SEQ
increment 1
start 1;
create sequence STUDENT_SEQ
increment 1
start 1;



