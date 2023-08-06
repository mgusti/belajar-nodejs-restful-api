import { web } from "./application/web.js";
import { logger } from "./application/logging.js";
web.listen(3306, () => {
  logger.info("App Started");
});
