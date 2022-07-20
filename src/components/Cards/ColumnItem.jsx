import React, { useContext } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { CardContext } from "../../context/CardContext";

const ColumnItem = ({ text, id, prevColumnId, nextColumnId }) => {
  const { handleMoveCard } = useContext(CardContext);

  const handleNext = () => {
    console.log(nextColumnId, id);
    handleMoveCard(nextColumnId, id);
  };

  const handlePrev = () => {
    handleMoveCard(prevColumnId, id);
  };
  return (
    <Box
      display={"flex"}
      alignItems="center"
      justifyContent={"space-between"}
      draggable
      cursor={"grab"}
      bgColor="rgba(255,255,255,0.5)"
      width={"100%"}
      padding={"4px 8px"}
    >
      <Text>{text}</Text>
      <div>
        <Button variant={"ghost"} onClick={handlePrev}>
          {"<"}
        </Button>
        <Button variant={"ghost"} onClick={handleNext}>
          {">"}
        </Button>
      </div>
    </Box>
  );
};

export default ColumnItem;
