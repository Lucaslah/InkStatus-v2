import { getPlatform } from "../";
import os, { CpuInfo } from "os";

const platform = getPlatform();

/**
 * Gets CPU Cores info
 * @returns { cores, coreinfo }
 * @example
 * const { getCPUCores } = require("inkstatus-v2/modules/CPU");
 * const { cores, coreinfo } = getCPUCores();
 * console.log(cores);
 * console.log(coreinfo[0]);
 */
export const getCPUCores = async(): Promise<{ cores: number, coreinfo: CpuInfo[] }> => {
    const cores = os.cpus().length;
    const coreinfo = os.cpus();

    return {
        cores,
        coreinfo
    }
}

export const getCPUUsage = async() => {
    const cores = os.cpus();

    for(let i = 0, len = cores.length; i < len; i++) {
        console.log("CPU %s:", i);
        let cpu = cores[i], total = 0;
    
        for(var type in cpu.times) {
            total += cpu.times[type];
        }
    
        for(type in cpu.times) {
            console.log("\t", type, Math.round(100 * cpu.times[type] / total));
        }
    }
}