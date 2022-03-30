function Cards() {
  const value =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-image">
          <img
            src="https://phantom-marca.unidadeditorial.es/40cf53018fe1858608c0ee2e92b11dff/crop/0x0/1560x878/resize/1320/f/jpg/assets/multimedia/imagenes/2022/03/11/16470045630946.jpg"
            alt="resim"
          />
        </div>

        <div className="card-header">
          <p className="card-header-p">YEV Eğitim Bursu</p>
        </div>

        <div className="card-paragraph">
          {value.length > 10 ? (
            <p className="card-paragprah-p">
              {value.substring(0, 125)}...{" "}
              <button className="toggleButton">Read More</button>
            </p>
          ) : (
            <p className="card-paragprah-p">value</p>
          )}
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <img
            src="https://phantom-marca.unidadeditorial.es/40cf53018fe1858608c0ee2e92b11dff/crop/0x0/1560x878/resize/1320/f/jpg/assets/multimedia/imagenes/2022/03/11/16470045630946.jpg"
            alt="resim"
          />
        </div>

        <div className="card-header">
          <p className="card-header-p">SMA Hastası Selin</p>
        </div>

        <div className="card-paragraph">
          {value.length > 10 ? (
            <p className="card-paragprah-p">
              {value.substring(0, 125)}...{" "}
              <button className="toggleButton">Read More</button>
            </p>
          ) : (
            <p className="card-paragprah-p">value</p>
          )}
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <img
            src="https://phantom-marca.unidadeditorial.es/40cf53018fe1858608c0ee2e92b11dff/crop/0x0/1560x878/resize/1320/f/jpg/assets/multimedia/imagenes/2022/03/11/16470045630946.jpg"
            alt="resim"
          />
        </div>

        <div className="card-header">
          <p className="card-header-p">İBB Yardım Havuzu</p>
        </div>

        <div className="card-paragraph">
          {value.length > 10 ? (
            <p className="card-paragprah-p">
              {value.substring(0, 125)}...{" "}
              <button className="toggleButton">Read More</button>
            </p>
          ) : (
            <p className="card-paragprah-p">value</p>
          )}
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <img
            src="https://phantom-marca.unidadeditorial.es/40cf53018fe1858608c0ee2e92b11dff/crop/0x0/1560x878/resize/1320/f/jpg/assets/multimedia/imagenes/2022/03/11/16470045630946.jpg"
            alt="resim"
          />
        </div>

        <div className="card-header">
          <p className="card-header-p">Darüşşafaka Yardım Havuzu</p>
        </div>

        <div className="card-paragraph">
          {value.length > 10 ? (
            <p className="card-paragprah-p">
              {value.substring(0, 125)}...{" "}
              <button className="toggleButton">Read More</button>
            </p>
          ) : (
            <p className="card-paragprah-p">value</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
