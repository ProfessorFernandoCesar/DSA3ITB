const handleMyClique = (events) => {
  console.log("Cliquei ...");
  console.log(events);
};

const Eventos = () => {
  return (
    <>
      <div>Eventos</div>
      <div>
        <button onClick={handleMyClique}>Clique Aqui !!</button>
      </div>

      <div>
        <button onClick={() => console.log("Cliquei na função")}>
          Clique novamente
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            if (true) {
              console.log("isto não deve ser feito , pois complica o HTML");
            }
          }}
        >
          Clique novamente !!!
        </button>
      </div>
    </>
  );
};

export default Eventos;
