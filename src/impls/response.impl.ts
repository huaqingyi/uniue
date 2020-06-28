export class ResponseImpl {
    public err?: any;
    public errno?: number;
    public errmsg?: string;
}

interface ResVO {
    errno: number;    // 错误 code
    errmsg: string;    // 错误 message
}

/**
 * *********************************************************************************************************************
 * 常规配置
 * *********************************************************************************************************************
 */

/**
 * 常规广告类型返回字段
 */
interface AdTypeVO {
    id: string;    // 广告类型表 id
    type: string;    // 类型名称
    name: string;    // 显示名称
    test: number;    // 是否测试 app 可见
    active: number;    // 是否生效
}

/**
 * 常规广告平台返回字段
 */
interface AdChannelVO {
    id: string;    // 广告平台表 id
    channel: string;    // 平台名
    key1: string;    // 启动参数 1
    key2: string;    // 启动参数 2
    key3: string;    // 启动参数 3
    test: number;    // 是否测试 app 可见
    adTypeList: string[];    // 支持的广告类型显示名称列表
    active: number;    // 是否生效
}

/**
 * 常规 native 模板返回字段
 */
interface NativeTmplVO {
    id: string;    // native 模板表 id
    key: string;    // 模板编号
    preview: string;    // 预览图地址
    test: number;    // 是否测试 app 可见
    active: number;    // 是否生效
}

/**
 * 常规基础常量返回字段
 */
interface BaseConfigVO {
    id: string;    // 通用基础常量表 id
    key: string;    // 键
    value: string;    // 值
    description: string;    // 描述
    test: number;    // 是否测试 app 可见
    active: number;    // 是否生效
}

/**
 * 常规打包参数返回字段
 */
interface PackParamVO {
    id: string;    // 通用打包参数表 id
    key: string;    // 键
    description: string;    // 描述
    test: number;    // 是否测试 app 可见
    active: number;    // 是否生效
}

/**
 * GET，
 * <br/>获取广告类型列表 /advertisement/commonManager/adTypeList
 */
export interface AdTypeListResVO extends ResVO {
    data: AdTypeVO[];
}

/**
 * 获取广告类型 /advertisement/commonManager/adType
 */
export interface GetAdTypeReqVO {
    name: string;    // 类型名称
}

export interface GetAdTypeResVO extends ResVO {
    data: AdTypeVO;
}

/**
 * 创建广告类型 /advertisement/commonManager/createAdType
 */
export interface CreateAdTypeReqVO {
    type: string;    // 类型名称
    name: string;    // 显示名称
}

export interface CreateAdTypeResVO extends ResVO {
    data: 'created';
}

/**
 * 更新广告类型 /advertisement/commonManager/updateAdType
 */
export interface UpdateAdTypeReqVO {
    id: string;    // 广告类型表 id
    name?: string;    // 显示名称
    test?: number;    // 是否测试 app 可见
    active?: number;    // 是否生效
}

export interface UpdateAdTypeResVO extends ResVO {
    data: 'updated';    // 更新成功
}

/**
 * GET，
 * <br/>获取广告平台列表 /advertisement/commonManager/adChannelList
 */
export interface AdChannelListResVO extends ResVO {
    data: AdChannelVO[];
}

/**
 * 获取广告平台 /advertisement/commonManager/adChannel
 */
export interface GetAdChannelReqVO {
    channel: string;    // 平台名
}

export interface GetAdChannelResVO extends ResVO {
    data: AdChannelVO;
}

/**
 * 创建广告平台 /advertisement/commonManager/createAdChannel
 */
export interface CreateAdChannelReqVO {
    channel: string;    // 平台名
    key1?: string;    // 启动参数 1
    key2?: string;    // 启动参数 2
    key3?: string;    // 启动参数 3
}

export interface CreateAdChannelResVO extends ResVO {
    data: 'created';
}

/**
 * 更新广告平台 /advertisement/commonManager/updateAdChannel
 */
export interface UpdateAdChannelReqVO {
    id: string;    // 广告平台表 id
    key1?: string;    // 启动参数 1
    key2?: string;    // 启动参数 2
    key3?: string;    // 启动参数 3
    adTypeIdList?: string[];    // 支持的广告类型主键列表
    test?: number;    // 是否测试 app 可见
    active?: number;    // 是否生效
}

export interface UpdateAdChannelResVO extends ResVO {
    data: 'updated';    // 更新成功
}

/**
 * GET，
 * <br/>获取 native 模板列表 /advertisement/commonManager/nativeTmplList
 */
export interface NativeTmplListResVO extends ResVO {
    data: NativeTmplVO[];
}

/**
 * 创建 native 模板 /advertisement/commonManager/createNativeTmpl
 * <br/>需要上传图片
 */
export interface CreateNativeTmplReqVO {
    key: string;    // 模板编号
}

export interface CreateNativeTmplResVO extends ResVO {
    data: 'created';
}

/**
 * 更新 native 模板 /advertisement/commonManager/updateNativeTmpl
 * <br/>更新预览图需要上传图片
 */
