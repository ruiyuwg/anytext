An access point is a physical location where Alibaba Cloud provides Express Connect services. Each access point is equipped with redundant access devices, allowing you to connect your on-premises data center to the Alibaba Cloud network over a physical connection.

## **Choose an access point**

### **Key considerations**

When choosing an access point, consider the distance, ISP, port specifications, and access point type.

**Factors**

**Description**

**Distance**

Choose the access point that is geographically closest to your on-premises data center to minimize latency.

The available ISPs and bandwidth capabilities differ across access points in different Regions.

**ISP**

Choose an ISP that operates in your area. Supported ISPs include China Unicom, China Telecom, China Mobile, and some local ISPs.

> Connections from China Unicom, China Telecom, and China Mobile must use their respective proprietary circuits. Connections from other ISPs or through dark fiber are not supported.

**Port requirements**

You must use an optical port. The supported port types are **100 Gbit/s single-mode optical port**, **10 Gbit/s single-mode optical port**, **40 Gbit/s single-mode optical port**, and **1 Gbit/s single-mode optical port**.

-   Alibaba Cloud port requirements:
    
    -   By default, Alibaba Cloud provides single-mode optical transceivers with a transmission distance of 10 km for port speeds of 1 Gbps, 10 Gbps, 40 Gbps, and 100 Gbps.
        
    -   Only **dual-fiber** connections are supported.
        
-   Customer port requirements: You must purchase your own optical transceivers. You must also ensure that their specifications match those on the Alibaba Cloud side.
    

**Access point type**

Alibaba Cloud provides 2 types of access points, with the following key differences:

-   [Alibaba Cloud access point](#title-qz4-9ni-1qz): A proprietary access point that uses a dedicated Express Connect circuit. Setup takes 1 to 3 months and supports speeds up to 100 Gbps.
    
-   [Partner access point](#7f3bc57e963vx): Some compliant ISPs have pre-established connections to Alibaba Cloud access points. You can connect to the cloud through these ISP networks. Compared to Alibaba Cloud access points, this option offers broader geographic coverage and shorter setup times, typically within one month. The connection between the partner and Alibaba Cloud is multi-tenant.
    

For more details about the differences, see [Solution comparison](/help/en/express-connect/product-overview/functions-and-features#section-hwq-hft-ggb).

### Get access point locations

You can query detailed location information only for a dedicated Express Connect circuit free of charge. For a hosted Express Connect circuit, contact the partner.

-   **Method** **1**: After your [LOA Application](/help/en/express-connect/user-guide/classic-mode#section-lzc-lxr-wqi) is approved, you can find the detailed location information in the downloaded LOA file.
    
-   **Method** **2**: In [Quota Center](https://quotas.console.alibabacloud.com/products/expressconnect/quotas?query=ec_can_get_pconn_address), request the `ec_can_get_pconn_address` quota. After your request is approved, you can find the access point in the console:
    
    > If you cannot find this quota, contact your account manager.
    
    -   **To get the access point location**: In the **Access Point** column of the target Express Connect circuit, hover over the ![叹号](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2330417861/p569360.png) icon.
        
    -   **To get the access device location**: Click the Express Connect circuit ID. On the details page, find the **Access Device Location**.
        

## Alibaba Cloud access points

**Note**

-   This list of access points is for reference only and is subject to change without notice. Changes may be caused by events such as device maintenance, the addition of new access points, or the decommissioning of existing ones.
    
-   The Internet Data Center (IDC) provider for these access points may charge additional fees. Consult the provider for details during the site survey.
    

### Chinese Mainland

**Region**

**access point**

**Provider**

**Landmark**

**Third-party fee**

China (Qingdao)

Qingdao-Laoshan-A

China Unicom

Qingdao International Golf Club

No

Qingdao-Licang-A

China Radio & Television

Qingdao Hengxing University of Science and Technology

Yes

China (Beijing)

Beijing-Daxing-A

China Telecom (Building A)

GDS (Building B)

Beijing Economic-Technological Development Area Real Estate Registration Center

Yes

Beijing-Daxing-E

China Unicom

China Railway Jinsheng Logistics Building

Yes

Beijing-Changping-A

China Telecom

Beijing Future Science City Waterfront Park, Changping District

No

Beijing-Langfang-A

GDS

Longhe Central Park

No

Beijing-Langfang-C

GDS

Langfang Yulonghe Park

Yes

Beijing-Haidian-A-Chengyun

ChengVPS

Fengying Park

Yes

Beijing-Yizhuang-A

VNET Group

Beijing Etrong International Exhibition & Convention Center

Yes

Beijing-Yizhuang-C

China Mobile

Beijing Yizhuang Xiaomi Industrial Park

Yes

Beijing-Shunyi-A

China Telecom

Beijing Pearl River Piano Manufacturing Co., Ltd.

No

Beijing-Shunyi-B

China Mobile

Hualikan Metro Station

No

Beijing-Chaoyang-B

VNET Group

Lilac Garden

Yes

Beijing-Chaoyang-C

VNET Group

Hengtong International Business Park

Yes

Beijing-Chaoyang-D

Sinnet

E-Town IT Industrial Park, 10A Jiuxianqiao North Road, Chaoyang District

Yes

Beijing-Fengtai-A

CNIX

Law Enforcement and Case Management Center, Fengtai Branch of Beijing Public Security Bureau

Yes

Baoding-Zhuozhou-A

Alibaba

Junhe Cloud Valley Zhuozhou International Information Port

No

China (Zhangjiakou)

Zhangjiakou-Miaotan-A

Alibaba

Zhangbei County People's Government

No

Zhangjiakou-Zhangbei-A

Data Port

Mantouying Township People's Government

No

Zhangjiakou-Xiaoertai-A

Alibaba

Xiaoertai Town Government

No

Zhangjiakou-Zhangbei-B

Alibaba

Zhangbei Ailang Wind Power

No

China (Hohhot)

Inner Mongolia-Hohhot-A

China Telecom

EGO International E-commerce Industrial Park

No

Hohhot-Xincheng-A

China Unicom

Hohhot Housing Security and Management Bureau

No

Hohhot-Helingeer-A

China Telecom

China Telecom Cloud Computing

No

China (Ulanqab)

Ulanqab-Kaifaqu-A

Alibaba

Ulanqab Transportation Technical School

No

Ulanqab-Jining-A

GDS

Jining District Branch, Ulanqab Municipal Ecology and Environment Bureau

No

Ulanqab-Qianqi-A

Alibaba

Qahar Right Front Banner Government Service Center

No

China (Tianjin)

Tianjin-Jinnan-A

Yihualu

Tianjin Balitai Industrial Park

No

China (Jinan)

Jinan-Gaoxin-A

China Telecom

Kingold Century

No

China (Shijiazhuang)

Shijiazhuang-Zhengding-A

China Mobile

Dongyangzhuang Village Committee

Yes

China (Dalian)

Dalian-Pulandian-A

China Mobile

Tiexi Squadron, Dalian Fire Rescue Detachment

No

China (Hangzhou)

Hangzhou-Yuhang-B

Data Port

Renhe Middle School

No

Hangzhou-Yuhang-C

Huaton Cloud

Zhejiang Meinong Century Packaging Technology Co., Ltd.

No

Hangzhou-Xiaoshan-A

China Unicom

Zhejiang College of Construction

No

Hangzhou-Xiaoshan-B

China Telecom

Hangzhou Xiaoshan Baolong Plaza

No

Hangzhou-Xiaoshan-D

China Mobile

Yangtze River Delta International Jewelry Industrial Park

No

Hangzhou-Jianggan-B

VNET Group

Wahaha Group Co., Ltd. (Xiasha Base)

Yes

Hangzhou-Fuyang-A

China Telecom

Changkou Highway Service Station, Fuyang District

No

Hangzhou-Deqing-A

China Unicom

Deqing County Government

No

Hangzhou-Gongshu-A

Zhejiang Cloud Computing Data Center

366 Banshan Road, Gongshu District

No

China (Shanghai)

Shanghai-Baoshan-A

China Telecom

Luojing Town People's Government, Baoshan District

No

Shanghai-Baoshan-B

China Unicom

Wusong Science and Technology Park

No

Shanghai-Baoshan-C

VNET Group

Shanghai Baoshan International Folk Art Museum

Yes

Shanghai-Baoshan-D

China Mobile

Shanghai Customs 6th Supervision Zone

No

Shanghai-Baoshan-E

GDS

Fengxiang New Town

Yes

Shanghai-Pudong-A

China Mobile

Shanghai Pudong Jinhai Wetland Park

No

Shanghai-Pudong-B

China Telecom

Shanghai Pudong Senlan Sports Park

No

Shanghai-Pudong-C

GDS

Waigaoqiao Free Trade Zone South Station, Metro Line 6

Yes

Shanghai-Pudong-D

China Unicom

Shanghai Pudong Gaodong Ecological Park

No

Shanghai-Pudong-E

VNET Group

National Base for International Cultural Trade

Yes

Shanghai-Jiading-B

China Telecom

Gushu Park

No

Shanghai-Fengxian-A

China Telecom

Fengpu Four Seasons Ecological Park

No

Taicang-Huangjing-A

VNET Group

Taicang Yilin Hospital

No

Changshu-Bixi-A

GDS

GLP Changshu Pujiang Logistics Park

Yes

Shanghai-Minhang-A

GDS

Inventec Pujiang Park

Yes

China (Shenzhen)

Shenzhen-Yantian-A

China Unicom

Jiarun Building, Longgang District

No

Shenzhen-Nanshan-A

VNET Group

Nanshan District People's Hospital

Yes

Shenzhen-Longgang-A

China Mobile

Yanziling Park, Pingshan District

No

Shenzhen-Baoan-A

China Telecom

Huazhang Future City Cloud Center

No

Shenzhen-Baoan-B

Yovole

Renda Science and Technology Park, Bao'an District

Yes

Shenzhen-Longhua-A

China Telecom

Jinxiu Science Park, Longhua New District

Yes

Shenzhen-Futian-A

GDS

Shenzhen Maternity & Child Healthcare Hospital (Fuqiang Campus)

Yes

Dongguan-Xiegang-A

GLP

Dongguan Yuehai Industrial Park

No

China (Heyuan)

Heyuan-Gaoxin-A

Alibaba

Duntou Primary School

No

Heyuan-Yuancheng-A

Alibaba

Heyuan Haohe Environmental Governance Research Institute

No

China (Guangzhou)

Guangzhou-Kaifaqu-A

China Unicom

Dazhuang International Plaza

No

Guangzhou-Huangpuqu-B

GDS

Yushu Park

Yes

Guangzhou-Huangpuqu-C

Aofei

South China New Materials Innovation Park

Yes

Guangzhou-Zengcheng-A

Hotwon Network

Nanxianggu Industrial Park

No

China (Wuhan)

Wuhan-Donghu-A

Mye

Wuhan Supercomputing Cloud Center

Yes

China (Xi'an)

Xi'an-Xixian-A

China Telecom

Xixian Deshang International Hospital

No

China (Zhongwei)

Zhongwei-Shapotou-A

China Mobile

Zhongwei Science and Technology Museum

No

Zhongwei-Shapotou-B

China Mobile

Goat Selection and Breeding Farm

No

China (Zhengzhou)

Zhengzhou-Gaoxin-A

China Telecom

Henan E-commerce Industrial Park, Dongqing Street, High-tech Zone

Yes

China (Chengdu)

Chengdu-Shuangliu-A

China Mobile

Certificate Processing Center (Xihanggang Sub-center), Shuangliu District Public Security Bureau

No

Chengdu-Shuangliu-B

China Unicom

Tianfu IDC, Shuanghuang Road, Shuangliu District

No

Chengdu-Gaoxin-B

China Telecom

Xiyuan Pocket Park

No

Chengdu-Jianzhou-A

Alibaba

SVOLT Energy Technology

No

China (Hong Kong)

Hong Kong-Kwai Chung-A

Equinix

Shun Hing Centre

Yes

Hong Kong-Kwai Chung-F

GDS

2-16 Lam Tin Street, Kwai Chung

Yes

Hong Kong-Chai Wan-B

HKCOLO

Sun Fung Centre

Yes

Hong Kong-Chai Wan-G

Mega-I

Chai Wan Road

Yes

Hong Kong-Tseung Kwan O-E

Global Switch

Pat Chun Building

Yes

Hong Kong-Fanling-C

PCCW & iAdvantage

One Midtown

Yes

### Outside Chinese Mainland

**Area**

**Region**

**access point**

**Provider**

**Third-party fee**

Asia Pacific

Singapore

Singapore-A

Equinix

Yes

Singapore-B

Global Switch

Yes

Singapore-D

Kingsland

Yes

Singapore-E

STT

Yes

Singapore-F

1 Net

Yes

Malaysia (Kuala Lumpur)

Malaysia-Kuala Lumpur-A

NTT

Yes

Malaysia-Kuala Lumpur-B

AIMS

Yes

Malaysia-Kuala Lumpur-C

NTT

Yes

Malaysia-Kuala Lumpur-D

NTT

Yes

Indonesia (Jakarta)

Indonesia-Jakarta-A

DCI

Yes

Indonesia-Jakarta-B

NTT

Yes

Indonesia-Jakarta-C

Alibaba

Yes

Japan (Tokyo)

Japan-Tokyo-A

Equinix

Yes

Japan-Tokyo-B

BBT

Yes

Japan-Tokyo-C

NEC

Yes

Japan-Tokyo-E

AT TOKYO

Yes

Japan-Tokyo-F

STT

Yes

South Korea (Seoul)

South Korea-Seoul-A

SKBB

Yes

South Korea-Seoul-B

LG

Yes

South Korea-Seoul-C

Digital Realty

Yes

Philippines (Manila)

Philippines-Manila-A

PLDT

Yes

Philippines-Manila-B

STT

Yes

Thailand (Bangkok)

Thailand-Bangkok-A

True

Yes

Thailand-Bangkok-B

STT

Yes

Vietnam (Ho Chi Minh City)

Vietnam-Ho Chi Minh City-A

Viettel

Yes

Europe and Americas

US (Silicon Valley)

US-San Jose-A

Equinix

Yes

US-Santa Clara-B

Coresite

No

US (Virginia)

US-Ashburn-A

Equinix

Yes

US-Ashburn-B

Digital Realty

Yes

US-Virginia-C

Cyrusone

Yes

US-Virginia-D

Coresite

Yes

US (Atlanta)

US-Atlanta-A

Edged

Yes

US-Atlanta-B

Serverfarm

Yes

Germany (Frankfurt)

Germany-Frankfurt-A

NTT, Global Switch

Yes

Germany-Frankfurt-B

Equinix

Yes

Germany-Frankfurt-C

Digital Realty

Yes

Germany-Frankfurt-D

NTT

Yes

UK (London)

UK-London-A

Digital Realty

Yes

UK-London-B

ARK

Yes

UK-London-C

Telehouse

Yes

UK-London-D

Equinix

Yes

Mexico

Mexico-Queretaro-A

KIO

Yes

Middle East

UAE (Dubai)

UAE-Dubai-A

Equinix

Yes

UAE-Dubai-B

Khazna

Yes

UAE-Dubai-C

Equinix

Yes

UAE-Dubai-E

Equinix

Yes

## **Partner access point**

Supported partners: Shanghai Exchange Center, Zhejiang Exchange Center, PCCW, Megaport, Zenlayer, and CTG.

### **Chinese Mainland**

-   For inquiries about the Zhejiang Exchange Center access point, contact Service Manager Cheng at 15857119566 or chenghl@ix.cn.
    

**City**

**Partner**

**Access point**

Beijing

PCCW

DCC-PEKC05

GDS-BJ1

CNIX-Beijing; CNIX-PEKC08

CIDS-PEKC01/PEKC03

Centrin-PEKC07

Topnew Beijing Tongniu

Tnetstar Beijing Guomao

CITIC Capital Building Beijing

Youchi Beijing

Zenlayer

CN-Beijing11 (Beijing Haokuan)

CN-Beijing13 (Beijing Haokuan)

CN-Beijing2 (Beijing Yizhuang DC)

CN-Beijing6 (Beijing Rishang DC)

CN-Beijing9 (Beijing CICC)

Shanghai

PCCW

GDS-SH1

Equinix SH5; Equinix SH6/SH2

ATHUB-SHAC05

YUNZX-SHAC03

PBS - Shanghai - POP

SDS Shuxun IDX SH2/SH3

VNET Group Shanghai Century Interconnection

Zenlayer

CN-Shanghai11 (Shanghai Xinye)

CN-Shanghai12 (Yunlifang)

CN-Shanghai13 (Zhihuiwan)

CN-Shanghai14 (Shanghai Shuxun)

CN-Shanghai17 (UCloud Shanghai DC)

CN-Shanghai18 (Shanghai Haokuan\_SH1)

CN-Shanghai2 (Baoshan Jiyun Rd DC)

CN-Shanghai5 (Equinix SH5)

CN-Shanghai6 (Shanghai GDS)

CN-Shanghai7 (Jiyao Xietu Rd DC)

Shanghai Exchange Center

508 South Zhongshan Road, Huangpu District

1512 Lizheng Road, Lingang New Area, Pudong New Area

500 Chuanji Road, Baoshan District

6 Huajing Road, Waigaoqiao, Pudong New Area

699 Puxing Road, Pujiang Town, Minhang District

X463, Qingpu District

349 Shuhai Road, Songjiang District

588 Jiyun Road, Baoshan District

387 West Jiangchang Road

1268 Wanrong Road

999 Ningqiao Road, Pudong New Area

2567 Xietu Road, Xuhui District

888 Yishan Road, Xuhui District

421 Hongcao Road, Xuhui District

999 Lianggang Avenue, Pudong New Area

Innovation Park Phase II, Lane 88, Haiyang 2nd Road, Pudong New Area

898 Xinling Road, Pudong New Area

368 Qinqiao Road, Pudong New Area

999 Jiangyue Road, Minhang District

Guangzhou

PCCW

GDS-GZ1

PBS - Guangzhou - POP2/POP1

New Generation Guangzhou

CNIX Haokuan Guangzhou

Youchi Silver Swallow Guangzhou

Zenlayer

CN-Guangzhou5 (Guangzhou Huaxin Park)

CN-Guangzhou6 (Guangzhou GZL)

CN-Guangzhou8 (Nanxiang Cloud DC)

Shenzhen

PCCW

Youchi Shenzhen Honggang

GDS-SZ3

NSCC-SZXC01

HUMENG-SZXC02

PBS - Shenzhen - POP2/POP1

Zenlayer

CN-Shenzhen1 (Shenzhen 3 Hongliu Road)

CN-Shenzhen2 (Humeng Tech)

Zhengzhou

PCCW

PBS - Zhengzhou - POP

Jinan

PCCW

PBS - Jinan - POP2

Citics - Jinan - POP1

Zenlayer

CN-Jinan4 (CITIC POP)

Xi'an

PCCW

PBS - Xi'an - POP2

Zenlayer

CN-Xian5 (Tefa Xigang)

Chengdu

Zenlayer

CN-Chengdu4 (Chengdu Zhongli Data)

Chongqing

PCCW

PBS - Chongqing - POP1

Wuhan

PCCW

PBS - Wuhan - POP

Zenlayer

CN-Wuhan2 (VNET Group Optics Valley DC)

Hefei

PCCW

Citics - Hefei - POP

Nanjing

PCCW

PBS - Nanjing - POP

Suzhou

PCCW

SISDC-POP

Zenlayer

CN-Suzhou2 (Xinghu Street Creative Industry Park)

Wuxi

PCCW

PBS - Wuxi - POP2

IBM - Wuxi - POP1

Changsha

PCCW

PBS - Changsha - POP

Hangzhou

PCCW

NetBank - Hangzhou - POP1

PBS - Hangzhou - POP1

Zenlayer

CN-Hangzhou2 (Hangzhou 2)

Zhejiang Exchange Center

China Mobile Xiaoshan Industrial Park

Hangzhou Hanggang

China Telecom Yiqiao

China Unicom Binjiang

Wasu Cloud Sandun

China Mobile Sandun

China Mobile Hangzhou Research Institute

Xiaoshan Information Port

China Telecom Xingyi

China Mobile Shiqiao

Jinhua

Zhejiang Exchange Center

China Mobile Jinhua (Zhezhong)

China Mobile Jinhua (Zhenghe Road)

Jiaxing

Zhejiang Exchange Center

Jiaxing South Lake Cinda

China Mobile Jiaxing (South Lake)

Taizhou

Zhejiang Exchange Center

China Mobile Taizhou (Center Avenue)

China Mobile Taizhou (Waisha)

Shaoxing

Zhejiang Exchange Center

China Mobile Shaoxing (Chengdong)

China Mobile Shaoxing (Zhuji)

Huzhou

Zhejiang Exchange Center

Huzhou Changxing Jishu

China Mobile Huzhou (Erhuan)

Lishui

Zhejiang Exchange Center

China Mobile Lishui (Chengbei)

Lishui Liandu Cloud Data Center

Quzhou

Zhejiang Exchange Center

China Mobile Quzhou (Baiyun)

Zhoushan

Zhejiang Exchange Center

China Mobile Zhoushan (Beichan)

Fuzhou

PCCW

PBS - Fuzhou - POP

Xiamen

PCCW

PBS - Xiamen - POP2/POP1

Ningbo

Zhejiang Exchange Center

China Mobile Ningbo (Yinzhou)

China Mobile Ningbo (Zhedong)

China Mobile Ningbo (Hangzhou Bay)

China Mobile Ningbo (Yuanshi Road)

Wenzhou

Zhejiang Exchange Center

China Mobile Wenzhou (Yangfushan)

China Mobile Wenzhou (Zhenan)

China Telecom Wenzhou (Shifenju Branch)

China Unicom Wenzhou (Longwan)

Zhongwei

Zenlayer

CN-Ningxia2 (Yucheng Yunchuang Data Center)

CN-Ningxia3 (Zhongwei Ind. Park)

Hong Kong, China

PCCW

Hong Kong Internet Exchange (HKIX1b) - CUHK; Hong Kong Internet Exchange (HKIX1c) - Cyberport

iAdvantage JUMBO; iAdvantage MEGA Plus; iAdvantage MEGA Two; iAdvantage MEGA-i; iAdvantage MEGA-i (DCConnect) Edge; iAdvantage ONE

PCCW Global - Hermes House; PCCW Global - MCX10

Telecom House (TMH2); Telecom House (TMH2) Edge

Global Switch - Hong Kong

IXTech IDC

Equinix HK1/HK2/HK3/HK4/HK5

PCCW Solutions CDX; PCCW Solutions MCX10; PCCW Solutions OTC

iTech Tower 1/2

HKT SkyExchange - TKO2/TKO3

HKCOLO CCC; HKCOLO SFC

TGT HKDC1/HKDC2

APT Datamatrix

CITIC Telecom ALC; CITIC Telecom CTT

HKEX

Telin - Hong Kong

Telekom Malaysia - Hong Kong

China Mobile International GNC

NTT - FDC1/FDC2; NTT - Tai Po

OneAsia E-Trade Plaza; OneAsia Legan Center

Telstra - HKCS1/HKCS2

AsiaSat Teleport (GTVN)

CNN Hong Kong (GTVN)

China Unicom Global Center

China Telecom TKO

BDx - HKG1/HKG2

Hutchison Estate Agents Limited

Digital Realty - 11 Kin Chuen HKG11; Digital Realty - 33 Chun Choi HKG10

PCCW Global & Keppel ICX - (TMH9)

ServiceFabric - \[AZ A\] Hong Kong; ServiceFabric - \[AZ B\] Hong Kong

CBC Tech (MEGA-i Edge)

Yellow

Hermes House Edge

Zenlayer

AP-Hong Kong16 (Global Switch); AP-Hong Kong18 (HKEX); AP-Hong Kong2 (Equinix\_HK2); AP-Hong Kong3 (Equinix\_HK3); AP-Hong Kong4 (MEGA-I); AP-Hong Kong5 (MEGA-2); AP-Hong Kong6 (China Mobile); AP-Hong Kong7 (HK Colo); AP-Hong Kong9 (China Unicom (Hong Kong) Operations Limited)

Megaport

Equinix HK2

Mega-iAdvantage

CTG

Mega-2

MegaI-21IDC; MegaI-31IDC

Equinix HK1/HK2

TKO

Taiwan, China

PCCW

TWM Cloud IDC - Taipei

eASPNet Cloud IDC - Taipei

Chief Telecom - Taipei

New Century InfoComm Tech Co., Ltd. - Taipei

Zenlayer

AP-Taipei2 (Chief LY); AP-Taipei4 (FET)

### **Asia Pacific**

**City**

**Partner**

**Access point**

Singapore

PCCW

SGIX (Global Switch/Tai Seng)

Equinix: SG1, SG2, SG3, SG4, SG5

Global Switch: Tai Seng (Singapore)

Epsilon Singapore

Digital Realty: 29A International Business Park (SIN10), Digital Loyang 1 (SIN11), Digital Loyang 2 (SIN12), Singapore (SIN12) (11 Loyang Close)

1-Net East: 750D, 750E

Iron Mountain: Singapore

Keppel DC Singapore 1

M1 MiWorld

NTT: Serangoon

ST Telemedia: Defu 1, MediaHub, Tai Seng 1

Princeton Digital Group SG1

Racks Central: Racks Central 1

ViewQwest Singapore Edge

BDx: SIN1

China Mobile International Singapore

ServiceFabric: Singapore

Telin: Telin-3

Telehouse: Singapore ChaiChee

SGX: Singapore

Empyrion Digital SG1

WebSatMedia: Singapore

Ericsson: Equinix - SG1

Megaport

Equinix SG1

Global Switch

Zenlayer

AP-Singapore1 (Equinix\_SG1), AP-Singapore12 (DRT\_SIN10), AP-Singapore14 (Equinix SG5), AP-Singapore19 (Keppel\_SGP1), AP-Singapore2 (Equinix\_SG2), AP-Singapore3 (Telin), AP-Singapore4 (Global Switch Woodland), AP-Singapore5 (Global Switch)

CTG

Equinix SG1

Global Switch Woodland

GS-Suite F8

Jakarta (ID)

PCCW

Telin: Jakarta

Moratel NDC

Indosat: Central Jakarta

Zenlayer

AP-Jakarta15 (Cyber), AP-Jakarta17 (NTT), AP-Jakarta3 (TELIN), AP-Jakarta4 (Duren Tiga), AP-Jakarta5 (Indosat), AP-Jakarta6 (Karet Telkom)

CTG

CDC

Indosat-KPPTI

Bangalore (IN)

PCCW

ST Telemedia: Bengaluru DC 3/2

ITI: Bangalore

NxtGen: Bangalore

Sify: Bengaluru

CtrlS: Bangalore DC1

Nxtra: Bengaluru - I

Chennai (IN)

PCCW

NSE: Chennai

Nxtra: Chennai - I

ST Telemedia: Chennai DC 1/2

NTT: Chennai 1

Sify: Chennai

Gurugram (IN)

PCCW

Nxtra: Manesar - I

Hyderabad (IN)

PCCW

CtrlS: Hyderabad DC1, Hyderabad DC2

ST Telemedia: Hyderabad DC 1

Sify: Hyderabad

Kolkata (IN)

PCCW

Sify: Kolkata

ST Telemedia: Kolkata DC 1

Mumbai (IN)

PCCW

NTT: Mumbai 6/5, Mumbai Vikhroli, Mumbai Vikhroli IV

Sify: Rable

CtrlS: Mumbai DC1

ST Telemedia: Mumbai DC 1/3

GPX: Mumbai 1

Noida (IN)

PCCW

CtrlS: Noida DC1

Wipro: Knowledge Park IV

Sify: Noida

NTT: Noida 1

Pune (IN)

PCCW

ST Telemedia: Pune DC 1

Osaka (JP)

PCCW

Equinix: OS1

NTT: Dojima Osaka

Zenlayer

AP-Osaka5 (DRT\_KIX11)

Tokyo (JP)

PCCW

JPIX: Equinix - TY2

JPnap (Tokyo)

Arteria Networks: Toranomon

AT TOKYO: CC1

Equinix: TY10/TY11, TY2/TY4/TY6/TY7/TY8/TY3/TY5/TY9/TY1

ATBeX-Tokyo

Shin Otemachi

ServiceFabric: \[AZ A\] Tokyo, \[AZ B\] Tokyo

Megaport

Equinix TY4

Zenlayer

AP-Tokyo2 (Equinix\_TY8), AP-Tokyo4 (Equinix\_TY2), AP-Tokyo5 (Colt TDC1), AP-Tokyo9 (ATTOKYO\_CC1)

CTG

Equinix TY2

AT Tokyo

Phnom Penh (KH)

PCCW

Global Cloud Exchange: Phnom Penh

Zenlayer

AP-Phnom Penh2 (GCX\_ByteDC)

Seoul (KR)

PCCW

KINX (IX) Korea: (A), (B)

Sejong Telecom: Seoul

KINX: IDC Dogok Center, KINX: IDC Gasan Center

Zenlayer

AP-Seoul2 (SK Broadband Bundang), AP-Seoul3 (Korea KINX Gasan), AP-Seoul4 (KT Hyehwa Global DC), AP-Seoul5 (KT Yeouido IDC)

Kuala Lumpur (MY)

PCCW

AIMS: Kuala Lumpur

Zenlayer

AP-Kuala Lumpur2 (Menara AIMS)

Manila (PH)

PCCW

VITRO MAKATI I: Manila

Globe MK2 Data Center

Zenlayer

AP-Manila1 (PLDT), AP-Manila2 (PLDT), AP-Manila3 (Globe), AP-Manila5 (PLDT)

Bangkok (TH)

PCCW

JasTel

TCC Technology (BNDC): Bangna

BKNIX: TCCT

Zenlayer

AP-Bangkok1 (UIH), AP-Bangkok2 (True Internet), AP-Bangkok4 (Telehouse)

CTG

Krung Thep Maha Nakhon

Hanoi (VN)

PCCW

FPT Telecom: IDC

Zenlayer

AP-Hanoi1 (Viettel), AP-Hanoi2 (FPT), AP-Hanoi3 (Indochina Telecommunication JSC)

Ho Chi Minh City (VN)

PCCW

FPT Telecom: HCM

VNPTi: Ho Chi Minh City

Zenlayer

AP-Ho Chi Minh1 (FPT DC7), AP-Ho Chi Minh3 (FPT DC8), AP-Ho Chi Minh5 (Viettel)

Islamabad (PK)

Zenlayer

AP-Islamabad2 (Multinet)

Karachi (PK)

Zenlayer

AP-Karachi2 (Multinet Karachi DC 2), AP-Karachi5 (TWA)

Dhaka (BD)

Zenlayer

AP-Dhaka3 (BTCL)

### **Europe**

**City**

**Partner**

**Access point**

Aschheim, DE

PCCW

Noris Network - Munich

Equinix - MU4

Augsburg, DE

PCCW

LEWTelnet DC

Berlin, DE

PCCW

DNSnet Berlin

Infopark - Berlin

Lumen - Berlin

EU Networks - Berlin (Alboinkontor)

NTT - BER2; NTT - Berlin

Plusnet - Berlin

AtlasEdge - Berlin1

Bielefeld, DE

PCCW

EU Networks - Bielefeld1

Bremen, DE

PCCW

EU Networks - Bremen

Cologne, DE

PCCW

EU Networks - Cologne1

BT Data Centre - Cologne

Dortmund, DE

PCCW

EU Networks - Dortmund1

Dresden, DE

PCCW

Telia Data Centre - Dresden

Dusseldorf, DE

PCCW

Equinix - DU1

Lumen - Dusseldorf

myLoc - DUS5; myLoc - Dusseldorf

BT Data Centre - Dusseldorf

Digital Realty - DUS1

Plusserver - Dusseldorf

Plusserver (OpenIT) - Dusseldorf 33a

nLighten - Dusseldorf DUS1

Erfurt, DE

PCCW

EU Networks - Erfurt

Frankfurt, DE

PCCW

DATAIX - Equinix FR5

DE-CIX (Frankfurt)

Equinix - FR1; Equinix - FR4/FR6/FR7; Equinix - FR5; Equinix - FR8; Equinix - FR2

Digital Realty - FRA14/FRA16/FRA15; Digital Realty - FRA5/FRA6/FRA7/FRA8/FRA9/FRA3/FRA1/FRA4/FRA10/FRA11/FRA12/FRA13; Digital Realty - Interxion FRA2; Digital Realty - Wilhelm Fay Strasse 15; Digital Realty - FRA30/FRA28

NewTelco - Frankfurt

CyrusOne - Frankfurt1; CyrusOne - Frankfurt2

Global Switch - Frankfurt

Lumen - Frankfurt

Telehouse - Frankfurt

KeppelDC - Frankfurt1

I.T.E.N.O.S.

NTT - FRA1/FRA2/FRA4

FirstColo

Colt - Frankfurt 1; Colt - Frankfurt 2

EU Networks - FRF5 (Germany); EU Networks - FRF5 (non-Germany)

nLighten - Frankfurt FRA1

ServiceFabric - Frankfurt

Iron Mountain - FRA-1/2

NL-IX Frankfurt

Megaport

Equinix FR5

Zenlayer

EU-Frankfurt1 (Interxion\_FRA6); EU-Frankfurt5 (Equinix\_FR7); EU-Frankfurt9 (CMI\_DE1)

CTG

Equinix FRA4/FRA6

Interxion FRA10

Gutersloh, DE

PCCW

Arvato - DC1 and DC3

Hamburg, DE

PCCW

Global Connect - Hamburg3; Global Connect - Hamburg

Lumen - Hamburg

EU Networks - Hamburg1

NTT - Telia DC

Telia Data Centre - Hamburg

1&1 Versatel Hamburg

AtlasEdge - Hamburg

Akquinet - HAM02

Equinix - HH1

Hannover, DE

PCCW

EU Networks - Hannover1

Karlsruhe, DE

PCCW

EU Networks - Karlsruhe1

Kiel, DE

PCCW

EU Networks - Kiel1

Kirchheim-Heimstetten, DE

PCCW

NTT - MUC1

Leipzig, DE

PCCW

EU Networks - Leipzig1

Magdeburg, DE

PCCW

EU Networks - Magdeburg1

Munich, DE

PCCW

EdgeConneX - Munich

M-NET Munich

QSC - Munich

Vodafone CBN2

EU Networks - Munich1

Equinix - MU1/MU3

KPN - Munich

EMCHostCo-GmbH

Lumen - Munich

I.T.E.N.O.S. - Munich

BT Data Centre - Munich

Nuremberg, DE

PCCW

EU Networks - Nuremberg 1

Noris Datacenter - Nuremberg Center

IPExchange - Nuremberg

Offenbach, DE

PCCW

Maincubes - Offenbach

Vantage - Frankfurt

Rostock, DE

PCCW

EU Networks - Rostock1

Russelsheim, DE

PCCW

NTT - FRA3

Stuttgart, DE

PCCW

EU Networks - Stuttgart1

Telia Data Centre - Stuttgart

Plusnet - Stuttgart

Datacenter One - GRP10

nLighten - Stuttgart STR1

Teltow, DE

PCCW

Telefonica Germany - Teltow

Wurzburg, DE

PCCW

EU Networks - Wurzburg1

London, GB

PCCW

LINX London

Equinix - LD8; Equinix - LD3/LD9/LD4

Telehouse North - TFM1/17

Telehouse East - TFM-71/72

Digital Realty - Sovereign House (former Telecity LON3); Digital Realty - Chessington; Digital Realty - Cloud House West; Digital Realty - Croydon; Digital Realty - Heathrow (former Equinix LD2); Digital Realty - LON1; Digital Realty - LON3; Digital Realty - Oliver's Yard; Digital Realty - Sovereign House North; Digital Realty - West Drayton

CyrusOne - London II

Global Switch - London East 2; Global Switch - London North 1

IP House London

London Hosting Centre

Telehouse West

Virtus Data Centres - London1/London2/London4/London5; Virtus Data Centres - London6/London7

Volta - Central London

Cyxtera - LHR2-B

Lumen - Braham Street; Lumen - Islington

Sungard - London Technology Centre; Sungard - TC1

Colt - London West Unit2; Colt - London North; Colt - London West

ERICSSON - Chiswick Park

Exchange Tower - Harbour Exchange

iOmart Hosting - London DC

KAO Data - London One DC

Redcentric - London

OBS - Lampton House

AtlasEdge - London City LCY001

Echelon - LCY10

Pure DC - London

Telehouse South

nLighten - London STN1

Megaport

Telehouse North

Zenlayer

EU-London1 (Equinix\_LD8 8-9); EU-London2 (Interxion LON2); EU-London4 (CMI)

Manchester, GB

PCCW

M247 DC2/1

Equinix - MA5; Equinix - MA1/MA2/MA3/MA4

Colo-X - LDeX2

Hutchison 3G UK - Manchester

iOmart - Renyolds DC7; iOmart - Turing DC6

AtlasEdge - Manchester

Slough, GB

PCCW

CyrusOne - London I

Equinix - LD5/LD6/LD10/LD7

Iron Mountain - London

China Mobile International London

Woking, GB

PCCW

Digital Realty - Woking

Courbevoie, FR

PCCW

Paris La Defense (Courbevoie)

Marseille, FR

PCCW

DE-CIX (Marseille) - Interxion MRS2

France-IX - Interxion MRS2 - France-IX Marseille

Paris, FR

PCCW

France-IX - Telehouse 2 Voltaire - France-IX Paris

Les Ulis, FR

PCCW

Colt - DC Les Ulis (Paris2)

Marseille, FR

PCCW

Digital Realty - Interxion MRS2; Digital Realty - MRS1

Zenlayer

Nanterre, FR

Nanterre, FR

PCCW

Lumen - Nanterre

Nozay, FR

PCCW

DATA4 - Paris

Paris, FR

PCCW

Telehouse 2 - Voltaire

Digital Realty - PAR2/PAR1/PAR3/PAR4/PAR5/PAR6/PAR7; Digital Realty - PAR8

Global Switch - Paris West

Equinix - PA6/PA7/PA4

Telehouse 1 - Paris

SFR Netcenter Courbevoie

AtlasEdge - Paris BES

SCALEWAY Datacentre - DC3 (ILIAD)

KDDI - Leon Frot

Telehouse 3 - Magny Les Hameaux

nLighten - Paris PAR2

ServiceFabric - Paris (none IO-D)

CTG

Equinix Bis

Saint-Denis, FR

PCCW

Equinix - PA2/PA3

Vitry-sur-Seine, FR

PCCW

Scaleway - Paris DC2

Aalsmeer, NL

PCCW

NorthC - Aalsmeer

Alblasserdam, NL

PCCW

Dataplace - Rotterdam

Alkmaar, NL

PCCW

Datacenter Noord-Holland - Alkmaar

Alphen aan den Rijn, NL

PCCW

Cellnex - Alphen aan den Rijn

Amsterdam, NL

PCCW

AMS-IX Amsterdam

Digital Realty - AMS17 Data Tower; Digital Realty - AMS1/AMS4/AMS2/AMS9; Digital Realty - AMS3/AMS5/AMS6/AMS7/AMS8; Digital Realty - De President; Digital Realty - H.J.E. Wenckebachweg

Global Switch - Amsterdam

Equinix - AM2; Equinix - AM1/AM11; Equinix - AM3/AM4/AM5/AM6/AM7/AM8

EU Networks - Amsterdam

Maincubes - Amsterdam

Lumen - Amsterdam1/Amsterdam2

NorthC Oude Meer (OUM01)

NorthC Almere (AER01)

NorthC Delft (DFT01)

NorthC Amsterdam (AMS01)

AtlasEdge - Amsterdam LUC; AtlasEdge - Amsterdam MAD

Iron Mountain - Haarlem

CyrusOne - Amsterdam

ServerFarm - AMS1

nLighten - Amsterdam AMS1

Datacenter.com - AMS1

Ericsson - Digital Realty - AMS1

Zenlayer

EU-Amsterdam1 (Equinix\_AM3); EU-Amsterdam2 (Equinix\_AM7)

CTG

Equinix AM7

Arnhem, NL

PCCW

Dataplace - Arnhem

Capelle (IJssel), NL

PCCW

Databarn Rivium B.V.

Eindhoven, NL

PCCW

NorthC - Eindhoven 1

Groenekan, NL

PCCW

Dataplace - Utrecht

Groningen, NL

PCCW

Bytesnet - Groningen

NorthC - Groningen

Hilversum, NL

PCCW

Cellnex - Hilversum

Hoofddorp, NL

PCCW

Dataplace - Amsterdam

Hoogersmilde, NL

PCCW

Cellnex - Hoogersmilde

IJsselstein, NL

PCCW

Cellnex - IJsselstein

Leeuwarden, NL

PCCW

DataCenter Fryslan - DCF1

Lelystad, NL

PCCW

Cellnex - Lelystad

Nieuwegein, NL

PCCW

NorthC - Nieuwegein

Roermond, NL

PCCW

Cellnex - Roermond

Roosendaal, NL

PCCW

Cellnex - Roosendaal

Rotterdam, NL

PCCW

Spaanse Kubus

SmartDC - Rotterdam

Bytesnet - Rotterdam

NorthC - Rotterdam Zestienhoven; NorthC - Rotterdam Waalhaven

Rozenburg, NL

PCCW

NTT - AMS1

Schiphol-Rijk, NL

PCCW

EdgeConneX - Amsterdam

Digital Realty - AMS10

nLighten - Amsterdam AMS2

Steenbergen, NL

PCCW

Dataplace - Nedzone

Utrecht, NL

PCCW

Switch Datacenters - Amsterdam2 Woerden

Waalwijk, NL

PCCW

Dataplace - Brabant

Zwolle, NL

PCCW

Cellnex - Zwolle

Vienna, AT

PCCW

Digital Realty - VIE2/VIE1

Nessus NDC1/2

NEXTLAYER - Fleischmarkt

NTT - Vienna

Hutchison Drei Austria (Tele2) - Medienhaus

Hutchison 3G UK - H3A

Datasix - Vienna

Video Broadcast - Vienna Business Park

Antwerp, BE

PCCW

Datacenter United - Antwerp

LCL - Antwerp

Brussels, BE

PCCW

Lumen - EVREBG01

Digital Realty - BRU1

Diegem, BE

PCCW

LCL - Brussels-North

Hasselt, BE

PCCW

Datacenter Hasselt - DC1

Zaventem, BE

PCCW

AtlasEdge - Brussels Mercuriusstraat

Sofia, BG

PCCW

GTT Sofia

Prague, CZ

PCCW

CE Colo

CTG

DCC

Ballerup, DK

PCCW

Digital Realty - CPH1 CPH2

Copenhagen, DK

PCCW

GlobalConnect - Copenhagen

Taastrup, DK

PCCW

Global Connect - Taastrup

Madrid, ES

PCCW

Global Switch - Madrid

Equinix - MD2/MD1

Digital Realty - MAD1/MAD2

DATA4 - Madrid Alcobendas

AtlasEdge - Madrid

Zenlayer

EU-Madrid1 (Interxion\_MAD2)

Espoo, FI

PCCW

Global Connect (IP-only) - Espoo

Helsinki, FI

PCCW

Equinix - HE6

Zenlayer

EU-Helsinki1 (Digita)

Athens, GR

PCCW

TI Sparkle - Athens

Digital Realty - ATH3/ATH1/ATH2

Dublin, IE

PCCW

Digital Realty - Clonshaugh; Digital Realty - DUB1/DUB2; Digital Realty - DUB3; Digital Realty - ProfilePark; Digital Realty - ProfilePark-building2

Equinix - DB1/DB2/DB3/DB4

KeppelDC - Dublin1/2

BT Data Centre - Dublin

SunGard - Park West Business Park

Verizon City Centre

Digiweb - Dublin

Eir - Dublin

EdgeConneX - Dublin

Servecentric - Dublin

Milan, IT

PCCW

Irideos - Milan

BT Data Centre - Milan

DATA4 - ItalyPOP1/ItalyPOP2/ItalyPOP3

Equinix - ML2/ML5

ArubaCloud - IT3

SUPERNAP - Italia

Verizon Pero DC

CDLAN - Caldera 21

Zenlayer

EU-Milan1 (Equinix\_ML2)

CTG

Equinix ML2

Rome, IT

PCCW

iKOMG Teleport (GTVN)

Oslo, NO

PCCW

Bulk - OSL

Digiplex - Oslo Ulven

Warsaw, PL

PCCW

Equinix - WA1/WA2

Bucharest, RO

PCCW

Telekom Romania Communications

Stockholm, SE

PCCW

Equinix - SK1; Equinix - SK2

Digital Realty - STO1/STO2/STO3/STO5; Digital Realty - STO4

Digiplex - Stockholm

Ericsson - Equinix - SK1

CTG

Equinix SK1

Istanbul, TR

Zenlayer

EU-Istanbul1 (Equinix\_IL2); EU-Istanbul2 (Radore)

Geneva, CH

PCCW

Equinix - GV1/GV2

BrainServe DC

SafeHost - SH1

CERN CIXP - Bldg. 0513

Gland, CH

PCCW

SafeHost - SH2

Lupfig, CH

PCCW

Green.ch

Villars-Ste-Croix, CH

PCCW

EU Networks - Colocentre VSX (FLAC POP VSX)

Zurich, CH

PCCW

Equinix - ZH4/ZH5/ZH2

Digital Realty - ZUR1

nLighten - Zurich ZRH1

### **Americas**

**City**

**Partner**

**Access point address**

Chandler, AZ, US

PCCW

CyrusOne - Phoenix

Digital Realty - PHX15

DataBank - PHX3

Mesa, AZ, US

PCCW

Centersquare - PHX3-A Mesa

Phoenix, AZ, US

PCCW

Iron Mountain - AZP-1

PhoenixNAP 3402 University

DataBank - 3110 N Central Ave Phoenix; DataBank - PHX2

Digital Realty - PHX10

Aligned Data Centers - Phoenix

NexusTek - Phoenix

Centersquare - PHX1-A/B/C/D Phoenix

Scottsdale, AZ, US

PCCW

Sungard - SCO1 Scottsdale Arizona

Iron Mountain - Scottsdale

Tempe, AZ, US

PCCW

Digital Realty - PHX11

Tucson, AZ, US

PCCW

Involta - Tucson

Culver City, CA, US

PCCW

Globecast Americas - Culver City

Cypress, CA, US

PCCW

Sungard - LOS-6803

El Segundo, CA, US

PCCW

Equinix - LA4/LA3

Irvine, CA, US

PCCW

DataBank - SNA1/SNA2

Centersquare - LAX5-A Irvine

Los Angeles, CA, US

PCCW

CoreSite - LA1; CoreSite - LA1 (GTVN); CoreSite - LA2; CoreSite - LA3

Equinix - LA1; Equinix - LA2

Cogent - Los Angeles

DataBank - LAS1

Quadranet - IXCA2; Quadranet - LAX

Digital Realty - Los Angeles

Telehouse - Los Angeles

NYIIX - Coresite - LA1

Zenlayer

NA-Los Angeles10 (Coresite\_LA1); NA-Los Angeles2 (Coresite\_LA2); NA-Los Angeles5 (DRT\_LAX10)

Milpitas, CA, US

PCCW

CoreSite - SV2

Palo Alto, CA, US

PCCW

Equinix - SV8

Rancho Cordova, CA, US

PCCW

EdgeConneX - SAC01

Sacramento, CA, US

PCCW

Lanset America - Sacramento

NTT - CA2

San Diego, CA, US

PCCW

Scale Matrix - San Diego

San Francisco, CA, US

PCCW

Digital Realty - San Francisco; Digital Realty - San Francisco 200 Paul Avenue

Ntirety - San Francisco

San Jose, CA, US

PCCW

Equinix - SV1/SV5/SV10; Equinix - SV3/SV11

CoreSite - SV1

Megaport

Equinix - SV1/10

Zenlayer

NA-San Jose1 (Equinix\_SV5); NA-San Jose2 (Equinix\_SV2)

Santa Ana, CA, US

PCCW

TPx - TWCA28

Santa Clara, CA, US

PCCW

Equinix - SV14/SV15/SV16; Equinix - SV17; Equinix - SV2

Digital Realty - SCL1/SCL2; Digital Realty - Silicon Valley 2805 Lafayette

DataBank - SFO1

Lumen - Santa Clara

QTS - Santa Clara

CoreSite - SV4/SV7

Centersquare - SFO1-A/C Santa Clara; Centersquare - SFO2-B Santa Clara

Cologix - SV1

Sunnyvale, CA, US

PCCW

Equinix - SV4

Lumen - Sunnyvale

Element Critical - Silicon Valley

Aurora, CO, US

PCCW

Sungard - DEN-3431

Flexential - Denver - Aurora

Centennial, CO, US

PCCW

DataBank - DEN2

Lumen - Centennial

Denver, CO, US

PCCW

DataBank - DEN3

H5 Data Centers - Denver

CoreSite - DE1; CoreSite - DE2

Flexential - Denver - Downtown

Iron Mountain - Denver

Lumen - Denver

Centersquare - DEN1-A/B Littleton

Englewood, CO, US

PCCW

DataBank - DEN1

Digital Realty - DN3

Flexential - Arapahoe; Flexential - Compark

TDS, Inc - Denver

Equinix - DE2

Thornton, CO, US

PCCW

Sungard Availability Services - Denver Thornton

Westminster, CO, US

PCCW

DataBank - DEN4

Stamford, CT, US

PCCW

CyrusOne - CervalisCT1

Washington, DC, US

PCCW

Zayo Group - Washington

CoreSite - DC1

Zenlayer

NA-Washington1 (Equinix\_DC6); NA-Washington3 (Coresite\_VA2)

Jacksonville, FL, US

PCCW

Cologix - JAX1

Lakeland, FL, US

PCCW

Cologix - LAK1

Miami, FL, US

PCCW

Equinix - MI1; Equinix - MI1 (GTVN)

Zenlayer

NA-Miami1 (Equinix MI1); NA-Miami2 (Coresite\_2F\_MI1)

Orlando, FL, US

PCCW

Host Dime - Orlando

CoreSite - OR1

Atlanta, GA, US

PCCW

Digital Realty - Atlanta (ATL13)

EdgeConneX - EDCATL01

INAP - ACS

Zayo Group - Multi-tenant (55 Marietta, Atlanta)

DataBank - ATL2/ATL1

Equinix - AT2

QTS - Atlanta

Centersquare - ATL1-A/B/C/D Lithia Springs

CoreSite - AT1/AT2

ServiceFabric - Atlanta

Suwanee, GA, US

PCCW

QTS - Suwanee

Boise, ID, US

PCCW

ValorC3 - Boise

Aurora, IL, US

PCCW

CyrusOne - Aurora I

Chicago, IL, US

PCCW

Equinix - CH1/CH4/CH2

Centersquare - ORD1-A/B/C/D Chicago (Cermak); Centersquare - ORD4-A Lisle

NYI - Chicago

Zayo Group - Chicago

DataBank - ORD3/ORD2/ORD4

CoreSite - CH1

Lumen - Chicago

QTS - Chicago

Windstream Chicago Edge

Zenlayer

NA-Chicago1 (Equinix\_CH3)

Elk Grove Village, IL, US

PCCW

Centersquare - ORD2-A/B Elk Grove Village

STACK infrastructure - CHI01

T5 Data Centers - T5 Chicago

Lumen - Elk Grove Village

Deft - Elk Grove Village

Equinix - CH3

Franklin Park, IL, US

PCCW

Digital Realty - Chicago - 9377 Grand Avenue

Indianapolis, IN, US

PCCW

Everstream - Indianapolis

DataBank - IND2

Netrality - Indy Telcom Center

Olathe, KS, US

PCCW

Unitas - Olathe

Andover, MA, US

PCCW

TierPoint - Andover

Boston, MA, US

PCCW

Markley - One Summer

DataBank - BOS1

CoreSite - BO1

Baltimore, MD, US

PCCW

Lumen - Baltimore

TierPoint - Baltimore

Owings Mills, MD, US

PCCW

Expedient Data Centers - Baltimore - Owings Mills

Southfield, MI, US

PCCW

123Net - Southfield

Minneapolis, MN, US

PCCW

Cologix - MIN2; Cologix - MIN4

Atomic Data - Minneapolis

DataBank - MSP4

ipHouse - Minneapolis

Centersquare - MSP1-A/B Shakopee

Plymouth, MN, US

PCCW

Zayo Group - Plymouth

Kansas City, MO, US

PCCW

Netrality - 1102 Grand

Iron Mountain - KCM1

St. Louis, MO, US

PCCW

Netrality - 210 North Tucker

Charlotte, NC, US

PCCW

Windstream Communications - Charlotte 3

Flexential - Charlotte - North

H5 Data Centers - Charlotte

Raleigh, NC, US

PCCW

TierPoint - Raleigh

Omaha, NE, US

PCCW

1623 Farnam

Carlstadt, NJ, US

PCCW

Sungard - CRL1 Carlstadt New Jersey; Sungard - CRL3 Carlstadt New Jersey

Cedar Knolls, NJ, US

PCCW

Cologix - NNJ2

Edison, NJ, US

PCCW

Iron Mountain - Edison

Jersey City, NJ, US

PCCW

QTS - Jersey City

New York, NJ, US

PCCW

Equinix - NY1

Digital Realty - New Jersey 3 Corporate Place; Digital Realty - New Jersey 365 S Randolphville

Lumen - Weehawken

CoreSite - NY3

Newark, NJ, US

PCCW

Lumen - Newark

Piscataway, NJ, US

PCCW

DataBank - NJ2

QTS - Piscataway

Secaucus, NJ, US

PCCW

Equinix - NY4/NY2

Centersquare - EWR5-A Secaucus

H5 Data Centers - New Jersey

CoreSite - NY2

Somerset, NJ, US

PCCW

CyrusOne - NJ-1

Rackspace - DataPipeNJ1

Totowa, NJ, US

PCCW

CyrusOne - Totowa

Wall Township, NJ, US

PCCW

NJFX New Jersey

Weehawken, NJ, US

PCCW

Centersquare - EWR2-A/B/E Weehawken

Digital Realty - New Jersey 300 JFK Building

Albuquerque, NM, US

PCCW

Big Byte - Albuquerque

H5 Data Centers - Albuquerque

Las Vegas, NV, US

PCCW

Switch - Las Vegas; Switch - NAP2; Switch - NAP4

TPx - Las Vegas

EdgeConneX - LAS01

Flexential - Las Vegas - Downtown

New York, NY, US

PCCW

DE-CIX (New York)

Digital Realty - New York (JFK10); Digital Realty - New York (JFK12)

DataBank - NJ1; DataBank - NYC1; DataBank - NYC2

NYI - NY2

BCE Inc - New York

CoreSite - NY1

Crown Castle - New York; Crown Castle - New York - Hudson Street

Equinix - NY13

KPN - New York

Lumen - New York; Lumen - New York - Hudson Street

NTT - New York

Orange SA - New York

T-Mobile USA - New York

TeliaSonera International ISP - New York

Telehouse - New York Chelsea

ServiceFabric - New York

NYIIX - Digital Realty - NYC2

Zenlayer

NA-New York City1 (Digital Realty)

Parsippany, NJ, US

PCCW

Cologix - NNJ 3

Cincinnati, OH, US

PCCW

Zayo Group - CIN1

CyrusOne - Cincinnati - 7th Street

H5 Data Centers - Cincinnati I

Cleveland, OH, US

PCCW

H5 Data Centers - Cleveland

DataBank - CLE1

Columbus, OH, US

PCCW

Expedient Data Centers - Columbus - Dublin

Cologix - COL1

Hillsboro, OR, US

PCCW

Flexential - PDX01

QTS - Hillsboro 1

Portland, OR, US

PCCW

H5 Data Centers - Portland

Bethlehem, PA, US

PCCW

TierPoint - Bethlehem; TierPoint - Lehigh Valley

Philadelphia, PA, US

PCCW

Sungard - phl2 Philadelphia PA

Sungard - PHL-833; Sungard - PHL3 Philadelphia PA

Netrality - 401 North Broad

DataBank - PHL1

Lumen - Philadelphia

TierPoint - Valley Forge

H5 Data Centers - Philadelphia

Franklin, TN, US

PCCW

Flexential - Nashville - Cool Springs; Flexential - Nashville - Franklin

TierPoint - Nashville

Memphis, TN, US

PCCW

Expedient Data Centers - Memphis

DataBank - MEM1

Allen, TX, US

PCCW

CyrusOne - Allen

Centersquare - DFW2-A Allen

TierPoint - Dallas Allen

Austin, TX, US

PCCW

vXchnge - TX01

CyrusOne - Austin

Carrollton, TX, US

PCCW

Digital Realty - Carrollton

CyrusOne - Dallas - Carrollton

Dallas, TX, US

PCCW

Equinix - DA1/DA2/DA3/DA6; Equinix - DA11/DA4

Digital Realty - DAL1; Digital Realty - DFW13; Digital Realty - Richardson

DataBank - DFW1/DFW7; DataBank - DFW5

ISP-1 - ISP-1 Dallas

Cologix - DAL1

Corespace - Dallas

Flexential - DAL01

H5 Colo Associates LLC - DallasDCTX1

Lumen - Dallas

NTT - Dallas; NTT - TX1

Centersquare - DFW3-A Dallas

TierPoint - Dallas

DE-CIX (Dallas) - Equinix DA1

Zenlayer

NA-Dallas1 (Equinix\_DA1)

Fort Worth, TX, US

PCCW

QTS - Fort Worth

Centersquare - DFW1-A/B/C Fort Worth

Houston, TX, US

PCCW

DataBank - Houston - Galleria; DataBank - Houston West I

Data Foundry, Inc. - HOU2

Medidata Solutions Inc. - Houston

Netrality - 1301 Fannin

Zayo Group - Houston

Digital Realty - Houston

Irving, TX, US

PCCW

QTS - Irving

Laredo, TX, US

PCCW

VTX Communications - LAR2

Lewisville, TX, US

PCCW

CyrusOne - Dallas - Lewisville

McAllen, TX, US

PCCW

MDC - McAllen MCA2/MCA1

Plano, TX, US

PCCW

Aligned Energy - Plano

DataBank - DFW3

Flexential - Plano Data Center

Global IP Networks - Plano

Equinix - DA7

San Antonio, TX, US

PCCW

H5 Data Centers - San Antonio Data Center

Cottonwood Heights, UT, US

PCCW

Flexential - Salt Lake City - Cottonwood

Saint George, UT, US

PCCW

ValorC3 - Saint George

Salt Lake City, UT, US

PCCW

DataBank - SLC1

Flexential - Salt Lake City - Fair Park

Lumen - Salt Lake City

Ashburn, VA, US

PCCW

Equinix - DC1/DC6/DC2/DC3/DC4/DC5/DC10/DC11/DC12/DC15; Equinix - DC13; Equinix - DC16; Equinix - DC21

Digital Realty - 44274 Roundtable Plaza; Digital Realty - ACC5; Digital Realty - Ashburn; Digital Realty - IAD12/IAD37; Digital Realty - IAD35

Sabey Data Centers

DataBank - NV1

NTT - VA1

Centersquare - IAD4-A Ashburn

QTS - Ashburn-Shellhorn DC1

Megaport

Equinix DC4

Culpeper, VA, US

PCCW

Equinix - CU1/CU2/CU3/CU4

Herndon, VA, US

PCCW

Cogent - Herndon

Manassas, VA, US

PCCW

Iron Mountain - VA-1

Equinix - DC14

McLean, VA, US

PCCW

DataBank - IAD2

Reston, VA, US

PCCW

CoreSite - VA1/VA2/VA3

Lincoln Rackhouse - Turnkey Data Center

Evocative - Virginia DC1

VPLS - DC1

LINX NoVA

Megaport

CoreSite VA1

Sandston, VA, US

PCCW

QTS - Richmond

Sterling, VA, US

PCCW

CyrusOne - Northern Virginia - Sterling i, ii, and iii; CyrusOne - Sterling

Lumen - CenturylinkVA5

QTS - Ashburn-Broderick; QTS - Ashburn-Moran

Vienna, VA, US

PCCW

Equinix - DC7

East Wenatchee, WA, US

PCCW

Sabey - East Wenatchee

Quincy, WA, US

PCCW

Sabey - Quincy

Seattle, WA, US

PCCW

Equinix - SE2/SE3; Equinix - SE4

Digital Realty - SEA10

INAP - Seattle

DataBank - NV2

Zenlayer

NA-Seattle1(Sabey); NA-Seattle4(Equinix\_SE3)

Spokane, WA, US

PCCW

NoaNet - Spokane

Neutron Data Center - Spokane

TierPoint - Spokane

Tukwila, WA, US

PCCW

Digital Realty - Tukwila

Sabey Data Centers - 1/2/4

DataBank - SEA2

EdgeConneX - SEA01

INAP - Tukwila

Anjou, QC, CA

PCCW

Cologix - MTL4

Drummondville, QC, CA

PCCW

Cologix - MTL9

Edmonton, AB, CA

PCCW

Wolfpaw Data Centers - EDM

Etobicoke, ON, CA

PCCW

3z Canada - YYZ03

Zayo Group - Etobicoke

Hamilton, ON, CA

PCCW

NetAccess - Hamilton

Kanata, ON, CA

PCCW

Rogers ISP Services - OTT DC3

Longueuil, QC, CA

PCCW

Cologix - MTL10

Markham, ON, CA

PCCW

IBM - Markham

Mid-Range - Ontario

Rogers ISP Services - TOR DC3

Sungard Availability Services - Toronto Markham 371

Zayo Group - Markham

Mississauga, ON, CA

PCCW

Centersquare - YYZ1-A Mississauga

Sungard Availability Services - TOR-6535 Workplace Recovery Center; Sungard Availability Services - Toronto Mississauga 1800

Centrilogic - MISSISSAUGA - ONTARIO (NORTH)

Montreal, QC, CA

PCCW

Cologix - CC1; Cologix - MTL7/MTL1/MTL3/MTL8/MTL11

CGI - CGI Montreal

eStruxture - MTL-3/2; eStruxture - MTL-5

IBM - Montreal

Zayo MTL - Montreal (625 Rue Belmont); Zayo MTL - Montreal (740 Rue Notre-Dame O)

Ottawa, ON, CA

PCCW

Royal Bank Of Canada - Ottawa

Quebec, QC, CA

PCCW

Vantage Data Centers - Quebec

Saint-Laurent, QC, CA

PCCW

Cologix - MTL5/MTL6

Toronto, ON, CA

PCCW

Equinix - TR1/TR2

Telehouse - Toronto

Cologix - TOR1; Cologix - TOR2

eStruxture - TOR-1/3

Zenlayer

NA-Toronto2 (Cologix\_TOR1)

Vancouver, BC, CA

PCCW

Cologix - VAN3; Cologix - VAN4/VAN2

eStruxture - VAN-2

Verdun, QC, CA

PCCW

Cologix - MTL2

Buenos Aires, AR

PCCW

Cirion - Buenos Aires

Zenlayer

SA-Buenos Aires1 (EdgeUno EZE2)

Santiago, CL

PCCW

Cirion - Santiago

Zenlayer

Bogota, CO

PCCW

Zenlayer

SA-Bogotá1 (EdgeUno BOG4)

Mexico City, MX

PCCW

Cirion - Mexico

Zenlayer

NA-Mexico City2 (Equinix MX2)

Santiago de Queretaro, MX

PCCW

KIO Networks QRO 1

Panama City, PA

PCCW

Kio Data Centre (Panama City)

Lima, PE

PCCW

Cirion - Lima

Zenlayer

SA-LIMA1 (Lumen)

Sao Paulo, BR

PCCW

Cirion - Sao Paulo

Zenlayer

SA-São Paulo1 (Equinix\_SP2); SA-São Paulo2 (Equinix\_SP3); SA-São Paulo4 (Ascenty-SP3)

Fortaleza, BR

Zenlayer

SA-Fortaleza1 (Globenet Fortaleza CLS)

### **Middle East**

**City**

**Partner**

**Access point**

Dubai, AE

PCCW

Datamena - IMPZ

Zenlayer

ME-Dubai1 (Equinix\_DX1)

CTG

Datamena, Equinix DC

Fujairah, AE

PCCW

Etisalat - Fujairah

Zenlayer

ME-Fujairah1 (Etisalat)

Tubli, BH

PCCW

STC Bahrain

Aqaba, JO

PCCW

Al Nayi Aqaba

Doha, QA

PCCW

Ooredoo - QDC5

Jeddah, SA

PCCW

MENA gateway - Jeddah

Riyadh, SA

PCCW

Mobily Malga 1

Zenlayer

ME-Riyadh2 (Center3\_RDC102)

### **Africa**

**City**

**Partner**

**Access point**

Abidjan, CI

PCCW

VIPNET - Abidjan

Douala, CM

PCCW

Matrix Telecoms Douala

Djibouti City, DJ

PCCW

Djibouti Data Centre

Cairo, EG

PCCW

TE Data - Cairo

Accra, GH

PCCW

PAIX DC (Ecoband)

Mombasa, KE

PCCW

Icolo MBA1

Nairobi, KE

PCCW

Liquid - Nairobi

CTG

East Africa

Casablanca, MA

PCCW

INWI DC (SAPINO)

Lilongwe, MW

PCCW

TNM Lilongwe

Maputo, MZ

PCCW

PCCW Global - Maputo

Lagos, NG

PCCW

Medallion (Phase3)

Rack Centre (Phase3)

Zenlayer

AF-Lagos1(Equinix\_LG1)

Dakar, SN

PCCW

WAW Telecom - SENIX

Dar es Salaam, TZ

PCCW

Tigo Tanzania - Dar es Salaam

Dar es Salaam

Kampala, UG

PCCW

Liquid Telecom - Kampala

Cape Town, ZA

PCCW

Teraco Cape Town - CT1

NAPAfrica-CapeTown

OADC - Brackenfell CPT2; OADC - Rondebosch CPT1

Johannesburg, ZA

PCCW

Vodacom Johannesburg

Teraco Johannesburg - JB1

NAPAfrica-Johannesburg

OADC - Isando JNB1

Africa Data Centres - Midrand JHB1; Africa Data Centres - Samrand JHB2

NAPAfrica (IX) Johannesburg

Zenlayer

AF-Johannesburg1 (Teraco\_JB1)

CTG

TERACO

Lusaka, ZM

PCCW

Liquid Telecom - Zambia

### **Oceania**

**City**

**Partner**

**Access point**

Brisbane, AU

PCCW

NEXTDC B2 Brisbane

NEXTDC B1 Brisbane

Melbourne, AU

PCCW

Equinix - ME1

NEXTDC M1 Melbourne

Vocus Melbourne

Zenlayer

OC-Melbourne1 (Equinix ME1)

Perth, AU

PCCW

EdgeIX - Vocus - Perth IX

Vocus - Perth IX

QV1 - Perth

NEXTDC P2 Perth

NEXTDC P1 Perth

Sydney, AU

PCCW

EdgeIX - Equinix - SY1

Equinix - SY1; Equinix - SY2/SY3/SY4/SY5; Equinix - SY6

NEXTDC S1 Sydney

Global Switch - Sydney

ASX Sydney

Macquarie - IC2 Macquarie Park Campus; Macquarie - IC3 East Macquarie Park Campus; Macquarie - IC3 West Macquarie Park Campus

Zenlayer

OC-Sydney1 (Equinix\_SY5); OC-Sydney3(Equinix\_SY1)

Auckland, NZ

PCCW

Spark - Mayoral Drive Exchange MDR

DataCentre220 - 220 Queen Street

2degrees - Vocus NZ Albany

IBM - East Tamaki

Datacom - Orbit

Revera - Albany

Vodafone - Albany
