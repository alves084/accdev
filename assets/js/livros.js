// Arquivo: livros.js
const livros = [
  {
    titulo: "As Crônicas de Nárnia",
    autor: "C. S. LEWIS",
    capa: "assets/capas/cronicasdenarnia.png",
    arquivo: "https://drive.google.com/file/d/1_2btDXvWPDpWmet66vMEJ8H5MNyJDHI8/view?usp=sharing",
    categoria: "CONTOS"
  },
  {
    titulo: "A Srta. Butterworth o o Barão Louco",
    autor: "JULIA QUINN",
    capa: "assets/capas/ASrtaButterworthooBarãoLouco.png",
    arquivo: "https://drive.google.com/file/d/1sG57P1XoZi1-mZucBAMucPE_oZa8mx25/view?usp=sharing",
    categoria: "CONTOS"
  },
  {
    titulo: "A Última Batalha",
    autor: "C. S. LEWIS",
    capa: "assets/capas/aultimabatalha.png",
    arquivo: "https://drive.google.com/file/d/1XyMODvOpcs827wfanT-9n695ZyjekXFO/view?usp=sharing",
    categoria: "CONTOS"
  },
  {
    titulo: "A Viagem do Peregrino da Alvorada",
    autor: "C. S. LEWIS",
    capa: "assets/capas/AViagemdoPeregrinodaAlvorada.png",
    arquivo: "https://drive.google.com/file/d/1mrwZF5oLym8DLKgbMwuI9EpTeM1wgbdW/view?usp=sharing",
    categoria: "CONTOS"
  }, 
  {
    titulo: "ALICE ATRAVÉS DO ESPELHO",
    autor: "LEWIS CARROLL",
    capa: "assets/capas/ALICEATRAVÉSDOESPELHO.png",
    arquivo: "https://drive.google.com/file/d/1NMRVGytUzFM9cEfs3tp75U2p06dvRD9A/view?usp=sharing",
    categoria: "CONTOS"
  }, 
  {
    titulo: "ALICE NO PAÍS DAS MARAVILHAS",
    autor: "LEWIS CARROLL",
    capa: "assets/capas/ALICENOPAÍSDASMARAVILHAS.png",
    arquivo: "https://drive.google.com/file/d/1yAo6J7Bos8i-gwn2K7DoOiRreXYSM7qv/view?usp=sharing",
    categoria: "CONTOS"
  },
  {
    titulo: "21 lições para o seculo 21",
    autor: "Yuval Noah Harari",
    capa: "assets/capas/21liçõesparaoseculo21.png",
    arquivo: "https://drive.google.com/file/d/12CpykXryDx1-9GMPP7mUkHtxTh4IcpiE/view?usp=sharing",
    categoria: "DESENVOLVIMENTO PESSOAL E EVOLUÇÃO"
  },
  {
    titulo: "A ARTE DE LIDAR COM PESSOAS",
    autor: "JAMIL ALBUQUERQUE",
    capa: "assets/capas/AARTEDELIDARCOMPESSOAS.png",
    arquivo: "https://drive.google.com/file/d/1Glk1K52xAUBM23FejvEacM-ylyCgnOVt/view?usp=sharing",
    categoria: "DESENVOLVIMENTO PESSOAL E EVOLUÇÃO"
  },
  {
    titulo: "A Arte de Pensar Claramente",
    autor: "ROLF DOBELLI",
    capa: "assets/capas/AArtedePensarClaramente.png",
    arquivo: "https://drive.google.com/file/d/1Xep2gBSIecULT19Rrm93uNrsyizcEoYk/view?usp=sharing",
    categoria: "DESENVOLVIMENTO PESSOAL E EVOLUÇÃO"
  },
  {
    titulo: "A Chave Mestra",
    autor: "CHARLES HANAEL",
    capa: "assets/capas/AChaveMestra.png",
    arquivo: "https://drive.google.com/file/d/1T1VKTRT6EcyT0JtSCqGg8ajlSc_5BeBn/view?usp=sharing",
    categoria: "DESENVOLVIMENTO PESSOAL E EVOLUÇÃO"
  },
  {
    titulo: "A Ciência de Ficar Rico",
    autor: "WALLACE D. WATTLES",
    capa: "assets/capas/ACiênciadeFicarRico.png",
    arquivo: "https://drive.google.com/file/d/1-ztSO5AOKvoiDwYGB4xLEnEk0ddBOzio/view?usp=sharing",
    categoria: "DESENVOLVIMENTO PESSOAL E EVOLUÇÃO"
  },
  {
    titulo: "A CORAGEM DE NÃO AGRADAR",
    autor: "ICHIRO KISHIMI E FUMITAKE KOGA",
    capa: "assets/capas/ACORAGEMDENAOAGRADAR.png",
    arquivo: "https://drive.google.com/file/d/1mN6aW563VFo6l0WrzGj0EeLfCa5NXvYc/view?usp=sharing",
    categoria: "DESENVOLVIMENTO PESSOAL E EVOLUÇÃO"
  },
  {
    titulo: "GUERRA DOS MASCATES",
    autor: "JÓSE DE ALENCAR",
    capa: "assets/capas/GUERRADOSMASCATES.png",
    arquivo: "https://drive.google.com/file/d/1v3LVSQDRBRBejx7mvCGP4vWtz1bg6ELj/view?usp=sharing",
    categoria: "JÓSE DE ALENCAR"
  },
  {
    titulo: "O SERTANEJO",
    autor: "JÓSE DE ALENCAR",
    capa: "assets/capas/OSERTANEJO.png",
    arquivo: "https://drive.google.com/file/d/16WQNiFBSMR3PhuZG42-aBQJoJrIQYg9A/view?usp=sharing",
    categoria: "JÓSE DE ALENCAR"
  },
  {
    titulo: "SENHORA",
    autor: "JÓSE DE ALENCAR",
    capa: "assets/capas/SENHORA.png",
    arquivo: "https://drive.google.com/file/d/1mBrRE7Yw03ThzkQkhFe7jXRYadS-sxZs/view?usp=sharing",
    categoria: "JÓSE DE ALENCAR"
  },
  {
    titulo: "SONHOS D'OURO",
    autor: "JÓSE DE ALENCAR",
    capa: "assets/capas/SONHOSDOURO.png",
    arquivo: "https://drive.google.com/file/d/1g8qaWvSbmiQ9Axs5TMFHanJ8sbpbLXm_/view?usp=sharing",
    categoria: "JÓSE DE ALENCAR"
  },
  {
    titulo: "COXINHA DE MACAXEIRA",
    autor: "BRUNO WAGNER",
    capa: "assets/capas/COXINHADEMACAXEIRA.png",
    arquivo: "https://drive.google.com/file/d/1GGlwVVX3L6fX06x_JQTGsgrhlxAMSz3H/view?usp=sharing",
    categoria: "LEITURA DE CORDEL"
  },
  {
    titulo: "NOSSOS CORDÉIS",
    autor: "TEONES ALMEIDA SUZANO",
    capa: "assets/capas/NOSSOSCORDEIS.png",
    arquivo: "https://drive.google.com/file/d/1A7xY_NGfklVs2DVpwzTf1AWxtXqNeYwH/view?usp=sharing",
    categoria: "LEITURA DE CORDEL"
  },
  {
    titulo: "O CORONAVÍRUS",
    autor: "CÍCERO CARLOS DUARTE",
    capa: "assets/capas/OCORONAVIRUS.png",
    arquivo: "https://drive.google.com/file/d/1lTiTayjqIIJLmTmfoxdQPubKo6U1kC2v/view?usp=sharing",
    categoria: "LEITURA DE CORDEL"
  },
  {
    titulo: "O DIA QUE O SUS VISITOU O CIDADAO",
    autor: "LINCOLN MACÁRIO MAIA",
    capa: "assets/capas/ODIAQUEOSUSVISITOUOCIDADAO.png",
    arquivo: "https://drive.google.com/file/d/1upmyM-GUuFicsHP88wYMVtb3YCep0prl/view?usp=sharing",
    categoria: "LEITURA DE CORDEL"
  },
  {
    titulo: "4 HOMENS EM 44 CAPÍTULOS",
    autor: "BB EASTON",
    capa: "assets/capas/4HOMENSEM44CAPITULOS.png",
    arquivo: "https://drive.google.com/file/d/1wJ-PAiU8Ms_bEBtKwp0EU64yECx0OyjS/view?usp=sharing",
    categoria: "LIVROS DE FILMES E NOVELAS"
  },
  {
    titulo: "A ENTREGADORA SE ENCONTRA COM O CEO",
    autor: "",
    capa: "assets/capas/AENTREGADORASEENCONTRACOMOCEO.png",
    arquivo: "https://drive.google.com/file/d/1S6dCMwZU93ArOn8Et22mWOg75WREW8WX/view?usp=sharing",
    categoria: "LIVROS DE FILMES E NOVELAS"
  },
  {
    titulo: "A ESCOLHA",
    autor: "NICHOLAS SPARKS",
    capa: "assets/capas/AESCOLHA.png",
    arquivo: "https://drive.google.com/file/d/15pKaSO--mDW08dsc9cUxW7M5wtj3Yr4J/view?usp=sharing",
    categoria: "LIVROS DE FILMES E NOVELAS"
  },
  {
    titulo: "A NOIVA DO CAPITÃO",
    autor: "TESSA DARE",
    capa: "assets/capas/ANOIVADOCAPITAO.png",
    arquivo: "https://drive.google.com/file/d/1JAaFkbg98Kmu7YshYC-FBLxtIuawN4r2/view?usp=sharing",
    categoria: "LIVROS DE FILMES E NOVELAS"
  },
  {
    titulo: "AMOR E AZEITONAS",
    autor: "JENNA EVANS WELCH",
    capa: "assets/capas/AMOREAZEITONAS.png",
    arquivo: "https://drive.google.com/file/d/13-xcKKP95bsOfCLYlyAk3Wk9LsfYCkMk/view?usp=sharing",
    categoria: "LIVROS DE FILMES E NOVELAS"
  },
  {
    titulo: "AS MIL PARTES DO MEU CORAÇÃO",
    autor: "COLLEEN HOOVER",
    capa: "assets/capas/ASMILPARTESDOMEUCORACAO.png",
    arquivo: "https://drive.google.com/file/d/1QPEf8NiglQfIw-sqz7YHro1FTL36OjWn/view?usp=sharing",
    categoria: "LIVROS DE FILMES E NOVELAS"
  },
  {
    titulo: "ESAÚ E JACÓ",
    autor: "MACHADO DE ASSIS",
    capa: "assets/capas/ESAUEJACO.png",
    arquivo: "https://drive.google.com/file/d/1Kx_l0J5I-wUC64Togaw-5HTTtFbGC6UR/view?usp=sharing",
    categoria: "MACHADO DE ASSIS"
  },
  {
    titulo: "HELENA",
    autor: "MACHADO DE ASSIS",
    capa: "assets/capas/HELENA.png",
    arquivo: "https://drive.google.com/file/d/1kC_YPnAR8qUaabje0NEqzP0anCz67MkR/view?usp=sharing",
    categoria: "MACHADO DE ASSIS"
  },
  {
    titulo: "HISTÓRIAS DA MEIA NOITE",
    autor: "MACHADO DE ASSIS",
    capa: "assets/capas/HISTÓRIASDAMEIANOITE.png",
    arquivo: "https://drive.google.com/file/d/1NNaQMUIHHvpD5tXZp7iGadqVuL9b3PZa/view?usp=sharing",
    categoria: "MACHADO DE ASSIS"
  },
  {
    titulo: "HISTÓRIAS SEM DATA",
    autor: "MACHADO DE ASSIS",
    capa: "assets/capas/HISTÓRIASSEMDATA.png",
    arquivo: "https://drive.google.com/file/d/19cvD602pqvIwJsYcg4V70aWSBl_q1ARo/view?usp=sharing",
    categoria: "MACHADO DE ASSIS"
  },
  {
    titulo: "O ALIENISTA",
    autor: "MACHADO DE ASSIS",
    capa: "assets/capas/OALIENISTA.png",
    arquivo: "https://drive.google.com/file/d/1UaRG4fkJnDJVUmBRbWipaCYlRlzvHu1g/view?usp=sharing",
    categoria: "MACHADO DE ASSIS"
  },
  {
    titulo: "O CASO DA VARA",
    autor: "MACHADO DE ASSIS",
    capa: "assets/capas/OCASODAVARA.png",
    arquivo: "https://drive.google.com/file/d/12pvmDcFG83AqtLHWhvbd62QXhgEcap82/view?usp=sharing",
    categoria: "MACHADO DE ASSIS"
  }
];
