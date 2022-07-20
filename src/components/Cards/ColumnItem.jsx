import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
const ColumnItem = ({ text, id }) => {
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
        <Button variant={"ghost"}>{"<"}</Button>
        <Button variant={"ghost"}>{">"}</Button>
      </div>
    </Box>
  );
};

export default ColumnItem;