export interface UpdateNativeTmplReqVO {
    id: string;    // native 模板表 id
    test?: number;    // 是否测试 app 可见
    active?: number;    // 是否生效
}

export interface UpdateNativeTmplResVO extends ResVO {
    data: 'updated';    // 更新成功
}

/**
 * GET，
 * <br/>获取基础常量列表 /advertisement/commonManager/baseConfigList
 */
export interface BaseConfigListResVO extends ResVO {
    data: BaseConfigVO[];
}

/**
 * 创建基础常量 /advertisement/commonManager/createBaseConfig
 */
export interface CreateBaseConfigReqVO {
    key: string;    // 键
    value: string;    // 值
    description: string;    // 描述
}

export interface CreateBaseConfigResVO extends ResVO {
    data: 'created';
}

/**
 * 更新基础常量 /advertisement/commonManager/updateBaseConfig
 */
export interface UpdateBaseConfigReqVO {
    id: string;    // 基础常量表 id
    value?: string;    // 值
    description?: string;    // 描述
    test?: number;    // 是否测试 app 可见
    active?: number;    // 是否生效
}

export interface UpdateBaseConfigResVO extends ResVO {
    data: 'updated';    // 更新成功
}

/**
 * GET，
 * <br/>获取打包参数列表 /advertisement/commonManager/packParamList
 */
export interface PackParamListResVO extends ResVO {
    data: PackParamVO[];
}

/**
 * 创建打包参数 /advertisement/commonManager/createPackParam
 */
export interface CreatePackParamReqVO {
    key: string;    // 参数名
    description: string;    // 描述
}

export interface CreatePackParamResVO extends ResVO {
    data: 'created';
}

/**
 * 更新打包参数 /advertisement/commonManager/updatePackParam
 */
export interface UpdatePackParamReqVO {
    id: string;    // 打包参数表 id
    description?: string;    // 描述
    test?: number;    // 是否测试 app 可见
    active?: number;    // 是否生效
}

export interface UpdatePackParamResVO extends ResVO {
    data: 'updated';    // 更新成功
}

/**
 * *********************************************************************************************************************
 * 应用和项目组相关配置
 * *********************************************************************************************************************
 */

interface ProductVO {
    id: string;    // 应用表主键 id
    name: string;    // 应用名
    packageName: string;     // 包名
    platform: string;    // 平台名
    pid: string;    // 苹果 id
    test: number;    // 是否测试 app 可见
    active: number;    // 是否生效
    productGroupName?: string;    // 项目组名
    productAuth?: ProductAuthVO;    // 用户在应用下权限
}

interface ProductGroupVO {
    id: string;    // 项目组表主键 id
    name: string;    // 项目组名
    description: string;    // 项目组描述
    active: number;    // 是否生效
    productGroupAuth?: ProductAuthVO;    // 用户在项目组下权限
}

/**
 * 获取全部应用列表 /advertisement/productManager/productList
 */
export interface ProductListResVO extends ResVO {
    data: ProductVO[];    // 应用列表
}

/**
 * 获取应用详情 /advertisement/productManager/product
 */
export interface GetProductReqVO {
    id: string;    // 应用表主键 id
}

export interface GetProductResVO extends ResVO {
    data: ProductVO;
}

/**
 * 更新应用 /advertisement/productManager/updateProduct
 */
export interface UpdateProductReqVO {
    id: string;    // 应用表主键 id
    pid?: string;    // 苹果 id
    test?: number;    // 是否测试 app 可见
    active?: number;    // 是否生效
}

export interface UpdateProductResVO extends ResVO {
    data: 'updated';    // 更新成功
}

/**
 * 获取应用打包参数 /advertisement/productManager/packParamConfList
 */
export interface PackParamConfListReqVO {
    id: string;    // 应用表主键 id
}

export interface PackParamConfListResVO extends ResVO {
    data: Array<{
        id: string;    // 应用打包参数表主键 id
        key: string;    // 参数名
        value: string;    // 参数值
        description: string;    // 描述
    }>;
}

/**
 * 获取应用平台参数 /advertisement/productManager/channelParamConfList
 */
export interface ChannelParamConfListReqVO {
    id: string;    // 应用表主键 id
    type?: string;    // 广告类型显示名称
}

export interface ChannelParamConfListResVO extends ResVO {
    data: Array<{
        id: string;    // 应用广告平台参数表主键 id
        channel: string;    // 平台名
        key1: string;    // 启动参数 1
        key2: string;    // 启动参数 2
        key3: string;    // 启动参数 3
        value1: string;    // 启动参数 1 的值
        value2: string;    // 启动参数 2 的值
        value3: string;    // 启动参数 3 的值
    }>;
}

/**
 * 更新应用应用打包参数 /advertisement/productManager/updatePackParamConf
 */
export interface UpdatePackParamConfReqVO {
    id: string;    // 打包参数表主键 id
    productId: string;    // 应用表主键 id
    value: string;    // 打包参数值
}

export interface UpdatePackParamConfResVO extends ResVO {
    data: 'updated';    // 更新成功
}

