import { Card } from "../../components";
import { content } from "./constants";

import { useNavigate } from "react-router-dom";

export const PrintsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="section-fixed">
      <div className="list">
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
      </div>
    </div>
  );
};
