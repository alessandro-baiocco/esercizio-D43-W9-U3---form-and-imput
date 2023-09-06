import { Component } from "react";

class BookList extends Component {
  filtra = (e) => {
    e.preventDefault();
    const ul = document.querySelector("ul");
    const oggettiLista = document.querySelectorAll(".lista li");
    const ricerca = document.querySelector("input").value.toLowerCase();
    console.log(ricerca);
    const listaFiltrata = oggettiLista.forEach((oggeto) => {
      console.log(oggeto.innerText);
      if (oggeto.innerText.toLowerCase().includes(ricerca)) {
        oggeto.classList.remove("d-none");
      } else {
        oggeto.classList.add("d-none");
      }
    });
    ul.append(listaFiltrata);
  };
  render() {
    return (
      <>
        <input type="text" onChange={(Event) => this.filtra(Event)} />
        <ul className="lista">
          {this.props.lista.map((book, index) => (
            <li key={`book-${index}`}>{book.title}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default BookList;
