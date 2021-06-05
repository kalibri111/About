import React from "react";

import "./description.css"

const Description = () => {
    return (
        <div className="description row">
            <div className="col-md-5 offset-md-3">
                <div className="card bg-secondary card-body">
                    <img className="card-img-top mx-auto" src="https://sun9-28.userapi.com/impg/if9DvslZ6iCVgKzbPbLXJAXBDYkQmNG31a6Geg/4qzxiKY4mvQ.jpg?size=786x1080&quality=96&sign=c57dc724cda6d29c86a6c221a6625ec0&type=album"/>
                    <div className="card-body">
                        <h5 className="card-text">Здравствуйте, я Лескин Иван Алексеевич. Мне 21 год и на данный момент я закончил 1 курс факультета ФПМИ в МФТИ. Интересуюсь бэкенд разработкой на С++, Python + Django, также разработкой ПО для встроенных систем на С. Ну и эта визитка написана на React)</h5>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Description;
