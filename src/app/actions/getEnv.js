/**
 * @param root0
 * @param root0.logger
 */
module.exports = ({ logger }) => async () => {
  logger.info('Action::getEnv called')
  const envVar1 = process.env.ENV_VAR1
  const secretVar1 = process.env.SECRET_VAR1

  return {
    ENV_VAR1: envVar1,
    SECRET_VAR1: secretVar1,
  }
}