/**
 * 更新应用平台参数 /advertisement/productManager/updateChannelParamConf
 */
export interface UpdateChannelParamConfReqVO {
    id: string;    // 广告平台表主键 id
    productId: string;    // 应用表主键 id
    value1?: string;    // 应用平台参数 1 值
    value2?: string;    // 应用平台参数 2 值
    value3?: string;    // 应用平台参数 3 值
}

export interface UpdateChannelParamConfResVO extends ResVO {
    data: 'updated';    // 更新成功
}

/**
 * GET，
 * <br/>获取全部项目组列表 /advertisement/productManager/productGroupList
 */
export interface ProductGroupListResVO extends ResVO {
    data: ProductGroupVO[];
}

/**
 * 获取项目组详情 /advertisement/productManager/productGroup
 */
export interface GetProductGroupReqVO {
    id: string;    // 项目组表主键 id
}

export interface GetProductGroupResVO extends ResVO {
    data: ProductGroupVO;
}

/**
 * 创建项目组 /advertisement/productManager/createProductGroup
 */
export interface CreateProductGroupReqVO {
    name: string;    // 项目组名
    description: string;    // 项目组描述
}

export interface CreateProductGroupResVO extends ResVO {
    data: 'created';
}

/**
 * 更新项目组 /advertisement/productManager/updateProductGroup
 */
export interface UpdateProductGroupReqVO {
    id: string;    // 项目组表 id
    description?: string;    // 项目组描述
    active?: number;    // 是否生效
}

export interface UpdateProductGroupResVO extends ResVO {
    data: 'updated';    // 更新成功
}

/**
 * 获取项目组下授权应用列表 /advertisement/productManager/productListInProductGroup
 */
export interface ProductListInProductGroupReqVO {
    id: string;    // 项目组表 id
}

export interface ProductListInProductGroupResVO extends ResVO {
    data: ProductVO[];    // 应用列表
}

/**
 * 项目组下创建应用 /advertisement/productManager/createProduct
 */
export interface CreateProductReqVO {
    id: string;    // 项目组表主键 id
    name: string;    // 应用名
    packageName: string;     // 包名
    platform: string;    // 平台名
    pid?: string;    // 苹果 id
}

export interface CreateProductResVO extends ResVO {
    data: 'created';
}

/**
 * *********************************************************************************************************************
 * 下发控制相关
 * *********************************************************************************************************************
 */

interface AdVO {
    id: string;    // 广告表主键 id
    name: string;    // 广告名称
    placementID: string;    // 广告唯一 ID
    ecpm: number;    // 分层控制
    loader: string;    // 加载器
    subloader: string;    // 子加载器
    interval: number;    // 间隔
    weight: number;    // 权重
    bidding: number;    // 实时竞价
    activeTime: string;    // 失效时间戳
    channel: string;    // 广告平台名称
    active: number;    // 是否生效
    adGroupName?: string;    // 广告组名称
    type?: string;    // 广告类型显示名称
}

interface NativeTmplConfVO {
    id: string;    // native 模板配置表主键 id
    clickArea: number;    // 点击区域
    isFull: number;    // 是否全屏点击
    weight: number;    // 权重
    key: string;    // 模板编号
    preview: string;    // 预览
    test: number;    // 是否测试 app 可见
    active: number;    // 是否生效
}

interface ConfigVO {
    id: string;    // 常量表主键 id
    key: string;    // 常量键
    dependent: string;    // 依赖的常量组名
    value: string;    // 值
    description: string;    // 描述
    active: number;    // 是否生效
}

/**
 * 获取应用所有版本条件分组信息 /advertisement/dispatchManager/versionGroupList
 */
export interface VersionGroupListReqVO {
    id: string;    // 应用表主键 id
    type: number;    // 0 广告 1 游戏常量 2 商店
}

export interface VersionGroupListResVO extends ResVO {
    data: Array<{
        id: string;    // 版本条件分组表主键 id
        name: string;    // 版本条件分组组名
        begin: number;    // 起始版本
        codeList: string[];    // 支持的国家代码列表
        include: number;    // 是否包含
        description: string;    // 描述
        active: number;    // 是否生效
    }>;
}

/**
 * GET
 * </br>获取国家代码定义列表 /advertisement/dispatchManager/nationList
 */
export interface NationDefineListResVO extends ResVO {
    data: Array<{
        name: string;    // 国家名称
        code: string;    // 国家代码
    }>;
}

/**
 * 创建版本条件分组 /advertisement/dispatchManager/createVersionGroup
 */
export interface CreateVersionGroupReqVO {
    id: string;    // 应用表主键 id
    name: string;    // 分组名
    begin: number;    // 起始版本
    type: number;    // 0 广告 1 游戏常量 2 商店
    description: string;    // 描述
    codeList: string[];    // 支持的国家代码列表
    include: number;    // 国家代码是否包含
}

export interface CreateVersionGroupResVO extends ResVO {
    data: 'created';
}

/**
 * 复制版本条件分组 /advertisement/dispatchManager/copyVersionGroup
 */
