#!/usr/bin/env ts-node
import { program } from "@caporal/core"
import path from "path"
import confirm from "@inquirer/confirm"

console.log(process.cwd())
program
  .name("gwit")
  .version("0.1.0")
  .description("Feature branch flow the right way")
  .discover(path.join(__dirname, "commands"))

program.run()
