create database if not exists hackatonweb ;
USE hackatonweb;

create table if not exists personas (
    id_persona int auto_increment primary key unique not null,
    nombre varchar(50) not null,
    correo_electronico varchar(50) unique not null,
    numero_celular varchar(20) unique not null,
    cedula varchar(50) unique not null,
    direccion varchar(255) not null,
    fecha_de_nacimiento DATE not null,
    sexo enum('M', 'F'),
    tipo_persona ENUM('Cliente', 'Vendedor') not null
);


create table if not exists direcciones (
    id_direccion int unique auto_increment primary key not null,
    id_persona int unique not null,
    direccion varchar(255) not null,
    ciudad varchar(40) not null,
    codigo_postal varchar(10) not null,
    pais varchar(40) not null,
	foreign key(id_persona) references personas(id_persona)
);

Create table if not exists clientes
(
	id_cliente int auto_increment primary key unique not null,
    id_persona int unique not null,
	fecha_registro date not null,
	foreign key(id_persona) references personas(id_persona)
);


create table if not exists especialidad
(
	id_especialidad int auto_increment primary key unique not null,
    nombre varchar(100) not null
);

create table if not exists vendedores
(
	id_vendedor int auto_increment primary key unique not null,
    id_persona int unique not null,
    fecha_registro date not null,
    id_especialidad int unique not null,
	foreign key(id_persona) references personas(id_persona),
	foreign key(id_especialidad) references especialidad(id_especialidad)
);


create table if not exists productos
(
	id_producto int auto_increment primary key unique not null,
    id_vendedor int,
    nombre varchar(50) not null,
    tipo enum('Ropa','Hogar','Juguetes', 'Muebles', 'Artesanias') not null,
    estado enum('USADO', 'NUEVO') not null,
    caracteristicas varchar(150) not null,
    precio decimal(10, 2) not null,
    stock_disponible int not null,
    foreign key(id_vendedor) references vendedores(id_vendedor)
);

create table if not exists compras
(
	id_compra int auto_increment primary key unique not null,
    id_cliente int unique not null,
	id_producto int unique not null,
    id_vendedor int unique null,
    id_direccion int unique not null,
    fecha_compra date not null,
    foreign key(id_cliente) references clientes(id_cliente),
    foreign key(id_vendedor) references vendedores(id_vendedor),
    foreign key(id_producto) references productos(id_producto),
	foreign key(id_direccion) references direcciones(id_direccion)
    );

create index idx_id_cliente on compras(id_cliente);
create index idx_id_vendedor on compras(id_vendedor);
create index idx_id_producto on compras(id_producto);

SELECT * FROM especialidad;