export interface CopyVersionGroupReqVO {
    id: string;    // 被复制的版本条件分组主键 id
    name: string;    // 分组名
    begin: number;    // 起始版本
    description: string;    // 描述
    codeList: string[];    // 支持的国家代码列表
    include: number;    // 国家代码是否包含
}

export interface CopyVersionGroupResVO extends ResVO {
    data: 'copyed';
}

/**
 * 向应用中更新版本条件分组 /advertisement/dispatchManager/updateVersionGroup
 */
export interface UpdateVersionGroupReqVO {
    id: string;    // 版本条件分组表主键 id
    codeList?: string[];    // 支持的国家代码列表, 有变动就传所有的 code
    include?: number;    // 国家代码是否包含
    begin?: number;    // 起始版本
    description?: string;    // 描述
    active?: number;    // 是否生效
}

export interface UpdateVersionGroupResVO extends ResVO {
    data: 'updated';    // 更新成功
}

/**
 * 获取 ab 分组列表 /advertisement/dispatchManager/abTestGroupList
 */
export interface AbTestGroupListReqVO {
    id: string;    // 版本条件分组表主键 id
}

export interface AbTestGroupListResVO extends ResVO {
    data: Array<{
        id: string;    // ab 分组表主键 id
        name: string;    // ab 组名
        description: string;    // 描述
        begin: number;    // 用户开始范围
        end: number;    // 用户结束范围
    }>;
}

/**
 * 获取 ab 分组下广告位配置 /advertisement/dispatchManager/placeGroupListInAb
 */
export interface PlaceGroupListInAbReqVO {
    id: string;    // ab 测试分组表主键 id
}

export interface PlaceGroupListInAbResVO extends ResVO {
    data: Array<{
        type: string;    // 广告类型显示名称
        place: string;    // 广告位
        adGroup?: {
            id: string;    // 广告组表主键 id
            name: string;    // 广告组名称
            type: string;    // 广告类型显示名称
            description: string;    // 描述
            versionGroup: string[];    // 支持的条件组
            active: number;    // 是否生效
            adList: AdVO[];    // 广告列表
        };
    }>;
}

/**
 * 获取 ab 分组下的常量组及常量组下常量列表配置 /advertisement/dispatchManager/configGroupInAb
 */
export interface ConfigGroupInAbReqVO {
    id: string;    // ab 测试分组表主键 id
}

export interface ConfigGroupInAbResVO extends ResVO {
    data: {
        id: string;    // 常量组表主键 id
        name: string;    // 常量组名称
        type: number;    // 0 广告 1 游戏常量
        versionGroup: string[];    // 支持的条件组
        dependent: string;    // 依赖的常量组名
        description: string;    // 描述
        active: number;    // 是否生效
        configList: ConfigVO[];    // 常量列表
    };
}

/**
 * 获取 ab 分组下的 native 模板组及包含的 native 模板列表 /advertisement/dispatchManager/nativeTmplConfGroupInAb
 */
export interface NativeTmplConfGroupInAbReqVO {
    id: string;    // ab 测试分组表主键 id
}

export interface NativeTmplConfGroupInAbResVO extends ResVO {
    data: {
        id: string;    // native 模板配置组表主键 id
        name: string;    // native 模板配置组表名称
        description: string;    // 描述
        nativeTmplConfList: NativeTmplConfVO[];    // native 模板列表
        active: number;    // 是否生效
    };
}

/**
 * 创建 ab 分组 /advertisement/dispatchManager/createAbTestGroup
 */
export interface CreateAbTestGroupReqVO {
    id: string;    // 版本条件分组表主键 id
    name: string;    // 创建的 ab 分组名
    description: string;    // 描述
    groupNum: number;    // 测试组数
    begin: number;    // 开始用户范围
    end: number;    // 结束用户范围
}

export interface CreateAbTestGroupResVO extends ResVO {
    data: 'created';
}

/**
 * 测试结束 /advertisement/dispatchManager/deleteABTestGroup
 */
export interface DeleteABTestGroupReqVO {
    id: string;    // 版本条件分组表主键 id
    name: string;    // 创建的 ab 分组名
}

export interface DeleteABTestGroupResVO extends ResVO {
    data: 'deleted';
}

/**
 * 向 ab 分组绑定常量组 /advertisement/dispatchManager/bindConfigGroup
 */
export interface BindConfigGroupReqVO {
    id: string;    // ab 分组表主键 id
    configGroupId: string;    // 常量组主键 id
}

export interface BindConfigGroupResVO extends ResVO {
    data: 'binded';    // 绑定成功
}

/**
 * 获取常量组列表 /advertisement/dispatchManager/configGroupList
 */
export interface ConfigGroupListReqVO {
    id: string;    // 应用表主键 id
    type: number;    // 0 广告 1 游戏常量
}

export interface ConfigGroupListResVO extends ResVO {
    data: Array<{
        id: string;    // 常量组表主键 id
        name: string;    // 常量组名称
        type: number;    // 0 广告 1 游戏常量
        versionGroup: string[];    // 支持的条件组
        dependent: string;    // 依赖的常量组名
        description: string;    // 描述
        active: number;    // 是否生效
    }>;
}

