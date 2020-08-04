import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://store.playstation.com/store/api/chihiro/00_09_000/container/GB/en/999/EP0149-CUSA09988_00-AV00000000000001/1553560094000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000"
          alt="Avatar"
        />
        <div>
          <strong>Daniel Ferreira</strong>
          <span>Programação</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
        tenetur! <br /> <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        beatae totam ut eligendi dolorum porro, eos, illum doloremque unde
        placeat aliquam laudantium vero quod? Excepturi reprehenderit
        consequatur laborum molestiae accusantium nam aperiam, est aliquam minus
        eius sapiente fuga at facere!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 30,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
