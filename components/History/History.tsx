import React from "react";

import {
  Container,
  Card,
  Date,
  Color,
  Title,
  Info,
  Price,
  PriceContainer,
  Content,
} from "./styles";

interface Transaction {
  title: string;
  color: string;
  isGood: boolean;
  price: string;
}

interface Day {
  date: string;
  transactions: Transaction[];
}

const History: React.FC = () => {
  const days: Day[] = [
    {
      date: "26 de junho de 2020",
      transactions: [
        {
          title: "Transportes (Gasolina/Aplicativos)",
          price: "-38,90",
          color: "#F2C94C",
          isGood: false,
        },
      ],
    },
    {
      date: "25 de junho de 2020",
      transactions: [
        {
          title: "Mercado",
          price: "-38,90",
          color: "#FB7D56",
          isGood: false,
        },
        {
          title: "Transferência",
          price: "+38,90",
          color: "#7FF2AF",
          isGood: true,
        },
      ],
    },
    {
      date: "24 de junho de 2020",
      transactions: [
        {
          title: "Livros",
          price: "-199,90",
          color: "#D96CFF",
          isGood: false,
        },
        {
          title: "Outros",
          price: "-2138,90",
          color: "#56CCF2",
          isGood: false,
        },
      ],
    },
  ];

  /**
   *  {
      title: "Mercado",
      date: "25 de junho de 2020",
      price: "+38,90",
      color: "#FB7D56",
      isGood: false,
    },
    {
      title: "Transferências",
      date: "25 de junho de 2020",
      price: "+38,90",
      color: "#7FF2AF",
      isGood: true,
    },
    {
      title: "Transportes (Gasolina/Aplicativos)",
      date: "24 de junho de 2020",
      price: "+38,90",
      color: "#56CCF2",
      isGood: false,
    },
   */

  return (
    <Container>
      {days.map((day, index) => {
        return (
          <Card key={index}>
            <Date>{day.date}</Date>
            {day.transactions.map((transaction, index) => {
              return (
                <Content key={index}>
                  <Info>
                    <Color color={transaction.color} />
                    <Title>{transaction.title}</Title>
                  </Info>
                  <PriceContainer>
                    <Price isGood={transaction.isGood}>
                      {transaction.price}
                    </Price>
                  </PriceContainer>
                </Content>
              );
            })}
          </Card>
        );
      })}
    </Container>
  );
};

export default History;
