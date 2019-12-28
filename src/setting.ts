import { colorful } from './utils'

/**
 * 设置项
 * 本文件和 config.ts 的区别在于，本文件中的内容一般情况下不需要进行修改。
 * 本文件存放了项目中的内置常量
 */

/**
 * 不同角色类型的身体部件
 * spawn 在孵化时会根据所处房间的等级自动调整身体部件
 */
export const bodyConfigs: IBodyConfigs = {
    /**
     * 工作单位
     * 诸如 harvester、builder、upgrader 之类的
     */
    worker: {
        300: [ WORK, CARRY, MOVE ],
        550: [ WORK, CARRY, MOVE, WORK, CARRY, MOVE ],
        800: [ WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE ],
        1300: [ WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE ],
        1800: [ WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE ],
        2300: [ WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE ],
        5600: [ WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE ],
        12900: [ WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE ]
    },

    upgrader: {
        300: [ WORK, CARRY, MOVE ],
        550: [ WORK, CARRY, MOVE, WORK, CARRY, MOVE ],
        800: [ WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE ],
        1300: [ WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE ],
        1800: [ WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE ],
        2300: [ WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE ],
        5600: [ WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE ],
        12900: [ WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE ]
    },

    /**
     * 纯粹的工作单位
     * 只包含 WORK 和少量的 MOVE
     */
    pureWork: {
        300: [ WORK, WORK, MOVE ],
        550: [ WORK, WORK, MOVE, WORK, MOVE ],
        800: [ WORK, WORK, MOVE, WORK, WORK, MOVE ],
        1300: [ WORK, WORK, MOVE, WORK, WORK, MOVE, WORK, MOVE ],
        1800: [ WORK, WORK, MOVE, WORK, WORK, MOVE, WORK, WORK, MOVE ],
        2300: [ WORK, WORK, MOVE, WORK, WORK, MOVE, WORK, WORK, MOVE, WORK, MOVE ],
        5600: [ WORK, WORK, MOVE, WORK, WORK, MOVE, WORK, WORK, MOVE, WORK, WORK, MOVE ],
        12900: [ WORK, WORK, MOVE, WORK, WORK, MOVE, WORK, WORK, MOVE, WORK, WORK, MOVE, WORK, WORK, MOVE ]
    },
    
    /**
     * 小型 worker
     */
    smallWorker: {
        300: [ WORK, CARRY, MOVE ],
        550: [ WORK, CARRY, MOVE ],
        800: [ WORK, CARRY, MOVE, WORK, CARRY, MOVE ],
        1300: [ WORK, CARRY, MOVE, WORK, CARRY, MOVE ],
        1800: [ WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE ],
        2300: [ WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE ],
        5600: [ WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE ],
        12900: [ WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE ]
    },

    /**
     * 转移单位
     * 负责转移基地资源的 creep
     */
    transfer: {
        300: [ CARRY, CARRY, MOVE ],
        550: [ CARRY, CARRY, MOVE, CARRY, MOVE ],
        800: [ CARRY, CARRY, MOVE, CARRY, CARRY, MOVE ],
        1300: [ CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, MOVE ],
        1800: [ CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE ],
        2300: [ CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE ],
        5600: [ CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE ],
        12900: [ CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE ]
    },

    /**
     * 转移单位
     * 负责转移中央物流的 creep
     */
    centerTransfer: {
        300: [ CARRY, CARRY, MOVE ],
        550: [ CARRY, CARRY, MOVE ],
        800: [ CARRY, CARRY, CARRY, CARRY, CARRY, MOVE ],
        1300: [ CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE ],
        1800: [ CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE ],
        2300: [ CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE ],
        5600: [ CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE ],
        12900: [ CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE ]
    },


    /**
     * 声明单位
     * 包含 CLAIM 的 creep
     */
    claimer: {
        300: [ MOVE, CLAIM ],
        550: [ MOVE, CLAIM ],
        800: [ MOVE, CLAIM ],
        1300: [ MOVE, CLAIM ],
        1800: [ MOVE, CLAIM ],
        2300: [ MOVE, CLAIM ],
        5600: [ MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CLAIM ],
        12900: [ MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CLAIM ],
    },

    reserver: {
        300: [ MOVE, CLAIM ],
        550: [ MOVE, CLAIM ],
        800: [ MOVE, CLAIM ],
        1300: [ MOVE, CLAIM ],
        1800: [ MOVE, CLAIM, MOVE, CLAIM ],
        2300: [ MOVE, CLAIM, MOVE, CLAIM ],
        5600: [ MOVE, CLAIM, MOVE, CLAIM ],
        12900: [ MOVE, CLAIM, MOVE, CLAIM ],
    },

    /**
     * 基础攻击单位
     * 使用 attack 身体部件的攻击单位
     */
    attacker: {
        300: [ MOVE, MOVE, ATTACK, ATTACK ],
        550: [ MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK ],
        800: [ MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK ],
        1300: [ MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK ],
        1800: [ MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK ],
        2300: [ MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK ],
        5600: [ MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK ],
        12900: [ MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK ]
    },
    
    /**
     * 治疗单位
     */
    healer: {
        300: [ MOVE, MOVE, HEAL, HEAL ],
        550: [ MOVE, MOVE, MOVE, HEAL, HEAL, HEAL ],
        800: [ MOVE, MOVE, MOVE, MOVE, HEAL, HEAL, HEAL, HEAL ],
        1300: [ MOVE, MOVE, MOVE, MOVE, MOVE, HEAL, HEAL, HEAL, HEAL, HEAL ],
        1800: [ MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL ],
        2300: [ MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL ],
        5600: [ MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL ],
        12900: [ MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL ]
    },

    /**
     * 外矿防御单位
     */
    remoteDefender: {
        300: [ TOUGH, MOVE, ATTACK, MOVE ],
        550: [ TOUGH, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE ],
        800: [ TOUGH, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, HEAL, MOVE ],
        1300: [ TOUGH, TOUGH, MOVE, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, HEAL, MOVE ],
        1800: [ TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, HEAL, MOVE ],
        2300: [ TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, HEAL, MOVE ],
        5600: [ TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, HEAL, MOVE, HEAL, MOVE ],
        12900: [ TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, RANGED_ATTACK, MOVE, HEAL, MOVE, HEAL, MOVE ],
    },

    /**
     * 拆除者身体
     */
    dismantler: {
        300: [ TOUGH, MOVE, WORK, MOVE ],
        550: [ TOUGH, MOVE, TOUGH, MOVE, WORK, MOVE, WORK, MOVE ],
        800: [ TOUGH, MOVE, TOUGH, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE ],
        1300: [ TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE ],
        1800: [ TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE ],
        2300: [ TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE ],
        5600: [ TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE ],
        12900: [ TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE, WORK, MOVE ],
    },

    /**
     * 外矿采集者
     * 和采集者的区别就是外矿采集者拥有更多的 CARRY
     */
    remoteHarvester: {
        300: [ WORK, CARRY, MOVE ],
        550: [ WORK, CARRY, MOVE, WORK, CARRY, MOVE ],
        800: [ WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE ],
        1300: [ WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, CARRY, CARRY, MOVE ],
        1800: [ WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE ],
        2300: [ WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE ],
        5600: [ WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE ],
        12900: [ WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, WORK, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE ]
    },

    /**
     * 签名者
     * 没啥用
     */
    signer: {
        300: [ MOVE ],
        550: [ MOVE ],
        800: [ MOVE ],
        1300: [ MOVE ],
        1800: [ MOVE ],
        2300: [ MOVE ],
        5600: [ MOVE ],
        12900: [ MOVE ],

    }
}


