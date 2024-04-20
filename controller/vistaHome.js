export const vistaHome = (req, res) => {
    const productos = [
        { nombre: "Banana", imagen: "/img/banana.png" },
        { nombre: "Cebollas", imagen: "/img/cebollas.png" },
        { nombre: "Lechuga", imagen: "/img/lechuga.png" },
        { nombre: "Papas", imagen: "/img/papas.png" },
        { nombre: "Pimenton", imagen: "/img/pimenton.png" },
        { nombre: "Tomate", imagen: "/img/tomate.png" }
    ];

    res.render("home", {
        layout: "main",
        title: "Productos",
        tituloPrincipal: "Bienvenidos al mercado WEB, seleccione sus productos",
        productos: productos
    });
};
