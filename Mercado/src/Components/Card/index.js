import React from "react";
import { useState, useEffect } from "react";
import Api from "../../Api";
import "./style.css";
import { UseMercado } from "../../context";

const Card = ({ Remover, showbutton, Filtrado, FiltradoCat, showquanti }) => {
  const { Cart, setCart, Editar, setEditar,CompraFull, setCompraFull } = UseMercado();


  const AdicionarProduto = async (data) => {
      setCart((curr) => [
        ...curr,
        { ...data},
      ]);

  };

  const removerProduto = (id) => {
    Api.delete(`/produtos/${id}`);
  };

  const Quantidade = (data,e,k) => {
       let nam  = e.target.name
    
       if(nam === data.nome) {
        console.log(data.nome)
       }
    
  } 

  console.log(CompraFull)

  return (
    <>
      {Filtrado &&
        Filtrado.map((p, k) => (
          <div key={k} className="PrincipalProd">
            <div className="cardProd">
              <img className="CardImg" alt="logo" src={p.url} />

              {!showbutton && (
                <button
                  type="button"
                  onClick={() => removerProduto(p._id)}
                  className="btnexcluir btn-danger"
                >
                  Remover
                </button>
              )}
              {!showbutton && (
                <button
                  type="button"
                  className="btnexcluir btn-danger"
                  onClick={() => setEditar(p)}
                  data-toggle="modal"
                  data-target="#modal-filme"
                >
                  Editar
                </button>
              )}

              <p style={{ fontSize: "13px" }}> {p.nome} </p>

              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <label style={{ color: "blue" }}>
                  R$: {p.preco.toFixed(2)}{" "}
                </label>
              </div>

              <div className="botaos">
                {showbutton === true ? (
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => Remover(p)}
                  >
                    Remover
                  </button>
                ) : (
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => AdicionarProduto(p)}
                  >
                    Adicionar
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}

      {Filtrado == "" && (
        <div
          style={{
            color: "red",
            minWidth: "200px",
            minHeight: "100px",
            textAlign: "center",
            marginTop: "10%",
          }}
        >
          {" "}
          NENHUM PRODUTO ENCONTRADO{" "}
        </div>
      )}

      {FiltradoCat &&
        FiltradoCat.map((p, k) => (
          <div key={k} className="PrincipalProd">
            <div className="cardProd">
              <img className="CardImg" alt="logo" src={p.url} />

              {!showbutton && (
                <button
                  type="button"
                  onClick={() => removerProduto(p._id)}
                  className="btnexcluir btn-danger"
                >
                  Remover
                </button>
              )}
              {!showbutton && (
                <button
                  type="button"
                  className="btnexcluir btn-danger"
                  onClick={() => setEditar(p)}
                  data-toggle="modal"
                  data-target="#modal-filme"
                >
                  Editar
                </button>
              )}

              <p style={{ fontSize: "13px" }}> {p.nome} </p>

              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <label style={{ color: "blue" }}>
                  R$: {p.preco.toFixed(2)}{" "}
                </label>
              </div>

              <div className="botaos">
                {showbutton === true ? (
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => Remover(p)}
                  >
                    Remover
                  </button>
                ) : (
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => AdicionarProduto(p)}
                  >
                    Adicionar
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      {FiltradoCat == "" && (
        <div
          style={{
            color: "red",
            minWidth: "400px",
            minHeight: "400px",
            textAlign: "center",
            marginTop: "10%",
          }}
        >
          {" "}
          NENHUM PRODUTO ENCONTRADO{" "}
        </div>
      )}
    </>
  );
};

export default Card;
