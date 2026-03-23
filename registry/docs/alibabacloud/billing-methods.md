The prices of compute nodes vary based on the billing method and specifications. You can select a billing method from the guide section on the right side of the page to quickly view the billing rules for compute nodes. PolarDB provides compute plans for clusters that have defined specifications and serverless clusters to help you reduce costs.

**Note**

If you select **Double Zones (Hot Standby Storage and Compute Clusters Enabled)** when you purchase a cluster, compute nodes are added to the secondary zone in which the hot standby storage cluster resides. By default, the number and specifications of compute nodes in the secondary zone are the same as those in the primary zone. The compute nodes in the secondary zone are separately charged.

## Subscription and pay-as-you-go prices

The following section describes the prices of a compute node of specific specifications. For more information about the compute node prices, go to the [buy page](https://polardb-buy.alibabacloud.com/cusBuy/Prepaid).

### Enterprise Edition

**Note**

-   By default, a PolarDB for MySQL cluster of Multi-master Cluster (Limitless) Edition contains two primary nodes.
    
-   By default, a PolarDB for MySQL cluster of Cluster Edition contains one primary node and one read-only node.
    
-   AI nodes for the [PolarDB for AI](/help/en/polardb/polardb-for-mysql/polardb-for-ai/) feature support two GPU specifications in addition to common compute node specifications. These two GPU specifications are mainly used for AI model creation and inference.
    
    -   8 cores, 30 GB memory and one GU30 (`polar.mysql.g8.2xlarge.gpu`)
        
    -   16 cores, 125 GB memory and one GU100 (`polar.mysql.x8.2xlarge.gpu`)
        

Pricing of a single compute node

#### Regions in the Chinese mainland

**Edition**

**Node type**

**CPU and memory**

**USD per month**

**USD per hour**

Multi-master Cluster (Limitless) Edition (Dedicated)

polar.mysql.mmx4.xlarge

8 cores, 32 GB memory

310

0.646

polar.mysql.mmx8.xlarge

8 cores, 64 GB memory

496

1.033

polar.mysql.mmx4.2xlarge

16 cores, 64 GB memory

619

1.290

polar.mysql.mmx8.2xlarge

16 cores, 128 GB memory

991

2.065

polar.mysql.mmx4.4xlarge

32 cores, 128 GB memory

1,238

2.580

polar.mysql.mmx8.4xlarge

32 cores, 256 GB memory

1,982

4.129

polar.mysql.mmx8.8xlarge

64 cores, 512 GB memory

3,963

8.256

polar.mysql.mmx8.12xlarge

88 cores, 710 GB memory

5,449

11.352

Multi-master Cluster (Limitless) Edition (General-purpose)

polar.mysql.mmg2.xlarge

8 cores, 16 GB memory

163

0.339

polar.mysql.mmg4.xlarge

8 cores, 32 GB memory

255

0.532

polar.mysql.mmg4.2xlarge

16 cores, 64 GB memory

503

1.048

polar.mysql.mmg6.2xlarge

16 cores, 96 GB memory

635

1.303

polar.mysql.mmg8.2xlarge

16 cores, 128 GB memory

796

1.676

polar.mysql.mmg4.4xlarge

32 cores, 128 GB memory

1,006

2.096

Cluster Edition (Dedicated)

polar.mysql.x4.medium

2 cores, 8 GB memory

44

0.092

polar.mysql.x8.medium

2 cores, 16 GB memory

128

0.266

polar.mysql.x4.large

4 cores,16 GB memory

155

0.323

polar.mysql.x8.large

4 cores, 32 GB memory

252

0.525

polar.mysql.x4.xlarge

8 cores, 32 GB memory

310

0.646

polar.mysql.x8.xlarge

8 cores, 64 GB memory

496

1.033

polar.mysql.x4.2xlarge

16 cores, 64 GB memory

619

1.290

polar.mysql.x8.2xlarge.gpu

16 cores, 125 GB memory and one GU100

3,035.83

\-

polar.mysql.x8.2xlarge

16 cores, 128 GB memory

991

2.065

polar.mysql.x4.4xlarge

32 cores, 128 GB memory

1,238

2.580

polar.mysql.x8.4xlarge

32 cores, 256 GB memory

1,982

4.129

polar.mysql.x8.8xlarge

64 cores, 512 GB memory

3,963

8.256

polar.mysql.x8.12xlarge

88 cores, 710 GB memory

5,449

11.352

Cluster Edition (General-purpose)

polar.mysql.g2.medium

2 cores, 4 GB memory

39

0.081

polar.mysql.g4.medium

2 cores, 8 GB memory

43

0.090

polar.mysql.g2.large

4 cores, 8 GB memory

74

0.153

polar.mysql.g4.large

4 cores, 16 GB memory

132

0.274

polar.mysql.g2.xlarge

8 cores, 16 GB memory

163

0.339

polar.mysql.g8.2xlarge.gpu

8 cores, 30 GB memory and one GU30

867.38

\-

polar.mysql.g4.xlarge

8 cores, 32 GB memory

255

0.532

polar.mysql.g4.2xlarge

16 cores, 64 GB memory

503

1.048

polar.mysql.g6.2xlarge

16 cores, 96 GB memory

635

1.303

polar.mysql.g8.2xlarge

16 cores, 128 GB memory

796

1.676

polar.mysql.g4.4xlarge

32 cores, 128 GB memory

1,006

2.096

#### China (Hong Kong)

**Edition**

**Node type**

**CPU and memory**

**USD per month**

**USD per hour**

Multi-master Cluster (Limitless) Edition (Dedicated)

polar.mysql.mmx4.xlarge

8 cores, 32 GB memory

589

1.063

polar.mysql.mmx8.xlarge

8 cores, 64 GB memory

743

1.342

polar.mysql.mmx4.2xlarge

16 cores, 64 GB memory

1,176

2.451

polar.mysql.mmx8.2xlarge

16 cores, 128 GB memory

1,486

2.684

polar.mysql.mmx4.4xlarge

32 cores, 128 GB memory

2,353

4.903

polar.mysql.mmx8.4xlarge

32 cores, 256 GB memory

2,972

5.367

polar.mysql.mmx8.8xlarge

64 cores, 512 GB memory

5,944

12.384

polar.mysql.mmx8.12xlarge

88 cores, 710 GB memory

8,173

14.756

Multi-master Cluster (Limitless) Edition (General-purpose)

polar.mysql.mmg2.xlarge

8 cores, 16 GB memory

310

0.645

polar.mysql.mmg4.xlarge

8 cores, 32 GB memory

500

1.042

polar.mysql.mmg4.2xlarge

16 cores, 64 GB memory

1,000

2.084

polar.mysql.mmg6.2xlarge

16 cores, 96 GB memory

1,206

2.476

polar.mysql.mmg8.2xlarge

16 cores, 128 GB memory

1,512

3.185

polar.mysql.mmg4.4xlarge

32 cores, 128 GB memory

2,000

4.168

Cluster Edition (Dedicated)

polar.mysql.x4.medium

2 cores, 8 GB memory

76

0.117

polar.mysql.x8.medium

2 cores, 16 GB memory

243

0.506

polar.mysql.x4.large

4 cores,16 GB memory

295

0.53

polar.mysql.x8.large

4 cores, 32 GB memory

478

0.997

polar.mysql.x4.xlarge

8 cores, 32 GB memory

589

1.063

polar.mysql.x8.xlarge

8 cores, 64 GB memory

743

1.342

polar.mysql.x4.2xlarge

16 cores, 64 GB memory

1,176

2.451

polar.mysql.x8.2xlarge.gpu

16 cores, 125 GB memory and one GU100

5,768.08

\-

polar.mysql.x8.2xlarge

16 cores, 128 GB memory

1,486

2.684

polar.mysql.x4.4xlarge

32 cores, 128 GB memory

2,353

4.903

polar.mysql.x8.4xlarge

32 cores, 256 GB memory

2,972

5.367

polar.mysql.x8.8xlarge

64 cores, 512 GB memory

5,944

12.384

polar.mysql.x8.12xlarge

88 cores, 710 GB memory

8,173

14.756

Cluster Edition (General-purpose)

polar.mysql.g2.medium

2 cores, 4 GB memory

65

0.135

polar.mysql.g4.medium

2 cores, 8 GB memory

76

0.158

polar.mysql.g2.large

4 cores, 8 GB memory

130

0.271

polar.mysql.g4.large

4 cores, 16 GB memory

250

0.521

polar.mysql.g2.xlarge

8 cores, 16 GB memory

310

0.645

polar.mysql.g8.2xlarge.gpu

8 cores, 30 GB memory and one GU30

1,648.02

\-

polar.mysql.g4.xlarge

8 cores, 32 GB memory

500

1.042

polar.mysql.g4.2xlarge

16 cores, 64 GB memory

1,000

2.084

polar.mysql.g6.2xlarge

16 cores, 96 GB memory

1,206

2.476

polar.mysql.g8.2xlarge

16 cores, 128 GB memory

1,512

3.185

polar.mysql.g4.4xlarge

32 cores, 128 GB memory

2,000

4.168

#### Japan (Tokyo)

**Edition**

**Node type**

**CPU and memory**

**USD per month**

**USD per hour**

Multi-master Cluster (Limitless) Edition (Dedicated)

polar.mysql.mmx4.xlarge

8 cores, 32 GB memory

496

1.040

polar.mysql.mmx8.xlarge

8 cores, 64 GB memory

635

1.330

polar.mysql.mmx4.2xlarge

16 cores, 64 GB memory

991

2.064

polar.mysql.mmx8.2xlarge

16 cores, 128 GB memory

1,270

2.650

polar.mysql.mmx4.4xlarge

32 cores, 128 GB memory

1,981

4.129

polar.mysql.mmx8.4xlarge

32 cores, 256 GB memory

2,539

5.290

polar.mysql.mmx8.8xlarge

64 cores, 512 GB memory

5,586

11.640

polar.mysql.mmx8.12xlarge

88 cores, 710 GB memory

6,981

14.550

Multi-master Cluster (Limitless) Edition (General-purpose)

polar.mysql.mmg2.xlarge

8 cores, 16 GB memory

251

0.523

polar.mysql.mmg4.xlarge

8 cores, 32 GB memory

471

0.982

polar.mysql.mmg4.2xlarge

16 cores, 64 GB memory

942

1.963

polar.mysql.mmg6.2xlarge

16 cores, 96 GB memory

1,015

2.085

polar.mysql.mmg8.2xlarge

16 cores, 128 GB memory

1,273

2.682

polar.mysql.mmg4.4xlarge

32 cores, 128 GB memory

1,884

3.926

Cluster Edition (Dedicated)

polar.mysql.x4.medium

2 cores, 8 GB memory

64

0.140

polar.mysql.x8.medium

2 cores, 16 GB memory

204

0.426

polar.mysql.x4.large

4 cores,16 GB memory

248

0.520

polar.mysql.x8.large

4 cores, 32 GB memory

402

0.840

polar.mysql.x4.xlarge

8 cores, 32 GB memory

496

1.040

polar.mysql.x8.xlarge

8 cores, 64 GB memory

635

1.330

polar.mysql.x4.2xlarge

16 cores, 64 GB memory

991

2.064

polar.mysql.x8.2xlarge.gpu

16 cores, 125 GB memory and one GU100

4,857.33

\-

polar.mysql.x8.2xlarge

16 cores, 128 GB memory

1,270

2.650

polar.mysql.x4.4xlarge

32 cores, 128 GB memory

1,981

4.129

polar.mysql.x8.4xlarge

32 cores, 256 GB memory

2,539

5.290

polar.mysql.x8.8xlarge

64 cores, 512 GB memory

5,586

11.640

polar.mysql.x8.12xlarge

88 cores, 710 GB memory

6,981

14.550

Cluster Edition (General-purpose)

polar.mysql.g2.medium

2 cores, 4 GB memory

60

0.124

polar.mysql.g4.medium

2 cores, 8 GB memory

63

0.132

polar.mysql.g2.large

4 cores, 8 GB memory

126

0.262

polar.mysql.g4.large

4 cores, 16 GB memory

236

0.491

polar.mysql.g2.xlarge

8 cores, 16 GB memory

251

0.523

polar.mysql.g8.2xlarge.gpu

8 cores, 30 GB memory and one GU30

1,387.81

\-

polar.mysql.g4.xlarge

8 cores, 32 GB memory

471

0.982

polar.mysql.g4.2xlarge

16 cores, 64 GB memory

942

1.963

polar.mysql.g6.2xlarge

16 cores, 96 GB memory

1,015

2.085

polar.mysql.g8.2xlarge

16 cores, 128 GB memory

1,273

2.682

polar.mysql.g4.4xlarge

32 cores, 128 GB memory

1,884

3.926

#### South Korea (Seoul)

**Edition**

**Node type**

**CPU and memory**

**USD per month**

**USD per hour**

Multi-master Cluster (Limitless) Edition (Dedicated)

polar.mysql.mmx4.xlarge

8 cores, 32 GB memory

496

1.040

polar.mysql.mmx8.xlarge

8 cores, 64 GB memory

635

1.330

polar.mysql.mmx4.2xlarge

16 cores, 64 GB memory

991

2.064

polar.mysql.mmx8.2xlarge

16 cores, 128 GB memory

1,270

2.650

polar.mysql.mmx4.4xlarge

32 cores, 128 GB memory

1,981

4.129

polar.mysql.mmx8.4xlarge

32 cores, 256 GB memory

2,539

5.290

polar.mysql.mmx8.8xlarge

64 cores, 512 GB memory

5,586

11.640

polar.mysql.mmx8.12xlarge

88 cores, 710 GB memory

6,981

14.550

Multi-master Cluster (Limitless) Edition (General-purpose)

polar.mysql.mmg2.xlarge

8 cores, 16 GB memory

251

0.523

polar.mysql.mmg4.xlarge

8 cores, 32 GB memory

471

0.982

polar.mysql.mmg4.2xlarge

16 cores, 64 GB memory

942

1.963

polar.mysql.mmg6.2xlarge

16 cores, 96 GB memory

1,015

2.085

polar.mysql.mmg8.2xlarge

16 cores, 128 GB memory

1,273

2.682

polar.mysql.mmg4.4xlarge

32 cores, 128 GB memory

1,884

3.926

Cluster Edition (Dedicated)

polar.mysql.x4.medium

2 cores, 8 GB memory

64

0.140

polar.mysql.x8.medium

2 cores, 16 GB memory

204

0.426

polar.mysql.x4.large

4 cores,16 GB memory

248

0.520

polar.mysql.x8.large

4 cores, 32 GB memory

402

0.840

polar.mysql.x4.xlarge

8 cores, 32 GB memory

496

1.040

polar.mysql.x8.xlarge

8 cores, 64 GB memory

635

1.330

polar.mysql.x4.2xlarge

16 cores, 64 GB memory

991

2.064

polar.mysql.x8.2xlarge.gpu

16-core 125 GB memory and one GU100

\-

\-

polar.mysql.x8.2xlarge

16 cores, 128 GB memory

1,270

2.650

polar.mysql.x4.4xlarge

32 cores, 128 GB memory

1,981

4.129

polar.mysql.x8.4xlarge

32 cores, 256 GB memory

2,539

5.290

polar.mysql.x8.8xlarge

64 cores, 512 GB memory

5,586

11.640

polar.mysql.x8.12xlarge

88 cores, 710 GB memory

6,981

14.550

Cluster Edition (General-purpose)

polar.mysql.g2.medium

2 cores, 4 GB memory

60

0.124

polar.mysql.g4.medium

2 cores, 8 GB memory

63

0.132

polar.mysql.g2.large

4 cores, 8 GB memory

126

0.262

polar.mysql.g4.large

4 cores, 16 GB memory

236

0.491

polar.mysql.g2.xlarge

8 cores, 16 GB memory

251

0.523

polar.mysql.g8.2xlarge.gpu

8-core 30 GB memory and one GU30

\-

\-

polar.mysql.g4.xlarge

8 cores, 32 GB memory

471

0.982

polar.mysql.g4.2xlarge

16 cores, 64 GB memory

942

1.963

polar.mysql.g6.2xlarge

16 cores, 96 GB memory

1,015

2.085

polar.mysql.g8.2xlarge

16 cores, 128 GB memory

1,273

2.682

polar.mysql.g4.4xlarge

32 cores, 128 GB memory

1,884

3.926

#### Singapore

**Edition**

**Node type**

**CPU and memory**

**USD per month**

**USD per hour**

Multi-master Cluster (Limitless) Edition (Dedicated)

polar.mysql.mmx4.xlarge

8 cores, 32 GB memory

589

1.230

polar.mysql.mmx8.xlarge

8 cores, 64 GB memory

743

1.550

polar.mysql.mmx4.2xlarge

16 cores, 64 GB memory

1,176

2.451

polar.mysql.mmx8.2xlarge

16 cores, 128 GB memory

1,486

3.100

polar.mysql.mmx4.4xlarge

32 cores, 128 GB memory

2,353

4.903

polar.mysql.mmx8.4xlarge

32 cores, 256 GB memory

2,972

6.200

polar.mysql.mmx8.8xlarge

64 cores, 512 GB memory

5,944

12.390

polar.mysql.mmx8.12xlarge

88 cores, 710 GB memory

8,173

17.030

Multi-master Cluster (Limitless) Edition (General-purpose)

polar.mysql.mmg2.xlarge

8 cores, 16 GB memory

300

0.625

polar.mysql.mmg4.xlarge

8 cores, 32 GB memory

577

1.202

polar.mysql.mmg4.2xlarge

16 cores, 64 GB memory

1,154

2.404

polar.mysql.mmg6.2xlarge

16 cores, 96 GB memory

1,206

2.476

polar.mysql.mmg8.2xlarge

16 cores, 128 GB memory

1,512

3.185

polar.mysql.mmg4.4xlarge

32 cores, 128 GB memory

2,308

4.808

Cluster Edition (Dedicated)

polar.mysql.x4.medium

2 cores, 8 GB memory

76

0.160

polar.mysql.x8.medium

2 cores, 16 GB memory

243

0.506

polar.mysql.x4.large

4 cores,16 GB memory

295

0.620

polar.mysql.x8.large

4 cores, 32 GB memory

478

0.997

polar.mysql.x4.xlarge

8 cores, 32 GB memory

589

1.230

polar.mysql.x8.xlarge

8 cores, 64 GB memory

743

1.550

polar.mysql.x4.2xlarge

16 cores, 64 GB memory

1,176

2.451

polar.mysql.x8.2xlarge.gpu

16 cores, 125 GB memory and one GU100

5,768.08

\-

polar.mysql.x8.2xlarge

16 cores, 128 GB memory

1,486

3.100

polar.mysql.x4.4xlarge

32 cores, 128 GB memory

2,353

4.903

polar.mysql.x8.4xlarge

32 cores, 256 GB memory

2,972

6.200

polar.mysql.x8.8xlarge

64 cores, 512 GB memory

5,944

12.390

polar.mysql.x8.12xlarge

88 cores, 710 GB memory

8,173

17.030

Cluster Edition (General-purpose)

polar.mysql.g2.medium

2 cores, 4 GB memory

75

0.156

polar.mysql.g4.medium

2 cores, 8 GB memory

76

0.158

polar.mysql.g2.large

4 cores, 8 GB memory

150

0.312

polar.mysql.g4.large

4 cores, 16 GB memory

289

0.601

polar.mysql.g2.xlarge

8 cores, 16 GB memory

300

0.625

polar.mysql.g8.2xlarge.gpu

8 cores, 30 GB memory and one GU30

1,648.02

\-

polar.mysql.g4.xlarge

8 cores, 32 GB memory

577

1.202

polar.mysql.g4.2xlarge

16 cores, 64 GB memory

1,154

2.404

polar.mysql.g6.2xlarge

16 cores, 96 GB memory

1,206

2.476

polar.mysql.g8.2xlarge

16 cores, 128 GB memory

1,512

3.185

polar.mysql.g4.4xlarge

32 cores, 128 GB memory

2,308

4.808

#### Malaysia (Kuala Lumpur)

**Edition**

**Node type**

**CPU and memory**

**USD per month**

**USD per hour**

Multi-master Cluster (Limitless) Edition (Dedicated)

polar.mysql.mmx4.xlarge

8 cores, 32 GB memory

589

1.230

polar.mysql.mmx8.xlarge

8 cores, 64 GB memory

743

1.550

polar.mysql.mmx4.2xlarge

16 cores, 64 GB memory

1,176

2.451

polar.mysql.mmx8.2xlarge

16 cores, 128 GB memory

1,486

3.100

polar.mysql.mmx4.4xlarge

32 cores, 128 GB memory

2,353

4.903

polar.mysql.mmx8.4xlarge

32 cores, 256 GB memory

2,972

6.200

polar.mysql.mmx8.8xlarge

64 cores, 512 GB memory

5,944

12.390

polar.mysql.mmx8.12xlarge

88 cores, 710 GB memory

8,173

17.030

Multi-master Cluster (Limitless) Edition (General-purpose)

polar.mysql.mmg2.xlarge

8 cores, 16 GB memory

299

0.622

polar.mysql.mmg4.xlarge

8 cores, 32 GB memory

537

1.119

polar.mysql.mmg4.2xlarge

16 cores, 64 GB memory

1,074

2.238

polar.mysql.mmg6.2xlarge

16 cores, 96 GB memory

1,206

2.476

polar.mysql.mmg8.2xlarge

16 cores, 128 GB memory

1,512

3.185

polar.mysql.mmg4.4xlarge

32 cores, 128 GB memory

2,148

4.476

Cluster Edition (Dedicated)

polar.mysql.x4.medium

2 cores, 8 GB memory

76

0.160

polar.mysql.x8.medium

2 cores, 16 GB memory

243

0.506

polar.mysql.x4.large

4 cores,16 GB memory

295

0.620

polar.mysql.x8.large

4 cores, 32 GB memory

478

0.997

polar.mysql.x4.xlarge

8 cores, 32 GB memory

589

1.230

polar.mysql.x8.xlarge

8 cores, 64 GB memory

743

1.550

polar.mysql.x4.2xlarge

16 cores, 64 GB memory

1,176

2.451

polar.mysql.x8.2xlarge.gpu

16 cores, 125 GB memory and one GU100

5,768.08

\-

polar.mysql.x8.2xlarge

16 cores, 128 GB memory

1,486

3.100

polar.mysql.x4.4xlarge

32 cores, 128 GB memory

2,353

4.903

polar.mysql.x8.4xlarge

32 cores, 256 GB memory

2,972

6.200

polar.mysql.x8.8xlarge

64 cores, 512 GB memory

5,944

12.390

polar.mysql.x8.12xlarge

88 cores, 710 GB memory

8,173

17.030

Cluster Edition (General-purpose)

polar.mysql.g2.medium

2 cores, 4 GB memory

59

0.123

polar.mysql.g4.medium

2 cores, 8 GB memory

76

0.158

polar.mysql.g2.large

4 cores, 8 GB memory

150

0.312

polar.mysql.g4.large

4 cores, 16 GB memory

269

0.561

polar.mysql.g2.xlarge

8 cores, 16 GB memory

299

0.622

polar.mysql.g8.2xlarge.gpu

8 cores, 30 GB memory and one GU30

1,648.02

\-

polar.mysql.g4.xlarge

8 cores, 32 GB memory

537

1.119

polar.mysql.g4.2xlarge

16 cores, 64 GB memory

1,074

2.238

polar.mysql.g6.2xlarge

16 cores, 96 GB memory

1,206

2.476

polar.mysql.g8.2xlarge

16 cores, 128 GB memory

1,512

3.185

polar.mysql.g4.4xlarge

32 cores, 128 GB memory

2,148

4.476

#### Indonesia (Jakarta)

**Edition**

**Node type**

**CPU and memory**

**USD per month**

**USD per hour**

Multi-master Cluster (Limitless) Edition (Dedicated)

polar.mysql.mmx4.xlarge

8 cores, 32 GB memory

542

1.129

polar.mysql.mmx8.xlarge

8 cores, 64 GB memory

689

1.436

polar.mysql.mmx4.2xlarge

16 cores, 64 GB memory

1,084

2.258

polar.mysql.mmx8.2xlarge

16 cores, 128 GB memory

1,378

2.871

polar.mysql.mmx4.4xlarge

32 cores, 128 GB memory

2,167

4.516

polar.mysql.mmx8.4xlarge

32 cores, 256 GB memory

2,756

5.742

polar.mysql.mmx8.8xlarge

64 cores, 512 GB memory

5,511

11.481

polar.mysql.mmx8.12xlarge

88 cores, 710 GB memory

7,577

15.786

Multi-master Cluster (Limitless) Edition (General-purpose)

polar.mysql.mmg2.xlarge

8 cores, 16 GB memory

300

0.625

polar.mysql.mmg4.xlarge

8 cores, 32 GB memory

461

0.960

polar.mysql.mmg4.2xlarge

16 cores, 64 GB memory

1,154

2.404

polar.mysql.mmg6.2xlarge

16 cores, 96 GB memory

1,111

2.281

polar.mysql.mmg8.2xlarge

16 cores, 128 GB memory

1,392

2.934

polar.mysql.mmg4.4xlarge

32 cores, 128 GB memory

2,308

4.808

Cluster Edition (Dedicated)

polar.mysql.x4.medium

2 cores, 8 GB memory

74

0.155

polar.mysql.x8.medium

2 cores, 16 GB memory

223

0.466

polar.mysql.x4.large

4 cores,16 GB memory

271

0.565

polar.mysql.x8.large

4 cores, 32 GB memory

440

0.918

polar.mysql.x4.xlarge

8 cores, 32 GB memory

542

1.129

polar.mysql.x8.xlarge

8 cores, 64 GB memory

689

1.436

polar.mysql.x4.2xlarge

16 cores, 64 GB memory

1,084

2.258

polar.mysql.x8.2xlarge.gpu

16 cores, 125 GB memory and one GU100

5,312.70

\-

polar.mysql.x8.2xlarge

16 cores, 128 GB memory

1,378

2.871

polar.mysql.x4.4xlarge

32 cores, 128 GB memory

2,167

4.516

polar.mysql.x8.4xlarge

32 cores, 256 GB memory

2,756

5.742

polar.mysql.x8.8xlarge

64 cores, 512 GB memory

5,511

11.481

polar.mysql.x8.12xlarge

88 cores, 710 GB memory

7,577

15.786

Cluster Edition (General-purpose)

polar.mysql.g2.medium

2 cores, 4 GB memory

63

0.131

polar.mysql.g4.medium

2 cores, 8 GB memory

74

0.153

polar.mysql.g2.large

4 cores, 8 GB memory

150

0.312

polar.mysql.g4.large

4 cores, 16 GB memory

230

0.480

polar.mysql.g2.xlarge

8 cores, 16 GB memory

300

0.625

polar.mysql.g8.2xlarge.gpu

8 cores, 30 GB memory and one GU30

1,517.91

\-

polar.mysql.g4.xlarge

8 cores, 32 GB memory

461

0.960

polar.mysql.g4.2xlarge

16 cores, 64 GB memory

1,154

2.404

polar.mysql.g6.2xlarge

16 cores, 96 GB memory

1,111

2.281

polar.mysql.g8.2xlarge

16 cores, 128 GB memory

1,392

2.934

polar.mysql.g4.4xlarge

32 cores, 128 GB memory

2,308

4.808

#### Philippines (Manila)

**Edition**

**Node type**

**CPU and memory**

**USD per month**

**USD per hour**

Multi-master Cluster (Limitless) Edition (Dedicated)

polar.mysql.mmx4.xlarge

8 cores, 32 GB memory

589

1.230

polar.mysql.mmx8.xlarge

8 cores, 64 GB memory

743

1.550

polar.mysql.mmx4.2xlarge

16 cores, 64 GB memory

1,176

2.451

polar.mysql.mmx8.2xlarge

16 cores, 128 GB memory

1,486

3.100

polar.mysql.mmx4.4xlarge

32 cores, 128 GB memory

2,353

4.903

polar.mysql.mmx8.4xlarge

32 cores, 256 GB memory

2,972

6.200

polar.mysql.mmx8.8xlarge

64 cores, 512 GB memory

5,944

12.390

polar.mysql.mmx8.12xlarge

88 cores, 710 GB memory

8,173

17.030

Multi-master Cluster (Limitless) Edition (General-purpose)

polar.mysql.mmg2.xlarge

8 cores, 16 GB memory

300

0.625

polar.mysql.mmg4.xlarge

8 cores, 32 GB memory

577

1.202

polar.mysql.mmg4.2xlarge

16 cores, 64 GB memory

1,154

2.404

polar.mysql.mmg6.2xlarge

16 cores, 96 GB memory

1,206

2.476

polar.mysql.mmg8.2xlarge

16 cores, 128 GB memory

1,512

3.185

polar.mysql.mmg4.4xlarge

32 cores, 128 GB memory

2,308

4.808

Cluster Edition (Dedicated)

polar.mysql.x4.medium

2 cores, 8 GB memory

76

0.160

polar.mysql.x8.medium

2 cores, 16 GB memory

243

0.506

polar.mysql.x4.large

4 cores,16 GB memory

295

0.620

polar.mysql.x8.large

4 cores, 32 GB memory

478

0.997

polar.mysql.x4.xlarge

8 cores, 32 GB memory

589

1.230

polar.mysql.x8.xlarge

8 cores, 64 GB memory

743

1.550

polar.mysql.x4.2xlarge

16 cores, 64 GB memory

1,176

2.451

polar.mysql.x8.2xlarge.gpu

16-core 125 GB memory and one GU100

\-

\-

polar.mysql.x8.2xlarge

16 cores, 128 GB memory

1,486

3.100

polar.mysql.x4.4xlarge

32 cores, 128 GB memory

2,353

4.903

polar.mysql.x8.4xlarge

32 cores, 256 GB memory

2,972

6.200

polar.mysql.x8.8xlarge

64 cores, 512 GB memory

5,944

12.390

polar.mysql.x8.12xlarge

88 cores, 710 GB memory

8,173

17.030

Cluster Edition (General-purpose)

polar.mysql.g2.medium

2 cores, 4 GB memory

75

0.156

polar.mysql.g4.medium

2 cores, 8 GB memory

76

0.158

polar.mysql.g2.large

4 cores, 8 GB memory

150

0.312

polar.mysql.g4.large

4 cores, 16 GB memory

289

0.601

polar.mysql.g2.xlarge

8 cores, 16 GB memory

300

0.625

polar.mysql.g8.2xlarge.gpu

8-core 30 GB memory and one GU30

\-

\-

polar.mysql.g4.xlarge

8 cores, 32 GB memory

577

1.202

polar.mysql.g4.2xlarge

16 cores, 64 GB memory

1,154

2.404

polar.mysql.g6.2xlarge

16 cores, 96 GB memory

1,206

2.476

polar.mysql.g8.2xlarge

16 cores, 128 GB memory

1,512

3.185

polar.mysql.g4.4xlarge

32 cores, 128 GB memory

2,308

4.808

#### Thailand (Bangkok)

**Edition**

**Node type**

**CPU and memory**

**USD per month**

**USD per hour**

Multi-master Cluster (Limitless) Edition (Dedicated)

polar.mysql.mmx4.xlarge

8 cores, 32 GB memory

589

1.230

polar.mysql.mmx8.xlarge

8 cores, 64 GB memory

743

1.550

polar.mysql.mmx4.2xlarge

16 cores, 64 GB memory

1,176

2.451

polar.mysql.mmx8.2xlarge

16 cores, 128 GB memory

1,486

3.100

polar.mysql.mmx4.4xlarge

32 cores, 128 GB memory

2,353

4.903

polar.mysql.mmx8.4xlarge

32 cores, 256 GB memory

2,972

6.200

polar.mysql.mmx8.8xlarge

64 cores, 512 GB memory

5,944

12.390

polar.mysql.mmx8.12xlarge

88 cores, 710 GB memory

8,173

17.030

Multi-master Cluster (Limitless) Edition (General-purpose)

polar.mysql.mmg2.xlarge

8 cores, 16 GB memory

300

0.625

polar.mysql.mmg4.xlarge

8 cores, 32 GB memory

577

1.202

polar.mysql.mmg4.2xlarge

16 cores, 64 GB memory

1,154

2.404

polar.mysql.mmg6.2xlarge

16 cores, 96 GB memory

1,206

2.476

polar.mysql.mmg8.2xlarge

16 cores, 128 GB memory

1,512

3.185

polar.mysql.mmg4.4xlarge

32 cores, 128 GB memory

2,308

4.808

Cluster Edition (Dedicated)

polar.mysql.x4.medium

2 cores, 8 GB memory

76

0.160

polar.mysql.x8.medium

2 cores, 16 GB memory

243

0.506

polar.mysql.x4.large

4 cores,16 GB memory

295

0.620

polar.mysql.x8.large

4 cores, 32 GB memory

478

0.997

polar.mysql.x4.xlarge

8 cores, 32 GB memory

589

1.230

polar.mysql.x8.xlarge

8 cores, 64 GB memory

743

1.550

polar.mysql.x4.2xlarge

16 cores, 64 GB memory

1,176

2.451

polar.mysql.x8.2xlarge.gpu

16-core 125 GB memory and one GU100

\-

\-

polar.mysql.x8.2xlarge

16 cores, 128 GB memory

1,486

3.100

polar.mysql.x4.4xlarge

32 cores, 128 GB memory

2,353

4.903

polar.mysql.x8.4xlarge

32 cores, 256 GB memory

2,972

6.200

polar.mysql.x8.8xlarge

64 cores, 512 GB memory

5,944

12.390

polar.mysql.x8.12xlarge

88 cores, 710 GB memory

8,173

17.030

Cluster Edition (General-purpose)

polar.mysql.g2.medium

2 cores, 4 GB memory

75

0.156

polar.mysql.g4.medium

2 cores, 8 GB memory

76

0.158

polar.mysql.g2.large

4 cores, 8 GB memory

150

0.312

polar.mysql.g4.large

4 cores, 16 GB memory

289

0.601

polar.mysql.g2.xlarge

8 cores, 16 GB memory

300

0.625

polar.mysql.g8.2xlarge.gpu

8-core 30 GB memory and one GU30

\-

\-

polar.mysql.g4.xlarge

8 cores, 32 GB memory

577

1.202

polar.mysql.g4.2xlarge

16 cores, 64 GB memory

1,154

2.404

polar.mysql.g6.2xlarge

16 cores, 96 GB memory

1,206

2.476

polar.mysql.g8.2xlarge

16 cores, 128 GB memory

1,512

3.185

polar.mysql.g4.4xlarge

32 cores, 128 GB memory

2,308

4.808

#### Germany (Frankfurt)

**Edition**

**Node type**

**CPU and memory**

**USD per month**

**USD per hour**

Multi-master Cluster (Limitless) Edition (Dedicated)

polar.mysql.mmx4.xlarge

8 cores, 32 GB memory

527

1.098

polar.mysql.mmx8.xlarge

8 cores, 64 GB memory

651

1.356

polar.mysql.mmx4.2xlarge

16 cores, 64 GB memory

1,053

2.193

polar.mysql.mmx8.2xlarge

16 cores, 128 GB memory

1,301

2.711

polar.mysql.mmx4.4xlarge

32 cores, 128 GB memory

2,105

4.387

polar.mysql.mmx8.4xlarge

32 cores, 256 GB memory

2,601

5.419

polar.mysql.mmx8.8xlarge

64 cores, 512 GB memory

5,722

11.921

polar.mysql.mmx8.12xlarge

88 cores, 710 GB memory

7,229

15.061

Multi-master Cluster (Limitless) Edition (General-purpose)

polar.mysql.mmg2.xlarge

8 cores, 16 GB memory

280

0.580

polar.mysql.mmg4.xlarge

8 cores, 32 GB memory

445

0.927

polar.mysql.mmg4.2xlarge

16 cores, 64 GB memory

890

1.854

polar.mysql.mmg6.2xlarge

16 cores, 96 GB memory

1,079

2.216

polar.mysql.mmg8.2xlarge

16 cores, 128 GB memory

1,353

2.850

polar.mysql.mmg4.4xlarge

32 cores, 128 GB memory

1,780

3.708

Cluster Edition (Dedicated)

polar.mysql.x4.medium

2 cores, 8 GB memory

67

0.140

polar.mysql.x8.medium

2 cores, 16 GB memory

217

0.453

polar.mysql.x4.large

4 cores,16 GB memory

264

0.550

polar.mysql.x8.large

4 cores, 32 GB memory

428

0.892

polar.mysql.x4.xlarge

8 cores, 32 GB memory

527

1.098

polar.mysql.x8.xlarge

8 cores, 64 GB memory

651

1.356

polar.mysql.x4.2xlarge

16 cores, 64 GB memory

1,053

2.193

polar.mysql.x8.2xlarge.gpu

16 cores, 125 GB memory and one GU100

5,160.91

\-

polar.mysql.x8.2xlarge

16 cores, 128 GB memory

1,301

2.711

polar.mysql.x4.4xlarge

32 cores, 128 GB memory

2,105

4.387

polar.mysql.x8.4xlarge

32 cores, 256 GB memory

2,601

5.419

polar.mysql.x8.8xlarge

64 cores, 512 GB memory

5,722

11.921

polar.mysql.x8.12xlarge

88 cores, 710 GB memory

7,229

15.061

Cluster Edition (General-purpose)

polar.mysql.g2.medium

2 cores, 4 GB memory

46

0.095

polar.mysql.g4.medium

2 cores, 8 GB memory

67

0.139

polar.mysql.g2.large

4 cores, 8 GB memory

118

0.245

polar.mysql.g4.large

4 cores, 16 GB memory

222

0.464

polar.mysql.g2.xlarge

8 cores, 16 GB memory

280

0.580

polar.mysql.g8.2xlarge.gpu

8 cores, 30 GB memory and one GU30

1,474.55

\-

polar.mysql.g4.xlarge

8 cores, 32 GB memory

445

0.927

polar.mysql.g4.2xlarge

16 cores, 64 GB memory

890

1.854

polar.mysql.g6.2xlarge

16 cores, 96 GB memory

1,079

2.216

polar.mysql.g8.2xlarge

16 cores, 128 GB memory

1,353

2.850

polar.mysql.g4.4xlarge

32 cores, 128 GB memory

1,780

3.708

#### US (Silicon Valley)

**Edition**

**Node type**

**CPU and memory**

**USD per month**

**USD per hour**

Multi-master Cluster (Limitless) Edition (Dedicated)

polar.mysql.mmx4.xlarge

8 cores, 32 GB memory

480

1.000

polar.mysql.mmx8.xlarge

8 cores, 64 GB memory

620

1.292

polar.mysql.mmx4.2xlarge

16 cores, 64 GB memory

960

2.000

polar.mysql.mmx8.2xlarge

16 cores, 128 GB memory

1,239

2.581

polar.mysql.mmx4.4xlarge

32 cores, 128 GB memory

1,920

4.000

polar.mysql.mmx8.4xlarge

32 cores, 256 GB memory

2,477

5.161

polar.mysql.mmx8.8xlarge

64 cores, 512 GB memory

4,953

10.319

polar.mysql.mmx8.12xlarge

88 cores, 710 GB memory

6,811

14.190

Multi-master Cluster (Limitless) Edition (General-purpose)

polar.mysql.mmg2.xlarge

8 cores, 16 GB memory

280

0.583

polar.mysql.mmg4.xlarge

8 cores, 32 GB memory

408

0.850

polar.mysql.mmg4.2xlarge

16 cores, 64 GB memory

1,077

2.244

polar.mysql.mmg6.2xlarge

16 cores, 96 GB memory

984

2.020

polar.mysql.mmg8.2xlarge

16 cores, 128 GB memory

1,233

2.599

polar.mysql.mmg4.4xlarge

32 cores, 128 GB memory

2,154

4.488

Cluster Edition (Dedicated)

polar.mysql.x4.medium

2 cores, 8 GB memory

62

0.130

polar.mysql.x8.medium

2 cores, 16 GB memory

198

0.413

polar.mysql.x4.large

4 cores,16 GB memory

240

0.500

polar.mysql.x8.large

4 cores, 32 GB memory

390

0.813

polar.mysql.x4.xlarge

8 cores, 32 GB memory

480

1.000

polar.mysql.x8.xlarge

8 cores, 64 GB memory

620

1.292

polar.mysql.x4.2xlarge

16 cores, 64 GB memory

960

2.000

polar.mysql.x8.2xlarge.gpu

16 cores, 125 GB memory and one GU100

4,705.54

\-

polar.mysql.x8.2xlarge

16 cores, 128 GB memory

1,239

2.581

polar.mysql.x4.4xlarge

32 cores, 128 GB memory

1,920

4.000

polar.mysql.x8.4xlarge

32 cores, 256 GB memory

2,477

5.161

polar.mysql.x8.8xlarge

64 cores, 512 GB memory

4,953

10.319

polar.mysql.x8.12xlarge

88 cores, 710 GB memory

6,811

14.190

Cluster Edition (General-purpose)

polar.mysql.g2.medium

2 cores, 4 GB memory

52

0.110

polar.mysql.g4.medium

2 cores, 8 GB memory

61

0.127

polar.mysql.g2.large

4 cores, 8 GB memory

140

0.292

polar.mysql.g4.large

4 cores, 16 GB memory

204

0.425

polar.mysql.g2.xlarge

8 cores, 16 GB memory

280

0.583

polar.mysql.g8.2xlarge.gpu

8 cores, 30 GB memory and one GU30

1,344.44

\-

polar.mysql.g4.xlarge

8 cores, 32 GB memory

408

0.850

polar.mysql.g4.2xlarge

16 cores, 64 GB memory

1,077

2.244

polar.mysql.g6.2xlarge

16 cores, 96 GB memory

984

2.020

polar.mysql.g8.2xlarge

16 cores, 128 GB memory

1,233

2.599

polar.mysql.g4.4xlarge

32 cores, 128 GB memory

2,154

4.488

#### US (Virginia)

**Edition**

**Node type**

**CPU and memory**

**USD per month**

**USD per hour**

Multi-master Cluster (Limitless) Edition (Dedicated)

polar.mysql.mmx4.xlarge

8 cores, 32 GB memory

403

0.840

polar.mysql.mmx8.xlarge

8 cores, 64 GB memory

496

1.033

polar.mysql.mmx4.2xlarge

16 cores, 64 GB memory

805

1.677

polar.mysql.mmx8.2xlarge

16 cores, 128 GB memory

991

2.065

polar.mysql.mmx4.4xlarge

32 cores, 128 GB memory

1,610

3.355

polar.mysql.mmx8.4xlarge

32 cores, 256 GB memory

1,982

4.129

polar.mysql.mmx8.8xlarge

64 cores, 512 GB memory

4,360

9.084

polar.mysql.mmx8.12xlarge

88 cores, 710 GB memory

5,449

11.352

Multi-master Cluster (Limitless) Edition (General-purpose)

polar.mysql.mmg2.xlarge

8 cores, 16 GB memory

280

0.583

polar.mysql.mmg4.xlarge

8 cores, 32 GB memory

342

0.713

polar.mysql.mmg4.2xlarge

16 cores, 64 GB memory

1,077

2.44

polar.mysql.mmg6.2xlarge

16 cores, 96 GB memory

825

1.694

polar.mysql.mmg8.2xlarge

16 cores, 128 GB memory

1,034

2.179

polar.mysql.mmg4.4xlarge

32 cores, 128 GB memory

2,154

4.88

Cluster Edition (Dedicated)

polar.mysql.x4.medium

2 cores, 8 GB memory

50

0.105

polar.mysql.x8.medium

2 cores, 16 GB memory

166

0.346

polar.mysql.x4.large

4 cores,16 GB memory

202

0.421

polar.mysql.x8.large

4 cores, 32 GB memory

327

0.682

polar.mysql.x4.xlarge

8 cores, 32 GB memory

403

0.840

polar.mysql.x8.xlarge

8 cores, 64 GB memory

496

1.033

polar.mysql.x4.2xlarge

16 cores, 64 GB memory

805

1.677

polar.mysql.x8.2xlarge.gpu

16 cores, 125 GB memory and one GU100

3,946.58

\-

polar.mysql.x8.2xlarge

16 cores, 128 GB memory

991

2.065

polar.mysql.x4.4xlarge

32 cores, 128 GB memory

1,610

3.355

polar.mysql.x8.4xlarge

32 cores, 256 GB memory

1,982

4.129

polar.mysql.x8.8xlarge

64 cores, 512 GB memory

4,360

9.084

polar.mysql.x8.12xlarge

88 cores, 710 GB memory

5,449

11.352

Cluster Edition (General-purpose)

polar.mysql.g2.medium

2 cores, 4 GB memory

42

0.088

polar.mysql.g4.medium

2 cores, 8 GB memory

50

0.103

polar.mysql.g2.large

4 cores, 8 GB memory

140

0.292

polar.mysql.g4.large

4 cores, 16 GB memory

171

0.356

polar.mysql.g2.xlarge

8 cores, 16 GB memory

280

0.583

polar.mysql.g8.2xlarge.gpu

8 cores, 30 GB memory and one GU30

1,127.59

\-

polar.mysql.g4.xlarge

8 cores, 32 GB memory

342

0.713

polar.mysql.g4.2xlarge

16 cores, 64 GB memory

1,077

2.44

polar.mysql.g6.2xlarge

16 cores, 96 GB memory

825

1.694

polar.mysql.g8.2xlarge

16 cores, 128 GB memory

1,034

2.179

polar.mysql.g4.4xlarge

32 cores, 128 GB memory

2,154

4.880

#### UK (London)

**Edition**

**Node type**

**CPU and memory**

**USD per month**

**USD per hour**

Multi-master Cluster (Limitless) Edition (Dedicated)

polar.mysql.mmx4.xlarge

8 cores, 32 GB memory

589

1.063

polar.mysql.mmx8.xlarge

8 cores, 64 GB memory

743

1.342

polar.mysql.mmx4.2xlarge

16 cores, 64 GB memory

1,176

2.451

polar.mysql.mmx8.2xlarge

16 cores, 128 GB memory

1,486

2.684

polar.mysql.mmx4.4xlarge

32 cores, 128 GB memory

2,353

4.903

polar.mysql.mmx8.4xlarge

32 cores, 256 GB memory

2,972

5.367

polar.mysql.mmx8.8xlarge

64 cores, 512 GB memory

5,944

12.384

polar.mysql.mmx8.12xlarge

88 cores, 710 GB memory

8,173

14.756

Multi-master Cluster (Limitless) Edition (General-purpose)

polar.mysql.mmg2.xlarge

8 cores, 16 GB memory

310

0.645

polar.mysql.mmg4.xlarge

8 cores, 32 GB memory

445

0.927

polar.mysql.mmg4.2xlarge

16 cores, 64 GB memory

890

1.854

polar.mysql.mmg6.2xlarge

16 cores, 96 GB memory

1,206

2.476

polar.mysql.mmg8.2xlarge

16 cores, 128 GB memory

1,512

3.185

polar.mysql.mmg4.4xlarge

32 cores, 128 GB memory

1,780

3.708

Cluster Edition (Dedicated)

polar.mysql.x4.medium

2 cores, 8 GB memory

76

0.117

polar.mysql.x8.medium

2 cores, 16 GB memory

243

0.506

polar.mysql.x4.large

4 cores,16 GB memory

295

0.53

polar.mysql.x8.large

4 cores, 32 GB memory

478

0.997

polar.mysql.x4.xlarge

8 cores, 32 GB memory

589

1.342

polar.mysql.x8.xlarge

8 cores, 64 GB memory

743

2.451

polar.mysql.x4.2xlarge

16 cores, 64 GB memory

1,176

2.684

polar.mysql.x8.2xlarge.gpu

16 cores, 125 GB memory and one GU100

5,768.08

\-

polar.mysql.x8.2xlarge

16 cores, 128 GB memory

1,486

4.903

polar.mysql.x4.4xlarge

32 cores, 128 GB memory

2,353

5.367

polar.mysql.x8.4xlarge

32 cores, 256 GB memory

2,972

12.384

polar.mysql.x8.8xlarge

64 cores, 512 GB memory

5,944

14.756

polar.mysql.x8.12xlarge

88 cores, 710 GB memory

8,173

0.095

Cluster Edition (General-purpose)

polar.mysql.g2.medium

2 cores, 4 GB memory

46

0.095

polar.mysql.g4.medium

2 cores, 8 GB memory

76

0.158

polar.mysql.g2.large

4 cores, 8 GB memory

118

0.245

polar.mysql.g4.large

4 cores, 16 GB memory

222

0.464

polar.mysql.g2.xlarge

8 cores, 16 GB memory

310

0.645

polar.mysql.g8.2xlarge.gpu

8 cores, 30 GB memory and one GU30

1,648.02

\-

polar.mysql.g4.xlarge

8 cores, 32 GB memory

445

0.927

polar.mysql.g4.2xlarge

16 cores, 64 GB memory

890

1.854

polar.mysql.g6.2xlarge

16 cores, 96 GB memory

1,206

2.476

polar.mysql.g8.2xlarge

16 cores, 128 GB memory

1,512

3.185

polar.mysql.g4.4xlarge

32 cores, 128 GB memory

1,780

3.708

### Standard Edition

Pricing of a single compute node

#### Regions in the Chinese mainland

CPU architecture

**Node type**

**CPU and memory**

**USD per month**

**USD per hour**

x86 (General-purpose)

polar.mysql.g1.tiny.c

1 core, 1 GB memory

1.69

0.00352

polar.mysql.g1.small.c

1 core, 2 GB memory

2.77

0.00577

polar.mysql.g2.small.c

2 cores, 4 GB memory

34.62

0.07212

polar.mysql.g4.medium.c

2 cores, 8 GB memory

40

0.08333

polar.mysql.g8.medium.c

2 cores, 16 GB memory

67.69

0.14103

polar.mysql.g2.large.c

4 cores, 8 GB memory

69.23

0.14423

polar.mysql.g4.large.c

4 cores, 16 GB memory

101.54

0.21154

polar.mysql.g8.large.c

4 cores, 32 GB memory

135.38

0.28205

polar.mysql.g2.xlarge.c

8 cores, 16 GB memory

159.23

0.33173

polar.mysql.g4.xlarge.c

8 cores, 32 GB memory

204.62

0.42628

polar.mysql.g8.xlarge.c

8 cores, 64 GB memory

270.77

0.5641

polar.mysql.g2.2xlarge.c

16 cores, 32 GB memory

318.46

0.66346

polar.mysql.g4.2xlarge.c

16 cores, 64 GB memory

409.23

0.85256

polar.mysql.g8.2xlarge.c

16 cores, 128 GB memory

541.54

1.1282

x86 (Dedicated)

polar.mysql.x4.medium.c

2 cores, 8 GB memory

41.54

0.08654

polar.mysql.x8.medium.c

2 cores, 16 GB memory

75.38

0.15705

polar.mysql.x2.large.c

4 cores, 8 GB memory

93.08

0.19391

polar.mysql.x4.large.c

4 cores, 16 GB memory

117.69

0.24519

polar.mysql.x8.large.c

4 cores, 32 GB memory

150.77

0.3141

polar.mysql.x2.xlarge.c

8 cores, 16 GB memory

184.62

0.38462

polar.mysql.x4.xlarge.c

8 cores, 32 GB memory

233.85

0.48718

polar.mysql.x8.xlarge.c

8 cores, 64 GB memory

296.92

0.61859

polar.mysql.x2.2xlarge.c

16 cores, 32 GB memory

369.23

0.76923

polar.mysql.x4.2xlarge.c

16 cores, 64 GB memory

461.54

0.96154

polar.mysql.x8.2xlarge.c

16 cores, 128 GB memory

584.62

1.21795

polar.mysql.x2.4xlarge.c

32 cores, 64 GB memory

727.69

1.51603

polar.mysql.x4.4xlarge.c

32 cores, 128 GB memory

904.62

1.88462

polar.mysql.x8.4xlarge.c

32 cores, 256 GB memory

1170.77

2.43911

polar.mysql.x4.8xlarge.c

64 cores, 256 GB memory

1784.62

3.71795

polar.mysql.x8.8xlarge.c

64 cores, 512 GB memory

2289.23

4.76923

Yitian ARM (General-purpose)

polar.mysql.g1m.tiny.c

1 core, 1 GB memory

1.69

0.004

polar.mysql.g1m.small.c

1 core, 2 GB memory

2.77

0.006

polar.mysql.g2m.small.c

2 cores, 4 GB memory

20.77

0.043

polar.mysql.g4m.medium.c

2 cores, 8 GB memory

30.00

0.063

polar.mysql.g8m.medium.c

2 cores, 16 GB memory

40.77

0.085

polar.mysql.g2m.large.c

4 cores, 8 GB memory

41.54

0.087

polar.mysql.g4m.large.c

4 cores, 16 GB memory

62.31

0.130

polar.mysql.g8m.large.c

4 cores, 32 GB memory

84.62

0.176

polar.mysql.g2m.xlarge.c

8 cores, 16 GB memory

86.92

0.181

polar.mysql.g4m.xlarge.c

8 cores, 32 GB memory

130.00

0.271

polar.mysql.g8m.xlarge.c

8 cores, 64 GB memory

176.15

0.367

polar.mysql.g2m.2xlarge.c

16 cores, 32 GB memory

173.85

0.362

polar.mysql.g4m.2xlarge.c

16 cores, 64 GB memory

260.00

0.542

polar.mysql.g8m.2xlarge.c

16 cores, 128 GB memory

352.31

0.734

Yitian ARM (Dedicated)

polar.mysql.x4m.medium.c

2 cores, 8 GB memory

41.54

0.087

polar.mysql.x8m.medium.c

2 cores, 16 GB memory

56.15

0.117

polar.mysql.x2m.large.c

4 cores, 8 GB memory

57.69

0.120

polar.mysql.x4m.large.c

4 cores, 16 GB memory

86.92

0.181

polar.mysql.x8m.large.c

4 cores, 32 GB memory

117.69

0.245

polar.mysql.x2m.xlarge.c

8 cores, 16 GB memory

115.38

0.240

polar.mysql.x4m.xlarge.c

8 cores, 32 GB memory

173.85

0.362

polar.mysql.x8m.xlarge.c

8 cores, 64 GB memory

235.38

0.490

polar.mysql.x2m.2xlarge.c

16 cores, 32 GB memory

243.08

0.506

polar.mysql.x4m.2xlarge.c

16 cores, 64 GB memory

363.85

0.758

polar.mysql.x8m.2xlarge.c

16 cores, 128 GB memory

493.85

1.029

polar.mysql.x2m.4xlarge.c

32 cores, 64 GB memory

486.15

1.013

polar.mysql.x4m.4xlarge.c

32 cores, 128 GB memory

727.69

1.516

polar.mysql.x8m.4xlarge.c

32 cores, 256 GB memory

987.69

2.058

#### China (Hong Kong)

CPU architecture

**Node type**

**CPU and memory**

**USD per month**

**USD per hour**

x86 (General-purpose)

polar.mysql.g1.tiny.c

1 core, 1 GB memory

2.77

0.00577

polar.mysql.g1.small.c

1 core, 2 GB memory

5.23

0.01089

polar.mysql.g2.small.c

2 cores, 4 GB memory

65.77

0.13703

polar.mysql.g4.medium.c

2 cores, 8 GB memory

76

0.15833

polar.mysql.g8.medium.c

2 cores, 16 GB memory

128.62

0.26795

polar.mysql.g2.large.c

4 cores, 8 GB memory

131.54

0.27404

polar.mysql.g4.large.c

4 cores, 16 GB memory

192.92

0.40192

polar.mysql.g8.large.c

4 cores, 32 GB memory

257.23

0.5359

polar.mysql.g2.xlarge.c

8 cores, 16 GB memory

302.62

0.63029

polar.mysql.g4.xlarge.c

8 cores, 32 GB memory

388.77

0.80994

polar.mysql.g8.xlarge.c

8 cores, 64 GB memory

514.46

1.0718

polar.mysql.g2.2xlarge.c

16 cores, 32 GB memory

605.08

1.26058

polar.mysql.g4.2xlarge.c

16 cores, 64 GB memory

777.54

1.61988

polar.mysql.g8.2xlarge.c

16 cores, 128 GB memory

1028.92

2.14358

x86 (Dedicated)

polar.mysql.x4.medium.c

2 cores, 8 GB memory

78.92

0.16442

polar.mysql.x8.medium.c

2 cores, 16 GB memory

143.23

0.2984

polar.mysql.x2.large.c

4 cores, 8 GB memory

176.92

0.36843

polar.mysql.x4.large.c

4 cores, 16 GB memory

223.69

0.46587

polar.mysql.x8.large.c

4 cores, 32 GB memory

286.46

0.5968

polar.mysql.x2.xlarge.c

8 cores, 16 GB memory

350.77

0.73077

polar.mysql.x4.xlarge.c

8 cores, 32 GB memory

444.31

0.92564

polar.mysql.x8.xlarge.c

8 cores, 64 GB memory

564.15

1.17532

polar.mysql.x2.2xlarge.c

16 cores, 32 GB memory

701.54

1.46154

polar.mysql.x4.2xlarge.c

16 cores, 64 GB memory

876.92

1.82692

polar.mysql.x8.2xlarge.c

16 cores, 128 GB memory

1110.77

2.31411

polar.mysql.x2.4xlarge.c

32 cores, 64 GB memory

1382.62

2.88045

polar.mysql.x4.4xlarge.c

32 cores, 128 GB memory

1718.77

3.58077

polar.mysql.x8.4xlarge.c

32 cores, 256 GB memory

2224.46

4.63431

polar.mysql.x4.8xlarge.c

64 cores, 256 GB memory

3390.77

7.06411

polar.mysql.x8.8xlarge.c

64 cores, 512 GB memory

4349.54

9.06154

#### Japan (Tokyo)

CPU architecture

**Node type**

**CPU and memory**

**USD per month**

**USD per hour**

x86 (General-purpose)

polar.mysql.g1.tiny.c

1 core, 1 GB memory

2.71

0.00564

polar.mysql.g1.small.c

1 core, 2 GB memory

4.43

0.00923

polar.mysql.g2.small.c

2 cores, 4 GB memory

55.38

0.1154

polar.mysql.g4.medium.c

2 cores, 8 GB memory

64

0.13333

polar.mysql.g8.medium.c

2 cores, 16 GB memory

108.31

0.22564

polar.mysql.g2.large.c

4 cores, 8 GB memory

110.77

0.23077

polar.mysql.g4.large.c

4 cores, 16 GB memory

162.46

0.33846

polar.mysql.g8.large.c

4 cores, 32 GB memory

216.62

0.45128

polar.mysql.g2.xlarge.c

8 cores, 16 GB memory

254.77

0.53077

polar.mysql.g4.xlarge.c

8 cores, 32 GB memory

327.38

0.68205

polar.mysql.g8.xlarge.c

8 cores, 64 GB memory

433.23

0.90256

polar.mysql.g2.2xlarge.c

16 cores, 32 GB memory

509.54

1.06154

polar.mysql.g4.2xlarge.c

16 cores, 64 GB memory

654.77

1.3641

polar.mysql.g8.2xlarge.c

16 cores, 128 GB memory

866.46

1.80513

x86 (Dedicated)

polar.mysql.x4.medium.c

2 cores, 8 GB memory

66.46

0.13846

polar.mysql.x8.medium.c

2 cores, 16 GB memory

120.62

0.25128

polar.mysql.x2.large.c

4 cores, 8 GB memory

148.92

0.31026

polar.mysql.x4.large.c

4 cores, 16 GB memory

188.31

0.39231

polar.mysql.x8.large.c

4 cores, 32 GB memory

241.23

0.50256

polar.mysql.x2.xlarge.c

8 cores, 16 GB memory

295.38

0.61538

polar.mysql.x4.xlarge.c

8 cores, 32 GB memory

374.15

0.77949

polar.mysql.x8.xlarge.c

8 cores, 64 GB memory

475.08

0.98974

polar.mysql.x2.2xlarge.c

16 cores, 32 GB memory

590.77

1.23077

polar.mysql.x4.2xlarge.c

16 cores, 64 GB memory

738.46

1.53846

polar.mysql.x8.2xlarge.c

16 cores, 128 GB memory

935.38

1.94872

polar.mysql.x2.4xlarge.c

32 cores, 64 GB memory

1164.31

2.42564

polar.mysql.x4.4xlarge.c

32 cores, 128 GB memory

1447.38

3.01538

polar.mysql.x8.4xlarge.c

32 cores, 256 GB memory

1873.23

3.90257

polar.mysql.x4.8xlarge.c

64 cores, 256 GB memory

2855.38

5.94873

polar.mysql.x8.8xlarge.c

64 cores, 512 GB memory

3662.77

7.63077

#### Singapore

CPU architecture

**Node type**

**CPU and memory**

**USD per month**

**USD per hour**

x86 (General-purpose)

polar.mysql.g1.tiny.c

1 core, 1 GB memory

2.77

0.00577

polar.mysql.g1.small.c

1 core, 2 GB memory

5.23

0.01089

polar.mysql.g2.small.c

2 cores, 4 GB memory

65.77

0.13702

polar.mysql.g4.medium.c

2 cores, 8 GB memory

76.15

0.15865

polar.mysql.g8.medium.c

2 cores, 16 GB memory

128.62

0.26795

polar.mysql.g2.large.c

4 cores, 8 GB memory

131.54

0.27404

polar.mysql.g4.large.c

4 cores, 16 GB memory

192.92

0.40192

polar.mysql.g8.large.c

4 cores, 32 GB memory

257.23

0.5359

polar.mysql.g2.xlarge.c

8 cores, 16 GB memory

302.54

0.63029

polar.mysql.g4.xlarge.c

8 cores, 32 GB memory

388.77

0.80994

polar.mysql.g8.xlarge.c

8 cores, 64 GB memory

514.46

1.07179

polar.mysql.g2.2xlarge.c

16 cores, 32 GB memory

605.08

1.26058

polar.mysql.g4.2xlarge.c

16 cores, 64 GB memory

777.54

1.61986

polar.mysql.g8.2xlarge.c

16 cores, 128 GB memory

1028.92

2.14358

x86 (Dedicated)

polar.mysql.x4.medium.c

2 cores, 8 GB memory

78.92

0.16442

polar.mysql.x8.medium.c

2 cores, 16 GB memory

143.23

0.2984

polar.mysql.x2.large.c

4 cores, 8 GB memory

176.85

0.36843

polar.mysql.x4.large.c

4 cores, 16 GB memory

223.62

0.46586

polar.mysql.x8.large.c

4 cores, 32 GB memory

286.46

0.59679

polar.mysql.x2.xlarge.c

8 cores, 16 GB memory

350.77

0.73077

polar.mysql.x4.xlarge.c

8 cores, 32 GB memory

444.31

0.92564

polar.mysql.x8.xlarge.c

8 cores, 64 GB memory

564.15

1.17532

polar.mysql.x2.2xlarge.c

16 cores, 32 GB memory

701.54

1.46154

polar.mysql.x4.2xlarge.c

16 cores, 64 GB memory

876.92

1.82692

polar.mysql.x8.2xlarge.c

16 cores, 128 GB memory

1110.77

2.31409

polar.mysql.x2.4xlarge.c

32 cores, 64 GB memory

1382.62

2.88045

polar.mysql.x4.4xlarge.c

32 cores, 128 GB memory

1718.77

3.58077

polar.mysql.x8.4xlarge.c

32 cores, 256 GB memory

2224.46

4.63429

polar.mysql.x4.8xlarge.c

64 cores, 256 GB memory

3390.77

7.06409

polar.mysql.x8.8xlarge.c

64 cores, 512 GB memory

4349.54

9.06154

#### Indonesia (Jakarta)

CPU architecture

**Node type**

**CPU and memory**

**USD per month**

**USD per hour**

x86 (General-purpose)

polar.mysql.g1.tiny.c

1 core, 1 GB memory

2.77

0.00577

polar.mysql.g1.small.c

1 core, 2 GB memory

4.85

0.01009

polar.mysql.g2.small.c

2 cores, 4 GB memory

60.62

0.12628

polar.mysql.g4.medium.c

2 cores, 8 GB memory

70

0.14583

polar.mysql.g8.medium.c

2 cores, 16 GB memory

118.46

0.2468

polar.mysql.g2.large.c

4 cores, 8 GB memory

121.15

0.2524

polar.mysql.g4.large.c

4 cores, 16 GB memory

177.69

0.37019

polar.mysql.g8.large.c

4 cores, 32 GB memory

236.92

0.49359

polar.mysql.g2.xlarge.c

8 cores, 16 GB memory

278.65

0.58053

polar.mysql.g4.xlarge.c

8 cores, 32 GB memory

358.08

0.74599

polar.mysql.g8.xlarge.c

8 cores, 64 GB memory

473.85

0.98718

polar.mysql.g2.2xlarge.c

16 cores, 32 GB memory

557.31

1.16106

polar.mysql.g4.2xlarge.c

16 cores, 64 GB memory

716.15

1.49199

polar.mysql.g8.2xlarge.c

16 cores, 128 GB memory

947.69

1.97436

x86 (Dedicated)

polar.mysql.x4.medium.c

2 cores, 8 GB memory

72.69

0.15144

polar.mysql.x8.medium.c

2 cores, 16 GB memory

131.92

0.27484

polar.mysql.x2.large.c

4 cores, 8 GB memory

162.88

0.33934

polar.mysql.x4.large.c

4 cores, 16 GB memory

205.96

0.42909

polar.mysql.x8.large.c

4 cores, 32 GB memory

263.85

0.54968

polar.mysql.x2.xlarge.c

8 cores, 16 GB memory

323.08

0.67308

polar.mysql.x4.xlarge.c

8 cores, 32 GB memory

409.23

0.85257

polar.mysql.x8.xlarge.c

8 cores, 64 GB memory

519.62

1.08253

polar.mysql.x2.2xlarge.c

16 cores, 32 GB memory

646.15

1.34615

polar.mysql.x4.2xlarge.c

16 cores, 64 GB memory

807.69

1.68269

polar.mysql.x8.2xlarge.c

16 cores, 128 GB memory

1023.08

2.13141

polar.mysql.x2.4xlarge.c

32 cores, 64 GB memory

1273.46

2.65305

polar.mysql.x4.4xlarge.c

32 cores, 128 GB memory

1583.08

3.29808

polar.mysql.x8.4xlarge.c

32 cores, 256 GB memory

2048.85

4.26844

polar.mysql.x4.8xlarge.c

64 cores, 256 GB memory

3123.08

6.50642

polar.mysql.x8.8xlarge.c

64 cores, 512 GB memory

4006.15

8.34615

#### Germany (Frankfurt)

CPU architecture

**Node type**

**CPU and memory**

**USD per month**

**USD per hour**

x86 (General-purpose)

polar.mysql.g1.tiny.c

1 core, 1 GB memory

2.88

0.00599

polar.mysql.g1.small.c

1 core, 2 GB memory

4.71

0.00981

polar.mysql.g2.small.c

2 cores, 4 GB memory

58.85

0.12261

polar.mysql.g4.medium.c

2 cores, 8 GB memory

68

0.14167

polar.mysql.g8.medium.c

2 cores, 16 GB memory

115.08

0.23974

polar.mysql.g2.large.c

4 cores, 8 GB memory

117.69

0.24519

polar.mysql.g4.large.c

4 cores, 16 GB memory

172.62

0.35962

polar.mysql.g8.large.c

4 cores, 32 GB memory

230.15

0.47949

polar.mysql.g2.xlarge.c

8 cores, 16 GB memory

270.69

0.56394

polar.mysql.g4.xlarge.c

8 cores, 32 GB memory

347.85

0.72468

polar.mysql.g8.xlarge.c

8 cores, 64 GB memory

460.31

0.95898

polar.mysql.g2.2xlarge.c

16 cores, 32 GB memory

541.38

1.12788

polar.mysql.g4.2xlarge.c

16 cores, 64 GB memory

695.69

1.44936

polar.mysql.g8.2xlarge.c

16 cores, 128 GB memory

920.62

1.91795

x86 (Dedicated)

polar.mysql.x4.medium.c

2 cores, 8 GB memory

70.62

0.14712

polar.mysql.x8.medium.c

2 cores, 16 GB memory

128.15

0.26699

polar.mysql.x2.large.c

4 cores, 8 GB memory

158.23

0.32965

polar.mysql.x4.large.c

4 cores, 16 GB memory

200.08

0.41683

polar.mysql.x8.large.c

4 cores, 32 GB memory

256.31

0.53398

polar.mysql.x2.xlarge.c

8 cores, 16 GB memory

313.85

0.65385

polar.mysql.x4.xlarge.c

8 cores, 32 GB memory

397.54

0.82821

polar.mysql.x8.xlarge.c

8 cores, 64 GB memory

504.77

1.0516

polar.mysql.x2.2xlarge.c

16 cores, 32 GB memory

627.69

1.30769

polar.mysql.x4.2xlarge.c

16 cores, 64 GB memory

784.62

1.63462

polar.mysql.x8.2xlarge.c

16 cores, 128 GB memory

993.85

2.07051

polar.mysql.x2.4xlarge.c

32 cores, 64 GB memory

1237.08

2.57724

polar.mysql.x4.4xlarge.c

32 cores, 128 GB memory

1537.85

3.20385

polar.mysql.x8.4xlarge.c

32 cores, 256 GB memory

1990.31

4.14648

polar.mysql.x4.8xlarge.c

64 cores, 256 GB memory

3033.85

6.32052

polar.mysql.x8.8xlarge.c

64 cores, 512 GB memory

3891.69

8.10769

## Serverless prices

If you select the serverless billing method, the compute nodes are charged according to the number of consumed PolarDB capacity units (PCUs) on a per-second basis and the bill is presented on an hourly basis. For more information about the hourly prices of a single PCU in different regions, see [Prices](#50d7126a7a16f) in the following section.

**Note**

PCU stands for PolarDB Capacity Unit. One PCU is approximately equal to the capacity of 1 core and 2 GB of memory. In a PolarDB serverless cluster, resources are scaled in units of 0.5 PCUs.

### **Prices**

Prices per PCU (USD/Hour)

**Region**

**Enterprise**

**Standard**

Regions in the Chinese mainland

0.0611

0.0538

US (Silicon Valley)

0.0947

\-

Indonesia (Jakarta)

0.1069

0.0942

Germany (Frankfurt)

0.1038

0.0915

US (Virginia)

0.0794

0.07

Japan (Tokyo)

0.0977

0.0862

Philippines (Manila)

0.1069

\-

Thailand (Bangkok)

0.1069

\-

South Korea (Seoul)

0.0977

\-

Singapore

0.1160

0.1023

Malaysia (Kuala Lumpur)

0.1160

\-

China (Hong Kong)

0.1160

0.1023

UK (London)

0.1160

\-

### **Formula for calculating the serverless prices of compute nodes**

-   The hourly fee of the compute nodes is calculated by using the following formula: Average PCUs per hour × Hourly price of a PCU.
    
-   The hourly fee range of compute nodes are calculated by using the following formula: \[Hourly price of a PCU × (Minimum number of read-only nodes + 1 primary node) × Minimum number of PCUs per node\] to \[Hourly price of a PCU × (Maximum number of read-only nodes + 1 primary node) × Maximum number of PCUs per node\].
    
    Example: The hourly price of a single PCU is USD 0.0611 for an Enterprise Edition serverless cluster in regions in the Chinese mainland. If the minimum number of read-only nodes of a serverless cluster is set to 1, the maximum number of read-only nodes is set to 4, the minimum number of PCUs per node is set to 1, and the maximum number of PCUs per node is set to 4, the hourly fee range of compute nodes of the serverless cluster is calculated by using the following formula: \[USD 0.0611 × (1 + 1) × 1 PCU\] to \[USD 0.0611 × (4 + 1) × 4 PCU\]. The hourly fee range is from USD 0.12 to 1.2. A 50% discount is provided as shown in the figure. The actual hourly fee range is from USD 0.06 to 0.6.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0907741371/p839346.png)
