"use client";

import React from "react";
import { Box, Container } from "@mui/material";

type SectionProps = {
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | false;
  py?: number;
  px?: number;
  component?: React.ElementType;
};

export default function Section({
  children,
  maxWidth = "lg",
  py = 8,
  px,
  component = "section",
}: SectionProps) {
  return (
    <Box component={component} sx={{ py, px }}>
      <Container maxWidth={maxWidth}>{children}</Container>
    </Box>
  );
}


