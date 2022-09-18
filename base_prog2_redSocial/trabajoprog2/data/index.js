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
      seguidores: 10,
      seguidos: 5,
      id:1,

      //* si no llega a andar, cambiar barras por guiones en las fechas *//
    },
    {
      username: "Kendall Jenner",
      foto: "https://via.placeholder.com/101x99",
      email: "martinamendez@udesa.edu.ar",
      password: "2468",
      fecha: "2002/20/08",
      dni: 123456789,
      posteos: 10,
      seguidores: 30,
      seguidos: 50,
      id:2,
    },
    {
      username: "Kylie Jenner",
      foto: "https://via.placeholder.com/99x99",
      email: "martinamendez@udesa.edu.ar",
      password: "2468",
      fecha: "2002/20/08",
      dni: 123456789,
      posteos: 10,
      seguidores: 30,
      seguidos: 50,
      id:3,
    },
    {
      username: "Kim Kardashian",
      foto: "https://via.placeholder.com/99x99",
      email: "martinamendez@udesa.edu.ar",
      password: "2468",
      fecha: "2002/20/08",
      dni: 123456789,
      posteos: 10,
      seguidores: 30,
      seguidos: 50,
      id:4,
    },
    {
      username: "Kendall Jenner",
      foto: "https://via.placeholder.com/99x99",
      email: "martinamendez@udesa.edu.ar",
      password: "2468",
      fecha: "2002/20/08",
      dni: 123456789,
      posteos: 10,
      seguidores: 30,
      seguidos: 50,
      id:5,
    },
     ],
  posteos: [
    { 
     nombre: "Kris Jenner",
      foto: "/img/kris jenner foto.jpg",
      imagen: "/img/kris jenner foto d perfil.jpg",
      id: 1,
      idUsuario: 1,
      texto: "foto random",
      comentarios: [
        {
          idUsuario: 1,
          comentario: "Beautiful!",
          usuario: "KendalJenner",
        },
        {
          idUsuario: 1,
          comentario: "Nice picture!",
          usuario:"Kourtney Kardashian",
        },
      ]

    },
    {
      nombre:"Kendall Jenner",
      foto: "/img/foto de perfil kendall 2.jpg",
      imagen: "/img/foto de perfil kendall.jpg",
      id: 2,
      idUsuario: 2,
      texto: "foto random",
      comentarios: [
        {
          idUsuario: 1,
          comentario: "Amazing!",
          usuario: "CharlyBrown",
        },
        {
          idUsuario: 1,
          comentario: ":)",
          usuario:"Haley Bieber",
        },
      ]

    },
    {
      nombre: "Kylie Jenner",
      foto: "/img/Kylie jenner foto.jpg",
      imagen: "/img/kylie jenner foto d perfil!.jpg",
      id: 3,
      idUsuario: 3,
      texto: "foto random",
      comentarios: [
        {
          idUsuario: 3,
          comentario: "I like your makeup",
          usuario: "kendalljenner",
        },
        {
          idUsuario: 3,
          comentario: "so pretty",
          usuario:"pampitaoficial",
        },
      ]

    },
    {
      nombre:"Kim Kardashian",
      foto: "/img/kim_kardashian foto 2.jpg",
      imagen: "/img/kim kardashian foto d perfil.jpg",
      id: 4,
      idUsuario: 4,
      texto: "foto random",
      comentarios: [
        {
          idUsuario: 4,
          comentario: "I like your sunglasses",
          usuario: "Taylor Swift",
        },
        {
          idUsuario: 4,
          comentario: "",
          usuario:"",
        },
       

      ]

    },
    { nombre:"Kourtney Kardashian",
      foto: "/img/kourtney foto.jpg",
      imagen: "img/kourtney-fotodperfil.jpg",
      id: 5,
      idUsuario: 5,
      texto: "foto random",
      comentarios: [
        {
          idUsuario: 5,
          comentario: "I love you",
          usuario: "Travis Barker",
        },
        {
          idUsuario: 5,
          comentario: "Nice couple!",
          usuario:"forbes",
        },
      ]

    },
    { nombre: "Khloe Kardashian",
      foto: "/img/kloe foto.jpg",
      imagen: "img/khloe.jpg",
      id: 6,
      idUsuario: 6,
      texto: "foto random",
      comentarios: [
        {
          idUsuario: 1,
          comentario: ":)",
          usuario: "Cara Levigne",
        },
        {
          idUsuario: 1,
          comentario: "Blondie",
          usuario:"Miley Cyrus",
        },
      ]

    },
    { nombre:"Kylie Jenner",
      foto: "/img/travis.jpg",
      imagen: "/img/kylie jenner foto d perfil!.jpg",
      id: 7,
      idUsuario: 7,
      texto: "foto random",
      comentarios: [
        {
          idUsuario: 1,
          comentario: "Love this couple",
          usuario: "Emily Richards",
        },
        {
          idUsuario: 1,
          comentario: "Nice picture!!",
          usuario:"Jonathan",
        },
      ]

    },
    { nombre:"Kris Jenner",
      foto: "/img/las kardashian.jpg",
      imagen: "img/kris jenner foto.jpg",
      id: 8,
      idUsuario: 8,
      texto: "foto random",
      comentarios: [
        {
          idUsuario: 1,
          comentario: "Kardashians<3",
          usuario: "Kim Kardashian",
        },
        {
          idUsuario: 1,
          comentario: "Love you Mom",
          usuario:"Kendall Jenner",
        },
      ]

    },
    { nombre:"Kim Kardashian",
      foto: "/img/kanye.jpg",
      imagen: "/img/kim kardashian foto d perfil.jpg",
      id: 9,
      idUsuario: 9,
      texto: "foto random",
      comentarios: [
        {
          idUsuario: 1,
          comentario: "I love you",
          usuario: "Kanye West",
        },
        {
          idUsuario: 1,
          comentario: "You are so lovely",
          usuario:"Kylie Jenner",
        },
      ]

    },
    { nombre:"Kendall Jenner",
      foto: "/img/kendall-espejo.jpg",
      imagen: "/img/foto de perfil kendall.jpg",
      id: 10,
      idUsuario: 10,
      texto: "foto random",
      comentarios: [
        {
          idUsuario: 10,
          comentario: "Nice outfit",
          usuario: "Gigi Hadid",
        },
        {
          idUsuario: 10,
          comentario: "wow!",
          usuario:"Bella Hadid",
        },
      ]

    },

    
    

   
  
  ],
  detallePost:[
    {
      picture: "\img\foto de perfil kendall 2.jpg",
      comentario:"Hola",
      fotodPerfil:"/img/foto de perfil kendall 2.jpg",
    }
  ]
};

module.exports = data;