// creep 的默认内存
export const creepDefaultMemory: CreepMemory = {
    role: '',
    ready: false,
    working: false,
    path: []
}

/**
 * 快捷生成单个常量帮助
 * 
 * @param name 常量简称
 * @param constant 常量名
 */
function createConst(name: string, constant: string): string {
    return `${colorful(name, '#6b9955')} ${colorful(constant, '#8dc5e3')}`
}

// 资源常量控制台帮助
export const resourcesHelp: string = `
${createConst('O', 'RESOURCE_OXYGEN')}              ${createConst('H', 'RESOURCE_HYDROGEN')}         ${createConst('U', 'RESOURCE_UTRIUM')}             ${createConst('X', 'RESOURCE_CATALYST')}
${createConst('压缩O', 'RESOURCE_OXIDANT')}         ${createConst('压缩H', 'RESOURCE_REDUCTANT')}     ${createConst('压缩U', 'RESOURCE_UTRIUM_BAR')}     ${createConst('压缩X', 'RESOURCE_PURIFIER')}
${createConst('L', 'RESOURCE_LEMERGIUM')}           ${createConst('K', 'RESOURCE_KEANIUM')}          ${createConst('Z', 'RESOURCE_ZYNTHIUM')}           ${createConst('G', 'RESOURCE_GHODIUM')} 
${createConst('压缩L', 'RESOURCE_LEMERGIUM_BAR')}   ${createConst('压缩K', 'RESOURCE_KEANIUM_BAR')}   ${createConst('压缩Z', 'RESOURCE_ZYNTHIUM_BAR')}   ${createConst('压缩G', 'RESOURCE_GHODIUM_MELT')}

${createConst('TOUGH强化', 'RESOURCE_CATALYZED_GHODIUM_ALKALIDE')}   ${createConst('RANGE_ATTACK强化', 'RESOURCE_CATALYZED_KEANIUM_ALKALIDE')}
${createConst('MOVE强化', 'RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE')}   ${createConst('HEAL强化', 'RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE')}
`
// 房间建筑维修需要的设置
export const repairSetting = {
    // 在 tower 的能量高于该值时才会刷墙
    energyLimit: 600,
    // 普通建筑维修的检查间隔
    checkInterval: 8,
    // 墙壁维修的检查间隔
    wallCheckInterval: 3,
    // 墙壁的关注时间
    focusTime: 100
}