/**
 * 获取常量组下常量列表 /advertisement/dispatchManager/configList
 */
export interface ConfigListReqVO {
    id: string;    // 常量组主键 id
}

export interface ConfigListResVO extends ResVO {
    data: ConfigVO[];
}

/**
 * 创建常量组 /advertisement/dispatchManager/createConfigGroup
 */
export interface CreateConfigGroupReqVO {
    id: string;    // 应用表主键 id
    name: string;    // 常量组名称
    description: string;    // 常量组描述
    type: number;    // 0 广告 1 游戏常量
    dependentId?: string;    // 依赖的常量组主键
}

export interface CreateConfigGroupResVO extends ResVO {
    data: 'created';
}

/**
 * 复制常量组 /advertisement/dispatchManager/copyConfigGroup
 */
export interface CopyConfigGroupReqVO {
    name: string;    // 常量组名称
    description: string;    // 常量组描述
    id: string;    // 被复制的常量组主键 id
}

export interface CopyConfigGroupResVO extends ResVO {
    data: 'copyed';
}

/**
 * 更新常量组 /advertisement/dispatchManager/updateConfigGroup
 */
export interface UpdateConfigGroupReqVO {
    id: string;    // 常量组主键 id
    description?: string;    // 常量组描述
    dependentId?: string;    // 依赖的常量组主键 id
    active?: number;    // 是否生效
}

export interface UpdateConfigGroupResVO extends ResVO {
    data: 'updated';    // 更新成功
}

/**
 * 创建游戏常量 /advertisement/dispatchManager/createConfig
 */
export interface CreateConfigReqVO {
    id: string;    // 常量组主键 id
    key: string;    // 唯一名称 key
    value: string;    // 对应值 value
    description: string;    // 描述
}

export interface CreateConfigResVO extends ResVO {
    data: 'created';
}

/**
 * 更新广告常量 /advertisement/dispatchManager/updateAdConfig
 */
export interface UpdateAdConfigReqVO {
    id: string;    // 常量组主键 id
    key: string;    // 唯一名称 key
    value: string;    // 对应值 value
    description: string;    // 描述
}

export interface UpdateAdConfigResVO extends ResVO {
    data: 'updated';
}

/**
 * 更新游戏常量 /advertisement/dispatchManager/updateConfig
 */
export interface UpdateConfigReqVO {
    id: string;    // 常量主键 id
    value?: string;    // 对应值 value
    description?: string;    // 描述
    active?: number;    // 控制生效
}

export interface UpdateConfigResVO extends ResVO {
    data: 'updated';    // 更新成功
}

/**
 * 向 ab 分组绑定 native 组 /advertisement/dispatchManager/bindNativeTmplConfGroup
 */
export interface BindNativeTmplConfGroupReqVO {
    id: string;    // ab 分组表主键 id
    nativeTmplConfGroupId: string;    // native 模板配置组表主键 id
}

export interface BindNativeTmplConfGroupResVO extends ResVO {
    data: 'binded';    // 绑定成功
}

/**
 * 创建应用 native 模板配置组 /advertisement/dispatchManager/createNativeTmplConfGroup
 */
export interface CreateNativeTmplConfGroupReqVO {
    id: string;    // 应用表主键 id
    name: string;    // 应用 native 模板配置组名称
    description: string;    // 应用 native 模板配置组描述
}

export interface CreateNativeTmplConfGroupResVO extends ResVO {
    data: 'created';
}

/**
 * 复制应用 native 模板配置组 /advertisement/dispatchManager/copyNativeTmplConfGroup
 */
export interface CopyNativeTmplConfGroupReqVO {
    id: string;    // 被复制的常量组主键 id
    name: string;    // 应用 native 模板配置组名称
    description: string;    // 应用 native 模板配置组描述
}

export interface CopyNativeTmplConfGroupResVO extends ResVO {
    data: 'copyed';
}

/**
 * 更新应用 native 模板组 /advertisement/dispatchManager/updateNativeTmplConfGroup
 */
export interface UpdateNativeTmplConfGroupReqVO {
    id: string;    // 应用 native 模板组配置表主键 id
    name?: string;    // 应用 native 模板配置组名称
    description?: string;    // 应用 native 模板配置组描述
    active?: number;    // 控制生效
}

export interface UpdateNativeTmplConfGroupResVO extends ResVO {
    data: 'updated';    // 更新成功
}

/**
 * 创建应用 native 模板配置 /advertisement/dispatchManager/createNativeTmplConf
 */
export interface CreateNativeTmplConfReqVO {
    id: string;    // 应用 native 模板配置组表主键 id
    nativeTmplId: string;    // native 模板表主键
    weight: number;    // 权重
    clickArea: number;    // 点击区域配置
    isFull: number;    // 是否支持全屏点击
}

export interface CreateNativeTmplConfResVO extends ResVO {
    data: 'created';
}

