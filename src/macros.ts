import { Logger } from "@caporal/core"
import { SimpleGit } from "simple-git"

export const canInitRepo = async (git: SimpleGit, logger: Logger) => {
  let output = false
  try {
    logger.debug("git rev-parse --git-dir")
    const gitDir = await git.revparse("--git-dir")
    const gitRemote = await git.getRemotes()
    logger.info(gitRemote)
    if (gitDir) {
      output = true
    }
  } catch (error) {
    output = false
    logger.error(error)
  }
  return output
}
export const initRepo = async (git: SimpleGit, logger: Logger) => {
  logger.info("Initializing repo")
  logger.debug("Initializing repo")
}

export const isRepoClean = async (git: SimpleGit, logger: Logger) => {}
export const initStable = async (git: SimpleGit, logger: Logger) => {}
export const checkoutStable = async (git: SimpleGit, logger: Logger) => {}
export const createTag = async (git: SimpleGit, logger: Logger) => {}
export const ammendGitignore = async (git: SimpleGit, logger: Logger) => {}
