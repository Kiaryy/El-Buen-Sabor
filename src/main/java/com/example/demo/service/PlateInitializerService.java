package com.example.demo.service;
import java.util.ArrayList;
import java.util.List;

import com.example.demo.models.PlatoJpa;
import com.example.demo.models.enums.Tipo;
import com.example.demo.repository.PlatoJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PlateInitializerService {

    private final PlatoJpaRepository repository;

    @Autowired
    public PlateInitializerService(PlatoJpaRepository repository) {
        this.repository = repository;
    }

    public String deleteMenu(){

        List<PlatoJpa> all = repository.findAll();

        repository.deleteAll(all);

        return "All entries from plates table deleted." ;

    }
    public List<PlatoJpa> loadMenu(){

        List<PlatoJpa> plates = new ArrayList<>();

        //      ------------Empanadas------------
        plates.add(PlatoJpa.builder()
                .name("Empanada de Carne")
                .description("Empanada rellena con carne picada sazonada, cebolla, pimiento rojo y especias, todo cocido a la perfección. " +
                        "La masa, dorada y crujiente, encierra el relleno jugoso y sabroso, ofreciendo una experiencia clásica y reconfortante en cada bocado. " +
                        "Ideal como aperitivo o plato principal. Se vende por docena.")
                .type(Tipo.EMPANADA)
                .price(2500D)
                .stock(25)
                .available(true)
                .img("IMAGENES BUEN SABOR/MENU/empandas-carne.webp")
                .build()) ;


        plates.add(PlatoJpa.builder()
                .name("Empanada de Jamon y Queso")
                .description("Empanada rellena con una mezcla suave de jamón cocido y queso derretido, envuelta en una masa dorada y crujiente. El jamón y el queso se funden juntos, creando un interior jugoso y sabroso, perfecto como aperitivo o bocadillo. Se vende por docena.")
                .type(Tipo.EMPANADA)
                .price(2500D)
                .stock(25)
                .available(true)
                .img("IMAGENES BUEN SABOR/MENU/empanada-jyq.png")
                .build());
        plates.add(PlatoJpa.builder()
                .name("Empanada de Choclo")
                .description("Empanada rellena con una mezcla de granos de choclo dulce, cebolla, queso y especias, envuelta en una masa dorada y crujiente. El relleno cremoso y ligeramente dulce del choclo ofrece una combinación deliciosa y reconfortante, ideal como aperitivo o plato ligero. Se vende por docena.")
                .type(Tipo.EMPANADA)
                .price(2500D)
                .stock(25)
                .available(true)
                .img("IMAGENES BUEN SABOR/MENU/empanada-choclo.png")
                .build());

        //      ------------Pizzas------------
        plates.add(PlatoJpa.builder()
                .name("Pizza Muzzarella")
                .description("Pizza tradicional con una base de masa esponjosa y ligeramente crujiente, cubierta con una capa generosa de salsa de tomate casera y abundante queso muzzarella derretido. Coronada con un toque de orégano y, opcionalmente, unas aceitunas verdes, es la clásica favorita por su sencillez y sabor reconfortante.")
                .type(Tipo.PIZZA)
                .price(1500D)
                .stock(20)
                .available(true)
                .img("IMAGENES BUEN SABOR/MENU/pizza-muzarella.png")
                .build());
        plates.add(PlatoJpa.builder()
                .name("Pizza Pollo y Espinaca")
                .description("Pizza con una base crujiente y dorada, cubierta con una capa de salsa blanca suave o de tomate, trozos de pollo a la parrilla, hojas de espinaca frescas y queso muzzarella derretido. Los sabores suaves del pollo y la espinaca se complementan perfectamente con el queso, creando una opción ligera y deliciosa.")
                .type(Tipo.PIZZA)
                .price(1500D)
                .stock(20)
                .available(true)
                .img("IMAGENES BUEN SABOR/MENU/pizza-pollo-espinaca.jpg")
                .build());
        plates.add(PlatoJpa.builder()
                .name("Pizza Especial")
                .description("Pizza con base de masa esponjosa, cubierta con una capa de salsa de tomate, abundante queso muzzarella derretido y una combinación clásica de jamón cocido, rodajas de morrón rojo asado y aceitunas verdes. Esta opción ofrece un equilibrio perfecto entre sabores suaves y ligeramente ahumados, ideal para quienes buscan algo más que lo tradicional.")
                .type(Tipo.PIZZA)
                .price(1500D)
                .stock(20)
                .available(true)
                .img("IMAGENES BUEN SABOR/MENU/pizza especial.png")
                .build());
        plates.add(PlatoJpa.builder()
                .name("Pizza Hawaiana")
                .description("Pizza con una base dorada y crujiente, cubierta con salsa de tomate, una generosa capa de queso muzzarella derretido, rodajas de jamón cocido y trozos de ananá jugoso. Esta combinación de sabores salados y dulces ofrece una experiencia única y refrescante, amada por quienes disfrutan de contrastes atrevidos en sus comidas.")
                .type(Tipo.PIZZA)
                .price(1500D)
                .stock(20)
                .available(true)
                .img("IMAGENES BUEN SABOR/MENU/pizza-hawaiana.webp")
                .build());
        plates.add(PlatoJpa.builder()
                .name("Pizza Champiñones (vegetariana)")
                .description("Pizza con una base crujiente y esponjosa, cubierta con salsa de tomate y una generosa cantidad de queso muzzarella derretido, adornada con champiñones frescos salteados en aceite de oliva y ajo. El sabor terroso y suave de los champiñones combina perfectamente con el queso, ofreciendo una opción simple pero deliciosa para los amantes de los ingredientes frescos.")
                .type(Tipo.PIZZA)
                .price(1500D)
                .stock(20)
                .available(true)
                .img("IMAGENES BUEN SABOR/MENU/pizza-champiñones.webp")
                .build());
        plates.add(PlatoJpa.builder()
                .name("Pizza Vegetales Asados (vegana)")
                .description("Pizza con una base crujiente y dorada, cubierta con salsa de tomate y queso muzzarella derretido, acompañada de una colorida mezcla de vegetales frescos como pimientos, cebolla, champiñones y tomates en rodajas. Los tomates aportan jugosidad y un sabor ligeramente dulce, equilibrando perfectamente con los otros vegetales y el queso, creando una opción deliciosa y nutritiva.")
                .type(Tipo.PIZZA)
                .price(1500D)
                .stock(20)
                .available(true)
                .img("IMAGENES BUEN SABOR/MENU/pizza-vegetales.webp")
                .build());

        //      ------------Hamburguesas------------
        plates.add(PlatoJpa.builder()
                .name("Hamburguesa Clásica de la Casa")
                .description("Una hamburguesa clásica con una carne super jugosa y un sabor incomparable. Contiene pan de papa, doble carne jugosa, queso cheddar derretido, tomate, lechuga, pepino y salsa de la casa.")
                .type(Tipo.HAMBURGUESA)
                .price(1500D)
                .stock(20)
                .available(true)
                .img("IMAGENES BUEN SABOR/MENU/burger-clasica.webp")
                .build());
        plates.add(PlatoJpa.builder()
                .name("Hamburguesa Bacon y Huevo")
                .description("Un jugoso medallón de carne a la parrilla, acompañada de crujientes tiras de bacon y un huevo frito con la yema ligeramente líquida. Todo servido en un pan suave con queso cheddar derretido, lechuga fresca y mayonesa, creando una deliciosa combinación de sabores clásicos y texturas.")
                .type(Tipo.HAMBURGUESA)
                .price(1500D)
                .stock(20)
                .available(true)
                .img("IMAGENES BUEN SABOR/MENU/burger-bacon-egg.png")
                .build());
        plates.add(PlatoJpa.builder()
                .name("Hamburguesa Cebolla y Bacon")
                .description("Medallón de carne a la parrilla, cubierta con cebolla caramelizada que aporta un toque dulce y tiras crujientes de bacon. Servida en un pan suave con queso cheddar derretido y una ligera capa de mayonesa, esta hamburguesa combina sabores intensos y texturas deliciosas.")
                .type(Tipo.HAMBURGUESA)
                .price(1500D)
                .stock(20)
                .available(true)
                .img("IMAGENES BUEN SABOR/MENU/burger-bbq.webp")
                .build());
        plates.add(PlatoJpa.builder()
                .name("Hamburguesa Pollo Crispy Simple")
                .description("Pechuga de pollo empanada y frita hasta quedar crujiente por fuera y jugosa por dentro. Servida en un pan suave, acompañada de rodajas de tomate fresco, lechuga crocante y una capa de mayonesa cremosa para equilibrar los sabores. Simple, pero deliciosa.")
                .type(Tipo.HAMBURGUESA)
                .price(1500D)
                .stock(20)
                .available(true)
                .img("IMAGENES BUEN SABOR/MENU/burger-crispy-chicken.png")
                .build());
        plates.add(PlatoJpa.builder()
                .name("Hamburguesa Pollo, Bacon y Cebolla Crispy")
                .description("Pechuga de pollo empanada y frita hasta quedar extra crujiente, cubierta con tiras de bacon crocante, cebolla crispy dorada y dos generosas rodajas de queso provoleta derretido. Servida en un pan suave, esta hamburguesa ofrece una explosión de texturas y sabores intensos, perfecta para los amantes de las combinaciones irresistibles.")
                .type(Tipo.HAMBURGUESA)
                .price(1500D)
                .stock(20)
                .available(true)
                .img("IMAGENES BUEN SABOR/MENU/burger-chicken-bacon.png")
                .build());
        plates.add(PlatoJpa.builder()
                .name("Hamburguesa Vegana Simple")
                .description("Hamburguesa con un medallón vegano hecho a base de ingredientes que imitan la textura y sabor de la carne, servido con lechuga fresca, rodajas de tomate, cebolla morada crujiente y pepino. Todo en un pan vegano suave, acompañado de una salsa ligera, ofreciendo una opción deliciosa y sabrosa, 100% vegetal.")
                .type(Tipo.HAMBURGUESA)
                .price(1500D)
                .stock(20)
                .available(true)
                .img("IMAGENES BUEN SABOR/MENU/burger-vegan.web.png")
                .build());

        //      ------------Acompañamientos------------
        plates.add(PlatoJpa.builder()
                .name("Papas Fritas Caseras")
                .description("Papas cortadas en tiras y fritas, con opción de condimentos como paprika, ajo en polvo y romero.")
                .type(Tipo.ACOMPAÑANMIENTO)
                .price(1500D)
                .stock(20)
                .available(true)
                .img("IMAGENES BUEN SABOR/MENU/acompañamineto-papas-fritas.png")
                .build());
        plates.add(PlatoJpa.builder()
                .name("Aros de Cebolla")
                .description("Cebolla rebozada y frita, con salsa barbacoa o mayonesa.")
                .type(Tipo.ACOMPAÑANMIENTO)
                .price(1500D)
                .stock(20)
                .available(true)
                .img("IMAGENES BUEN SABOR/MENU/acompañamiento-onion-rings.png")
                .build());
        plates.add(PlatoJpa.builder()
                .name("Papas con Cheddar y Bacon Triturado")
                .description("Deliciosas papas al horno o fritas, cubiertas con una generosa capa de queso cheddar derretido y trocitos crujientes de bacon triturado.")
                .type(Tipo.ACOMPAÑANMIENTO)
                .price(1500D)
                .stock(20)
                .available(true)
                .img("IMAGENES BUEN SABOR/MENU/acompañamiento-papas-cheddar-bacon.png")
                .build());

        //      ------------Ensaladas------------
        plates.add(PlatoJpa.builder()
                .name("Ensalada César con Pollo")
                .description("Ensalada de lechuga romana crujiente, acompañada de trozos de pollo a la parrilla, crutones dorados y queso parmesano rallado. Todo aderezado con una suave y cremosa salsa César, que mezcla mayonesa, ajo, anchoas y limón. Esta combinación ofrece una opción fresca y sabrosa, con una mezcla de texturas y sabores enriquecedores.")
                .type(Tipo.ENSALADA)
                .price(1500D)
                .stock(20)
                .available(true)
                .img("IMAGENES BUEN SABOR/MENU/Ensalada-cesar-con-pollo.png")
                .build());
        plates.add(PlatoJpa.builder()
                .name("Ensalada Latina")
                .description("Ensalada vibrante que combina lechuga fresca con tomate, aguacate, maíz, frijoles negros y cebolla roja. Adornada con cilantro fresco y acompañada de una vinagreta de limón y comino. Esta ensalada ofrece una explosión de sabores y texturas, con un toque refrescante y ligero.")
                .type(Tipo.ENSALADA)
                .price(1500D)
                .stock(20)
                .available(true)
                .img("IMAGENES BUEN SABOR/MENU/Ensalada-latina.webp")
                .build());
        plates.add(PlatoJpa.builder()
                .name("Ensalada de Manzana, Queso Azul y Nuez")
                .description("Ensalada fresca y equilibrada que combina rodajas de manzana crujiente con el sabor intenso y cremoso del queso azul, nueces tostadas para aportar crocante, y pasas dulces. Todo aliñado con un ligero toque de miel, que une los sabores en una mezcla perfecta de dulce, salado y fresco.")
                .type(Tipo.ENSALADA)
                .price(1500D)
                .stock(20)
                .available(true)
                .img("IMAGENES BUEN SABOR/MENU/ensalada manzana.webp")
                .build());

        //      ------------Bebidas------------
        //! Hay que ver bien que hacer con las bebidas, asi que solo pongo esto por ahora
        plates.add(PlatoJpa.builder()
                .name("Coca-Cola 500ml")
                .description("Disponibles en 500ml")
                .type(Tipo.BEBIDA)
                .price(1500D)
                .stock(20)
                .available(true)
                .img("IMAGENES BUEN SABOR/MENU/bebeida-coca-medio.webp")
                .build());

        plates.add(PlatoJpa.builder()
                .name("Coca-Cola 1.5L")
                .description("Disponible en 1.5L")
                .type(Tipo.BEBIDA)
                .price(1500D)
                .stock(20)
                .available(true)
                .img("IMAGENES BUEN SABOR/MENU/bebeida-coca-medio.webp")
                .build());

        plates.add(PlatoJpa.builder()
                .name("Coca-Cola 2.25L")
                .description("Disponibles en 2.25L")
                .type(Tipo.BEBIDA)
                .price(1500D)
                .stock(20)
                .available(true)
                .img("IMAGENES BUEN SABOR/MENU/bebeida-coca-medio.webp")
                .build());

        plates.add(PlatoJpa.builder()
                .name("Coca-Cola Zero 500Ml")
                .description("Disponibles en 500ml")
                .type(Tipo.BEBIDA)
                .price(1500D)
                .stock(20)
                .available(true)
                .img("IMAGENES BUEN SABOR/MENU/bebeida-coca-medio.webp")
                .build());

        plates.add(PlatoJpa.builder()
                .name("Coca-Cola Zero 1.5L")
                .description("Disponibles en 1.5L")
                .type(Tipo.BEBIDA)
                .price(1500D)
                .stock(20)
                .available(true)
                .img("IMAGENES BUEN SABOR/MENU/bebeida-coca-medio.webp")
                .build());

        plates.add(PlatoJpa.builder()
                .name("Coca-Cola Zero 2.25L")
                .description("Disponibles en 2.25L")
                .type(Tipo.BEBIDA)
                .price(1500D)
                .stock(20)
                .available(true)
                .img("IMAGENES BUEN SABOR/MENU/bebeida-coca-medio.webp")
                .build());

        //      ------------Postres------------
        plates.add(PlatoJpa.builder()
                .name("Flan Casero")
                .description("Clásico flan de huevo, suave y cremoso, servido con una generosa porción de dulce de leche y, opcionalmente, un poco de crema chantilly.")
                .type(Tipo.POSTRE)
                .price(1500D)
                .stock(20)
                .available(true)
                .img("IMAGENES BUEN SABOR/MENU/postre-flan.webp")
                .build());
        plates.add(PlatoJpa.builder()
                .name("Alfajor de Maicena")
                .description("Delicados y suaves alfajores hechos con una masa de maicena, que les da una textura ligera y desmenuzable. Rellenos con una generosa capa de dulce de leche, y luego cubiertos con un espolvoreo de azúcar impalpable o coco rallado.")
                .type(Tipo.POSTRE)
                .price(1500D)
                .stock(20)
                .available(true)
                .img("IMAGENES BUEN SABOR/MENU/postre-alfajores.webp")
                .build());
        plates.add(PlatoJpa.builder()
                .name("Arroz con Leche")
                .description("Postre cremoso y reconfortante hecho con arroz cocido lentamente en leche, azúcar y una pizca de canela. Se aromatiza con cáscara de limón o vainilla, resultando en una textura suave y un sabor dulce y especiado. Perfecto para disfrutar frío o tibio.")
                .type(Tipo.POSTRE)
                .price(1500D)
                .stock(20)
                .available(true)
                .img("IMAGENES BUEN SABOR/MENU/postre-arroz-con-leche.webp")
                .build());

        return repository.saveAll(plates);
    }




}