/**
 * 更新应用 native 模板 /advertisement/dispatchManager/updateNativeTmplConf
 */
export interface UpdateNativeTmplConfReqVO {
    id: string;    // 应用 native 模板配置表主键 id
    weight?: number;    // 权重
    clickArea?: number;    // 点击区域配置
    isFull?: boolean;    // 是否支持全屏点击
    active?: number;    // 控制生效
}

export interface UpdateNativeTmplConfResVO extends ResVO {
    data: 'updated';    // 更新成功
}

/**
 * 获取应用 native 模板组列表 /advertisement/dispatchManager/nativeTmplConfGroupList
 */
export interface NativeTmplConfGroupListReqVO {
    id: string;    // 应用表主键 id
}

export interface NativeTmplConfGroupListResVO extends ResVO {
    data: Array<{
        id: string;    // native 模板配置组表主键 id
        name: string;    // native 模板配置组表名称
        versionGroup: string[];    // 支持的条件组
        description: string;    // 描述
        active: number;    // 是否生效
    }>;
}

/**
 * 获取应用 native 模板组下模板列表 /advertisement/dispatchManager/nativeTmplConfList
 */
export interface NativeTmplConfListReqVO {
    id: string;    // 应用 native 模板组表主键 id
}

export interface NativeTmplConfListResVO extends ResVO {
    data: {
        nativeTmplConfList: NativeTmplConfVO[];    // 应用 native 模板列表
    };
}

/**
 * 向 ab 分组创建广告位(绑定广告组) /advertisement/dispatchManager/bindAdGroup
 */
export interface BindAdGroupReqVO {
    id: string;    // ab 分组表主键 id
    place: string;    // 广告位
    active: number;    // 是否生效
    adGroupId?: string;    // 广告组表主键 id
}

export interface BindAdGroupResVO extends ResVO {
    data: 'binded';
}

/**
 * 全量 ab 分组下广告位到默认组 /advertisement/dispatchManager/completePlace
 */
export interface CompletePlaceReqVO {
    id: string;    // ab 分组表主键 id
    place: string;    // 广告位
}

export interface CompletePlaceResVO extends ResVO {
    data: 'completed';    // 全量成功
}

/**
 * 获取广告组列表 /advertisement/dispatchManager/adGroupList
 */
export interface AdGroupListReqVO {
    id: string;    // 应用表主键 id
}

export interface AdGroupListResVO extends ResVO {
    data: Array<{
        id: string;    // 广告组表主键 id
        name: string;    // 广告组名称
        type: string;    // 广告类型显示名称
        place: string;    // 广告位
        description: string;    // 描述
        versionGroup: string[];    // 支持的条件组
        active: number;    // 是否生效
    }>;
}

/**
 * 创建广告组 /advertisement/dispatchManager/createAdGroup
 */
export interface CreateAdGroupReqVO {
    id: string;    // 应用表主键 id
    name: string;    // 广告组名称
    adTypeId: string;    // 广告类型表主键 id
    description: string;     // 描述
}

export interface CreateAdGroupResVO extends ResVO {
    data: 'created';
}

/**
 * 复制广告组 /advertisement/dispatchManager/copyAdGroup
 */
export interface CopyAdGroupReqVO {
    id: string;    // 被复制的广告组表主键 id
    name: string;    // 广告组名称
    description: string;     // 描述
}

export interface CopyAdGroupResVO extends ResVO {
    data: 'copyed';
}

/**
 * 更新广告组 /advertisement/dispatchManager/updateAdGroup
 */
export interface UpdateAdGroupReqVO {
    id: string;    // 广告组主键 id
    description?: string;     // 描述
    active?: number;    // 是否生效
}

export interface UpdateAdGroupResVO extends ResVO {
    data: 'updated';    // 更新成功
}

/**
 * GET，
 * </br>获取广告列表 /advertisement/dispatchManager/adList
 */
export interface AdListReqVO {
    id: string;    // 应用表主键 id
}

export interface AdListResVO extends ResVO {
    data: AdVO[];    // 广告列表
}

/**
 * 获取广告组下广告列表 /advertisement/dispatchManager/adListInAdGroup
 */
export interface AdListInAdGroupReqVO {
    id: string;    // 广告组 id
}

export interface AdListInAdGroupResVO extends ResVO {
    data: AdVO[];    // 广告列表
}

/**
 * 创建广告 /advertisement/dispatchManager/createAd
 */
export interface CreateAdReqVO {
    id: string;    // 广告组 id
    adChannelId: string;    // 广告平台主键 id
    name: string;    // 广告名称
    placementID: string;    // 广告唯一 ID
    ecpm: number;    // 分层控制
    bidding: number;    // 实时竞价
}

export interface CreateAdResVO extends ResVO {
    data: 'created';
}

/**
 * 更新广告 /advertisement/dispatchManager/updateAd
 */
