import type { CreateCommandParameters, Command, Action } from "@caporal/core"
import confirm from "@inquirer/confirm"
import simpleGit from "simple-git"
import { canInitRepo, initRepo } from "../macros"
const git = simpleGit()

const initAction: Action = async ({ logger, args }) => {
  logger.info("Starting with version %s", args.version)
  const doIt = await confirm({ message: "Are you sure?" })
  const canInitialize = await canInitRepo(git, logger)

  if (doIt && canInitialize) {
    initRepo(git, logger)
  } else {
    logger.error("This directory is not ready to be initialized with Gwit")
  }
}

export default ({ createCommand }: CreateCommandParameters): Command => {
  return createCommand("Initialize gwit project")
    .argument("<version>", "First version number to start from")
    .action(initAction)
}
