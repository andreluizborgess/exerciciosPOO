"use strict";
class musica {
    constructor(titulo, artista, duração) {
        this.titulo = titulo;
        this.artista = artista;
        this.duração = duração;
    }
}
class playlist {
    constructor() {
        this.musicas = [];
        this.reproduzindo = false;
        this.indiceAtual = 0;
    }
    adicionarMusica(musica) {
        this.musicas.push(musica);
    }
    reproduzir() {
        if (this.musicas.length > 0) {
            this.reproduzindo = true;
            return "reproduzindo:" + this.musicas[this.indiceAtual].titulo + "." + this.musicas[this.indiceAtual].artista;
        }
        else {
            return "a playlist esta vazia ";
        }
    }
    pausar() {
        if (this.reproduzindo == true) {
            this.reproduzindo = false;
            return "musica pausada";
        }
        else {
            return "nenhuma musica esta sendo reproduzida";
        }
    }
    proxima() {
        if (this.musicas.length > 0) {
            this.indiceAtual = (this.indiceAtual + 1) % this.musicas.length;
            return this.reproduzir();
        }
        else {
            return " a playlist esta vazia";
        }
    }
}
const musica1 = new musica("vai namorar comigo", "henrique e juliano", 300);
const musica2 = new musica("e se eu dropa outro perc", "D'senna", 300);
const musica3 = new musica("for real 2 ", "Lil Zé", 300);
const minhaPlaylist = new playlist();
minhaPlaylist.adicionarMusica(musica1);
minhaPlaylist.adicionarMusica(musica2);
console.log(minhaPlaylist.reproduzir());
console.log(minhaPlaylist.pausar());
console.log(minhaPlaylist.proxima());
console.log(minhaPlaylist.proxima());
console.log(minhaPlaylist.proxima());
