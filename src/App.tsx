import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import PersonalPage from './PersonalPage';
import RegistrationForm from './RegistrationForm'
import './styles.css';


const ArtistBio = () => (
  <div>
    <h2>Біографія художника</h2>
    <p>Вінсент ван Гог - голландський художник, один з найвідоміших майстрів у світі мистецтва. Його яскравий стиль та експресивність робіт зробили його одним з піонерів постімпресіонізму.</p>
        <p>Народився 30 березня 1853 року в місті Зундерт, Нідерланди. Вінсент ван Гог створив понад 2,100 картин, включаючи такі відомі твори, як "Зіркова ніч", "Сонячний сон", "Макі" та багато інших шедеврів.</p>
        <p>Життя ван Гога було повне творчих висновків та внутрішніх боротьб. Він страждав від психічних проблем та депресій, що відобразилося у його роботах. Трагічно, він помер у віці 37 років, але його творчість назавжди залишиться невмирущою.</p>
        <p>Його роботи зараз вважаються одними з найбільш цінних та дорогих у світі мистецтва, а вплив ван Гога на мистецтво надовго залишиться невимовним.</p>
        <p>Для отримання додаткової інформації про Вінсента ван Гога відвідайте <a href="https://uk.wikipedia.org/wiki/%D0%92%D1%96%D0%BD%D1%81%D0%B5%D0%BD%D1%82_%D0%B2%D0%B0%D0%BD_%D0%93%D0%BE%D0%B3">українську Вікіпедію</a>.</p>
    {}
  </div>
);

const FamousPainting = () => (
  <div>
    <h2>Найвідоміша картина</h2>
    <p>Вінсент ван Гог - голландський художник, один з найвідоміших майстрів у світі мистецтва. Його яскравий стиль та експресивність робіт зробили його одним з піонерів постімпресіонізму.</p>
        <p>Народився 30 березня 1853 року в місті Зундерт, Нідерланди. Вінсент ван Гог створив понад 2,100 картин, включаючи такі відомі твори, як "Зіркова ніч", "Сонячний сон", "Макі" та багато інших шедеврів.</p>
        <h2>Картина "Зіркова ніч"</h2>
        <p>Однією з найбільш відомих та значущих картин Вінсента ван Гога є "Зіркова ніч", написана у 1889 році. На картині зображено вид на місто ван Гога з надзвичайною експресією та рухом, що відображають його внутрішній стан.</p>
        <p>Ця картина стала однією з найбільш відомих робіт в історії мистецтва та символізує внутрішній світ художника, його почуття та страждання. "Зіркова ніч" вважається шедевром не лише ван Гога, а й усього мистецтва.</p>
        <p>Для отримання додаткової інформації про картину "Зіркова ніч" відвідайте <a href="https://uk.wikipedia.org/wiki/%D0%97%D1%96%D1%80%D0%BA%D0%BE%D0%B2%D0%B0_%D0%BD%D1%96%D1%87_(%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%B0)">українську Вікіпедію</a>.</p>
    {}
  </div>
);

const PaintingsCollection = () => (
  <div className="PaintingsCollection">
    <h2>Зібрання картин</h2>
    <ul>
      <li><a href="https://karpaty.shop/sites/default/files/styles/product/public/products/21/zamovyty_reprodukciyu_kartyny_vinsenta_van_goga_zoryana_nich.jpg" target="_blank" rel="noopener noreferrer">Картина 1</a></li>
      <li><a href="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Starry_Night_Over_the_Rhone.jpg/350px-Starry_Night_Over_the_Rhone.jpg" target="_blank" rel="noopener noreferrer">Картина 2</a></li>
      <li><a href="https://ukrburshtyn.com/upload/custom/images/Autoportrait_de_Vincent_van_Gogh.JPG" target="_blank" rel="noopener noreferrer">Картина 3</a></li>
    </ul>
  </div>
);


const Painting = () => {
  const { id, url } = useParams();
  return (
    <div>
      <h2>Картина {id}</h2>
      <img src={url} alt={`Картина ${id}`} />
    </div>
  );
};

const Navigation = () => (
  <nav>
    <ul>
      <li><Link to="/bio">Біографія</Link></li>
      <li><Link to="/famous-painting">Найвідоміша картина</Link></li>
      <li><Link to="/collection">Зібрання картин</Link></li>
      <li><Link to="/personal">Особиста сторінка</Link></li>
      <li><Link to="/register">Реєстрація</Link></li>
    </ul>
  </nav>
);

const App = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route path="/bio" element={<ArtistBio />} />
      <Route path="/famous-painting" element={<FamousPainting />} />
      <Route path="/collection" element={<PaintingsCollection />} />
      <Route path="/collection/:id" element={<Painting />} />
      <Route path="/personal" element={<PersonalPage />} />
      <Route path="/register" element={<RegistrationForm />} />
    </Routes>
  </Router>
);

export default App;