// 从反应目标产物获取其底物的对应表
export const reactionSource: IReactionSource = {
    // 三级化合物
    [RESOURCE_CATALYZED_GHODIUM_ACID]: [ RESOURCE_GHODIUM_ACID, RESOURCE_CATALYST ],
    [RESOURCE_CATALYZED_GHODIUM_ALKALIDE]: [ RESOURCE_GHODIUM_ALKALIDE, RESOURCE_CATALYST ],
    [RESOURCE_CATALYZED_KEANIUM_ACID]: [ RESOURCE_KEANIUM_ACID, RESOURCE_CATALYST ],
    [RESOURCE_CATALYZED_KEANIUM_ALKALIDE]: [ RESOURCE_KEANIUM_ALKALIDE, RESOURCE_CATALYST ],
    [RESOURCE_CATALYZED_LEMERGIUM_ACID]: [ RESOURCE_LEMERGIUM_ACID, RESOURCE_CATALYST ],
    [RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE]: [ RESOURCE_LEMERGIUM_ALKALIDE, RESOURCE_CATALYST ],
    [RESOURCE_CATALYZED_UTRIUM_ACID]: [ RESOURCE_UTRIUM_ACID, RESOURCE_CATALYST ],
    [RESOURCE_CATALYZED_UTRIUM_ALKALIDE]: [ RESOURCE_UTRIUM_ALKALIDE, RESOURCE_CATALYST ],
    [RESOURCE_CATALYZED_ZYNTHIUM_ACID]: [ RESOURCE_ZYNTHIUM_ACID, RESOURCE_CATALYST ],
    [RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE]: [ RESOURCE_ZYNTHIUM_ALKALIDE, RESOURCE_CATALYST ],
    // 二级化合物
    [RESOURCE_GHODIUM_ACID]: [ RESOURCE_GHODIUM_HYDRIDE, RESOURCE_HYDROXIDE ],
    [RESOURCE_GHODIUM_ALKALIDE]: [ RESOURCE_GHODIUM_OXIDE, RESOURCE_HYDROXIDE ],
    [RESOURCE_KEANIUM_ACID]: [ RESOURCE_KEANIUM_HYDRIDE, RESOURCE_HYDROXIDE],
    [RESOURCE_KEANIUM_ALKALIDE]: [ RESOURCE_KEANIUM_OXIDE, RESOURCE_HYDROXIDE],
    [RESOURCE_LEMERGIUM_ACID]: [ RESOURCE_LEMERGIUM_HYDRIDE, RESOURCE_HYDROXIDE],
    [RESOURCE_LEMERGIUM_ALKALIDE]: [ RESOURCE_LEMERGIUM_OXIDE, RESOURCE_HYDROXIDE],
    [RESOURCE_UTRIUM_ACID]: [ RESOURCE_UTRIUM_HYDRIDE, RESOURCE_HYDROXIDE],
    [RESOURCE_UTRIUM_ALKALIDE]: [ RESOURCE_UTRIUM_OXIDE, RESOURCE_HYDROXIDE],
    [RESOURCE_ZYNTHIUM_ACID]: [ RESOURCE_ZYNTHIUM_HYDRIDE, RESOURCE_HYDROXIDE],
    [RESOURCE_ZYNTHIUM_ALKALIDE]: [ RESOURCE_ZYNTHIUM_OXIDE, RESOURCE_HYDROXIDE],
    // 一级化合物
    [RESOURCE_GHODIUM_HYDRIDE]: [ RESOURCE_GHODIUM, RESOURCE_HYDROGEN ],
    [RESOURCE_GHODIUM_OXIDE]: [ RESOURCE_GHODIUM, RESOURCE_OXYGEN ],
    [RESOURCE_KEANIUM_HYDRIDE]: [ RESOURCE_KEANIUM, RESOURCE_HYDROGEN ],
    [RESOURCE_KEANIUM_OXIDE]: [ RESOURCE_KEANIUM, RESOURCE_OXYGEN ],
    [RESOURCE_LEMERGIUM_HYDRIDE]: [ RESOURCE_LEMERGIUM, RESOURCE_HYDROGEN ],
    [RESOURCE_LEMERGIUM_OXIDE]: [ RESOURCE_LEMERGIUM, RESOURCE_OXYGEN ],
    [RESOURCE_UTRIUM_HYDRIDE]: [ RESOURCE_UTRIUM, RESOURCE_HYDROGEN ],
    [RESOURCE_UTRIUM_OXIDE]: [ RESOURCE_UTRIUM, RESOURCE_OXYGEN ],
    [RESOURCE_ZYNTHIUM_HYDRIDE]: [ RESOURCE_ZYNTHIUM, RESOURCE_HYDROGEN ],
    [RESOURCE_ZYNTHIUM_OXIDE]: [ RESOURCE_ZYNTHIUM, RESOURCE_OXYGEN ],
    [RESOURCE_GHODIUM]: [ RESOURCE_ZYNTHIUM_KEANITE, RESOURCE_UTRIUM_LEMERGITE ],
    // 基础化合物
    [RESOURCE_ZYNTHIUM_KEANITE]: [ RESOURCE_ZYNTHIUM, RESOURCE_KEANIUM ],
    [RESOURCE_UTRIUM_LEMERGITE]: [ RESOURCE_UTRIUM, RESOURCE_LEMERGIUM ],
    [RESOURCE_HYDROXIDE]: [ RESOURCE_HYDROGEN, RESOURCE_OXYGEN ],
}

