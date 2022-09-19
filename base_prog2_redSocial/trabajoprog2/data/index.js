

const data = {
  usuarios: [
    {
      username: "Kris Jenner",
      foto: "/img/kris jenner foto d perfil.jpg",
      email: "parslan@udesa.edu.ar",
      password: "1234",
      fecha: "2002/11/05",
      dni: 123456789,
      posteos: 2,
      seguidores: 1000000,
      seguidos: 120,
      id:1,

    
    },
    {
      username: "Kendall Jenner",
      foto: "/img/foto de perfil kendall.jpg",
      email: "martinamendez@udesa.edu.ar",
      password: "2468",
      fecha: "2002/20/08",
      dni: 123456789,
      posteos: 2,
      seguidores: 200000,
      seguidos: 150,
      id:2,
    },
    {
      username: "Kylie Jenner",
      foto: "/img/kylie jenner foto d perfil!.jpg",
      email: "martinamendez@udesa.edu.ar",
      password: "2468",
      fecha: "2002/20/08",
      dni: 123456789,
      posteos: 2,
      seguidores: 150000,
      seguidos: 200,
      id:3,
    },
    {
      username: "Kim Kardashian",
      foto: "/img/kim kardashian foto d perfil.jpg",
      email: "martinamendez@udesa.edu.ar",
      password: "2468",
      fecha: "2002/20/08",
      dni: 123456789,
      posteos: 2,
      seguidores: 30000,
      seguidos: 150,
      id:4,
    },
    {
      username: "Kourtney Kardashian",
      foto: "/img/kourtney-fotodperfil.jpg",
      email: "martinamendez@udesa.edu.ar",
      password: "2468",
      fecha: "2002/20/08",
      dni: 123456789,
      posteos: 1,
      seguidores: 3000,
      seguidos: 120,
      id:5,
    },
    {
      username: "Klhoe Kardashian",
      foto: "/img/khloe.jpg",
      email: "martinamendez@udesa.edu.ar",
      password: "2468",
      fecha: "2002/20/08",
      dni: 123456789,
      posteos: 1,
      seguidores: 3000,
      seguidos: 120,
      id:6,
    },
     ],
  posteos: [
    { 
     nombre: "Kris Jenner",
      foto: "/img/kris jenner foto.jpg",
      imagen: "/img/kris jenner foto d perfil.jpg",
      id: 1,
      idUsuario: 1,
      texto: "",
      comentarios: [
        {
          idUsuario: 2,
          comentario: "Beautiful!",
          usuario: "Kendal Jenner",
          foto:"/img/foto de perfil kendall.jpg",
        },
        {
          idUsuario: 5,
          comentario: "Nice picture!",
          usuario:"Kourtney Kardashian",
          foto: "/img/kourtney-fotodperfil.jpg",
        },
      ]

    },
    {
      nombre:"Kendall Jenner",
      foto: "/img/foto de perfil kendall 2.jpg",
      imagen: "/img/foto de perfil kendall.jpg",
      id: 2,
      idUsuario: 2,
      texto: "",
      comentarios: [
        {
          idUsuario: 3,
          comentario: "Amazing!",
          usuario: "Kylie Jenner",
          foto:"/img/kylie jenner foto d perfil!.jpg",
        },
        {
          idUsuario: 4,
          comentario: ":)",
          usuario:"Kim Kardashian",
          foto:"/img/kim kardashian foto d perfil.jpg",
        },
      ]

    },
    {
      nombre: "Kylie Jenner",
      foto: "/img/Kylie jenner foto.jpg",
      imagen: "/img/kylie jenner foto d perfil!.jpg",
      id: 3,
      idUsuario: 3,
      texto: "",
      comentarios: [
        {
          idUsuario: 1,
          comentario: "I like your makeup",
          usuario: "Kris Jenner",
          foto:"/img/kris jenner foto d perfil.jpg",
        
        },
        {
          idUsuario: 5,
          comentario: "so pretty",
          usuario:"Kourtney Kardashian",
          foto:"/img/kourtney-fotodperfil.jpg",

        },
      ]

    },
    {
      nombre:"Kim Kardashian",
      foto: "/img/kim_kardashian foto 2.jpg",
      imagen: "/img/kim kardashian foto d perfil.jpg",
      id: 4,
      idUsuario: 4,
      texto: "",
      comentarios: [
        {
          idUsuario: 1,
          comentario: "I like your sunglasses",
          usuario: "Kris Jenner",
          foto:"/img/kris jenner foto d perfil.jpg",
        },
        {
          idUsuario: 5,
          comentario: "wow!",
          usuario:"Kourtney Kardashian",
          foto:"/img/kourtney-fotodperfil.jpg",
        },
       

      ]

    },
    { nombre:"Kourtney Kardashian",
      foto: "/img/kourtney foto.jpg",
      imagen: "/img/kourtney-fotodperfil.jpg",
      id: 5,
      idUsuario: 5,
      texto: "",
      comentarios: [
        {
          idUsuario: 3,
          comentario: "I love you",
          usuario: "Kylie Jenner",
          foto:"/img/kylie jenner foto d perfil!.jpg",
        },
        {
          idUsuario: 2,
          comentario: "Nice couple!",
          usuario:"Kendall Jenner",
          foto:"/img/foto de perfil kendall.jpg",
        },
      ]

    },
    { nombre: "Khloe Kardashian",
      foto: "/img/kloe foto.jpg",
      imagen: "/img/khloe.jpg",
      id: 6,
      idUsuario: 6,
      texto: "",
      comentarios: [
        {
          idUsuario: 3,
          comentario: "I love you",
          usuario: "Kylie Jenner",
          foto:"/img/kylie jenner foto d perfil!.jpg",
        },
        {
          idUsuario: 2,
          comentario: "Blondie!",
          usuario:"Kendall Jenner",
          foto:"/img/foto de perfil kendall.jpg",
        },
      ]

    },
    { nombre:"Kylie Jenner",
      foto: "/img/travis.jpg",
      imagen: "/img/kylie jenner foto d perfil!.jpg",
      id: 3,
      idUsuario: 3,
      texto: "",
      comentarios: [
        {
          idUsuario: 1,
          comentario: "Love this couple",
          usuario: "Kris Jenner",
          foto:"/img/kris jenner foto d perfil.jpg",
        },
        {
          idUsuario: 3,
          comentario: "I love you",
          usuario: "Kylie Jenner",
          foto:"/img/kylie jenner foto d perfil!.jpg",
        },
      ]

    },
    { nombre:"Kris Jenner",
      foto: "/img/las kardashian.jpg",
      imagen: "img/kris jenner foto.jpg",
      id: 1,
      idUsuario: 1,
      texto: "",
      comentarios: [
        {
          idUsuario: 4,
          comentario: "Kardashians<3",
          usuario: "Kim Kardashian",
          foto:"/img/kim kardashian foto d perfil.jpg",
        },
        {
          idUsuario: 2,
          comentario: "Love you Mom",
          usuario:"Kendall Jenner",
          foto:"/img/kylie jenner foto d perfil!.jpg",
        },
      ]

    },
    { nombre:"Kim Kardashian",
      foto: "/img/kanye.jpg",
      imagen: "/img/kim kardashian foto d perfil.jpg",
      id: 4,
      idUsuario: 4,
      texto: "",
      comentarios: [
        {
          idUsuario: 6,
          comentario: "I love you",
          usuario: "Khloe Kardashian",
          foto:"/img/khloe.jpg",
        },
        {
          idUsuario: 1,
          comentario: "You are so lovely",
          usuario:"Kris Jenner",
          foto:"/img/kris jenner foto.jpg",
        },
      ]

    },
    { nombre:"Kendall Jenner",
      foto: "/img/kendall-espejo.jpg",
      imagen: "/img/foto de perfil kendall.jpg",
      id: 2,
      idUsuario: 2,
      texto: "",
      comentarios: [
        {
          idUsuario: 3,
          comentario: "Nice outfit",
          usuario: "Kylie Jenner",
          foto:"/img/kylie jenner foto d perfil!.jpg",
        },
        {
          idUsuario: 4,
          comentario: "wow!",
          usuario:"Kim Kardashian",
          foto:"/img/kim kardashian foto d perfil.jpg",
        },
      ]

    },

    
    

   
  
  ],
  
 
};

module.exports = data;
