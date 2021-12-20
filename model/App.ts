import { DataApp } from "../app/app";

export class FindData {
  name: string;

  constructor() {
    this.name = "suus";
  }
  get() {
    console.log(this.name);
  }
}
