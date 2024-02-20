import { PriceCard } from "../../components";
import { STICKER_CONTENT, content } from "./constants";
import "./styles.css";

import { useNavigate } from "react-router-dom";

export const PrintsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="section-fixed print-section">
      {/* <div className="list">
        {content.map((item) => (
          <div
            key={item.title}
            onClick={() => {
              navigate(item.route);
            }}
          >
            <Card img={item.img} title={item.title} />
          </div>
        ))}
      </div> */}
      <section style={{ minWidth: "100%" }} className="select-cat">
        <h3>Categoría: </h3>
        <select style={{ minWidth: "50%", alignSelf: "center" }}>
          <option value="sticker">Stickers</option>
          <option value="poster">Posters</option>
          <option value="print">Impresiones</option>
          <option value="canvas">Canvas</option>
        </select>
      </section>
      {/* <aside>
        <h2>Categorias</h2>
        <ul>
          <li onClick={() => navigate("/prints/stickers")}>Stickers</li>
          <li onClick={() => navigate("/prints/posters")}>Posters</li>
          <li onClick={() => navigate("/prints/prints")}>Impresiones</li>
          <li onClick={() => navigate("/prints/canvas")}>Canvas</li>
        </ul>
      </aside> */}
      <section className="item-list">
        <div className="list">
          {STICKER_CONTENT.map((item) => (
            <div key={item.title}>
              {/* <Card img={item.img} title={item.title} /> */}
              <PriceCard img={item.img} title={item.title} price={item.price} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
