"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";

Builder.registerComponent(Counter, {
  name: "Counter",
});

Builder.registerComponent(Header, {
  name: "Header",
});
