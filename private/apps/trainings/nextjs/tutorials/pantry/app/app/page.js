'use client';

import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { db, getPantyItems } from "../firebase";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      let data = await getPantyItems(db);
      setItems(data.map((item) => item));
      console.log(data);
    }
    fetchItems();
  }, []);

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width="800px"
        height="100px"
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignItems="baseline"
        sx={{ bgcolor: "primary.main" }}
      >
        <Typography
          variant="h2"
          color="text.primary"
          textAlign="center"
          fontWeight="bold"
        >
          List of Items
        </Typography>
      </Box>
      <Stack width="800px" height="300px" spacing={2} overflow="scroll">
        {items.length < 0 ? <div>Retrieving Items ... One moment please ...</div> : items.map((item) => {
          return (
            <Box
              key={item}
              width="100%"
              height="300px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ color: "white", bgcolor: "text.primary", fontSize: "2rem" }}
            >
              <Typography
                variant="h4"
                color="text.primary"
                textAlign="center"
                fontWeight="bold"
              >
                {item}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}