export interface UpdateAdReqVO {
    id: string;    // 广告表主键 id
    name?: string;    // 广告名称
    ecpm?: number;    // 分层控制
    loader?: string;    // 加载器
    subloader?: string;    // 子加载器
    interval?: number;    // 间隔
    weight?: string;    // 权重
    bidding?: number;    // 实时竞价
    active?: number;    // 是否生效
}

export interface UpdateAdResVO extends ResVO {
    data: 'updated';    // 更新成功
}

/**
 * *********************************************************************************************************************
 * 用户和权限相关
 * *********************************************************************************************************************
 */

interface UserVO {
    id: string;    // 用户 id
    name: string;    // 用户名
    email: string;    // 邮箱
    active: number;    // 控制生效
    userAuth?: UserAuthVO;    // 用户权限
    productGroupAuth?: ProductGroupAuthVO;    // 用户在项目组权限
    productAuth?: ProductAuthVO;    // 用户在应用下权限
}

interface UserAuthVO {
    editComConf: number;    // 编辑常规配置权限
    viewComConf: number;    // 查看常规配置权限
    createProductGroup: number;    // 创建项目组权限
    master: number;    // 是否管理员
}
interface ProductGroupAuthVO {
    editAd: number;    // 编辑广告
    viewAd: number;    // 查看广告
    editGameConfig: number;    // 编辑游戏常量
    viewGameConfig: number;    // 查看游戏常量
    editPurchase: number;    // 编辑内购配置
    viewPurchase: number;    // 查看内购配置
    editProduct: number; // 编辑应用
    createProduct: number; // 创建应用
    master: number;    // 项目组管理员
}

interface ProductAuthVO {
    editAd: number;    // 编辑广告
    viewAd: number;    // 查看广告
    editGameConfig: number;    // 编辑游戏常量
    viewGameConfig: number;    // 查看游戏常量
    editPurchase: number;    // 编辑内购配置
    viewPurchase: number;    // 查看内购配置
    editProduct: number; // 编辑应用
    master: number;    // 应用管理员
}

/**
 * 登录 /advertisement/userManager/login
 */
export interface LoginReqVO {
    email: string;    // 邮箱
    password: string;    // 用户密码
    // verifiCode: string;    // 登录验证码
}

export interface LoginResVO extends ResVO {
    data: UserVO;
}

/**
 * 创建用户 /advertisement/userManager/createUser
 */
export interface CreateUserReqVO {
    name: string;    // 用户名称
    email: string;    // 邮箱
    userAuth: UserAuthVO;    // 用户权限
}

export interface CreateUserResVO extends ResVO {
    data: 'created';    // 创建成功
}

/**
 * 更新用户密码 /advertisement/userManager/updateUser
 */
export interface UpdateUserReqVO {
    id: string;    // 用户表 id
    password: string;    // 密码
}

export interface UpdateUserResVO extends ResVO {
    data: 'updated';    // 更新成功
}

/**
 * 禁用或者解禁用户信息 /advertisement/userManager/disableUser
 */
export interface DisableUserReqVO {
    id: string;    // 用户表 id
    active: number;    // 控制生效
}

export interface DisableUserResVO extends ResVO {
    data: 'disabled' | 'enable';    // 禁用或者解禁成功
}

/**
 * </br>重置密码 /advertisement/userManager/resetPassword
 */
export interface ResetPasswordReqVO {
    id: string;    // 用户表 id
}

export interface ResetPasswordResVO extends ResVO {
    data: 'reseted';    // 重置成功
}

/**
 * GET
 * </br>获取用户列表 /advertisement/userManager/userList
 */
export interface UserListResVO extends ResVO {
    data: UserVO[];    // 用户信息列表
}

/**
 * 获取用户权限 /advertisement/userManager/userAuth
 */
export interface UserAuthReqVO {
    id: string;    // 用户表 id
}

export interface UserAuthResVO extends ResVO {
    data: UserAuthVO;    // 用户权限
}

/**
 * 获取用户在项目组下权限 /advertisement/userManager/userAuthInProductGroup
 */
export interface UserAuthInProductGroupReqVO {
    id: string;    // 项目组表主键 id
}

export interface UserAuthInProductGroupResVO extends ResVO {
    data: UserVO;    // 用户权限
}

/**
 * 获取用户在应用下权限 /advertisement/userManager/userAuthInProduct
 */
export interface UserAuthInProductReqVO {
    id: string;    // 应用表主键 id
}

export interface UserAuthInProductResVO extends ResVO {
    data: UserVO;    // 用户权限
}

/**
 * 更新用户权限 /advertisement/userManager/updateUserAuth
 */
export interface UpdateUserAuthReqVO {
    id: string;    // 用户表 id
    editComConf?: number;    // 编辑常规配置权限
    viewComConf?: number;    // 查看常规配置权限
    createProductGroup?: number;    // 创建项目组权限
    master?: number;    // 是否管理员
}

export interface UpdateUserAuthResVO extends ResVO {
    data: 'updated';    // 更新成功
}

/**
 * </br>获取项目组下用户列表 /advertisement/userManager/userListInProductGroup
 */
export interface UserListInProductGroupReqVO {
    id: string;    // 项目组主键 id
}

