function Card({ accion, titulo, texto, imagen }) {
  return (
    <div className="card card-border bg-base-100 w-96 ml-12">
      <div className="card-body">
        <h2 className="card-title">{titulo}</h2>
        <p>{texto}</p>
        <div className="card-actions justify-end">
          <p>{imagen}</p>
        </div>
        <div className="card-actions justify-end">
          <button onClick={accion} className="btn btn-primary">
            Ir a convertir
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card;
