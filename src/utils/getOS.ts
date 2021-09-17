import os from "os";

/**
 * Gets the currect os
 */
export const getPlatform = async() => {
    return os.platform();
}