export interface UserListInProductGroupResVO extends ResVO {
    data: UserVO[];    // 用户信息列表
}

/**
 * </br>获取应用下用户列表 /advertisement/userManager/userListInProduct
 */
export interface UserListInProductReqVO {
    id: string;    // 应用主键 id
}

export interface UserListInProductResVO extends ResVO {
    data: UserVO[];    // 用户信息列表
}

/**
 * 项目组创建成员 /advertisement/userManager/createUserToProductGroup
 */
export interface CreateUserToProductGroupReqVO {
    id: string;    // 项目组表主键 id
    userId: string;    // 用户表 id
    editAd?: number;    // 编辑广告权限
    viewAd?: number;    // 查看广告权限
    editGameConfig?: number;    // 编辑游戏常量权限
    viewGameConfig?: number;    // 查看游戏常量权限
    editPurchase?: number;    // 编辑内购配置
    viewPurchase?: number;    // 查看内购配置
    createProduct?: number;    // 创建应用权限
    editProduct?: number;    // 编辑应用权限
    master?: number;    // 是否项目组管理员
}

export interface CreateUserToProductGroupResVO extends ResVO {
    data: {
        data: 'created';    // 项目组创建成员成功
    };
}

/**
 * 应用创建成员 /advertisement/userManager/createUserToProduct
 */
export interface CreateUserToProductReqVO {
    id: string;    // 应用表主键 id
    userId: string;    // 用户表 id
    editAd?: number;    // 编辑广告权限
    viewAd?: number;    // 查看广告权限
    editGameConfig?: number;    // 编辑游戏常量权限
    viewGameConfig?: number;    // 查看游戏常量权限
    editPurchase?: number;    // 编辑内购配置
    viewPurchase?: number;    // 查看内购配置
    editProduct?: number;    // 编辑应用权限
    master?: number;    // 应用管理员
}

export interface CreateUserToProductResVO extends ResVO {
    data: {
        data: 'created';    // 应用创建成员成功
    };
}

/**
 * 更新项目组成员权限 /advertisement/userManager/updateUserAuthInProductGroup
 */
export interface UpdateUserAuthInProductGroupReqVO {
    id: string;    // 项目组表主键 id
    userId: string;    // 用户表 id
    editAd?: number;    // 编辑广告权限
    viewAd?: number;    // 查看广告权限
    editGameConfig?: number;    // 编辑游戏常量权限
    viewGameConfig?: number;    // 查看游戏常量权限
    editPurchase?: number;    // 编辑内购配置
    viewPurchase?: number;    // 查看内购配置
    createProduct?: number;    // 创建应用权限
    editProduct?: number;    // 编辑应用权限
    master?: number;    // 是否项目组管理员
}

export interface UpdateUserAuthInProductGroupResVO extends ResVO {
    data: 'updated';    // 更新项目组成员权限成功
}

/**
 * 更新应用成员权限 /advertisement/userManager/updateUserAuthInProduct
 */
export interface UpdateUserAuthInProductReqVO {
    id: string;    // 应用表主键 id
    userId: string;    // 用户表 id
    editAd?: number;    // 编辑广告权限
    viewAd?: number;    // 查看广告权限
    editGameConfig?: number;    // 编辑游戏常量权限
    viewGameConfig?: number;    // 查看游戏常量权限
    editPurchase?: number;    // 编辑内购配置
    viewPurchase?: number;    // 查看内购配置
    editProduct?: number;    // 编辑应用权限
    master?: number;    // 应用管理员
}

export interface UpdateUserAuthInProductResVO extends ResVO {
    data: 'updated';    // 更新应用成员权限成功
}

/**
 * 删除项目组下成员 /advertisement/userManager/deleteUserFromProductGroup
 */
export interface DeleteUserFromProductGroupReqVO {
    id: string;    // 项目组表主键 id
    userId: string;    // 用户表 id
}

export interface DeleteUserFromProductGroupResVO extends ResVO {
    data: 'deleted';    // 删除成功
}

/**
 * 删除应用下成员 /advertisement/userManager/deleteUserFromProduct
 */
export interface DeleteUserFromProductReqVO {
    id: string;    // 应用表主键 id
    userId: string;    // 用户表 id
}

export interface DeleteUserFromProductResVO extends ResVO {
    data: 'deleted';    // 删除成功
}

/**
 * *********************************************************************************************************************
 * 发布相关
 * *********************************************************************************************************************
 */

/**
 * GET
 * </br>发布用户操作 /advertisement/deployManager/deploy
 */
export interface DeployResVO extends ResVO {
    data: 'deployed';    // 发布成功！！！
}

/**
 * GET
 * </br>删除用户操作 /advertisement/deployManager/rollBack
 */
export interface RollBackResVO extends ResVO {
    data: 'rollbacked';    // 回滚成功！！！
}

/**
 * GET
 * </br>获取用户发布状态 /advertisement/deployManager/deployStatus
 */
export interface DeployStatusResVO extends ResVO {
    data: {
        deployStatus: number    // 返回发布状态
    };
}