/**
 * lab 集群的工作状态常量
 */
export const LAB_STATE = {
    GET_TARGET: 'getTarget',
    GET_RESOURCE: 'getResource',
    WORKING: 'working',
    PUT_RESOURCE: 'putResource'
}

/**
 * lab 集群的目标产物及其数量列表
 */
export const labTarget = [
    // 基础
    { target: RESOURCE_HYDROXIDE, number: 4000 },
    { target: RESOURCE_ZYNTHIUM_KEANITE, number: 4000 },
    { target: RESOURCE_UTRIUM_LEMERGITE, number: 4000 },
    // G
    { target: RESOURCE_GHODIUM, number: 5000 },
    // XKHO2 生产线，强化 RANGE_ATTACK
    { target: RESOURCE_KEANIUM_OXIDE, number: 3000 },
    { target: RESOURCE_KEANIUM_ALKALIDE, number: 2000 },
    { target: RESOURCE_CATALYZED_KEANIUM_ALKALIDE, number: 1000 },
    // XLHO2 生产线，强化 HEAL
    { target: RESOURCE_LEMERGIUM_OXIDE, number: 3000 },
    { target: RESOURCE_LEMERGIUM_ALKALIDE, number: 2000 },
    { target: RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE, number: 1000 },
    // XZHO2 生产线，强化 MOVE
    { target: RESOURCE_ZYNTHIUM_OXIDE, number: 3000 },
    { target: RESOURCE_ZYNTHIUM_ALKALIDE, number: 2000 },
    { target: RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE, number: 1000 },
    // XGHO2 生产线，强化 TOUGH
    { target: RESOURCE_GHODIUM_OXIDE, number: 3000 },
    { target: RESOURCE_GHODIUM_ALKALIDE, number: 2000 },
    { target: RESOURCE_CATALYZED_GHODIUM_ALKALIDE, number: 1000 },
]

/**
 * factory 会优先保证底物的数量超过下面的限制之后才会进行生产
 * 例如：factory 想要生产 oxidant，但是 O 的数量低于 FACTORY_LOCK_AMOUNT.RESOURCE_OXYGEN 所以 factory 就会暂时停工
 */
export const FACTORY_LOCK_AMOUNT = {
    [RESOURCE_HYDROGEN]: 40000,
    [RESOURCE_OXYGEN]: 40000,
    [RESOURCE_UTRIUM]: 40000,
    [RESOURCE_LEMERGIUM]: 40000,
    [RESOURCE_KEANIUM]: 40000,
    [RESOURCE_ZYNTHIUM]: 40000,
    [RESOURCE_CATALYST]: 40000,
    [RESOURCE_GHODIUM]: 40000,
}