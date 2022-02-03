CREATE TABLE USER (
    idUser INT PRIMARY KEY ,
     name  varchar(255),
     dataDeNascimento Date,
     email  varchar(255),
     password  varchar(255),
      nickName  varchar(255),
      plataformaDeJogo  varchar(255),
  FOREIGN KEY ( `idTeam` ) REFERENCES `TEAM` ( `idTeam` ),
  FOREIGN KEY ( `idTorneio` ) REFERENCES `TOURNAMENT` ( `idTorneio` ),
  FOREIGN KEY ( `idMatchfinder` ) REFERENCES `MATCHFINDER` ( `idMatchfinder` )
 )
